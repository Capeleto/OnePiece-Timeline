export default {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
  },
  extends: ["airbnb", "airbnb/hooks", "prettier", "prettier/react"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
