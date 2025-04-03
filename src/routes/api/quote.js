import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export async function post(req, res) {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString(); // Convert Buffer to string
  });

  req.on('end', async () => {
    try {
      // Parse the incoming JSON data
      const { name, phone, email, message } = JSON.parse(body);

      // Validate form data
      if (
        !name ||
        !/^[a-zA-Z\s]+$/.test(name) || // Name: alphabets and spaces only
        !email ||
        !/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email) || // Email: valid format
        !phone ||
        !/^\d+$/.test(phone) || // Phone: only numbers
        (message && message.length > 250) // Message: max 250 characters
      ) {
        return res
          .writeHead(400, { 'Content-Type': 'application/json' })
          .end(JSON.stringify({ message: 'Invalid form data' }));
      }

      // Store data in a JSON file
      const filePath = path.resolve('static', 'quotes.json'); // Use `static` for public access
      let quotesData = [];

      if (fs.existsSync(filePath)) {
        quotesData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      }

      quotesData.push({ name, phone, email, message });

      fs.writeFileSync(filePath, JSON.stringify(quotesData, null, 2));

      // Configure Nodemailer with your provided mail settings
      const transporter = nodemailer.createTransport({
        host: 'production.egspec.org', // Updated host
        port: 587, // Updated port
        secure: false, // Use TLS (not SSL)
        auth: {
          user: 'noreply@production.egspec.org', // MAIL_USERNAME
          pass: '232003@Anbu', // MAIL_PASSWORD
        },
      });

      const mailOptions = {
        from: '"E.G.S Pillay Engineering College" <noreply@egspec.org>', // MAIL_FROM_ADDRESS & NAME
        to: 'raghavanofficials@gmail.com', // Replace with the actual recipient's email
        subject: 'New Quote Request',
        text: `You have a new quote request:\n\n
          Name: ${name}\n
          Phone: ${phone}\n
          Email: ${email}\n
          Message: ${message || 'No message provided'}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return res
        .writeHead(200, { 'Content-Type': 'application/json' })
        .end(JSON.stringify({ message: 'Quote request submitted successfully!' }));
    } catch (error) {
      console.error('Error processing request:', error);
      return res
        .writeHead(500, { 'Content-Type': 'application/json' })
        .end(JSON.stringify({ message: 'Failed to process request' }));
    }
  });
}
