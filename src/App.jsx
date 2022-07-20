import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./components/ui/Navbar"
import { PokemonRouter } from "./router/PokemonRouter"

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <PokemonRouter />
    </BrowserRouter>
  )
}

export default App
