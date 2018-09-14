module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "max-len": [
            2,
            80,
            2
        ],
        "eqeqeq": "off",
        "arrow-body-style": "off",
        "class-methods-use-this": 0,
        "prefer-default-export": "off",
        "import/no-named-as-default": "off",
        "import/no-extraneous-dependencies": "off",
        "one-var": 0,
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "one-var-declaration-per-line": 0,
        "new-cap": 0,
        "consistent-return": 0,
        "no-param-reassign": 0,
        "comma-dangle": 0,
        "curly": [
        "error",
        "multi-line"
        ],
        "array-callback-return": 0,
        "import/no-unresolved": [
            2,
            {
            "commonjs": true
            }
        ],
        "no-shadow": [
            "off",
            {
            "allow": [
                "req",
                "res",
                "err"
            ]
        }
        ]
    }
};