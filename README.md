---

# IS310 Project

This is a web development project using React, Vite, Tailwind CSS, and several other tools and libraries to create a modern, responsive, and interactive web application.

## Table of Contents
- [Project Setup](#project-setup)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Usage](#usage)

## Project Setup

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/is310.git
   cd is310
   ```

2. **Install dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

## Scripts

This project uses several npm scripts for common tasks:

- **Development Server:**
  ```bash
  npm run dev
  ```
  Starts the Vite development server with hot module replacement for a smooth development experience.

- **Build:**
  ```bash
  npm run build
  ```
  Builds the project for production. The output is located in the `dist` directory.

- **Lint:**
  ```bash
  npm run lint
  ```
  Runs ESLint to analyze the code for potential errors and adherence to coding standards.

- **Preview:**
  ```bash
  npm run preview
  ```
  Serves the production build locally. Useful for testing the final output before deploying.

## Dependencies

This project relies on the following core dependencies:

- **[@fortawesome/fontawesome-free](https://github.com/FortAwesome/Font-Awesome)**: A popular icon library.
- **[framer-motion](https://www.framer.com/motion/)**: A library for animations and interactions in React.
- **[react](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[react-dom](https://reactjs.org/docs/react-dom.html)**: Provides DOM-specific methods that can be used at the top level of your app.

## Dev Dependencies

These tools are used during development:

- **[@eslint/js](https://eslint.org/)**: A tool for identifying and fixing problems in JavaScript code.
- **[@types/react](https://www.npmjs.com/package/@types/react)**: TypeScript definitions for React.
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)**: TypeScript definitions for React DOM.
- **[@vitejs/plugin-react](https://vitejs.dev/plugins/)**: Official Vite plugin to integrate React.
- **[autoprefixer](https://github.com/postcss/autoprefixer)**: A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.
- **[daisyui](https://daisyui.com/)**: A Tailwind CSS component library.
- **[eslint](https://eslint.org/)**: Linting utility for JavaScript and JSX code.
- **[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)**: ESLint plugin for React-specific linting rules.
- **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)**: ESLint plugin enforcing the rules of Hooks in React.
- **[eslint-plugin-react-refresh](https://github.com/facebook/react/tree/main/packages/react-refresh)**: Plugin to ensure react-refresh (HMR) runs smoothly.
- **[globals](https://www.npmjs.com/package/globals)**: An object listing the standard JavaScript globals.
- **[postcss](https://postcss.org/)**: A tool for transforming CSS with JavaScript plugins.
- **[tailwindcss](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs.
- **[vite](https://vitejs.dev/)**: A next-generation frontend tooling framework.

## Usage

After setting up the project, you can start the development server and begin working on your application. The project is pre-configured with Tailwind CSS for styling and DaisyUI for UI components, making it easy to build responsive and visually appealing UIs. 

### Development

To start the development server:

```bash
npm run dev
```

This will start a local server on [http://localhost:3000](http://localhost:3000) (by default) with hot module replacement enabled, allowing you to see changes instantly as you code.

### Building for Production

When you're ready to deploy your project:

```bash
npm run build
```

This will create an optimized build of your application in the `dist` directory, which can be deployed to any static hosting service.

### Linting

Ensure your code adheres to the project's coding standards by running:

```bash
npm run lint
```

This will analyze your code and highlight potential errors or stylistic issues.

---

