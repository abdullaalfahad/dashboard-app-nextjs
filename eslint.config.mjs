// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  // Next.js & TypeScript configs (via compat)
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom rules
  {
    plugins: {
      prettier,
      next: nextPlugin,
    },
    rules: {
      "prettier/prettier": "error", // make Prettier errors show up in ESLint
    },
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];
