import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

/**
 * Base config for TypeScript/JavaScript with Prettier and import hygiene.
 * Consumers (apps/packages) will create their own eslint.config.js:
 *   import { node } from "@pharmacy/eslint-config";
 *   export default node();
 */
function base(overrides = {}) {
  return tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
      name: "pharmacy/base",
      languageOptions: {
        ecmaVersion: 2022,
        sourceType: "module"
      },
      plugins: {
        import: importPlugin,
        "unused-imports": unusedImports
      },
      rules: {
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-debugger": "warn",
        "import/order": [
          "warn",
          {
            "alphabetize": { "order": "asc", "caseInsensitive": true },
            "newlines-between": "always",
            "groups": [["builtin", "external"], ["internal"], ["parent", "sibling", "index"]]
          }
        ],
        "unused-imports/no-unused-imports": "warn",
        "unused-imports/no-unused-vars": [
          "warn",
          { "vars": "all", "varsIgnorePattern": "^_", "argsIgnorePattern": "^_", "ignoreRestSiblings": true }
        ]
      }
    },
    // Keep Prettier last to disable stylistic rules
    prettier,
    overrides
  );
}

function node() {
  return base({
    name: "pharmacy/node",
    languageOptions: { globals: globals.node }
  });
}

function web() {
  return base({
    name: "pharmacy/web",
    languageOptions: { globals: { ...globals.browser, ...globals.es2021 } }
  });
}

export { base, node, web };
export default base;
