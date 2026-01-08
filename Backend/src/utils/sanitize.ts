/**
 * Backend sanitization utilities to prevent XSS and injection attacks
 */

/**
 * Sanitize text by removing HTML tags and dangerous characters
 */
export function sanitizeText(text: string | null | undefined): string {
  if (!text || typeof text !== 'string') return '';
  
  return text
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim();
}

/**
 * Sanitize email address
 */
export function sanitizeEmail(email: string | null | undefined): string {
  if (!email || typeof email !== 'string') return '';
  
  // Basic email validation and sanitization
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sanitized = sanitizeText(email);
  
  if (emailRegex.test(sanitized) && !/[<>"']/.test(email)) {
    return sanitized;
  }
  
  return '';
}

/**
 * Sanitize DOI
 */
export function sanitizeDoi(doi: string | null | undefined): string {
  if (!doi || typeof doi !== 'string') return '';
  
  // DOI format: 10.xxxx/xxxxx
  const doiRegex = /^10\.\d{4,}\/[\w\.\-]+$/;
  const sanitized = sanitizeText(doi);
  
  if (doiRegex.test(sanitized)) {
    return sanitized;
  }
  
  // If it doesn't match strict format, still sanitize
  return sanitized.replace(/[<>"']/g, '');
}

/**
 * Validate and sanitize article data
 */
export function sanitizeArticleInput(data: any): any {
  const sanitized: any = {};
  
  if (data.title) sanitized.title = sanitizeText(data.title);
  if (data.abstract) sanitized.abstract = sanitizeText(data.abstract);
  if (data.keywords) sanitized.keywords = sanitizeText(data.keywords);
  if (data.doi) sanitized.doi = sanitizeDoi(data.doi);
  if (data.conflictOfInterest) sanitized.conflictOfInterest = sanitizeText(data.conflictOfInterest);
  if (data.fundingInfo) sanitized.fundingInfo = sanitizeText(data.fundingInfo);
  if (data.dataAvailability) sanitized.dataAvailability = sanitizeText(data.dataAvailability);
  if (data.articleType) sanitized.articleType = sanitizeText(data.articleType);
  
  // Sanitize authors
  if (data.authors) {
    try {
      const authors = typeof data.authors === 'string' ? JSON.parse(data.authors) : data.authors;
      if (Array.isArray(authors)) {
        sanitized.authors = authors.map((author: any) => ({
          name: sanitizeText(author.name || ''),
          email: sanitizeEmail(author.email || ''),
          affiliation: sanitizeText(author.affiliation || ''),
          superscript: sanitizeText(author.superscript || ''),
        })).filter((a: any) => a.name && a.email);
      }
    } catch (e) {
      sanitized.authors = [];
    }
  }
  
  return sanitized;
}

