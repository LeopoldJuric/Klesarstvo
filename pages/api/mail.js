const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Surname: ${body.surname}\r\n
    Email: ${body.email}\r\n
    Telephone: ${body.phone}\r\n
    Message: ${body.message}

  `;
  const data = {
    to: "bubrezko@gmail.com",
    from: "leo.jurich@gmail.com",
    subject: "Novi upit s web stranice!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };
  mail.send(data);

  res.status(200).json({ status: "ok" });
}