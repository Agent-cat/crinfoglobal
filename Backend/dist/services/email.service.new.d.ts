export declare const generateOTP: () => string;
export declare const sendOTPEmailDirect: (email: string, otp: string) => Promise<boolean>;
export declare const sendEditorNotificationEmailDirect: (articleData: any, pdfPath?: string, editorEmails?: string[]) => Promise<boolean>;
export declare const sendUserSubmissionConfirmationEmailDirect: (userEmail: string, articleData: any) => Promise<boolean>;
export declare const sendOTPEmail: (email: string, otp: string) => Promise<boolean>;
export declare const sendEditorNotificationEmail: (articleData: any, pdfPath?: string, editorEmails?: string[]) => Promise<boolean>;
export declare const sendUserSubmissionConfirmationEmail: (userEmail: string, articleData: any) => Promise<boolean>;
//# sourceMappingURL=email.service.new.d.ts.map