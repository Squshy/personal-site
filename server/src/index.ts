import express from "express";
import { createTransport } from "nodemailer";
const nodemailer = require('nodemailer')
require("dotenv").config();

interface ResponseInt {
  error: string | null;
  success: string | null;
}

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.post("/mail", async (req, res) => {
  const { name, email, message } = req.body;
  const response: ResponseInt = {
    error: null,
    success: null,
  };

  /* error checks */
  if (name === null) {
    response.error = "Please enter a name";
    res.send(response);
  }
  if (email === null) {
    response.error = "Please enter an email";
    res.send(response);
  }
  if (message === null) {
    response.error = "Please enter a message";
    res.send(response);
  }

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions= {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from ${name}`,
    text: message
  }

  const info = await transporter.sendMail(mailOptions);
  console.log(`Message sent: ${info.messageId}`)

  res.send("EYO U HIT US");
});

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`);
});
