# Email Configuration & Troubleshooting Guide

## Current Issue: Connection Timeout

Your logs show that **both SMTP ports (587 and 465) are being blocked** by your network/firewall. The DNS resolution works, but the TCP connection times out.

```
[2025-10-27 08:10:48] DEBUG [Rs0Eys8Lmk] Resolved smtp.gmail.com as 172.217.194.109 [cache miss]
[2025-10-27 08:10:58] ERROR [Rs0Eys8Lmk] Connection timeout
```

## Quick Fix Options

### Option 1: Use Development Mode (RECOMMENDED FOR TESTING)

Add this to your `.env` file:

```bash
FORCE_EMAIL_DEV_MODE=true
```

This will log emails to console instead of sending them, allowing you to test the application without SMTP access.

### Option 2: Disable Email Completely

Add this to your `.env` file:

```bash
DISABLE_EMAIL=true
```

This will skip all email sending operations.

### Option 3: Change NODE_ENV to Development

In your `.env` file, change:

```bash
NODE_ENV=development
```

This will automatically use console logging for emails instead of sending them.

## Root Causes & Solutions

### 1. Network/Firewall Blocking SMTP Ports

**Symptoms:**
- Connection timeout errors
- Both port 587 and 465 fail
- DNS resolution works (IP address is found)

**Common in:**
- Corporate networks
- University networks
- Some ISPs (Jio, Airtel sometimes block SMTP)
- Cloud providers (AWS EC2, GCP, Azure block by default)
- VPS providers

**Solutions:**

#### A. Check if ports are blocked:
```bash
# Test port 587
telnet smtp.gmail.com 587

# Test port 465
telnet smtp.gmail.com 465

# Or use nc (netcat)
nc -zv smtp.gmail.com 587
nc -zv smtp.gmail.com 465
```

If these commands timeout, your network is blocking SMTP.

#### B. Use a VPN or Proxy
- Connect to a VPN that doesn't block SMTP ports
- Use a SOCKS5 proxy

#### C. Use Alternative SMTP Services
If Gmail is blocked, try these alternatives:

**SendGrid (Free tier: 100 emails/day):**
```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});
```

**Mailgun:**
```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  auth: {
    user: process.env.MAILGUN_USERNAME,
    pass: process.env.MAILGUN_PASSWORD
  }
});
```

**AWS SES (if on AWS):**
```typescript
const transporter = nodemailer.createTransport({
  host: 'email-smtp.us-east-1.amazonaws.com',
  port: 587,
  auth: {
    user: process.env.AWS_SES_USERNAME,
    pass: process.env.AWS_SES_PASSWORD
  }
});
```

### 2. Gmail App Password Not Set

**Symptoms:**
- Authentication errors
- "Invalid credentials" errors

**Solution:**

1. Enable 2-Factor Authentication on your Gmail account:
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. Generate an App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password
   - Add to `.env`: `EMAIL_PASS=your-16-char-password`

### 3. Gmail Security Settings

**Solution:**
- Ensure "Less secure app access" is OFF (you should use App Passwords instead)
- Check if your account has been locked due to suspicious activity
- Try accessing Gmail from a web browser to check for security alerts

### 4. ISP Blocking

Some Indian ISPs (Jio, Airtel) may block SMTP ports to prevent spam.

**Solutions:**
- Use mobile hotspot temporarily to test
- Contact your ISP to unblock ports
- Use alternative email service (SendGrid, Mailgun)
- Use a VPN

## Testing Email Configuration

### 1. Test SMTP Connection

Create a test file `test-email.ts`:

```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log('Connection failed:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});
```

### 2. Check Environment Variables

```bash
# In your Backend directory
node -e "console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS ? '***SET***' : 'NOT SET')"
```

## Current Configuration

Your email service has:
- ✅ Retry logic (3 attempts with exponential backoff)
- ✅ Primary transporter (port 587, TLS)
- ✅ Fallback transporter (port 465, SSL)
- ✅ Debug logging enabled
- ✅ Connection pooling
- ✅ Development mode support

## Recommended Next Steps

1. **Immediate Fix (for testing):**
   ```bash
   # Add to .env
   FORCE_EMAIL_DEV_MODE=true
   ```

2. **Check Network:**
   ```bash
   telnet smtp.gmail.com 587
   ```

3. **If blocked, use alternative service:**
   - Sign up for SendGrid (free tier)
   - Update email service configuration

4. **For production:**
   - Use a dedicated email service (SendGrid, Mailgun, AWS SES)
   - These services are more reliable and have better deliverability
   - They provide webhooks for tracking email status

## Environment Variables Reference

```bash
# Required
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Optional
EDITOR_EMAIL=editor@crinfoglobal.com
FRONTEND_URL=http://localhost:3000

# Email Control
DISABLE_EMAIL=false              # Set to 'true' to disable all emails
FORCE_EMAIL_DEV_MODE=false       # Set to 'true' to log emails instead of sending
NODE_ENV=production              # Set to 'development' to auto-enable dev mode
```

## Contact

If you continue to face issues, please provide:
1. Output of: `telnet smtp.gmail.com 587`
2. Your network type (home/office/university/VPS)
3. Your ISP name
4. Whether you're using a VPN
