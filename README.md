
# Personal Portfolio Website

This repository contains the source code for my personal portfolio website, built using [Next.js (App Router)](https://nextjs.org/) and [Chakra UI](https://chakra-ui.com/). The website showcases my projects, skills, and provides a platform to contact me.

Site content is loaded from a [Supabase](https://supabase.com/) PostgreSQL database instead of static JSON/TypeScript constants.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
  - [Running the Development Server](#running-the-development-server)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [PWA Support](#pwa-support)
- [Animations & Effects](#animations--effects)
- [Email Integration](#email-integration)
- [Anti-Spam Middleware](#anti-spam-middleware)
- [Contact](#contact)
- [License](#license)

## Features

- Responsive design compatible with various devices.
- Dynamic site content loaded from Supabase (about, journeys, experiences, projects, socials, contact info, and SEO metadata).
- Progressive Web App (PWA) support for offline access and installation.
- Dynamic project showcase with detailed descriptions.
- Smooth animations and effects using Framer Motion.
- Email functionality powered by Nodemailer.
- Anti-spam system for protecting the contact form using Next.js middleware and cookies.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) - A React framework for production.
- **Styling**: [Chakra UI](https://chakra-ui.com/) - A fully customizable component system.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
- **Database**: [Supabase](https://supabase.com/) - PostgreSQL database and client for site content.
- **PWA**: Service Worker, Web Manifest, and caching strategies for offline support.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - A library for smooth and interactive animations.
- **Email Service**: [Nodemailer](https://nodemailer.com/) - Email handling for the contact form.
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Handling form submission.
- **Validation**: [Zod](https://zod.dev/) - Handling form validations.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 18.17.0 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Supabase](https://supabase.com/) project with the site tables created and seeded

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

### Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=<your supabase project url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your supabase anon key>

# Email (contact form)
MAIL_URL=<your email platform SMTP hostname>
MAIL_PORT=<SMTP port>
MAIL_USERNAME=<your email provider username>
MAIL_PASSWORD=<your email provider password>
MAIL_ADDRESS=<your email provider email>
```

For the contact form, you need an email platform to get the mail variables. You can use any email service, but I recommend [Mailtrap](https://mailtrap.io/) as it is free and easy to use. For more details, check the [Mailtrap documentation](https://mailtrap.io/).

### Database Setup

Create the following tables in Supabase:

- `site_data` — site title, description, icon, theme color, about text, hero content, CV URL, and SEO metadata (JSON)
- `journeys` — career/education journey entries
- `experiences` — work experience entries
- `projects` — portfolio projects
- `socials` — social links (`telegram`, `linkedin`, `github`)
- `contacts` — contact details (e.g. email)

Child tables are related to `site_data` through a `site_data_id` foreign key. After creating the tables, seed them with your portfolio content and enable Row Level Security policies that allow public read access.

The app fetches everything through `getSiteData()` in `src/utils/supabase.ts`, which loads `site_data` and its related records in a single nested query.

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
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── manifest.json
│   ├── assets/
│   │   └── style/
│   ├── components/
│   ├── hooks/
│   ├── types/
│   ├── utils/
│   │   ├── supabaseClient.ts
│   │   ├── supabase.ts
│   │   └── consts.ts
│   ├── validation/
│   └── middleware.ts
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

- **`public/`**: Static assets like images and favicon.
- **`src/app/`**: Next.js App Router pages, layout, metadata generation, and API routes.
- **`src/components/`**: React components for each section of the site.
- **`src/assets/`**: Global CSS and fonts.
- **`src/types/`**: TypeScript types for database table rows (`SiteData`, `Project`, `Experience`, etc.).
- **`src/utils/`**: Supabase client, cached `getSiteData()` fetcher, and shared constants such as social icon mappings.
- **`src/hooks/`**: Custom React hooks.
- **`src/validation/`**: Zod validation schemas for the contact form.
- **`src/middleware.ts`**: Anti-spam protection for the contact form.

## Content Management

All visible site content comes from Supabase:

| Section | Source |
|---------|--------|
| SEO metadata & viewport | `site_data` (`title`, `description`, `icon`, `theme_color`, `metadata`) via `generateMetadata()` / `generateViewport()` in `page.tsx` |
| Hero, about, journeys | `site_data`, `journeys` |
| Experiences | `experiences` |
| Projects | `projects` |
| Social links | `socials` |
| Contact info | `contacts` |

To update the website content, edit the rows in Supabase instead of changing local constant files.

Type definitions for each table live in `src/types/` and are used across components for type-safe props and data handling.

## Deployment

I have deployed my website using [Vercel](https://vercel.com/), the platform from the creators of Next.js. For more details on deploying Next.js applications, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

Make sure to add the Supabase and mail environment variables in your deployment platform's settings.

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

The contact form on the website uses **Nodemailer** to send emails. It allows visitors to send messages directly to my inbox. The email functionality is handled in the mail API route inside `src/app/api/`.

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
