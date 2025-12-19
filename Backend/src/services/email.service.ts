import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Check if email sending should be disabled
const DISABLE_EMAIL = process.env.DISABLE_EMAIL === 'true';
const FORCE_DEV_MODE = process.env.FORCE_EMAIL_DEV_MODE === 'true';

// Primary Gmail configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use TLS instead of SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 30000, // 30 seconds
  greetingTimeout: 30000, // 30 seconds
  socketTimeout: 30000, // 30 seconds
  pool: true, // Use connection pooling
  maxConnections: 5,
  maxMessages: 10,
  debug: true, // Enable debug logging
  logger: true // Enable logger
});

// Fallback configuration for when Gmail fails
const fallbackTransporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 10000, // 10 seconds
  socketTimeout: 10000, // 10 seconds
  pool: true,
  maxConnections: 5,
  maxMessages: 10,
  debug: true,
  logger: true
});

// Function to send email with fallback
const sendEmailWithFallback = async (mailOptions: any) => {
  // Check if email sending is disabled
  if (DISABLE_EMAIL) {
    console.log('=== EMAIL DISABLED ===');
    console.log('DISABLE_EMAIL is set to true. Email would be sent to:', mailOptions.to);
    console.log('Subject:', mailOptions.subject);
    console.log('=== END EMAIL DISABLED ===');
    return true;
  }

  // Check if we're in development mode
  const isDevelopment = (process.env.NODE_ENV !== 'production') || FORCE_DEV_MODE;

  // Log email configuration for debugging
  console.log('=== EMAIL CONFIGURATION ===');
  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***SET***' : 'NOT SET');
  console.log('EDITOR_EMAIL:', process.env.EDITOR_EMAIL || 'NOT SET (using EMAIL_USER as fallback)');
  console.log('To:', mailOptions.to);
  console.log('Subject:', mailOptions.subject);
  console.log('Attachments:', mailOptions.attachments?.length || 0);
  console.log('=== END CONFIGURATION ===');

  // In development, use console logging instead of sending emails
  if (isDevelopment) {
    console.log('=== DEVELOPMENT MODE: Email would be sent ===');
    console.log('To:', mailOptions.to);
    console.log('Subject:', mailOptions.subject);
    console.log('Content:', mailOptions.html || mailOptions.text);
    console.log('=== END DEVELOPMENT EMAIL ===');
    return true;
  }

  // Check if email credentials are configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('EMAIL_USER or EMAIL_PASS not configured. Skipping email send.');
    console.log('To enable emails, set EMAIL_USER and EMAIL_PASS in .env file');
    return false;
  }

  // Verify transporter configuration before attempting to send
  try {
    console.log('Verifying primary transporter connection...');
    await transporter.verify();
    console.log('Primary transporter verified successfully');
  } catch (verifyError: any) {
    console.warn('Primary transporter verification failed:', verifyError.message);
    console.warn('Will attempt to send anyway and fallback if needed');
  }

  // Try primary transporter first
  try {
    console.log('Attempting to send email with primary transporter (port 587, TLS)...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully with primary transporter');
    console.log('Message ID:', info.messageId);
    return true;
  } catch (primaryError: any) {
    console.error('Primary transporter failed:', primaryError.message);
    console.error('Error code:', primaryError.code);
    console.error('Error command:', primaryError.command);

    // Try fallback transporter
    try {
      console.log('Attempting to send email with fallback transporter (port 465, SSL)...');
      const info = await fallbackTransporter.sendMail(mailOptions);
      console.log('Email sent successfully with fallback transporter');
      console.log('Message ID:', info.messageId);
      return true;
    } catch (fallbackError: any) {
      console.error('Fallback transporter also failed:', fallbackError.message);
      console.error('Error code:', fallbackError.code);
      console.error('Error command:', fallbackError.command);

      // Provide helpful error message based on error type
      let errorMessage = `Both email transporters failed. Primary: ${primaryError.message}, Fallback: ${fallbackError.message}`;

      if (primaryError.code === 'ETIMEDOUT' || fallbackError.code === 'ETIMEDOUT') {
        errorMessage += '\n\nTroubleshooting:\n' +
          '1. Check if EMAIL_USER and EMAIL_PASS are set correctly in .env\n' +
          '2. Ensure you are using a Gmail App Password (not regular password)\n' +
          '3. Check if your firewall/network is blocking SMTP ports (587, 465)\n' +
          '4. Verify 2-Factor Authentication is enabled on your Gmail account\n' +
          '5. Try generating a new App Password at: https://myaccount.google.com/apppasswords';
      }

      throw new Error(errorMessage);
    }
  }
};

