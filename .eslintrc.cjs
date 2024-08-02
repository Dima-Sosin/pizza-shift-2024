module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended"
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.js"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh", "simple-import-sort"],
    rules: {
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "react/prop-types": "off"
    },
    overrides: [
        {
            files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
            rules: {
                "simple-import-sort/exports": "error",
                "simple-import-sort/imports": [
                    "error",
                    {
                        "groups": [
                            ["^.+\\.?(css)$"],
                            ["^react", "^\\w"],
                            ["^@\\w"],
                            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                        ]
                    }
                ]
            }
        }
    ]
}
