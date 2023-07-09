require('dotenv').config();
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('contact.ejs');
});

console.log(process.env.AUTH_PASS)
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        // Configure your email provider settings here
        service: 'Gmail',
        auth: {
            user: 'fiyinfoluwasamuel580@gmail.com',
            pass: process.env.AUTH_PASS
        }
    });

    // Configure the email options
    const mailOptions = {
        from: email,
        to: 'fiyinfoluwasamuel580@gmail.com',
        subject: 'New Contact Form Submission',
        text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.send('Error: Failed to send the email.');
        } else {
            console.log('Email sent:', info.response);
            res.send('Success: Email sent successfully.');
        }
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