export const sendOTPEmail = async (email: string, otp: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Email Verification - CrinfoGlobal Publishers',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #083b7a;">Email Verification</h2>
        <p>Thank you for registering with CrinfoGlobal Publishers!</p>
        <p>Your verification code is:</p>
        <div style="background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 24px; font-weight: bold; color: #083b7a; border-radius: 5px; margin: 20px 0;">
          ${otp}
        </div>
        <p>This code will expire in 10 minutes.</p>
        <p>If you didn't request this verification, please ignore this email.</p>
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          CrinfoGlobal Publishers<br>
          Kattur 641667 Pongalur SO TAMIL NADU 641667<br>
          Contact: 9063500171 | info@crinfoglobal.com
        </p>
      </div>
    `,
  };

  // Retry logic for email sending (only in production)
  const maxRetries = process.env.NODE_ENV === 'production' ? 3 : 1;
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempting to send OTP email (attempt ${attempt}/${maxRetries})`);
      await sendEmailWithFallback(mailOptions);
      console.log('OTP email sent successfully');
      return true;
    } catch (error: any) {
      lastError = error;
      console.error(`Email send attempt ${attempt} failed:`, error.message);

      if (attempt < maxRetries) {
        const delay = attempt * 2000; // Exponential backoff: 2s, 4s, 6s
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  console.error('All email send attempts failed:', lastError);

  // Fallback: Log the OTP to console for development/testing
  console.log('=== EMAIL FALLBACK - OTP FOR DEVELOPMENT ===');
  console.log(`OTP for ${email}: ${otp}`);
  console.log('=== END FALLBACK ===');

  return false;
};

export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendEditorNotificationEmail = async (articleData: any, pdfPath?: string, editorEmails?: string[]) => {
  // Prepare attachments if PDF path is provided
  const attachments: any[] = [];
  if (pdfPath) {
    try {
      // Convert the public path to actual file path
      // pdfPath format: /api/content/public/articles/pdf/filename.pdf
      const filename = path.basename(pdfPath);
      const actualPath = path.join(process.cwd(), 'uploads', 'articles', filename);

      if (fs.existsSync(actualPath)) {
        attachments.push({
          filename: filename,
          path: actualPath,
          contentType: 'application/pdf'
        });
        console.log('PDF attachment added:', filename);
      } else {
        console.warn('PDF file not found at:', actualPath);
      }
    } catch (error) {
      console.error('Error preparing PDF attachment:', error);
    }
  }

  // Determine recipient emails
  // Priority: 1. editorEmails from DB, 2. EDITOR_EMAIL env var, 3. EMAIL_USER as fallback
  let recipientEmails: string[];
  if (editorEmails && editorEmails.length > 0) {
    recipientEmails = editorEmails;
    console.log(`Sending to ${editorEmails.length} editor(s) from database:`, editorEmails);
  } else if (process.env.EDITOR_EMAIL) {
    recipientEmails = [process.env.EDITOR_EMAIL];
    console.log('Sending to EDITOR_EMAIL from env:', process.env.EDITOR_EMAIL);
  } else {
    recipientEmails = [process.env.EMAIL_USER!];
    console.log('Sending to EMAIL_USER as fallback:', process.env.EMAIL_USER);
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmails.join(', '), // Send to all editors
    subject: `New Article Submission - ${articleData.title}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #083b7a;">New Article Submission</h2>
        <p>A new article has been submitted and requires your review.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #083b7a; margin-top: 0;">Article Details:</h3>
          <p><strong>Title:</strong> ${articleData.title}</p>
          <p><strong>Type:</strong> ${articleData.articleType}</p>
          <p><strong>Keywords:</strong> ${articleData.keywords || 'Not provided'}</p>
          <p><strong>Pages:</strong> ${articleData.totalPages || 'Not specified'}</p>
          <p><strong>DOI:</strong> ${articleData.doi || 'Not provided'}</p>
          <p><strong>Submitted:</strong> ${new Date(articleData.createdAt).toLocaleDateString()}</p>
        </div>
        
        <div style="background-color: #e8f4fd; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h4 style="color: #083b7a; margin-top: 0;">Abstract:</h4>
          <p style="margin-bottom: 0;">${articleData.abstract}</p>
        </div>
        
        ${articleData.authorsJson && articleData.authorsJson.length > 0 ? `
        <div style="background-color: #f0f8f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h4 style="color: #083b7a; margin-top: 0;">Authors:</h4>
          <ul style="margin-bottom: 0;">
            ${articleData.authorsJson.map((author: any) =>
      `<li>${author.name} (${author.email})${author.affiliation ? ` - ${author.affiliation}` : ''}</li>`
    ).join('')}
          </ul>
        </div>
        ` : ''}
        
        ${pdfPath ? `
        <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;"><strong>📎 PDF attached to this email</strong></p>
        </div>
        ` : ''}
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/admin" 
             style="background-color: #083b7a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Review Article
          </a>
        </div>
        
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          CrinfoGlobal Publishers<br>
          Kattur 641667 Pongalur SO TAMIL NADU 641667<br>
          Contact: 9063500171 | info@crinfoglobal.com
        </p>
      </div>
    `,
    attachments: attachments.length > 0 ? attachments : undefined,
  };

  // Retry logic for email sending (only in production)
  const maxRetries = process.env.NODE_ENV === 'production' ? 3 : 1;
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempting to send editor notification email (attempt ${attempt}/${maxRetries})`);
      await sendEmailWithFallback(mailOptions);
      console.log('Editor notification email sent successfully');
      return true;
    } catch (error: any) {
      lastError = error;
      console.error(`Editor notification email send attempt ${attempt} failed:`, error.message);

      if (attempt < maxRetries) {
        const delay = attempt * 2000; // Exponential backoff: 2s, 4s, 6s
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  console.error('All editor notification email send attempts failed:', lastError);
  return false;
};

export const sendUserSubmissionConfirmationEmail = async (userEmail: string, articleData: any) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Article Submission Received - CrinfoGlobal Publishers',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #083b7a;">Thank You for Your Submission!</h2>
        <p>Dear Author,</p>
        <p>We have successfully received your article submission to <strong>Frontiers in Engineering and Informatics</strong>.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #083b7a; margin-top: 0;">Submission Details:</h3>
          <p><strong>Title:</strong> ${articleData.title}</p>
          <p><strong>Type:</strong> ${articleData.articleType}</p>
          <p><strong>Keywords:</strong> ${articleData.keywords || 'Not provided'}</p>
          <p><strong>Submitted on:</strong> ${new Date(articleData.createdAt).toLocaleDateString()}</p>
        </div>
        
        <div style="background-color: #e8f4fd; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h4 style="color: #083b7a; margin-top: 0;">What happens next?</h4>
          <ul style="margin-bottom: 0;">
            <li>Our editorial team will review your submission</li>
            <li>You will receive updates on the review process via email</li>
            <li>We typically respond within 2-3 business days</li>
            <li>If you have any questions, please don't hesitate to contact us</li>
          </ul>
        </div>
        
        <div style="background-color: #f0f8f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h4 style="color: #083b7a; margin-top: 0;">Abstract:</h4>
          <p style="margin-bottom: 0;">${articleData.abstract}</p>
        </div>
        
        <p>Thank you for choosing CrinfoGlobal Publishers for your research publication.</p>
        
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          CrinfoGlobal Publishers<br>
          Kattur 641667 Pongalur SO TAMIL NADU 641667<br>
          Contact: 9063500171 | info@crinfoglobal.com
        </p>
      </div>
    `,
  };

  // Retry logic for email sending (only in production)
  const maxRetries = process.env.NODE_ENV === 'production' ? 3 : 1;
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempting to send user confirmation email (attempt ${attempt}/${maxRetries})`);
      await sendEmailWithFallback(mailOptions);
      console.log('User confirmation email sent successfully to:', userEmail);
      return true;
    } catch (error: any) {
      lastError = error;
      console.error(`User confirmation email send attempt ${attempt} failed:`, error.message);

      if (attempt < maxRetries) {
        const delay = attempt * 2000; // Exponential backoff: 2s, 4s, 6s
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  console.error('All user confirmation email send attempts failed:', lastError);
  return false;
};

export const sendPasswordResetEmail = async (email: string, resetToken: string) => {
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
  const resetLink = `${frontendUrl}/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset - CrinfoGlobal Publishers',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #083b7a;">Password Reset Request</h2>
        <p>You requested a password reset for your CrinfoGlobal Publishers account.</p>
        <p>Please click the button below to reset your password. This link will expire in 1 hour.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetLink}" 
             style="background-color: #083b7a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
            Reset Password
          </a>
        </div>
        <p>If the button doesn't work, you can copy and paste the following link into your browser:</p>
        <p style="word-break: break-all; color: #083b7a;">${resetLink}</p>
        <p>If you didn't request this reset, please ignore this email and your password will remain unchanged.</p>
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          CrinfoGlobal Publishers<br>
          Kattur 641667 Pongalur SO TAMIL NADU 641667<br>
          Contact: 9063500171 | info@crinfoglobal.com
        </p>
      </div>
    `,
  };

  const maxRetries = process.env.NODE_ENV === 'production' ? 3 : 1;
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Attempting to send password reset email (attempt ${attempt}/${maxRetries})`);
      await sendEmailWithFallback(mailOptions);
      console.log('Password reset email sent successfully');
      return true;
    } catch (error: any) {
      lastError = error;
      console.error(`Email send attempt ${attempt} failed:`, error.message);

      if (attempt < maxRetries) {
        const delay = attempt * 2000;
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  console.error('All email send attempts failed:', lastError);
  return false;
};

// ============================================================================
// DIRECT EMAIL FUNCTIONS (Used by Queue Service)
// These functions send emails directly without retry logic
// ============================================================================

export const sendOTPEmailDirect = async (email: string, otp: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Email Verification - CrinfoGlobal Publishers',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #083b7a;">Email Verification</h2>
        <p>Thank you for registering with CrinfoGlobal Publishers!</p>
        <p>Your verification code is:</p>
        <div style="background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 24px; font-weight: bold; color: #083b7a; border-radius: 5px; margin: 20px 0;">
          ${otp}
        </div>
        <p>This code will expire in 10 minutes.</p>
        <p>If you didn't request this verification, please ignore this email.</p>
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          CrinfoGlobal Publishers<br>
          Kattur 641667 Pongalur SO TAMIL NADU 641667<br>
          Contact: 9063500171 | info@crinfoglobal.com
        </p>
      </div>
    `,
  };

  await sendEmailWithFallback(mailOptions);
};

export const sendEditorNotificationEmailDirect = async (articleData: any, pdfPath?: string, editorEmails?: string[]) => {
  // Prepare attachments if PDF path is provided
  const attachments: any[] = [];
  if (pdfPath) {
    try {
      const filename = path.basename(pdfPath);
      const actualPath = path.join(process.cwd(), 'uploads', 'articles', filename);

      if (fs.existsSync(actualPath)) {
        attachments.push({
          filename: filename,
          path: actualPath,
          contentType: 'application/pdf'
        });
      }
    } catch (error) {
      console.error('Error preparing PDF attachment:', error);
    }
  }

  let recipientEmails: string[];
  if (editorEmails && editorEmails.length > 0) {
    recipientEmails = editorEmails;
  } else if (process.env.EDITOR_EMAIL) {
    recipientEmails = [process.env.EDITOR_EMAIL];
  } else {
    recipientEmails = [process.env.EMAIL_USER!];
  }

  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
  const articleDetailUrl = `${frontendUrl}/admin/submitted/${articleData.id}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmails.join(', '),
    subject: `New Article Submission - ${articleData.title}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #083b7a;">New Article Submission</h2>
        <p>A new article has been submitted and requires your review.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #083b7a; margin-top: 0;">Article Details:</h3>
          <p><strong>Title:</strong> ${articleData.title}</p>
          <p><strong>Type:</strong> ${articleData.articleType}</p>
          <p><strong>Keywords:</strong> ${articleData.keywords || 'Not provided'}</p>
          <p><strong>Submitted:</strong> ${new Date(articleData.createdAt).toLocaleDateString()}</p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${articleDetailUrl}" 
             style="background-color: #083b7a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
            Review Article Details
          </a>
        </div>
        
        <div style="background-color: #e6f0ff; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #083b7a;">
          <p style="margin: 0; font-size: 14px; color: #333;">
            <strong>Direct Link:</strong><br>
            <a href="${articleDetailUrl}" style="color: #083b7a; word-break: break-all;">${articleDetailUrl}</a>
          </p>
        </div>
        
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          CrinfoGlobal Publishers<br>
          Contact: 9063500171 | info@crinfoglobal.com
        </p>
      </div>
    `,
    attachments: attachments.length > 0 ? attachments : undefined,
  };

  await sendEmailWithFallback(mailOptions);
};

