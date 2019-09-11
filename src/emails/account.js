const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from:'eduebernal@gmail.com',
        subject:'Welcome to the app',
        text:`Welcome to the app, ${name}.`
    })
}

const sendFarewellEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'eduebernal@gmail.com',
        subject:'Farewell Task Manager',
        text:`We are sorry to see you go, ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}