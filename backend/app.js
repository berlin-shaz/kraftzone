const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email provider
  auth: {
    user: "grzaini@gmail.com", //process.env.EMAIL_USER, // Your email
    pass: "wwvabmptabswtymd", //process.env.EMAIL_PASS, // Your email password (use app passwords if required)
  },
});

// API endpoint to send emails
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "grzaini@gmail.com", // The email address where you want to send the form data
    subject: `Email von ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    res.status(500).send("Failed to send email: " + error.message);
  }
});

// API endpoint to send order
app.post("/send-order", async (req, res) => {
  const { name, number, email, service, orderDate, address, message } =
    req.body;

  const mailOptions = {
    from: email,
    to: "grzaini@gmail.com", // The email address where you want to send the form data
    subject: `Anfrage von ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nContactNo: ${number}\n\nService: ${service}\nDate: ${orderDate}\nAddress: ${address}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    res.status(500).send("Failed to send email: " + error.message);
  }
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
