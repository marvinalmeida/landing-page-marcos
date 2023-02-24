import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from '../src/styles/global'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Artigos from './pages/artigos/Artigos'
import Contato from './pages/contato/Contato'
import Livro from './pages/livro/Livro'
import Login from './pages/login/Login'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="artigos" element={<Artigos />} />
        <Route path="livro/:id" element={<Livro />} />
        <Route path="contato" element={<Contato />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
)
