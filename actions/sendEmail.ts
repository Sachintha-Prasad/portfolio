'use server'
import { error } from 'console'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// server-side validation
const validateString = (value: unknown) => {
    if (!value || typeof value !== 'string') {
        return false
    }
    return true
}

export const sendEmail = async (formData: FormData) => {
    const name = formData.get('name')
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    if (!validateString(senderEmail)) {
        return {
            error: 'Invalid sender email',
        }
    }
    if (!validateString(message)) {
        return {
            error: 'Invalid sender email',
        }
    }

    try {
        await resend.emails.send({
            from: 'Contact form <onboarding@resend.dev>',
            to: 'prasadsachintha1231@gmail.com',
            subject: 'Message by' + name + ' from contact form ',
            reply_to: senderEmail as string,
            text: message as string,
        })
    } catch (error) {
        console.log(error)
    }
}
