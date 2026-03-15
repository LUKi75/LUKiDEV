import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import { stylistic } from "@stylistic/eslint-plugin";

export default defineConfig([
  stylistic.configs.recommended,
  {
    files: ["**/*.js"],
    plugins: { js, stylistic },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/": ["error"]
    }
  }
]);
