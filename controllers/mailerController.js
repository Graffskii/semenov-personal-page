const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: 'ivanovpostman1991@outlook.com',
      pass: 'qwerty615243'
    }
  });


class mailerController {
    async send(req, res) {
        const {email, subject, text} = req.body

        console.log(req.body)

        let result = await transporter.sendMail({
            from: '"Leonid" <ivanovpostman1991@outlook.com>',
            to: email,
            subject: subject,
            text: text,
        });
        
        console.log(result);

        return res.json('Сообщение отправлено!')
    }
}

module.exports = new mailerController()