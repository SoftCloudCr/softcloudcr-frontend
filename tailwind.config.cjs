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
      primario_2: '#7DA0CA',       // Botones, navbar
      secundario_2: '#1E40AF',     // Sidebar, hovers
      acento_2: '#60A5FA',         // Íconos, detalles
      fondo_2: '#F9FAFB',          // Fondo general del sistema
      tarjeta: '#FFFFFF',        // Formularios, cards
      borde_2: '#E5E7EB',          // Separadores
      texto_2: '#1F2937',          // Texto principal
      'texto-suave': '#6B7280',  // Subtítulos, placeholder
      error_2: '#EF4444',          // Errores
      exito_2: '#10B981',          // Confirmación, verde
      warning: '#F59E0B'         // Alertas
    },

    keyframes: {
      tittlepulse: {
        '0%, 100%': {
           opacity: '0.7',
            transform: 'scale(1)'
           },
        '50%': { 
          opacity: '1',
          transform: 'scale(1.03)' 
        },
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
      notificacionpulse: {
        '0%, 100%': {
          transform: 'scale(1)',
          opacity: '0.9',
          
        },
        '50%': {
          transform: 'scale(1.03)',
          opacity: '1'
        },
      },
      campanapulse: {
        '0%, 100%': {
          
          transform: 'rotate(10deg)',
        },
        '50%': {
          transform: 'rotate(-10deg)',
        
        },
      },
    },
    animation: {
      tittlepulse: 'tittlepulse 4s ease-in-out 3',
      cloudpulse: 'cloudpulse 4s ease-in-out infinite',
      notificacionpulse: 'notificacionpulse 4s ease-in-out infinite',
      campanapulse: 'campanapulse 0.5s infinite'
    },

  } },
  plugins: [],
  
};
  
