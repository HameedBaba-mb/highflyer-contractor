# Email Setup Instructions

## Setting up EmailJS for Contact Form

The contact form is configured to send emails to `contact@highflyer.ng` using EmailJS. Follow these steps to set it up:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use these template variables in your email template:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from the HIGHFLYER CONTRACTORS website contact form.
   ```
4. Set the "To Email" to: `contact@highflyer.ng`
5. Note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (User ID)

### 5. Update Configuration
1. Open `src/config/email.js`
2. Replace the placeholder values:
   ```javascript
   export const emailConfig = {
     serviceID: 'your_actual_service_id',
     templateID: 'your_actual_template_id',
     publicKey: 'your_actual_public_key'
   }
   ```

### 6. Test the Form
1. Run your application
2. Fill out the contact form
3. Check if emails are received at `contact@highflyer.ng`

## Fallback Behavior
If EmailJS is not configured or fails, the form will automatically open the user's default email client with a pre-filled message to `contact@highflyer.ng`.

## Security Note
The EmailJS public key is safe to expose in frontend code as it's designed for client-side use.