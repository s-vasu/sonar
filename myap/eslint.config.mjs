import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: typescriptEslintParser,
      globals: {
        React: "readonly",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      // React-specific rules
      "react/react-in-jsx-scope": "off", // Not needed for React 17+
      "react/prop-types": "off", // Disable prop-types checking
      // Other rules
      "import/no-unresolved": "error",
      "jsx-a11y/anchor-is-valid": "warn",
    },
  },
];
