// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below

export const emailConfig = {
  serviceID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID  
  publicKey: 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
}

// Example EmailJS template variables you can use:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{subject}} - Email subject
// {{message}} - Email message
// {{to_email}} - Recipient email (contact@highflyer.ng)