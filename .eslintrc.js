module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"indent": [
			2,
			"tab"
		],
		"quotes": [
			2,
			"double"
		],
		"linebreak-style": [
			2,
			"unix"
		],
		"semi": [
			2,
			"always"
		]
	}
};
