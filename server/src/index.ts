import express from "express";
import { createTransport } from "nodemailer";
import { validate} from 'email-validator';
import { nextTick } from "process";
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
    return res.status(400).send(response);
  }
  if (email === null) {
    response.error = "Please enter an email";
    return res.status(400).send(response);
  }
  if (message === null) {
    response.error = "Please enter a message";
    return res.status(400).send(response);
  }
  if(!validate(email)) {
    response.error = "Invalid email address";
    return res.status(400).send(response);
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
    subject: `Site message from ${name}`,
    text: message
  }

  const info = await transporter.sendMail(mailOptions);
  response.success = "Message sent successfully!"

  return res.send(response);
});

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`);
});
