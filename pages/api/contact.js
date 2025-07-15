import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, projectType } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASS,
      },
    });

    // Email to YOU
    await transporter.sendMail({
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // Confirmation Email to USER
    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      to: email,
      subject: `Thanks for contacting Remy Leo Studio!`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out about your <strong>${projectType || "project"}</strong>. I’ve received your message and will get back to you within 24 hours.</p>
        <p>If you’d like to get started sooner, you can schedule a discovery call here:</p>
        <p><a href="https://calendly.com/whoisremyleo/30min" target="_blank" rel="noopener noreferrer">Book a Discovery Call</a></p>
        <p>Looking forward to connecting!</p>
        <p>– Remy Leo Studio</p>
      `,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ message: "Error sending message" });
  }
}
