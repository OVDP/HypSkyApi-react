import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './pages/components/nav'
import Bits from './pages/bits'
import Index from './pages/index'
import Recipe from './pages/recipe'
import Minion from './pages/minion'
import Auction from './pages/auction'
import Bazaar from './pages/bazaar'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <main>
          <Navbar />
          <Routes>
            <Route path='/' element={<Index />}/>
            <Route path='/bits' element={<Bits/>}/>
            <Route path='/recipe' element={<Recipe/>}/>
            <Route path='/minion' element={<Minion/>}/>
            <Route path='/auction' element={<Auction/>}/>
            <Route path='/bazaar' element={<Bazaar/>}/>
          </Routes>
        </main>
      </BrowserRouter>
  </React.StrictMode>,
)
