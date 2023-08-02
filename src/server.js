const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Replace these with your actual email credentials
const EMAIL_USER = 'jonathan.fausset@me.com';
const EMAIL_PASS = 'b!SH0p8156';

const transporter = nodemailer.createTransport({
    service: 'me', // e.g., 'Gmail' for Gmail, 'Outlook' for Outlook
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: EMAIL_USER,
        to: 'jonathan.fausset@me.com', // Replace this with your email address
        subject: 'Form Submission',
        text: 
        `Name: ${props.data.name}
        \nEmail: ${props.data.email}
        \nContact: ${props.data.contact}`,

        profession: 
        `Profession: ${props.questiondData.profession}
        \nInterests: ${props.questiondData.interest}
        \nReference: ${props.questiondData.reference}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'An error occurred while sending the email.' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Email sent successfully!' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
