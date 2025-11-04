import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
/**
 * Email Service - Rewritten from scratch
 * Simple, reliable Gmail configuration
 */
// ============================================================================
// CONFIGURATION
// ============================================================================
const EMAIL_CONFIG = {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASS || '',
    from: process.env.EMAIL_USER || '',
    editorEmail: process.env.EDITOR_EMAIL || process.env.EMAIL_USER || '',
};
// Validate configuration
if (!EMAIL_CONFIG.user || !EMAIL_CONFIG.pass) {
    console.warn('⚠️  EMAIL_USER or EMAIL_PASS not configured in .env');
    console.warn('⚠️  Email sending will be disabled');
}
// ============================================================================
// TRANSPORTER - Simple Gmail Configuration
// ============================================================================
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_CONFIG.user,
        pass: EMAIL_CONFIG.pass,
    },
});
// Verify transporter on startup
transporter.verify((error, success) => {
    if (error) {
        console.error('❌ Email transporter verification failed:', error.message);
        console.error('   Please check your EMAIL_USER and EMAIL_PASS in .env');
    }
    else {
        console.log('✅ Email transporter ready to send emails');
        console.log(`   Using: ${EMAIL_CONFIG.user}`);
    }
});
// ============================================================================
// CORE SEND FUNCTION
// ============================================================================
/**
 * Send email with simple error handling
 */
