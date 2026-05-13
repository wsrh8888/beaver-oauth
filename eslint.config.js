import antfu from "@antfu/eslint-config"

// 更多自定义配置可查阅仓库：https://github.com/antfu/eslint-config
export default antfu(
  {
    // 使用外部格式化程序格式化 css、html、markdown 等文件
    formatters: true,
    // 启用样式规则
    stylistic: {
      // 缩进级别
      indent: 2,
      // 引号风格 'single' | 'double'
      quotes: "double",
      // 是否启用分号
      semi: false
    },
    // 忽略文件
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.git/**",
      "pnpm-lock.yaml",
      "package-lock.json",
      "yarn.lock",
      "**/*.min.js",
      "**/*.d.ts",
      "public/**",
      "**/*.png",
      "**/*.jpg",
      "**/*.jpeg",
      "**/*.gif",
      "**/*.svg",
      "**/*.ico",
      "**/*.woff",
      "**/*.woff2",
      "**/*.ttf",
      "**/*.eot"
    ]
  },
  {
    // 对所有文件都生效的规则
    rules: {
     "antfu/if-newline": "off",
      "style/jsx-closing-tag-location": "off",
      "import/order": "off",
      "prefer-const": "error",
      "node/prefer-global/process": "off",
      "unused-imports/no-unused-vars": "off",
      "style/semi": "off",
      "style/indent": "off",
      "style/quote-props": "off",
      "style/brace-style": "off",
      'style/arrow-parens': 'as-needed', // 箭头函数的规范
      "style/indent-binary-ops": "off",
      "style/operator-linebreak": "off",
      "style/member-delimiter-style": "off",
      "no-var": "error",
      "no-undef": "off",
      "no-new": "off",
      "no-param-reassign": "error",
      "no-console": "off",
      "no-irregular-whitespace": "off",
      "unicorn/number-literal-case": "off",
      "ts/ban-ts-comment": "off",

      // vue
      "vue/block-order": ["error", { order: ["script", "template", "style"] }],
      "vue/attributes-order": "off",
      // ts
      "ts/no-use-before-define": "off",
      // node
      "node/prefer-global/process": "off",
      // style
      "style/comma-dangle": ["error", "never"],
      "style/brace-style": ["error", "1tbs"],
      // regexp
      "regexp/no-unused-capturing-group": "off",
      // other
      "no-console": "off",
      "no-debugger": "off",
      "symbol-description": "off",
      "antfu/if-newline": "off",
      "unicorn/no-instanceof-builtins": "off"
    }
  }
)
