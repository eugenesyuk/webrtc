import { AppBar, Toolbar, Typography, Link, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { AppName } from '../../core/Globals'

export const Header = () => {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Link href="/" variant="h6" color="inherit" noWrap sx={{ mr: 'auto' }}>
                    {AppName}
                </Link>
                <nav>
                    <Link href="/features" variant="button" color="text.primary" sx={{ my: 1, mx: 1.5 }}>
                        Features
                    </Link>
                    <Link href="/enterprise" variant="button" color="text.primary" sx={{ my: 1, mx: 1.5 }}>
                        Enterprise
                    </Link>
                    <Link href="/support" variant="button" color="text.primary" sx={{ my: 1, mx: 1.5 }}>
                        Support
                    </Link>
                </nav>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}
