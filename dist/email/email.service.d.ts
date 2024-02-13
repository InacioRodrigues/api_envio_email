import { PrismaService } from "src/database/prisma.service";
export declare class EmailService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createEmail(email: string): Promise<void>;
}
