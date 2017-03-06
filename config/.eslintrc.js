module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:flowtype/recommended"],
  "installedESLint": true,
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": trueeslint-plugin-flowtype
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "flowtype"
  ],
  "rules": {
    // Start JS
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-unsafe-negation": "error",
    "block-scoped-var": "error",
    "curly": "error",
    "default-case": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eqeqeq": ["error", "always", {"null": "ignore"}],
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    // "no-magic-numbers": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-octal-escape": "error",
    "no-octal": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-with": "error",
    "radix": "error",
    "require-await": "error",
    "yoda": "error",
    "no-catch-shadow": "error",
    "no-label-var": "error",
    "no-shadow-restricted-names": "error",
    "no-shadow": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-use-before-define": "error",
    "array-bracket-spacing": ["error", "always", { "objectsInArrays": false }],
    "block-spacing": "error",
    "brace-style": "error",
    "camelcase": "error",
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "func-call-spacing": ["error", "never"],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }
    ],
    "keyword-spacing": ["error", { "before": true }],
    "linebreak-style": ["error", "unix"],
    "max-len": ["error", {
        code: 80,
        ignoreTemplateLiterals: true
    }],
    "multiline-ternary": ["error", "never"],
    "new-cap": ["error", { "capIsNewExceptions": ["List", "Map"] }],
    "new-parens": "error",
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-multiple-empty-lines": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "error",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-curly-newline": [
        "error",
        "always"
    ],
    "object-property-newline": ["error"],
    "object-curly-spacing": ["error", "always", { "arraysInObjects": false }],
    "operator-linebreak": ["error", "after"],
    "quote-props": ["error", "consistent-as-needed"],
    "semi-spacing": "error",
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-template": "error",
    "rest-spread-spacing": ["error", "never"],
    "symbol-description": "error",
    "template-curly-spacing": "error",
    // End JS

    // Start React
    "react/prop-types": ["error", { "skipUndeclared": true }],
    "react/no-children-prop": "error",
    "react/no-array-index-key": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-multi-comp": ["error", { "ignoreStateless": true }],
    "react/no-set-state": "error",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    // This is set to warning as it alerts
    // false positives.
    "react/no-unused-prop-types": "warn",
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-stateless-function": "error",
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }],
    "react/style-prop-object": "error",
    // End React

    // Start JSX
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/jsx-curly-spacing": ["error", "never", {"allowMultiline": false}],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "react/jsx-handler-names": ["error", {
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on",
    }],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-key": "error",
    "react/jsx-max-props-per-line": ["error", { "maximum": 1 }],
    "react/jsx-no-bind": ["error", {
      "ignoreRefs": true,
      "allowArrowFunctions": false,
      "allowBind": false
    }],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-space-before-closing": ["error", "never"],
    "react/jsx-wrap-multilines": "error",
    // End JSX
  }
};
