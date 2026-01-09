/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'sap-blue': '#0a6ed1',
                'sap-dark-blue': '#001d35',
                'sap-gold': '#f0ab00',
                'sap-bg-grey': '#f5f6f7',
                'sap-text': '#32363a',
            },
            fontFamily: {
                sans: ['Arial', 'Helvetica', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