export const sendUserSubmissionConfirmationEmailDirect = async (userEmail: string, articleData: any) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Article Submission Received - CrinfoGlobal Publishers',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #083b7a;">Thank You for Your Submission!</h2>
        <p>Dear Author,</p>
        <p>We have successfully received your article submission.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #083b7a; margin-top: 0;">Submission Details:</h3>
          <p><strong>Title:</strong> ${articleData.title}</p>
          <p><strong>Type:</strong> ${articleData.articleType}</p>
          <p><strong>Submitted on:</strong> ${new Date(articleData.createdAt).toLocaleDateString()}</p>
        </div>
        
        <p>Our editorial team will review your submission and respond within 2-3 business days.</p>
        
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          CrinfoGlobal Publishers<br>
          Contact: 9063500171 | info@crinfoglobal.com
        </p>
      </div>
    `,
  };

  await sendEmailWithFallback(mailOptions);
};

export const sendPasswordResetEmailDirect = async (email: string, resetToken: string) => {
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
  const resetLink = `${frontendUrl}/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset - CrinfoGlobal Publishers',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #083b7a;">Password Reset Request</h2>
        <p>You requested a password reset for your CrinfoGlobal Publishers account.</p>
        <p>Please click the button below to reset your password. This link will expire in 1 hour.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetLink}" 
             style="background-color: #083b7a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
            Reset Password
          </a>
        </div>
        <p>If the button doesn't work, you can copy and paste the following link into your browser:</p>
        <p style="word-break: break-all; color: #083b7a;">${resetLink}</p>
        <p>If you didn't request this reset, please ignore this email and your password will remain unchanged.</p>
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          CrinfoGlobal Publishers<br>
          Kattur 641667 Pongalur SO TAMIL NADU 641667<br>
          Contact: 9063500171 | info@crinfoglobal.com
        </p>
      </div>
    `,
  };

  await sendEmailWithFallback(mailOptions);
};
