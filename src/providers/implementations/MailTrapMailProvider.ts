import { IMailProvider, IMessage } from "./../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "52a1a04dfb7808",
        pass: "ca0157aebe94a1",
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.to.name,
        address: message.to.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