async function sendEmail(mailOptions) {
    // Check if credentials are configured
    if (!EMAIL_CONFIG.user || !EMAIL_CONFIG.pass) {
        console.log('📧 Email not sent (credentials not configured)');
        console.log('   To:', mailOptions.to);
        console.log('   Subject:', mailOptions.subject);
        return false;
    }
    try {
        console.log(`📧 Sending email to: ${mailOptions.to}`);
        console.log(`   Subject: ${mailOptions.subject}`);
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully!');
        console.log(`   Message ID: ${info.messageId}`);
        console.log(`   Response: ${info.response}`);
        return true;
    }
    catch (error) {
        console.error('❌ Failed to send email:', error.message);
        // Provide helpful error messages
        if (error.code === 'EAUTH') {
            console.error('   Authentication failed. Please check:');
            console.error('   1. EMAIL_USER is correct');
            console.error('   2. EMAIL_PASS is a valid Gmail App Password');
            console.error('   3. Generate App Password at: https://myaccount.google.com/apppasswords');
        }
        else if (error.code === 'ETIMEDOUT' || error.code === 'ECONNECTION') {
            console.error('   Connection failed. Please check:');
            console.error('   1. Your internet connection');
            console.error('   2. Firewall settings');
        }
        return false;
    }
}
// ============================================================================
// OTP EMAIL
// ============================================================================
export const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};
export const sendOTPEmailDirect = async (email, otp) => {
    const mailOptions = {
        from: `"CrinfoGlobal Publishers" <${EMAIL_CONFIG.from}>`,
        to: email,
        subject: 'Email Verification - CrinfoGlobal Publishers',
        html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #083b7a 0%, #0a4ea3 100%); padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px;">CrinfoGlobal Publishers</h1>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <h2 style="color: #083b7a; margin: 0 0 20px 0; font-size: 24px;">Email Verification</h2>
                    <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                      Thank you for registering with CrinfoGlobal Publishers!
                    </p>
                    <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 10px 0;">
                      Your verification code is:
                    </p>
                    
                    <!-- OTP Box -->
                    <div style="background-color: #f5f5f5; border: 2px dashed #083b7a; border-radius: 8px; padding: 25px; text-align: center; margin: 20px 0;">
                      <div style="font-size: 36px; font-weight: bold; color: #083b7a; letter-spacing: 8px; font-family: 'Courier New', monospace;">
                        ${otp}
                      </div>
                    </div>
                    
                    <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
                      ⏱️ This code will expire in <strong>10 minutes</strong>.
                    </p>
                    <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 10px 0 0 0;">
                      If you didn't request this verification, please ignore this email.
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8f8f8; padding: 20px 30px; border-top: 1px solid #e0e0e0;">
                    <p style="color: #666666; font-size: 12px; line-height: 1.6; margin: 0;">
                      <strong>CrinfoGlobal Publishers</strong><br>
                      Kattur 641667 Pongalur SO TAMIL NADU 641667<br>
                      📞 9063500171 | 📧 info@crinfoglobal.com
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
    };
    return await sendEmail(mailOptions);
};
// ============================================================================
// EDITOR NOTIFICATION EMAIL
// ============================================================================
export const sendEditorNotificationEmailDirect = async (articleData, pdfPath, editorEmails) => {
    // Prepare attachments
    const attachments = [];
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
                console.log(`📎 Attaching PDF: ${filename}`);
            }
        }
        catch (error) {
            console.error('Error preparing PDF attachment:', error);
        }
    }
    // Determine recipients
    const recipients = editorEmails && editorEmails.length > 0
        ? editorEmails
        : [EMAIL_CONFIG.editorEmail];
    const mailOptions = {
        from: `"CrinfoGlobal Publishers" <${EMAIL_CONFIG.from}>`,
        to: recipients.join(', '),
        subject: `📄 New Article Submission - ${articleData.title}`,
        html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #083b7a 0%, #0a4ea3 100%); padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px;">📄 New Article Submission</h1>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                      A new article has been submitted and requires your review.
                    </p>
                    
                    <!-- Article Details -->
                    <div style="background-color: #f5f5f5; border-left: 4px solid #083b7a; padding: 20px; margin: 20px 0; border-radius: 4px;">
                      <h3 style="color: #083b7a; margin: 0 0 15px 0; font-size: 18px;">Article Details</h3>
                      <table width="100%" cellpadding="5" cellspacing="0">
                        <tr>
                          <td style="color: #666666; font-size: 14px; width: 120px;"><strong>Title:</strong></td>
                          <td style="color: #333333; font-size: 14px;">${articleData.title}</td>
                        </tr>
                        <tr>
                          <td style="color: #666666; font-size: 14px;"><strong>Type:</strong></td>
                          <td style="color: #333333; font-size: 14px;">${articleData.articleType}</td>
                        </tr>
                        <tr>
                          <td style="color: #666666; font-size: 14px;"><strong>Keywords:</strong></td>
                          <td style="color: #333333; font-size: 14px;">${articleData.keywords || 'Not provided'}</td>
                        </tr>
                        <tr>
                          <td style="color: #666666; font-size: 14px;"><strong>Submitted:</strong></td>
                          <td style="color: #333333; font-size: 14px;">${new Date(articleData.createdAt).toLocaleDateString()}</td>
                        </tr>
                      </table>
                    </div>
                    
                    <!-- Abstract -->
                    <div style="background-color: #e8f4fd; padding: 20px; margin: 20px 0; border-radius: 4px;">
                      <h4 style="color: #083b7a; margin: 0 0 10px 0; font-size: 16px;">Abstract</h4>
                      <p style="color: #333333; font-size: 14px; line-height: 1.6; margin: 0;">
                        ${articleData.abstract}
                      </p>
                    </div>
                    
                    ${pdfPath ? `
                    <div style="background-color: #fff3cd; padding: 15px; margin: 20px 0; border-radius: 4px; border-left: 4px solid #ffc107;">
                      <p style="color: #856404; font-size: 14px; margin: 0;">
                        📎 <strong>PDF attached to this email</strong>
                      </p>
                    </div>
                    ` : ''}
                    
                    <!-- CTA Button -->
                    <div style="text-align: center; margin: 30px 0;">
                      <a href="${process.env.FRONTEND_URL || 'http://localhost:3000'}/admin" 
                         style="display: inline-block; background: linear-gradient(135deg, #083b7a 0%, #0a4ea3 100%); color: #ffffff; padding: 15px 40px; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                        Review Article →
                      </a>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8f8f8; padding: 20px 30px; border-top: 1px solid #e0e0e0;">
                    <p style="color: #666666; font-size: 12px; line-height: 1.6; margin: 0;">
                      <strong>CrinfoGlobal Publishers</strong><br>
                      Kattur 641667 Pongalur SO TAMIL NADU 641667<br>
                      📞 9063500171 | 📧 info@crinfoglobal.com
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
        attachments: attachments.length > 0 ? attachments : undefined,
    };
    return await sendEmail(mailOptions);
};
// ============================================================================
// USER CONFIRMATION EMAIL
// ============================================================================
export const sendUserSubmissionConfirmationEmailDirect = async (userEmail, articleData) => {
    const mailOptions = {
        from: `"CrinfoGlobal Publishers" <${EMAIL_CONFIG.from}>`,
        to: userEmail,
        subject: '✅ Article Submission Received - CrinfoGlobal Publishers',
        html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #083b7a 0%, #0a4ea3 100%); padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px;">✅ Submission Received!</h1>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <h2 style="color: #083b7a; margin: 0 0 20px 0; font-size: 24px;">Thank You for Your Submission!</h2>
                    <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                      Dear Author,
                    </p>
                    <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                      We have successfully received your article submission to <strong>Frontiers in Engineering and Informatics</strong>.
                    </p>
                    
                    <!-- Submission Details -->
                    <div style="background-color: #f5f5f5; border-left: 4px solid #083b7a; padding: 20px; margin: 20px 0; border-radius: 4px;">
                      <h3 style="color: #083b7a; margin: 0 0 15px 0; font-size: 18px;">Submission Details</h3>
                      <table width="100%" cellpadding="5" cellspacing="0">
                        <tr>
                          <td style="color: #666666; font-size: 14px; width: 120px;"><strong>Title:</strong></td>
                          <td style="color: #333333; font-size: 14px;">${articleData.title}</td>
                        </tr>
                        <tr>
                          <td style="color: #666666; font-size: 14px;"><strong>Type:</strong></td>
                          <td style="color: #333333; font-size: 14px;">${articleData.articleType}</td>
                        </tr>
                        <tr>
                          <td style="color: #666666; font-size: 14px;"><strong>Submitted on:</strong></td>
                          <td style="color: #333333; font-size: 14px;">${new Date(articleData.createdAt).toLocaleDateString()}</td>
                        </tr>
                      </table>
                    </div>
                    
                    <!-- Next Steps -->
                    <div style="background-color: #e8f4fd; padding: 20px; margin: 20px 0; border-radius: 4px;">
                      <h4 style="color: #083b7a; margin: 0 0 15px 0; font-size: 16px;">What happens next?</h4>
                      <ul style="color: #333333; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
                        <li>Our editorial team will review your submission</li>
                        <li>You will receive updates on the review process via email</li>
                        <li>We typically respond within 2-3 business days</li>
                        <li>If you have any questions, please don't hesitate to contact us</li>
                      </ul>
                    </div>
                    
                    <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 20px 0 0 0;">
                      Thank you for choosing CrinfoGlobal Publishers for your research publication.
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8f8f8; padding: 20px 30px; border-top: 1px solid #e0e0e0;">
                    <p style="color: #666666; font-size: 12px; line-height: 1.6; margin: 0;">
                      <strong>CrinfoGlobal Publishers</strong><br>
                      Kattur 641667 Pongalur SO TAMIL NADU 641667<br>
                      📞 9063500171 | 📧 info@crinfoglobal.com
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
    };
    return await sendEmail(mailOptions);
};
// ============================================================================
// LEGACY FUNCTIONS (For backward compatibility)
// ============================================================================
export const sendOTPEmail = sendOTPEmailDirect;
export const sendEditorNotificationEmail = sendEditorNotificationEmailDirect;
export const sendUserSubmissionConfirmationEmail = sendUserSubmissionConfirmationEmailDirect;
//# sourceMappingURL=email.service.new.js.map