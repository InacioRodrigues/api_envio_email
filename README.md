API de serviço de e-mail
Este projeto é uma API RESTful desenvolvida usando o framework NestJS. Ele serve como um serviço de email que permite aos usuários enviar emails por meio de um endpoint. A API utiliza Prisma para interações com banco de dados e Nodemailer para envio de emails.

Descrição
A API Email Service consiste em três partes principais:

Email Service ( email.service.ts) : Este serviço trata da lógica de criação de um registro de email no banco de dados e envio de um email usando Nodemailer.
Controlador de e-mail ( email.controller.ts) : Este controlador expõe um endpoint HTTP POST ( /email/envio-email) que aciona o processo de envio de e-mail.
Configuração do Nodemailer ( nodemailer.lib.ts) : Este arquivo configura o transportador Nodemailer com configurações SMTP de variáveis ​​de ambiente.
Começando
Para executar o projeto localmente, siga estas etapas:

Clone o repositório.
Instale as dependências do projeto com npm install.
Configure as variáveis ​​de ambiente necessárias para a configuração do Nodemailer.
Inicie o aplicativo com npm run start.
Pontos finais
POST /email/envio-email : Aceita um endereço de email no corpo da solicitação e envia um email de boas-vindas para o endereço fornecido.
variáveis ​​ambientais
Certifique-se de que as seguintes variáveis ​​de ambiente estejam definidas corretamente para a configuração do Nodemailer:

NODEMAILER_HOST: o nome do host do servidor SMTP.
NODEMAILER_PORT: o número da porta do servidor SMTP.
NODEMAILER_USER: o nome de usuário para autenticação do servidor SMTP.
NODEMAILER_PASSWORD: a senha para autenticação do servidor SMTP.

Autor
Inácio Rodrigues

Informações de contato
E-mail: inaciorodrigues395@gmail.com

GitHub: InacioRodrigues

Sinta-se à vontade para entrar em contato por qualquer um desses canais se tiver dúvidas ou precisar de mais assistência com o projeto.
