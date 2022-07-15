import './App.scss'

import { ThemeProvider } from '@mui/material/styles'
import DefaultTheme from './DefaultTheme'

import { firebase, firestore } from './core/Firebase'
import { peerConnection } from './core/Connection'

import { Features, Home } from './components/pages'
import { Layout } from './components/layout'
import { Routes, Route } from 'react-router-dom'

function App() {
    console.log({ firebase, firestore })
    console.log(peerConnection)

    return (
        <ThemeProvider theme={DefaultTheme}>
            <Routes>
                <Route path="/" element={<Layout component={Home} />} />
                <Route path="/features" element={<Layout component={Features} />} />
                {/* <Layout component={Home} /> */}
            </Routes>
        </ThemeProvider>
    )
}

export default App
