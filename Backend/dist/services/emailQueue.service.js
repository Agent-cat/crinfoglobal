/**
 * Email Queue Service
 * Handles asynchronous email sending to prevent blocking operations
 */
class EmailQueue {
    queue = [];
    processing = false;
    processingInterval = null;
    constructor() {
        // Start processing queue every 2 seconds
        this.startProcessing();
    }
    /**
     * Add email job to queue
     */
    addJob(type, data, priority = false) {
        const jobId = `${type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const job = {
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
        }
        else {
            // Add to end of queue
            this.queue.push(job);
        }
        // Trigger immediate processing if not already processing
        if (!this.processing) {
            this.processQueue();
        }
        return jobId;
    }
    /**
     * Start background queue processing
     */
    startProcessing() {
        if (this.processingInterval) {
            return;
        }
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
        }
    }
    /**
     * Process jobs in the queue
     */
    async processQueue() {
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
                await this.processJob(job);
                // Job succeeded, remove from queue
                this.queue.shift();
            }
            catch (error) {
                job.attempts++;
                if (job.attempts >= job.maxAttempts) {
                    // Max attempts reached, remove from queue
                    this.queue.shift();
                    console.error(`[EmailQueue] Job failed after ${job.maxAttempts} attempts: ${job.id}`, error.message);
                }
                else {
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
    async processJob(job) {
        // Import email service functions dynamically to avoid circular dependencies
        const emailService = await import('./email.service.js');
        switch (job.type) {
            case 'otp':
                await emailService.sendOTPEmailDirect(job.data.email, job.data.otp);
                break;
            case 'editor_notification':
                await emailService.sendEditorNotificationEmailDirect(job.data.articleData, job.data.pdfPath, job.data.editorEmails);
                break;
            case 'user_confirmation':
                await emailService.sendUserSubmissionConfirmationEmailDirect(job.data.userEmail, job.data.articleData);
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
    }
}
// Singleton instance
export const emailQueue = new EmailQueue();
// Export queue methods
export const queueOTPEmail = (email, otp) => {
    return emailQueue.addJob('otp', { email, otp }, true); // Priority for OTP
};
export const queueEditorNotification = (articleData, pdfPath, editorEmails) => {
    return emailQueue.addJob('editor_notification', { articleData, pdfPath, editorEmails });
};
export const queueUserConfirmation = (userEmail, articleData) => {
    return emailQueue.addJob('user_confirmation', { userEmail, articleData });
};
export const queuePasswordReset = (email, resetToken) => {
    return emailQueue.addJob('password_reset', { email, resetToken }, true); // Priority
};
export const getQueueStatus = () => emailQueue.getStatus();
export const clearQueue = () => emailQueue.clear();
//# sourceMappingURL=emailQueue.service.js.map