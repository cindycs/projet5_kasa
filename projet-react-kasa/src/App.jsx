import { useState } from 'react'
import './App.scss'
import { Routes, Route } from "react-router-dom"
import Accueil from './Pages/accueil'
import Fiche from './Pages/fiche-logement'
import Apropos from './Pages/a-propos'
import Error from './Pages/404'
import './sass/main.scss';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/fiche-logement" element={<Fiche />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
