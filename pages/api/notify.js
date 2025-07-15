import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { name, email, size, product } = req.body;

  if (!name || !email || !size || !product) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Notify Signup – ${product}`,
      text: `
New notify signup:

Product: ${product}
Name: ${name}
Email: ${email}
Size: ${size}
      `,
      html: `
        <h2>New Notify Signup</h2>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Size:</strong> ${size}</p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `You're on the list for the ${product}`,
      text: `
Hi ${name},

Thanks for your interest in the ${product} (${size}).

You’re officially on the notification list and will be the first to know when it drops.

Stay tuned!

- Remy Leo Team
      `,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for your interest in the <strong>${product}</strong> (Size: ${size}).</p>
        <p>You’re officially on the notification list and will be the first to know when it drops.</p>
        <p>Stay tuned!</p>
        <p><em>– Remy Leo Team</em></p>
      `,
    });

    return res
      .status(200)
      .json({ message: "Thanks! You will be notified when this item is available." });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ message: "Something went wrong sending your request." });
  }
}
