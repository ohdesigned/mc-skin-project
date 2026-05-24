/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Retro pixel-art palette inspired by 1985 Game Creator Pro
        bg: {
          night: '#2A2138',
          deep: '#1B1424',
          desk: '#E9D6B4',
          desk2: '#D9BF8E',
        },
        ink: {
          DEFAULT: '#2A2138',
          soft: '#4A3A5A',
        },
        accent: {
          red: '#D54B4B',
          redDark: '#A82F38',
          yellow: '#F5C04A',
          yellowDark: '#C98E20',
          orange: '#E68E2E',
          cream: '#F7E6CF',
          brown: '#B07B47',
          brownDark: '#7A4F2A',
          teal: '#3FB6A8',
          mint: '#A6E3C8',
          purple: '#7E4FB8',
        },
        ui: {
          window: '#F7E6CF',
          windowAlt: '#E9D6B4',
          titlebar: '#2A2138',
          shadow: '#1B1424',
          line: '#2A2138',
          highlight: '#FFFBEA',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        body: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        pixel: '4px 4px 0 0 #2A2138',
        'pixel-sm': '2px 2px 0 0 #2A2138',
        'pixel-lg': '6px 6px 0 0 #2A2138',
        inset: 'inset 2px 2px 0 0 #1B1424, inset -2px -2px 0 0 #FFFBEA',
      },
      animation: {
        'blink': 'blink 1s steps(2) infinite',
        'bob': 'bob 2.4s ease-in-out infinite',
        'pop-in': 'popIn .35s cubic-bezier(.2,1.4,.4,1) both',
        'tape': 'tape 1.6s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        bob: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-4px)' } },
        popIn: { '0%': { transform: 'scale(.6)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
        tape: { '0%': { backgroundPositionX: '0' }, '100%': { backgroundPositionX: '16px' } },
        scanline: { '0%': { backgroundPositionY: '0' }, '100%': { backgroundPositionY: '100%' } },
      },
    },
  },
  plugins: [],
}
