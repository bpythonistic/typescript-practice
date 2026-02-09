# TypeScript Practice

A personal sandbox and practice environment for mastering TypeScript concepts, modern web development patterns, and tooling. This project is built with **Vite** for fast development and uses **Pixi** for reproducible package management.

## 🛠 Tech Stack

- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Framework:** [React](https://react.dev/)
- **Package/Env Manager:** [Pixi](https://prefix.dev/)
- **Styling:** CSS / HTML

## 🚀 Getting Started

This project uses **Pixi** to manage dependencies and the environment, ensuring that you have the exact versions of Node and tools needed to run the project.

### Prerequisites

- [Pixi](https://prefix.dev/docs/pixi/overview) installed on your machine.
- *Alternatively: Node.js (v24+) if you prefer using standard npm/yarn.*

### Installation & Running (Recommended with Pixi)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bpythonistic/typescript-practice.git
   cd typescript-practice
   ```

2. **Install dependencies and setup environment:**
   Pixi handles the installation of Node.js and npm packages defined in `pixi.toml`.

   ```bash
   pixi install
   ```

3. **Start the development server:**

   ```bash
   pixi run serve-dev
   ```

### Installation & Running (Standard NPM)

If you do not have Pixi installed, you can use standard npm commands:

```bash
npm install
npm run dev
```

## 📂 Project Structure

The codebase follows a feature-based architecture to keep practice modules organized:

```text
├── app/          # Core application logic and entry points
├── features/     # Isolated modules for specific practice exercises/domains
├── dist/         # Auto-generated (Git-ignored) folder that contains JS files created by the TypeScript compiler
├── public/       # Static assets
├── pixi.toml     # Pixi environment configuration
├── tsconfig.json # TypeScript configuration
└── vite.config.ts# Vite build configuration
```

## 📝 Usage

- **Development:** The app runs in hot-module replacement (HMR) mode. Changes to files in `app/` or `features/` will instantly reflect in the browser.
- **Building:** Run `pixi run build` (or `npm run build`) to generate production-ready assets in the `dist/` folder.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
