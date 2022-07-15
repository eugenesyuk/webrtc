import { Container, Typography } from '@mui/material'

export const Home = () => {
    return (
        <>
            <Container disableGutters maxWidth="sm" component="section" sx={{ pt: 8, pb: 6 }}>
                <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                    Welcome
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Quickly build an effective pricing table for your potential customers with this layout. It&aposs
                    built with default MUI components with little customization.
                </Typography>
            </Container>
        </>
    )
}
