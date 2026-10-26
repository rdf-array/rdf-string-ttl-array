module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname, // this is the reason this is a .js file
        project: ['./tsconfig.eslint.json'],
    },
    extends: [
        '@rubensworks'
    ],
    rules: {
        'no-control-regex': 'off',
        'no-implicit-coercion': 'off',
        // rdf-array: comments marked `rdf-array:` start lowercase
        'capitalized-comments': [ 'error', 'always', { ignoreConsecutiveComments: true, ignorePattern: 'rdf-array' }]
    }
};
