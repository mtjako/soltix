import HttpStatus from 'http-status-codes';
import middleware from '../../middleware/middleware';
import nextConnect from 'next-connect';
import nodemailer from "nodemailer";

const handler = nextConnect();
const attachments = [];

handler.use(middleware);

handler.post(async(req, res) => {
	try {
		attachments.length = 0;
		const content = JSON.parse(req.body.text);
		const files = req.files;
		console.log(typeof files);
		Object.entries(files).map(item => {
			attachments.push({
				filename: item[1].originalFilename,
				path: item[1].filepath,
			});
		})

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
    subject: `Soltix Form - ${content[10][2]}`,
    html: `
	<div class="container">
	<h1>Soltix Form <span> - ${content[10][2]}</span></h1>
	<div class="section">
	  <h3>1. In what area does the company operate?</h3>
	  <p>${content[1].join(", ")}</p>
	</div>
	<div class="section">
	  <h3>
		2. For what type of customers are the company's products and/or
		services intended?
	  </h3>
	  <p>${content[2].join(", ")}</p>
	</div>
	<div class="section">
	  <h3>3. In what form would you like the new software to be?</h3>
	  <p>${content[3].join(", ")}</p>
	</div>
	<div class="section">
	  <h3>4. What is the overall purpose of the new software?</h3>
	  <p>${content[4].join(", ")}</p>
	</div>
	<div class="section">
	  <h3>
		5. Describe in a few sentences what is the purpose of creating new
		software
	  </h3>
	  <p>${content[5]}</p>
	</div>
	<div class="section">
	  <h3>
		6. In a few words, tell us what industry does your company operate in
		and what does it generally do?
	  </h3>
	  <p>${content[6]}</p>
	</div>
	<div class="section">
	  <h3>7. How many people are employed in the company?</h3>
	  <p>${content[7]}</p>
	</div>
	<div class="section">
	  <h3>
		8. What budget do you initially anticipate/can spend for new software
		for the company?
	  </h3>
	  <p>${content[8]}</p>
	</div>
	<div class="section">
	  <h3>
		9. We would be honored if you wanted to add a comment (and a file)
		that you think may be useful for us
	  </h3>
	  <p>${content[9]}</p>
	</div>
	<div class="section">
	  <h3>10. Leave us your contact details</h3>
	  <p><b>Name:</b> ${content[10][0]}</p>
	  <p><b>Surname:</b> ${content[10][1]}</p>
	  <p><b>Company:</b> ${content[10][2]}</p>
	  <p><b>Position:</b> ${content[10][3]}</p>
	  <p><b>Email:</b> ${content[10][4]}</p>
	  <p><b>Phone number:</b> ${content[10][5]}</p>
	  <p><b>NDA:</b> ${content[10][6]}</p>
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
      console.log(error);
      res.status(400).end(JSON.stringify({ message: "Error" }));
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).end(JSON.stringify({ message: "Send Mail" }));
    }
  });
	res.status(HttpStatus.OK).json({});
	} catch (err) {
		res.status(HttpStatus.BAD_REQUEST).json({error: err.message});
	}
});

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler;