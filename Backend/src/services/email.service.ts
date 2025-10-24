import nodemailer from 'nodemailer';

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
  connectionTimeout: 60000, // 60 seconds
  greetingTimeout: 30000, // 30 seconds
  socketTimeout: 60000, // 60 seconds
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
  connectionTimeout: 30000,
  greetingTimeout: 15000,
  socketTimeout: 30000,
});

// Function to send email with fallback
const sendEmailWithFallback = async (mailOptions: any) => {
  // Check if we're in development mode
  const isDevelopment = process.env.NODE_ENV !== 'production';
  
  // In development, use console logging instead of sending emails
  if (isDevelopment) {
    console.log('=== DEVELOPMENT MODE: Email would be sent ===');
    console.log('To:', mailOptions.to);
    console.log('Subject:', mailOptions.subject);
    console.log('Content:', mailOptions.html || mailOptions.text);
    console.log('=== END DEVELOPMENT EMAIL ===');
    return true;
  }

  // Try primary transporter first
  try {
    console.log('Attempting to send email with primary transporter...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully with primary transporter');
    return true;
  } catch (primaryError: any) {
    console.error('Primary transporter failed:', primaryError.message);
    
    // Try fallback transporter
    try {
      console.log('Attempting to send email with fallback transporter...');
      await fallbackTransporter.sendMail(mailOptions);
      console.log('Email sent successfully with fallback transporter');
      return true;
    } catch (fallbackError: any) {
      console.error('Fallback transporter also failed:', fallbackError.message);
      throw new Error(`Both email transporters failed. Primary: ${primaryError.message}, Fallback: ${fallbackError.message}`);
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

export const sendEditorNotificationEmail = async (articleData: any) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EDITOR_EMAIL || process.env.EMAIL_USER, // Send to editor email or fallback to admin
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