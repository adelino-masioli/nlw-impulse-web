module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", ],
    theme: {
        extend: {
            colors: {
                brand: {
                    300: '#996Dff',
                    500: '#8257E6',
                }
            },
            borderRadius: {
                md: '4px'
            }
        },
    },
    plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar'), ],
}