module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {
    colors: {
      primario: '#3B82F6',
      secundario: '#1E40AF',
      fondo: '#F4F6FA',
      card: '#FFFFFF',
      borde: '#E5E7EB',
      texto: '#1F2937',
      'texto-suave': '#6B7280',
      error: '#EF4444',
      exito: '#10B981',
      fondo_estatico:'#d9eaef',
    },

    keyframes: {
      softpulse: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.5' },
      },
      cloudpulse: {
        '0%, 100%': {
          transform: 'scale(1)',
          opacity: '0.6'
        },
        '50%': {
          transform: 'scale(1.03)',
          opacity: '1'
        },
      },
    },
    animation: {
      softpulse: 'softpulse 4s ease-in-out infinite',
      cloudpulse: 'cloudpulse 4s ease-in-out infinite',
    },

  } },
  plugins: [],
  
};
  
