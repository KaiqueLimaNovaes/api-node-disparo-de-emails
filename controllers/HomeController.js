class HomeController {
    async index(req, res) {
      res.send("API com disparo de e-mails");
    }
  }
  
  module.exports = new HomeController()