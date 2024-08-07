module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		'react/jsx-no-target-blank': 'off',

		// 'react/jsx-indent': ['error', 2],
		// 'react/jsx-indent-props': ['error', 2],
		'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
		'no-multi-spaces': 'warn',
		/*     "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/no-contradicting-classname": "error", */
		'no-unused-vars': 'off',
		'react/prop-types': 'off',
		'no-undef': 'off',
		'no-prototype-builtins': 'off',
		'no-useless-constructor': 'off',
	},
};
