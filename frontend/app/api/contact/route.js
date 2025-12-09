import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, subject, message, to } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Frontiers in Engineering and Informatics Website

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from the contact form on the Frontiers in Engineering and Informatics website.
`;

    // Send email using a third-party service (you'll need to configure this)
    // For now, we'll simulate the email sending
    console.log("Sending email to:", to);
    console.log("Email content:", emailContent);

    // Here you would integrate with your email service (SendGrid, Nodemailer, etc.)
    // For demonstration purposes, we'll just log it

    // Example with a real email service (you'll need to install and configure):
    /*
    import nodemailer from 'nodemailer'
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: `New Contact Form: ${subject}`,
      text: emailContent,
      replyTo: email,
    })
    */

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
