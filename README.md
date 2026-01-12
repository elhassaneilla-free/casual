# Professional IT Portfolio

A modern, visually striking IT portfolio website built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [GSAP](https://greensock.com/gsap). Inspired by Stripe's design interactions.

## 🚀 Key Features

*   **Static-First Architecture**: Minimal JavaScript, blazing fast performance using Astro Islands.
*   **Stunning UI/UX**: Professional "Stripe-like" aesthetic with smooth gradients and Tailwind styling.
*   **Advanced Animations**: Sequential entrance animations and hover effects powered by GSAP.
*   **Multilingual Support**: Scalable routing structure for English (`/en`) and French (`/fr`).
*   **Maintainable**: Component-based architecture with clear separation of concerns.

## 📂 Project Structure

```text
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components
│   ├── common/      # Shared elements (Header, Footer, Buttons)
│   └── sections/    # Page specific sections (Hero, Skills, etc.)
├── layouts/         # Page layouts (Layout.astro)
├── pages/           # File-based routing
│   └── [lang]/      # Localized pages (e.g., /en/about)
└── styles/          # Global styles & Tailwind directives
```

## 🛠️ Getting Started

### 1. Installation

```bash
npm install
```

### 2. Development

Start the development server:

```bash
npm run dev
```

### 3. Build

Build for production:

```bash
npm run build
```

## 🌍 Localization

Content is managed via the `src/pages/[lang]` directory structure. To add a new language, simply duplicate specific pages or adapt the routing logic.

## 🎨 Customization

*   **Tailwind Config**: defined in `tailwind.config.mjs`.
*   **Global Styles**: defined in `src/styles/global.css`.
*   **Animations**: GSAP logic is encapsulated in components or global scripts.
