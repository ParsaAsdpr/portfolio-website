import nodemailer from 'nodemailer'
import { callbackPromise } from 'nodemailer/lib/shared';

export default function handler(req, res) {
  const {yourName, yourEmail, subject, message} = req.body
  
  const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.gmailEmail,
        pass: process.env.gmailPass,
      },
    });

  const mailOptions = {
    from: yourEmail,
    to: "parsaasadpour1199@gmail.com",
    subject: `${yourName}: ${subject}`,
    text: message,
  };
  try{
    // const emailRes = transporter.sendMail({
    //   from: yourEmail,
    //   to: "parsaasadpour1199@gmail.com",
    //   subject: `${yourName}: ${subject}`,
    //   text: message,
    // })

    transporter.sendMail(mailOptions, async (error, info) => {
      const data = {
        error: error,
        info: info,
      };
      callbackPromise(data)
  });
}
catch (err) {
  console.log(err)
}
}
