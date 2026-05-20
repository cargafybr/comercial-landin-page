import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_TO || 'cargafybr@gmail.com',
    pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD!,
  },
});

export async function POST(req: Request) {
  try { 
    const { formData } = await req.json();

    if (!formData.nome || !formData.empresa || !formData.wpp || !formData.email) {
      return NextResponse.json({ error: 'Todos os campos obrigatórios devem ser preenchidos' }, { status: 400 });
    }

    const mailOptions = {
      from: `"CargaFy Landing Page" <${process.env.NEXT_PUBLIC_EMAIL_TO || 'cargafybr@gmail.com'}>`, 
      to: process.env.NEXT_PUBLIC_EMAIL_TO || 'cargafybr@gmail.com',
      subject: `Nova solicitação de demonstração - ${formData.empresa}`,
      html: `
        <h2>Olá CargaFy, uma transportadora está solicitando uma demonstração através do site!</h2>
        <p><strong>Nome do solicitante:</strong> ${formData.nome}</p>
        <p><strong>Empresa:</strong> ${formData.empresa}</p>
        <p><strong>E-mail:</strong> ${formData.email}</p>
        <p><strong>WhatsApp:</strong> ${formData.wpp}</p>
        <p><strong>Cidade:</strong> ${formData.cidade || 'Não informada'}</p>
        <p><strong>Tipo de empresa:</strong> ${formData.tipo || 'Não informado'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 });
  }
}
