 import express, { Request, Response } from "express";
 import cors from "cors";
 import nodemailer from "nodemailer";
 import dotenv from "dotenv";

 dotenv.config(); // To load environment variables from a `.env` file

 const app = express();
 const router = express.Router();

 // Middlewares
 app.use(cors());
 app.use(express.json());
 app.use("/", router);

 // Start server
 app.listen(5000, () => console.log("Server Running"));
 console.log(process.env.EMAIL_USER);
 console.log(process.env.EMAIL_PASS);

 // Nodemailer transport
 const contactEmail = nodemailer.createTransport({
   service: "gmail",
   auth: {
     user: process.env.EMAIL_USER,
     pass: process.env.EMAIL_PASS,
   },
 });

 // Verify transport setup
 contactEmail.verify((error) => {
   if (error) {
     console.log(error);
   } else {
     console.log("Ready to Send");
   }
 });

 // Route for contact form
 router.post("/contact", (req: Request, res: Response) => {
   const { firstName, lastName, email, message, phone } = req.body;
   const name = `${firstName} ${lastName}`;

   const mail = {
     from: name,
     to: process.env.EMAIL_USER, // Make sure this is set in your environment variables
     subject: "Contact Form Submission - Portfolio",
     html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
   };

   contactEmail.sendMail(mail, (error) => {
     if (error) {
       res.status(500).json({ error });
     } else {
       res.status(200).json({ message: "Message Sent" });
     }
   });
 });
