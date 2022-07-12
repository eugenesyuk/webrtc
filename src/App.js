import './App.scss'
import { peerConnection } from './Connection'
import { firebase, firestore } from './Firebase'

function App() {
    console.log({ firebase, firestore })
    console.log(peerConnection)

    return (
        <div className="App">
            <main className="App-container">Silence is golden</main>
        </div>
    )
}

export default App
