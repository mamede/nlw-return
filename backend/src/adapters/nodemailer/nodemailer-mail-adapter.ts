import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9df5205013e6c0",
      pass: "f40efe8900f124"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
  async sendMain({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
    from: 'Equipe Feedback <suporte@feedbacks.com>',
    to: 'Felipe Mamede <felipebrasilmv@gmail.com>',
    subject,
    html: body,
  });
  }
}