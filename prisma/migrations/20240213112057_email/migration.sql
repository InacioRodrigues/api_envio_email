-- CreateTable
CREATE TABLE "Email" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Email_email_key" ON "Email"("email");
