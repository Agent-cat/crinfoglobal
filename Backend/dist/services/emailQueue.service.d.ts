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
declare class EmailQueue {
    private queue;
    private processing;
    private processingInterval;
    constructor();
    /**
     * Add email job to queue
     */
    addJob(type: EmailJob['type'], data: any, priority?: boolean): string;
    /**
     * Start background queue processing
     */
    private startProcessing;
    /**
     * Stop background queue processing
     */
    stopProcessing(): void;
    /**
     * Process jobs in the queue
     */
    private processQueue;
    /**
     * Process individual job based on type
     */
    private processJob;
    /**
     * Get queue status
     */
    getStatus(): {
        queueSize: number;
        processing: boolean;
        jobs: {
            id: string;
            type: "otp" | "editor_notification" | "user_confirmation" | "password_reset";
            attempts: number;
            createdAt: Date;
        }[];
    };
    /**
     * Clear all jobs from queue
     */
    clear(): void;
}
export declare const emailQueue: EmailQueue;
export declare const queueOTPEmail: (email: string, otp: string) => string;
export declare const queueEditorNotification: (articleData: any, pdfPath?: string, editorEmails?: string[]) => string;
export declare const queueUserConfirmation: (userEmail: string, articleData: any) => string;
export declare const queuePasswordReset: (email: string, resetToken: string) => string;
export declare const getQueueStatus: () => {
    queueSize: number;
    processing: boolean;
    jobs: {
        id: string;
        type: "otp" | "editor_notification" | "user_confirmation" | "password_reset";
        attempts: number;
        createdAt: Date;
    }[];
};
export declare const clearQueue: () => void;
export {};
//# sourceMappingURL=emailQueue.service.d.ts.map