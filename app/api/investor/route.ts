import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const {
    firstName,
    lastName,
    email,
    phone,
    investmentExperience,
    message,
  } = body

  const name = `${firstName} ${lastName}`

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587, // use porta 587
    secure: false, // STARTTLS em vez de SMTPS puro (porta 465)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Investment Inquiry',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Investment Experience:</strong> ${investmentExperience}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error: any) {
    console.error('Erro ao enviar e-mail:', JSON.stringify(error, null, 2))
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 })
  }
}
