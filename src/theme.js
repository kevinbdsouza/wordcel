import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7C5CFC' },
    secondary: { main: '#00D0B6' },
    background: { default: '#0B0F14', paper: '#11161C' },
    divider: 'rgba(148,163,184,0.12)',
    text: { primary: '#E6EDF3', secondary: '#9FB0C3' },
    success: { main: '#16A34A' },
    warning: { main: '#F59E0B' },
    error: { main: '#EF4444' },
    info: { main: '#38BDF8' },
    action: {
      hoverOpacity: 0.08,
      selectedOpacity: 0.12,
      focusOpacity: 0.12,
      disabledOpacity: 0.38,
      activatedOpacity: 0.12
    }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: [
      'Inter',
      'SF Pro Text',
      'system-ui',
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: 0.3 }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': { height: '100%' },
        body: {
          backgroundImage:
            'radial-gradient(1000px 600px at 0% 0%, rgba(124,92,252,0.08), transparent 40%), radial-gradient(800px 500px at 100% 100%, rgba(0,208,182,0.08), transparent 40%)',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        },
        '*::-webkit-scrollbar': { width: 10, height: 10 },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(148,163,184,0.35)',
          borderRadius: 8,
          border: '2px solid transparent',
          backgroundClip: 'content-box'
        },
        '*::-webkit-scrollbar-thumb:hover': { backgroundColor: 'rgba(148,163,184,0.55)' }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: 'rgba(17,22,28,0.9)',
          border: '1px solid rgba(148,163,184,0.16)',
          boxShadow: '0 18px 60px rgba(2,6,12,0.5)',
          backdropFilter: 'saturate(140%) blur(8px)'
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(2,6,12,0.55)',
          backdropFilter: 'blur(4px)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(17,22,28,0.86)',
          backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))',
          border: '1px solid rgba(148,163,184,0.14)',
          boxShadow: '0 10px 30px rgba(2,6,12,0.35)',
          backdropFilter: 'saturate(140%) blur(8px)'
        }
      }
    },
    MuiButton: {
      defaultProps: { size: 'medium' },
      styleOverrides: {
        root: { borderRadius: 10, fontWeight: 600, paddingInline: 14 },
        containedPrimary: { boxShadow: '0 6px 20px -6px rgba(124,92,252,0.45)' },
        outlined: { borderColor: 'rgba(148,163,184,0.3)' }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': { borderColor: 'rgba(148,163,184,0.28)' },
          '&:hover fieldset': { borderColor: 'rgba(230,237,243,0.5)' },
          '&.Mui-focused fieldset': { borderColor: '#7C5CFC' },
          backgroundColor: 'rgba(255,255,255,0.02)'
        },
        input: { paddingBlock: 12 }
      }
    },
    MuiSelect: { styleOverrides: { select: { paddingBlock: 10 } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 8, height: 26 } } },
    MuiTabs: { styleOverrides: { indicator: { height: 3, borderRadius: 3, backgroundColor: '#7C5CFC' } } },
    MuiTab: { styleOverrides: { root: { textTransform: 'none', fontWeight: 600, minHeight: 42 } } },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(15,23,42,0.96)',
          border: '1px solid rgba(148,163,184,0.18)',
          borderRadius: 10,
          boxShadow: '0 10px 30px rgba(2,6,12,0.35)'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.Mui-selected': { backgroundColor: 'rgba(124,92,252,0.12)' }
        }
      }
    },
    MuiDivider: { styleOverrides: { root: { borderColor: 'rgba(148,163,184,0.12)' } } }
  }
});

export default darkTheme;


