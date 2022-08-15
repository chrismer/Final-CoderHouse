const nodemailer = require ("nodemailer")

const createTrasporte = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "9f83e2cb5f1933",
          pass: "e3b3846859dbf5"
        }
      });
    return transport
}

const sendEmail = async (user) => {
    const transporter = createTrasporte()
    const info = await transporter.sendMail({
        from: '"Mail de Prueba"<mailprueba@gmail.com>',
        to: `${user.email}`,
        subject: `Gracias por registrarte ${user.name}`,
        html:" HOLaaaaaaaaaaaaaaaaaaa"
    })
    return 
}

exports.sendEmail = (user) => sendEmail(user)