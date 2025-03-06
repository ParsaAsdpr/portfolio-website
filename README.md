# Personal Portfolio Website

This repository contains the source code for my personal portfolio website, built using [Next.js (App Router)](https://nextjs.org/) and [Chakra UI](https://chakra-ui.com/). The website showcases my projects, skills, and provides a platform to contact me.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [PWA Support](#pwa-support)
- [Animations & Effects](#animations--effects)
- [Email Integration](#email-integration)
- [Anti-Spam Middleware](#anti-spam-middleware)
- [Contact](#contact)
- [License](#license)

## Features

- Responsive design compatible with various devices.
- Progressive Web App (PWA) support for offline access and installation.
- Dynamic project showcase with detailed descriptions.
- Smooth animations and effects using Framer Motion.
- Email functionality powered by Nodemailer.
- Anti-spam system for protecting the contact form using Next.js middleware and cookies.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) - A React framework for production.
- **Styling**: [Chakra UI](https://chakra-ui.com/) - A fully customizable component system.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
- **PWA**: Service Worker, Web Manifest, and caching strategies for offline support.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - A library for smooth and interactive animations.
- **Email Service**: [Nodemailer](https://nodemailer.com/) - Email handling for the contact form.
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Handling Form Submission.
- **Validation**: [Zod](https://zod.dev/) - Handling Form Validations.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 18.17.0 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ParsaAsdpr/portfolio-website.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd portfolio-website
   ```

3. **Install dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Running the Development Server

To start the development server, run:

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Project Structure

```plaintext
portfolio-website/
├── public/
│   ├── images/
│   └── ...
├── src/
│   ├── app/
│   │   ├── api/
│   │   └── ...
│   ├── assets/
│   │   ├── styles/
│   │   └── fonts/
│   ├── components/
│   ├── constants/
│   └── hooks/
│   └── validation/
│   └── middleware.ts
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── tsconfig.json
└── README.md
└── ...
```

- **`public/`**: Contains static assets like images, favicon`.
- **`src/components/`**: React components.
- **`src/app/`**: Page components following Next.js routing conventions and API routes for handling REST APIs.
- **`src/assets/`**: Contains fonts and CSS files.
- **`src/constants/`**: JSON files containing the content of website such as projects, about, etc.
- **`src/hooks/`**: Custom React hooks.
- **`src/validation/`**: Zod validation schemas for handling form validations.
- **`src/middleware.ts`**: Next.js middleware file for protecting contact form from spamming.

## Deployment

I have deployed my website using [Vercel](https://vercel.com/), the platform from the creators of Next.js. For more details on deploying Next.js applications, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## PWA Support

This portfolio website is a Progressive Web App (PWA), meaning:

- It can be installed on mobile and desktop devices.
- Supports offline access through caching strategies.
- Includes a Web App Manifest (`src/app/manifest.json`) for PWA compatibility.
- Uses a Service Worker to cache assets and enhance performance.

For more details on enabling PWA in Next.js, refer to the [Next PWA documentation](https://github.com/shadowwalker/next-pwa).

## Animations & Effects

The website includes smooth animations and interactive effects using **Framer Motion**. These animations enhance the user experience by making transitions, hover effects, and page changes more engaging.

For more information, visit the [Framer Motion documentation](https://www.framer.com/motion/).

## Email Integration

The contact form on the website uses **Nodemailer** to send emails. It allows visitors to send messages directly to my inbox. The email functionality is handled in the mail api route inside app/api folder.

For more information, visit the [Nodemailer documentation](https://nodemailer.com/).

## Anti-Spam System

To prevent spam, the contact form includes a **middleware-based anti-spam system**:

- The middleware stores the user's last sent email timestamp in cookies.
- Before sending a new email, the API route checks if the cooldown period has passed.
- If the user attempts to send an email too frequently, they are blocked from submitting another message until the cooldown expires.

This ensures that spam bots or users cannot flood the inbox with excessive messages.

## Contact

For any inquiries or feedback, please contact me via [telegram](https://t.me/Parsa4P), [email](mailto:parsaparsaasadpour.1999@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/https://www.linkedin.com/in/parsa-asadpour-42014322b).

## License

This project is open-source and available under the [MIT License](LICENSE).
