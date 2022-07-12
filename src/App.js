import './App.scss'

import { ThemeProvider } from '@mui/material/styles'
import DefaultTheme from './DefaultTheme'

import { firebase, firestore } from './core/Firebase'
import { peerConnection } from './core/Connection'

import Home from './components/Home'

function App() {
    console.log({ firebase, firestore })
    console.log(peerConnection)

    return (
        <ThemeProvider theme={DefaultTheme}>
            <Home />
        </ThemeProvider>
    )
}

export default App
