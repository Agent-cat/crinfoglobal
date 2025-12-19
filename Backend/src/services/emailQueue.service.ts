/**
 * Email Queue Service
 * Handles asynchronous email sending to prevent blocking operations
 */

interface EmailJob {
  id: string;
  type: 'otp' | 'editor_notification' | 'user_confirmation' | 'password_reset';
  data: any;
  attempts: number;
  maxAttempts: number;
  createdAt: Date;
  scheduledAt: Date;
}

class EmailQueue {
  private queue: EmailJob[] = [];
  private processing: boolean = false;
  private processingInterval: NodeJS.Timeout | null = null;

  constructor() {
    // Start processing queue every 2 seconds
    this.startProcessing();
  }

  /**
   * Add email job to queue
   */
  addJob(type: EmailJob['type'], data: any, priority: boolean = false): string {
    const jobId = `${type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const job: EmailJob = {
      id: jobId,
      type,
      data,
      attempts: 0,
      maxAttempts: 3,
      createdAt: new Date(),
      scheduledAt: new Date()
    };

    if (priority) {
      // Add to front of queue for priority jobs
      this.queue.unshift(job);
    } else {
      // Add to end of queue
      this.queue.push(job);
    }

    console.log(`[EmailQueue] Job added: ${jobId} (type: ${type}, queue size: ${this.queue.length})`);

    // Trigger immediate processing if not already processing
    if (!this.processing) {
      this.processQueue();
    }

    return jobId;
  }

  /**
   * Start background queue processing
   */
  private startProcessing() {
    if (this.processingInterval) {
      return;
    }

    console.log('[EmailQueue] Starting background processing...');

    // Process queue every 2 seconds
    this.processingInterval = setInterval(() => {
      if (this.queue.length > 0 && !this.processing) {
        this.processQueue();
      }
    }, 2000);
  }

  /**
   * Stop background queue processing
   */
  stopProcessing() {
    if (this.processingInterval) {
      clearInterval(this.processingInterval);
      this.processingInterval = null;
      console.log('[EmailQueue] Background processing stopped');
    }
  }

  /**
   * Process jobs in the queue
   */
  private async processQueue() {
    if (this.processing || this.queue.length === 0) {
      return;
    }

    this.processing = true;

    while (this.queue.length > 0) {
      const job = this.queue[0]; // Peek at first job

      if (!job) {
        break; // Safety check
      }

      try {
        console.log(`[EmailQueue] Processing job: ${job.id} (attempt ${job.attempts + 1}/${job.maxAttempts})`);

        await this.processJob(job);

        // Job succeeded, remove from queue
        this.queue.shift();
        console.log(`[EmailQueue] Job completed: ${job.id} (remaining: ${this.queue.length})`);

      } catch (error: any) {
        job.attempts++;

        if (job.attempts >= job.maxAttempts) {
          // Max attempts reached, remove from queue
          this.queue.shift();
          console.error(`[EmailQueue] Job failed after ${job.maxAttempts} attempts: ${job.id}`, error.message);
        } else {
          // Retry later, move to end of queue with delay
          this.queue.shift();
          job.scheduledAt = new Date(Date.now() + (job.attempts * 5000)); // Exponential backoff
          this.queue.push(job);
          console.warn(`[EmailQueue] Job failed, will retry: ${job.id} (attempt ${job.attempts}/${job.maxAttempts})`);
        }
      }
    }

    this.processing = false;
  }

  /**
   * Process individual job based on type
   */
  private async processJob(job: EmailJob): Promise<void> {
    // Import email service functions dynamically to avoid circular dependencies
    const emailService = await import('./email.service.js');

    switch (job.type) {
      case 'otp':
        await emailService.sendOTPEmailDirect(job.data.email, job.data.otp);
        break;

      case 'editor_notification':
        await emailService.sendEditorNotificationEmailDirect(
          job.data.articleData,
          job.data.pdfPath,
          job.data.editorEmails
        );
        break;

      case 'user_confirmation':
        await emailService.sendUserSubmissionConfirmationEmailDirect(
          job.data.userEmail,
          job.data.articleData
        );
        break;

      case 'password_reset':
        await emailService.sendPasswordResetEmailDirect(job.data.email, job.data.resetToken);
        break;

      default:
        throw new Error(`Unknown job type: ${job.type}`);
    }
  }

  /**
   * Get queue status
   */
  getStatus() {
    return {
      queueSize: this.queue.length,
      processing: this.processing,
      jobs: this.queue.map(job => ({
        id: job.id,
        type: job.type,
        attempts: job.attempts,
        createdAt: job.createdAt
      }))
    };
  }

  /**
   * Clear all jobs from queue
   */
  clear() {
    const count = this.queue.length;
    this.queue = [];
    console.log(`[EmailQueue] Cleared ${count} jobs from queue`);
  }
}

// Singleton instance
export const emailQueue = new EmailQueue();

// Export queue methods
export const queueOTPEmail = (email: string, otp: string): string => {
  return emailQueue.addJob('otp', { email, otp }, true); // Priority for OTP
};

export const queueEditorNotification = (
  articleData: any,
  pdfPath?: string,
  editorEmails?: string[]
): string => {
  return emailQueue.addJob('editor_notification', { articleData, pdfPath, editorEmails });
};

export const queueUserConfirmation = (userEmail: string, articleData: any): string => {
  return emailQueue.addJob('user_confirmation', { userEmail, articleData });
};

export const queuePasswordReset = (email: string, resetToken: string): string => {
  return emailQueue.addJob('password_reset', { email, resetToken }, true); // Priority
};

export const getQueueStatus = () => emailQueue.getStatus();
export const clearQueue = () => emailQueue.clear();
