import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import TableMain from './pages/main/components/TableMain';
import Navbar from './pages/main/components/Navbar';
import PokemonList from './pages/main/components/PokemonList'; // Importa el componente de Pokémon

function App() {
  return (
    <BrowserRouter>
      <div className='main-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/main' element={<Main />} />
          <Route path='/table' element={<TableMain />} />
          <Route path='/pokemon-list' element={<PokemonList />} /> {/* Nueva ruta */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
