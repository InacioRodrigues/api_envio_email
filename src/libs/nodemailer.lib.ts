import * as nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

const smtpConfig: SMTPTransport.Options = {
  host: process.env.NODEMAILER_HOST as string,
  port: Number(process.env.NODEMAILER_PORT),
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(smtpConfig);

export default transporter;