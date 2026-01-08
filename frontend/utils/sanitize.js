import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param {string} html - HTML string to sanitize
 * @returns {string} - Sanitized HTML string
 */
export function sanitizeHtml(html) {
  if (!html || typeof html !== 'string') return '';
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [], // No HTML tags allowed - strip all
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true, // Keep text content but remove tags
  });
}

/**
 * Sanitize plain text (escape HTML entities)
 * @param {string} text - Text to sanitize
 * @returns {string} - Sanitized text safe for rendering
 */
export function sanitizeText(text) {
  if (!text || typeof text !== 'string') return '';
  
  // Use DOMPurify to escape HTML entities
  const div = typeof document !== 'undefined' ? document.createElement('div') : { textContent: '' };
  if (typeof document !== 'undefined') {
    div.textContent = text;
    return div.innerHTML;
  }
  
  // Server-side fallback: manually escape HTML entities
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Sanitize email address to prevent XSS in mailto links
 * @param {string} email - Email address to sanitize
 * @returns {string} - Sanitized email or empty string if invalid
 */
export function sanitizeEmail(email) {
  if (!email || typeof email !== 'string') return '';
  
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sanitized = sanitizeText(email);
  
  // Only return if it matches email format and doesn't contain dangerous characters
  if (emailRegex.test(sanitized) && !/[<>"']/.test(email)) {
    return sanitized;
  }
  
  return '';
}

/**
 * Sanitize URL to prevent XSS and javascript: protocol attacks
 * @param {string} url - URL to sanitize
 * @returns {string} - Sanitized URL or empty string if invalid
 */
export function sanitizeUrl(url) {
  if (!url || typeof url !== 'string') return '';
  
  // Remove dangerous protocols
  const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:'];
  const lowerUrl = url.toLowerCase().trim();
  
  for (const protocol of dangerousProtocols) {
    if (lowerUrl.startsWith(protocol)) {
      return '';
    }
  }
  
  // Only allow http, https, mailto, and relative URLs
  if (!/^(https?:\/\/|mailto:|#|\/)/.test(lowerUrl) && !lowerUrl.startsWith('/')) {
    // Allow relative paths
    if (!lowerUrl.startsWith('.')) {
      return '';
    }
  }
  
  return sanitizeText(url);
}

/**
 * Sanitize DOI (Digital Object Identifier)
 * @param {string} doi - DOI to sanitize
 * @returns {string} - Sanitized DOI
 */
export function sanitizeDoi(doi) {
  if (!doi || typeof doi !== 'string') return '';
  
  // DOI format: 10.xxxx/xxxxx (alphanumeric, dots, slashes, hyphens, underscores)
  const doiRegex = /^10\.\d{4,}\/[\w\.\-]+$/;
  const sanitized = sanitizeText(doi);
  
  if (doiRegex.test(sanitized)) {
    return sanitized;
  }
  
  // If it doesn't match strict format, still sanitize but return
  return sanitized.replace(/[<>"']/g, '');
}

/**
 * Sanitize keywords (comma-separated list)
 * @param {string} keywords - Keywords string to sanitize
 * @returns {string[]} - Array of sanitized keywords
 */
export function sanitizeKeywords(keywords) {
  if (!keywords || typeof keywords !== 'string') return [];
  
  return keywords
    .split(',')
    .map(kw => sanitizeText(kw.trim()))
    .filter(kw => kw.length > 0);
}

/**
 * Sanitize author object
 * @param {object} author - Author object with name, email, affiliation, etc.
 * @returns {object} - Sanitized author object
 */
export function sanitizeAuthor(author) {
  if (!author || typeof author !== 'object') return null;
  
  return {
    name: sanitizeText(author.name || ''),
    email: sanitizeEmail(author.email || ''),
    affiliation: sanitizeText(author.affiliation || ''),
    superscript: sanitizeText(author.superscript || ''),
  };
}

/**
 * Sanitize article data
 * @param {object} article - Article object
 * @returns {object} - Sanitized article object
 */
export function sanitizeArticle(article) {
  if (!article || typeof article !== 'object') return null;
  
  const sanitized = {
    ...article,
    title: sanitizeText(article.title || ''),
    abstract: sanitizeText(article.abstract || ''),
    keywords: article.keywords ? sanitizeText(article.keywords) : '',
    doi: article.doi ? sanitizeDoi(article.doi) : '',
    conflictOfInterest: sanitizeText(article.conflictOfInterest || ''),
    fundingInfo: sanitizeText(article.fundingInfo || ''),
    dataAvailability: sanitizeText(article.dataAvailability || ''),
  };
  
  // Sanitize authors if present
  if (article.authorsJson) {
    try {
      const authors = typeof article.authorsJson === 'string' 
        ? JSON.parse(article.authorsJson) 
        : article.authorsJson;
      
      if (Array.isArray(authors)) {
        sanitized.authorsJson = authors.map(sanitizeAuthor).filter(a => a !== null);
      }
    } catch (e) {
      sanitized.authorsJson = [];
    }
  }
  
  return sanitized;
}

