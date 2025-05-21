export const theme = {
  colors: {
    primary: {
      dark: '#0f0f0f', // Almost black
      main: '#1a1a1a', // Very dark gray
      light: '#2c2c2c', // Dark gray
    },
    secondary: {
      dark: '#450a0a', // Very dark red
      main: '#7f1d1d', // Dark red
      light: '#b91c1c', // Bright blood red
    },
    accent: {
      dark: '#3b0764', // Very dark purple
      main: '#4c1d95', // Dark purple
      light: '#6d28d9', // Medium purple
    },
    background: {
      dark: '#090909', // Nearly black
      main: '#121212', // Very dark gray (main background)
      light: '#1e1e1e', // Slightly lighter dark
      paper: '#262626', // Card background
    },
    text: {
      primary: '#f5f5f5', // Almost white
      secondary: '#a3a3a3', // Medium gray
      disabled: '#6b7280', // Darker gray
      accent: '#dc2626', // Bright red for emphasis
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    xl: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(220, 38, 38, 0.5)',
    none: 'none',
  },
  typography: {
    fontFamily: {
      main: '"Creepster", "Nosifer", system-ui',
      body: '"Eater", "Creepy", system-ui',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    },
  },
  transitions: {
    quick: '150ms',
    default: '300ms',
    slow: '500ms',
  }
};