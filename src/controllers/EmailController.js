const nodemailer = require('nodemailer');

class EmailController {
  async index(req, res) {
    const { EMAIL: user, PASS: pass } = process.env;
    
    const transporter = nodemailer.createTransport({
      host: "smtp.umbler.com",
      port: 587,
      auth: { user, pass }
    })

    const options = {
      from: user,
      to: user,
      replyTo: 'kaiquenovaes.lima@gmail.com',
      subject: 'Bem vindo a plataforma',
      text: 'Olá seja bem vindo a plataforma de teste de envio de e-mails',
    };

    transporter.sendMail(options, (err, info) => {
      if (err) res.send(err);
  
      return res.send(info);
    });
  }
}

module.exports = new EmailController();