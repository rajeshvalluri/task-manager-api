const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.setSubstitutionWrappers("{{", "}}");

const sendWelcomeEmail = (email, name) => {
    sgMail.send( {
    to: email,
    from: 'rajeshvalluri@trendingthoughts.com',
    subject: 'This is the rythm of the life',
    text: "Welcome to our website, ${{name}}. We hope you enjoy your stay"
})
}

const sendCancelEmail = (email, name) => {
    sgMail.send( {
    to: email,
    from: 'rajeshvalluri@trendingthoughts.com',
    subject: 'This is the rythm of the life',
    text: "Sorry to see you go. Please let us know if we could do anything to keep you."
})
}


module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
