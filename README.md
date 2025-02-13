# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Setup the development environment

### Step 1

Create a folder `core-ui` in the `src` folder.

### Step 2

Let's copy the files from [@abhisekdutta507/react-core-web-element](https://github.com/abhisekdutta507/react-core-web-element/tree/main/src) into the `core-ui` folder.

### Step 3

Modify the `App.tsx` file. Normally it imports the `CoreWebElement` from `@abhisek507/react-core-web-element`.

We need to replace that with,

```tsx
// older
import { CoreWebElement } from '@abhisek507/react-core-web-element';

// newer
import { CoreWebElement } from './core-ui';
```

## Run the application

Make sure you have [node.js](https://nodejs.org/en) installed in your system.

Install the dependencies,

```sh
npm install
```

Then from command

```sh
npm run dev
```
