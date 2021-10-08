const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            orange: colors.orange,
            yellow: colors.amber,
            purple: colors.purple,
        },
        extend: {},
    },
    variants: {
        extend: {
            maxHeight: ['hover', 'focus'],
        },
    },
    plugins: [],
}
