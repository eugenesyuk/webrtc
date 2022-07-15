import { Container, CssBaseline } from '@mui/material'
import { Header, Footer } from './'

export const Layout = ({ component, ...componentProps }) => {
    const ChildComponent = component

    return (
        <>
            <CssBaseline />
            <Header />
            <Container maxWidth={false} component="main">
                <ChildComponent {...componentProps} />
            </Container>
            <Footer />
        </>
    )
}
