"use server"

import nodemailer from "nodemailer"

// Define the form data type
export type BookingFormData = {
  name: string
  email: string
  phone: string
  company: string
  employees: string
  interests: string[]
  date: string
  time: string
  message: string
}

// Create a transporter with the SMTP configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASSWORD || "",
  },
})

export async function submitBookingForm(formData: BookingFormData) {
  try {
    const { name, email, phone, company, employees, interests, date, time, message } = formData

    // Validate required fields
    if (!name || !email || !company || !date || !time || !interests || interests.length === 0) {
      return { success: false, error: "Missing required fields" }
    }

    // Format the email content
    const emailContent = `
     <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f9;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #4CAF50;
      text-align: center;
      font-size: 24px;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
    .section {
      margin-bottom: 20px;
    }
    .section strong {
      color: #333;
    }
    .footer {
      text-align: center;
      font-size: 14px;
      color: #777;
      margin-top: 30px;
    }
    hr {
      border: 1px solid #ddd;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>New Consultation Booking</h1>
    <div class="section">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Company Size:</strong> ${employees || "Not specified"}</p>
      <p><strong>Interested Services:</strong> ${interests.join(", ")}</p>
      <p><strong>Consultation Date:</strong> ${date}</p>
      <p><strong>Consultation Time:</strong> ${time}</p>
      ${message ? `<p><strong>Additional Information:</strong> ${message}</p>` : ""}
    </div>
    <hr>
    <p class="footer">This is an automated email from GetXCloud.</p>
  </div>

</body>
</html>

    `

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "admin@getxcloud.com", // Set admin email as requested
      subject: `New Consultation Booking from ${name}`,
      html: emailContent,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Your Consultation Booking Confirmation",
      html: `
       <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f9;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #4CAF50;
      text-align: center;
      font-size: 24px;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      line-height: 1.5;
    }
    .button {
      display: inline-block;
      background-color: #4CAF50;
      color: #fff;
      padding: 12px 20px;
      text-decoration: none;
      border-radius: 5px;
      text-align: center;
      margin-top: 20px;
    }
    .footer {
      text-align: center;
      font-size: 14px;
      color: #777;
      margin-top: 30px;
    }
    hr {
      border: 1px solid #ddd;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>Consultation Booking Confirmation</h1>
    <p>Dear ${name},</p>
    <p>Thank you for booking a consultation with us. We've received your request and are looking forward to speaking with you.</p>
    <div class="section">
      <p><strong>Consultation Details:</strong></p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
    </div>
    <p>If you need to reschedule or have any questions, please click the button below or reply to this email.</p>
    <a href="mailto:admin@getxcloud.com" class="button">Contact Us</a>
    <hr>
    <p class="footer">This is an automated confirmation email from GetXCloud.</p>
  </div>

</body>
</html>

      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
