# Email Service API

Welcome to the Email Service API, a robust solution for managing and sending emails within your applications. This API is built with NestJS and integrates with Prisma for database operations and Nodemailer for email transmission.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)
- [Author](#author)
- [Contact](#contact)

## Overview

The Email Service API is designed to provide a streamlined approach to email management. With the ability to store email records in the database and send emails through a single API call, it simplifies the process of email communication for developers.

## Getting Started

To begin using the Email Service API, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies with `npm install`.
3. Configure the environment variables needed for Nodemailer.
4. Start the server with `npm run start`.

## Endpoints

The API exposes a single endpoint for sending emails:

- `POST /email/envio-email`: Sends a welcome email to the provided email address.

## Environment Variables

Before running the API, ensure the following environment variables are set:

- `NODEMAILER_HOST`: SMTP server hostname.
- `NODEMAILER_PORT`: SMTP server port number.
- `NODEMAILER_USER`: SMTP server authentication username.
- `NODEMAILER_PASSWORD`: SMTP server authentication password.

## License

This project is licensed under the MIT License. For more information, please see the `LICENSE` file in the root directory of the project.

## Author

Inácio Rodrigues

## Contact

If you have any questions or need further assistance, feel free to reach out:

- Email: inaciorodrigues395@gmail.com
- GitHub: [https://github.com/InacioRodrigues](https://github.com/InacioRodrigues)
