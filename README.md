# ALX Listing App

## Objective
The objective of this milestone is to scaffold the **Airbnb clone** project by creating a **Next.js app** with a well-structured codebase, reusable components, and essential configurations.

## Project Description
The **ALX Listing App** is designed to help users browse property listings efficiently. By setting up a solid foundation with TypeScript, Tailwind CSS, and Next.js, the project ensures **code maintainability and scalability** for further development.

## Folder Structure & Purpose
The project follows a structured approach for easy navigation:
- **`components/common/`** → Contains reusable UI elements.
  - `Card.tsx` → Displays property details.
  - `Button.tsx` → Handles user actions like "Book Now."
- **`interfaces/`** → Stores TypeScript interfaces.
  - `index.ts` → Defines `CardProps` and `ButtonProps`.
- **`constants/`** → Holds reusable data and configurations.
  - `index.ts` → Contains API URLs, default values, and other global settings.
- **`public/assets/`** → Stores images and SVGs used throughout the application.
- **`pages/`** → Manages Next.js page structure.
  - `index.tsx` → The main landing page showcasing the listings.

## How to Run the Project Locally
Follow these steps to set up and run the project on your machine:

1. **Clone the repository**:
   ```sh
   git clone <your-repo-url>
   cd alx-listing-app
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
