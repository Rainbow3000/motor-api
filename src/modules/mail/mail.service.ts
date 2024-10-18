import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendUserWelcome(email: string, token: string) {
    const confirmation_url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: email,
      subject: 'CUA HANG GAU BONG',
      template: './sendMail',
      context: {
        name: email,
        confirmation_url,
      },
    });
  }
}
