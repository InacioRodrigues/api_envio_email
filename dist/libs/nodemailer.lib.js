"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
const smtpConfig = {
    host: process.env.NODEMAILER_HOST,
    port: Number(process.env.NODEMAILER_PORT),
    secure: false,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
    },
};
const transporter = nodemailer.createTransport(smtpConfig);
exports.default = transporter;
//# sourceMappingURL=nodemailer.lib.js.map