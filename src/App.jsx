import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Pokedex } from './pages/Pokedex'
import { PokemonDetail } from './pages/PokemonDetail'
import { Page404 } from './pages/Page404'
import { PrivateRoutes } from './components/auth/PrivateRoutes'
import { useEffect, useState } from 'react'
import Loader from './pages/Loader'


function App() {
  
    //Loader
    const [loaderConfi, setLoaderConfi] = useState(true);
    // efecto para confi loader
    useEffect(() => {
      setTimeout(() => {
        setLoaderConfi(false);
      }, 1000);
    }, []);

  return (
    <>
      {loaderConfi && <Loader/>}
    <Routes>
      
      <Route path='/' element={<Home />} />

      <Route element={<PrivateRoutes />}>
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/:pokemonId' element={<PokemonDetail />} />
      </Route>

      <Route path='*' element={<Page404 />} />
    </Routes>
    </>
  )
}

export default App
