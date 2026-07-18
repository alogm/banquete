tailwind.config = {
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#F3E5AB',
                    dark: '#AA8C2C',
                },
                charcoal: {
                    DEFAULT: '#1A1A1A',
                    light: '#2A2A2A',
                    dark: '#0F0F0F'
                },
                cream: '#FDFBF7',
                /* Colores Fiesteros/Elegantes (Luces de noche) */
                party: {
                    purple: '#4C1D95', /* Púrpura profundo */
                    magenta: '#9D174D', /* Magenta elegante */
                },
                /* Colores para infantiles.html */
                baby: {
                    pink: '#FFE4E6', /* rose-100 */
                    pinkDark: '#E11D48', /* rose-600 */
                    blue: '#E0F2FE', /* sky-100 */
                    blueDark: '#0284C7' /* sky-600 */
                },
                /* colores para inflables */
                playful: {
                    blue: '#E0F2FE',
                    yellow: '#FEF3C7',
                    rose: '#FFE4E6'
                },
                /* Nuevos colores para la sección de Jardines */
                forest: {
                    DEFAULT: '#23372B', /* Verde bosque elegante */
                    light: '#3A5A46',
                    dark: '#121F18',
                },
                sage: {
                    DEFAULT: '#879784', /* Verde salvia pacífico */
                    light: '#E2EBE0',
                },
                /* Estilo de parrillada */
                fire: { DEFAULT:'#E11D48', dark: '#9F1239' }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        }
    }
}