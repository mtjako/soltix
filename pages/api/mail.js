import HttpStatus from "http-status-codes";
import middleware from "../../middleware/middleware";
import nextConnect from "next-connect";
import nodemailer from "nodemailer";

const handler = nextConnect();
const attachments = [];

handler.use(middleware);

handler.post(async (req, res) => {
  try {
    attachments.length = 0;
    const content = JSON.parse(req.body.text);
    const files = req.files;
    Object.entries(files).map((item) => {
      attachments.push({
        filename: item[1].originalFilename,
        path: item[1].filepath,
      });
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });
    const mailOptions = {
      from: `"Soltix" <${process.env.user}>`,
      to: process.env.userTarget,
      subject: `Soltix Form - ${content[7][2]}`,
      html: `
      	<div class="container">
      	<h1>Soltix Form <span> - ${content[7][2]}</span></h1>
      	<div class="section">
      	  <h3>1. Powiedz nam czego szukasz lub potrzebujesz</h3>
      	  <p>${content[1]}</p>
      	</div>
      	<div class="section">
      	  <h3>
      		2. Jeśli na tym etapie znasz obszary/procesy wymagające automatyzacji i/lub digitalizacji w Twojej firmie, krótko je opisz. W tym miejscu napisz też kilka słów o swoim pomyśle na start’up. Możesz też dodać plik z opisem lub specyfikacją.
      	  </h3>
      	  <p>${content[2]}</p>
      	</div>
      	<div class="section">
      	  <h3>3. Ile osób pracuje w firmie?</h3>
      	  <p>${content[3]}</p>
      	</div>
      	<div class="section">
      	  <h3>4. Jaki budżet firma jest w stanie przeznaczyć na budowę oprogramowania?</h3>
      	  <p>${content[4]}</p>
      	</div>
      	<div class="section">
      	  <h3>
      		5. Preferowana forma warsztatów:
      	  </h3>
      	  <p>${content[5]}</p>
      	</div>
      	<div class="section">
      	  <h3>
      		6. Podaj proszę preferowany termin oraz godzinę warsztatów:
      	  </h3>
      	  <p>${content[6]}</p>
      	</div>
      	<div class="section">
      	  <h3>7. Dane kontaktowe:</h3>
      	  <p><b>Name:</b> ${content[7][0]}</p>
      	  <p><b>Surname:</b> ${content[7][1]}</p>
      	  <p><b>Company:</b> ${content[7][2]}</p>
      	  <p><b>Position:</b> ${content[7][3]}</p>
      	  <p><b>Email:</b> ${content[7][4]}</p>
      	  <p><b>Phone number:</b> ${content[7][5]}</p>
      	  <p><b>NDA:</b> ${content[7][6]}</p>
      	</div>
        </div>
        <style>
      	* {
      	  margin: 0;
      	  padding: 0;
      	}
      	body {
      	  background-color: #f5f5f5;
      	  color: #171717;
      	  font-family: sans-serif;
      	}
      	h1 {
      	  color: #1d4ed8;
      	  font-size: 24px;
      	  padding: 0 0 32px;
      	}
      	h1 span {
      	  color: #171717;
      	}
      	.container {
      	  padding: 32px;
      	  margin: 50px auto;
      	  max-width: 600px;
      	  border-radius: 8px;
      	  background-color: #fff;
      	}
      	.section {
      	  margin: 0 0 12px;
      	}
      	h3 {
      	  padding: 0 0 4px;
      	}
      	p {
      	  color: #737373;
      	  padding: 0 0 4px;
      	}
        </style>
          `,
      attachments,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(400).end(JSON.stringify({ message: "Error" }));
      } else {
        res.status(200).end(JSON.stringify({ message: "Send Mail" }));
      }
    });
    res.status(HttpStatus.OK).json({});
  } catch (err) {
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
