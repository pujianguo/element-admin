module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用debugger

    'camelcase': 2, // 强制驼峰命名规则
    'guard-for-in': 'off', // 监视for in循环，防止出现不可预料的情况
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }] // 闭合标签
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
