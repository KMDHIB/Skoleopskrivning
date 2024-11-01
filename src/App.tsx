import logo from './assets/uvdata.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={logo} className="logo react" alt="UVdata" />
        </a>
      </div>
      <h1>Skoleindskrivning</h1>
      <p>Velkommen til skoleindskrivning</p>
      <p>Vi glæder os til at se dig</p>
      <p>Vi har brug for nogle oplysninger om dig</p>
      <p>Indtast venligst dit fulde navn</p>
      <p>Indtast venligst din fødselsdato</p>
      <p>Indtast venligst din adresse</p>
    </>
  )
}

export default App
