import type { Config } from 'tailwindcss';

/**
 * Design tokens derivados diretamente da logo oficial da MobilizaX
 * (amostragem de cor do arquivo logo_mobilizax.png):
 *   fundo   #000410 -> #04070F
 *   ciano   #00ADF9 / #00D8FF
 *   aqua    #14E9E1
 *   verde   #58E45A
 *   lima    #D4FC4C
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#04070F',
          800: '#070C18',
          700: '#0A1220',
          600: '#0F1A2C',
          500: '#16243A',
        },
        line: {
          DEFAULT: '#1B2B44',
          soft: '#132038',
        },
        paper: {
          DEFAULT: '#EDF3F9',
          // Contrastes medidos sobre os fundos da paleta (pior caso #0F1A2C):
          muted: '#94A9C2', // 7.23:1 — texto corrido secundario
          dim: '#7A8DA6', // 5.14:1 — rotulos e legendas; passa AA sem opacidade
        },
        brand: {
          blue: '#00ADF9',
          cyan: '#00D8FF',
          aqua: '#14E9E1',
          green: '#58E45A',
          lime: '#D4FC4C',
        },
        verdict: {
          true: '#58E45A',
          false: '#FF4D5E',
          unclear: '#FFB020',
          context: '#00ADF9',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Archivo', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.35rem, 4.9vw, 3.9rem)', { lineHeight: '1.02', letterSpacing: '-0.032em' }],
        'display-lg': ['clamp(2rem, 4.4vw, 3.25rem)', { lineHeight: '1.04', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.5rem, 2.8vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        eyebrow: ['0.72rem', { lineHeight: '1', letterSpacing: '0.22em' }],
      },
      maxWidth: {
        shell: '76rem',
        prose: '46rem',
      },
      borderRadius: {
        card: '1.125rem',
        field: '0.625rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0,173,249,0.18), 0 24px 60px -28px rgba(0,173,249,0.5)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -32px rgba(0,0,0,0.9)',
      },
      keyframes: {
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'chip-in': {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '60%': { opacity: '1', transform: 'scale(1.03)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'caret': { '0%, 49%': { opacity: '1' }, '50%, 100%': { opacity: '0' } },
        'scan': { from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(220%)' } },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.82)' },
        },
        // Waveform do audio capturado: barras curtas que sobem e descem
        wave: {
          '0%, 100%': { transform: 'scaleY(0.25)' },
          '50%': { transform: 'scaleY(1)' },
        },
        // Trilho de progresso das etapas de verificacao
        fill: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'rise-in': 'rise-in 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'chip-in': 'chip-in 0.42s cubic-bezier(0.22,1,0.36,1) both',
        caret: 'caret 1s step-end infinite',
        scan: 'scan 1.6s cubic-bezier(0.4,0,0.2,1) infinite',
        'pulse-dot': 'pulse-dot 1.4s ease-in-out infinite',
        wave: 'wave 1s ease-in-out infinite',
        fill: 'fill 1s linear both',
      },
    },
  },
  plugins: [],
};

export default config;
