import { createTheme } from '@mui/material'

const DefaultTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3399ff',
            contrastText: '#fff'
        },
        background: {
            paper: '#0a1929',
            default: '#001e3c'
        },
        grey: {
            700: '#3e5060'
        },
        text: {
            primary: '#fff'
        }
    },
    typography: {
        h5: {
            color: '#66b2ff'
        },
        button: {
            textTransform: 'initial'
        }
    },
    shape: {
        borderRadius: '8px'
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
                textTransform: 'none'
            },
            styleOverrides: {
                root: {
                    ':hover': {
                        color: '#99ccf3'
                    }
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true
            }
        }
    }
})

export default DefaultTheme
