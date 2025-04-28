"use server"

import nodemailer from "nodemailer"

type ContactFormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASSWORD || "",
      },
    })

    // Admin email address
    const adminEmail = "admin@getxcloud.com"

    // Email content
    const mailOptions = {
      from: `"GetXCloud Contact" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <html>
          <head>
            <style>
              body {
                font-family: 'Helvetica Neue', Arial, sans-serif;
                color: #333;
                background-color: #f5f5f5;
                margin: 0;
                padding: 0;
              }
              .email-container {
                width: 100%;
                max-width: 650px;
                margin: 20px auto;
                background-color: #fff;
                padding: 30px;
                border-radius: 12px;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
              }
              h1 {
                font-size: 28px;
                color: #4a90e2;
                margin-bottom: 10px;
              }
              h2 {
                font-size: 20px;
                color: #333;
                margin-top: 20px;
              }
              p {
                font-size: 16px;
                line-height: 1.8;
                color: #666;
              }
              .contact-info {
                margin-bottom: 20px;
                background-color: #f9f9f9;
                padding: 15px;
                border-left: 5px solid #4a90e2;
                border-radius: 8px;
              }
              .contact-info strong {
                font-weight: bold;
                color: #333;
              }
              .contact-info p {
                margin: 5px 0;
                font-size: 15px;
              }
              .message {
                background-color: #f1f1f1;
                padding: 15px;
                border-radius: 8px;
                font-style: italic;
                color: #555;
              }
              .footer {
                font-size: 14px;
                text-align: center;
                color: #999;
                margin-top: 30px;
                padding-top: 15px;
                border-top: 1px solid #e0e0e0;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <h1>New Contact Form Submission</h1>
              <div class="contact-info">
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Subject:</strong> ${data.subject}</p>
              </div>
              <h2>Message:</h2>
              <div class="message">
                <p>${data.message.replace(/\n/g, "<br>")}</p>
              </div>
              <div class="footer">
                <p>Thank you for your submission. We will get back to you shortly!</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        New Contact Form Submission

        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Subject: ${data.subject}

        Message:
        ${data.message}
        
        Thank you for your submission. We will get back to you shortly!
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}


