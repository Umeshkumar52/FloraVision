import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import More from './pages/More'
import Plants from './pages/Plants'
import Contact from './pages/Contact'
function App() {


  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/> 
        <Route path='/more' element={<More/>}/>
        <Route path='/contact' element={<Contact/>}/>
         <Route path='/plants' element={<Plants/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
