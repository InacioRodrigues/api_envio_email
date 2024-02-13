import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import transporter from "src/libs/nodemailer.lib";


@Injectable()
export class EmailService {
  constructor(private readonly prisma: PrismaService) {}

  async createEmail(email: string): Promise<void> {
    try {
      await this.prisma.email.create({
        data: {
          email,
        },
      });

      const mailOptions = {
        from: 'teste@gmail.com', 
        to: email,
        subject: 'Bem-vindo à api de envio de email',
        html: '<b>Hello world?</b>',
      };

      await transporter.sendMail(mailOptions);
    } catch (error) {
      throw error;
    }
  }
}