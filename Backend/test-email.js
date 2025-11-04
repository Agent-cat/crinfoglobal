import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('=== Email Configuration Test ===');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***SET***' : 'NOT SET');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('================================\n');

// Create transporter with the same config as your app
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  },
  debug: true,
  logger: true
});

// Test email
const testEmail = async () => {
  try {
    console.log('Testing SMTP connection...\n');
    
    // Verify connection
    await transporter.verify();
    console.log('\n✅ SMTP connection verified successfully!\n');
    
    // Send test email
    console.log('Sending test email...\n');
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: 'Test Email - CrinfoGlobal',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #083b7a;">Email Test Successful!</h2>
          <p>This is a test email from your CrinfoGlobal backend.</p>
          <p>If you received this email, your email configuration is working correctly.</p>
          <p><strong>Configuration:</strong></p>
          <ul>
            <li>SMTP Server: smtp.gmail.com</li>
            <li>Port: 587 (TLS)</li>
            <li>Email: ${process.env.EMAIL_USER}</li>
          </ul>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Sent at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });
    
    console.log('\n✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('\nCheck your inbox at:', process.env.EMAIL_USER);
    
  } catch (error) {
    console.error('\n❌ Email test failed:');
    console.error('Error:', error.message);
    console.error('Code:', error.code);
    
    if (error.code === 'EAUTH') {
      console.error('\n⚠️  Authentication failed. Please check:');
      console.error('1. EMAIL_USER is correct');
      console.error('2. EMAIL_PASS is a valid Gmail App Password');
      console.error('3. 2-Factor Authentication is enabled on your Gmail account');
      console.error('4. Generate a new App Password at: https://myaccount.google.com/apppasswords');
    } else if (error.code === 'ETIMEDOUT' || error.code === 'ECONNREFUSED') {
      console.error('\n⚠️  Connection failed. Please check:');
      console.error('1. Your internet connection');
      console.error('2. Firewall is not blocking ports 587 or 465');
      console.error('3. Try: telnet smtp.gmail.com 587');
    }
  }
};

// Run the test
testEmail();
