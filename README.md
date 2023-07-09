# Nodemailer Contact Form Example

This is an example Express.js application that demonstrates how to create a contact form using Nodemailer to send emails. It uses the Gmail service for sending emails.

## Prerequisites

- Node.js installed on your machine

## Installation

1. Clone the repository:

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```
   AUTH_PASS=your-gmail-password
   ```

4. Start the application:

   ```
   node/nodemon app.js
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Fill out the contact form with your name, email, and message.

2. Click the "Submit" button.

3. If the email is sent successfully, you will see a success message or otherwise.

## Configuration

To configure the email provider settings, modify the following code in `app.js`:

```javascript
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: process.env.AUTH_PASS
    }
});
```

Replace `'your-email@gmail.com'` with your Gmail address.

## License

This project is licensed under the MIT License
