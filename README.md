#API de serviço de e-mail
Descrição
A API Email Service é uma API RESTful projetada para facilitar o envio de emails. Construído com NestJS, ele aproveita o Prisma para gerenciamento de banco de dados e o Nodemailer para lidar com a entrega de e-mail. Esta API fornece uma interface simples para enviar e-mails de boas-vindas aos usuários.

#Características
Integração de banco de dados com Prisma para armazenamento de registros de email.
Transmissão segura de e-mail usando Nodemailer com configurações SMTP configuráveis.
Endpoint para acionar processos de envio de e-mail.

#Começando
Pré-requisitos
Node.js instalado em sua máquina local.
Compreensão básica de TypeScript e NestJS.
Instalação
Clone o repositório em sua máquina local.
Execute npm installpara instalar as dependências necessárias.
Configure as variáveis ​​de ambiente para a configuração do Nodemailer (consulte .env.example).
Inicie o servidor de desenvolvimento com npm run start:dev.

#Uso
Para enviar um email, faça uma solicitação POST ao /email/envio-emailendpoint com o endereço de email do destinatário no corpo da solicitação.
http://localhost:3000/email/envio-email
json: email: "teste@gmail.com"

Contribuindo
Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de começar e 
sinta-se à vontade para entrar em contato por qualquer um desses canais se tiver dúvidas ou precisar de mais assistência com o projeto.

Licença
Este projeto está licenciado sob a licença MIT. Veja o LICENSEarquivo para detalhes.

Autor
Inácio Rodrigues

Informações de contato
E-mail: inaciorodrigues395@gmail.com

GitHub: InacioRodrigues

