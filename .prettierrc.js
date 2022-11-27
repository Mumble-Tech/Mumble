module.exports = {
        printWidth: 80,
        trailingComma: 'all',
        tabWidth: 4,
        semi: true,
        singleQuote: true,
        endOfLine: 'auto',
        singleQuote: true,
        importOrder: ['___', '__', '<THIRD_PARTY_MODULES>', '^[./]'],
        importOrderSortSpecifiers: true,
        plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
};