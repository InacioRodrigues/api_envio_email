"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const nodemailer_lib_1 = require("../libs/nodemailer.lib");
let EmailService = class EmailService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createEmail(email) {
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
            await nodemailer_lib_1.default.sendMail(mailOptions);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmailService);
//# sourceMappingURL=email.service.js.map