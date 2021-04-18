const nodemailer = require('nodemailer');

class EmailController {
    async index(req, res) {

        const user = 'contato@kaiqueteste.com';
        const pass = '12345';

        res.send("Disparo de e-mails");

        const transporter = nodemailer.createTransport({
            host: "smtp.umbler.com",
            port: 587,
            auth: {user, pass}
        })

        transporter.sendMail({
            from: user,
            to: user,
            replyTo: 'kaiquenovaes.lima@gmail.com',
            subject: 'Bem vindo a plataforma',
            text: 'Olá seja bem vindo a plataforma de teste de envio de e-mails',
        }).then(info=>{
            res.send(info)
        }).catch(error=>{
            res.send(error)
        })
        
    }
  }
  
  module.exports = new EmailController()