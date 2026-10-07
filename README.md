# Aung Myo Myat — Portfolio

A responsive English/Japanese portfolio built with Next.js, React and next-intl. Includes a CSS 3D cube and orbital animation, light/dark themes, selected projects, experience and contact form. Motion is disabled when visitors request reduced motion.

## Development

Use Node.js 22 or later (Docker uses Node.js 24).

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Visit http://localhost:3000/en or http://localhost:3000/jp.

## Contact configuration

Set `API_BASE_URL` and `API_KEY` in your hosting environment, then redeploy. The server forwards messages to `${API_BASE_URL}/portfolio_mailservice`, preserving the existing mail-service contract (`statusCode: 200`). These variables must not use the `NEXT_PUBLIC_` prefix. Rotate the previous public API key if it was deployed.

Without configuration, the form reports a delivery error and provides LinkedIn as an alternative. Live mail delivery requires your existing external service and cannot be verified without its credentials.

## Checks and production

```sh
npm run lint
npm run build
npm start
```

```sh
docker build -t amm-portfolio .
docker run --rm -p 3000:3000 --env-file .env.local amm-portfolio
```

The Docker image uses a standalone Next.js build and runs as a non-root user. Do not include local environment files in the image.

## Content

Edit `src/app/[locale]/page.js` for portfolio content and `globals.css` for appearance. Existing project images, CV and social links are preserved. Chat App and E-commerce link to GitHub because the old implementation reused the blog URL; replace them with verified live project URLs when available. `/jp` is preserved for existing links; its HTML language is correctly marked as Japanese (`ja`).

All retained dependencies were upgraded to current stable versions at implementation time. ESLint uses the latest compatible 9.x version because Next.js's React/accessibility lint plugins currently declare peer support through ESLint 9.
