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

const sendEmail = async (email, order) => {
    const transporter = createTrasporte()
    const info = await transporter.sendMail({
        from: '"Mail de Prueba"<mailprueba@gmail.com>',
        to: `${email}`,
        subject: `Gracias por realizar la siguiente compra`,
        html:`<p>${order.products}</p><p>${order.amount}</p>`
    })
    
    return 
}

exports.sendEmail = (email, order) => sendEmail(email, order)