module.exports = {
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2015,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    plugins: ["react", "react-hooks"],
    env: { browser: true },
}
