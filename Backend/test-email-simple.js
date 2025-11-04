import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('\n🔧 Testing Gmail Email Configuration\n');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***SET***' : 'NOT SET');
console.log('');

// Create simple transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test function
async function testEmail() {
  try {
    console.log('Step 1: Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified!\n');
    
    console.log('Step 2: Sending test email...');
    const info = await transporter.sendMail({
      from: `"CrinfoGlobal Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: '✅ Test Email - CrinfoGlobal',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #083b7a;">✅ Email Test Successful!</h2>
          <p>This is a test email from your CrinfoGlobal backend.</p>
          <p>If you received this email, your configuration is working correctly!</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Configuration:</strong></p>
            <ul>
              <li>Service: Gmail</li>
              <li>Email: ${process.env.EMAIL_USER}</li>
              <li>Time: ${new Date().toLocaleString()}</li>
            </ul>
          </div>
          <p style="color: #666; font-size: 12px;">
            CrinfoGlobal Publishers<br>
            Test sent at: ${new Date().toISOString()}
          </p>
        </div>
      `,
    });
    
    console.log('✅ Email sent successfully!\n');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('\n📬 Check your inbox at:', process.env.EMAIL_USER);
    console.log('');
    
  } catch (error) {
    console.error('\n❌ Email test failed!\n');
    console.error('Error:', error.message);
    console.error('Code:', error.code);
    console.error('');
    
    if (error.code === 'EAUTH') {
      console.error('🔑 Authentication Error - Please check:');
      console.error('   1. EMAIL_USER is correct in .env');
      console.error('   2. EMAIL_PASS is a valid Gmail App Password (not your regular password)');
      console.error('   3. 2-Factor Authentication is enabled on your Gmail');
      console.error('   4. Generate new App Password at: https://myaccount.google.com/apppasswords');
    } else if (error.code === 'ETIMEDOUT') {
      console.error('⏱️  Connection Timeout - Please check:');
      console.error('   1. Your internet connection');
      console.error('   2. Firewall/antivirus blocking SMTP');
      console.error('   3. Try: telnet smtp.gmail.com 587');
    }
    console.error('');
  }
}

// Run test
testEmail();
