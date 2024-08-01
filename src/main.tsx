import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/register_page/RegisterPage'
import BackgroundLayer from './layers/background_layer/BackgroundLayer'
import LoginPage from './pages/login_page/LoginPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BackgroundLayer/>}>
          <Route index element={<LoginPage/>}/>
          <Route path='register' element={<RegisterPage/>}/>
          <Route path='*' element={<LoginPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
