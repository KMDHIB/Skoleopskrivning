import logo from './assets/uvdata.svg'
import './App.scss'
import CanvasDraw from './CanvasDraw'

function App() {

  return (
    <>
      <div>
        <a href="https://uvdata.dk" target="_blank">
          <img src={logo} className="logo react" alt="UVdata" />
        </a>
      </div>
      <h1>Skoleopskrivning</h1>
      <p>Velkommen til skoleopskrivning</p>
      <p>Her kan du opskrive dig på UHAskole</p>
      <CanvasDraw />
      <p>Vi glæder os til at se dig</p>
    </>
  )
}

export default App
