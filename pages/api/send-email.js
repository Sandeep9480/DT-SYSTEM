import formData from 'form-data';
import Mailgun from 'mailgun.js';

const MAILGUN_DOMAIN = 'sandbox7f1bf8e437554f3eb7cc268968813b3e.mailgun.org';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '',
});

export default async function handler(req, res) {
    // Validate request method
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    // Validate API key
    if (!process.env.MAILGUN_API_KEY) {
        console.error('Mailgun API key is not set');
        return res.status(500).json({ success: false, message: 'Server configuration error' });
    }

    const { name, email, phone, country, companyName, position, message } = req.body;

    // Validate required fields
    if (!name || !email) {
        return res.status(400).json({ success: false, message: 'Name and email are required' });
    }

    try {
        const data = await mg.messages.create(MAILGUN_DOMAIN, {
            from: `${email}`,
            to: 'pruthvimogaveer18@gmail.com',
            subject: 'New Contact Form Submission',
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Country:</strong> ${country || 'N/A'}</p>
                <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
                <p><strong>Position:</strong> ${position || 'N/A'}</p>
                <p><strong>Message:</strong> ${message || 'N/A'}</p>
            `,
            text: `
                New Contact Form Submission
                Name: ${name}
                Email: ${email}
                Phone: ${phone || 'N/A'}
                Country: ${country || 'N/A'}
                Company: ${companyName || 'N/A'}
                Position: ${position || 'N/A'}
                Message: ${message || 'N/A'}
            `
        });

        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Mailgun error:', error);
        return res.status(500).json({
            success: false,
            message: 'Error sending email',
            error: error.message
        });
    }
}
