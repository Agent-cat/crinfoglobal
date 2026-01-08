/**
 * Backend sanitization utilities to prevent XSS and injection attacks
 */
/**
 * Sanitize text by removing HTML tags and dangerous characters
 */
export declare function sanitizeText(text: string | null | undefined): string;
/**
 * Sanitize email address
 */
export declare function sanitizeEmail(email: string | null | undefined): string;
/**
 * Sanitize DOI
 */
export declare function sanitizeDoi(doi: string | null | undefined): string;
/**
 * Validate and sanitize article data
 */
export declare function sanitizeArticleInput(data: any): any;
//# sourceMappingURL=sanitize.d.ts.map