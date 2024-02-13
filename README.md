API de serviço de e-mail
Descrição
A API Email Service é uma API RESTful projetada para facilitar o envio de emails. Construído com NestJS, ele aproveita o Prisma para gerenciamento de banco de dados e o Nodemailer para lidar com a entrega de e-mail. Esta API fornece uma interface simples para enviar e-mails de boas-vindas aos usuários.

Características
Integração de banco de dados com Prisma para armazenamento de registros de email.
Transmissão segura de e-mail usando Nodemailer com configurações SMTP configuráveis.
Endpoint para acionar processos de envio de e-mail.
Começando
Pré-requisitos
Node.js instalado em sua máquina local.
Compreensão básica de TypeScript e NestJS.
Instalação
Clone o repositório em sua máquina local.
Execute npm installpara instalar as dependências necessárias.
Configure as variáveis ​​de ambiente para a configuração do Nodemailer (consulte .env.example).
Inicie o servidor de desenvolvimento com npm run start.
