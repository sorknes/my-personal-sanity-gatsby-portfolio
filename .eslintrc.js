module.exports = {
    extends: ["standard", "standard-react"],
    parser: "babel-eslint",
    rules: {
        "react/prop-types": 0,
        "react/prop-types": 0,
        "object-curly-spacing": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        quotes: [2, "double", "avoid-escape"],
        semi: ["error", "always"],
        indent: ["error", 4],
        "react/jsx-indent": [4, "tab"],
        "react/jsx-indent-props": [4, "tab"],
        "jsx-quotes": ["error", "prefer-double"],
    },
    settings: {
        react: {
            pragma: "React",
            version: "16.8.6",
        },
    },
};
