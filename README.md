# NNS Enterprises LLC — Website

Official website for NNS Enterprises LLC, built with Next.js (App Router).

## Run it locally

Requires Node.js 18 or newer (https://nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (recommended: Vercel)

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, and click "Add New → Project".
3. Import the repository — Vercel auto-detects Next.js. Click Deploy.
4. Add your custom domain (e.g. nnsenterprises.com) under Project → Settings → Domains.

Every push to GitHub redeploys the site automatically.

## Where things live

- `app/page.jsx` — all page sections and their text content
- `app/globals.css` — every color, font size, and effect (design tokens at the top under `:root`)
- `app/layout.jsx` — fonts and site metadata (browser tab title, description)
- `components/Nav.jsx` — navigation bar
- `components/ContactForm.jsx` — contact form. **Change `CONTACT_EMAIL` at the top to your real inbox.**
- `components/Effects.jsx` — scroll progress, reveal animations, magnetic buttons
- `public/` — logo files and photos. Swap or add images here.

## Contact form note

The form currently opens the visitor's email app with the inquiry pre-filled (mailto).
For a more professional setup once deployed, connect it to Formspree (https://formspree.io)
or a Next.js API route with an email service like Resend.
