import { EmailService } from './email.service';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    email(email: string): Promise<{
        message: string;
    }>;
}
