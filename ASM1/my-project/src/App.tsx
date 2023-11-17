
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/elements/Header'
import Footer from './components/elements/Footer'
import Profile from './pages/Profile'
import Layout from './components/elements/Layout'
function App() {

  return (<>
      <BrowserRouter>
        <Routes>
             <Route path='/' element={<Layout/>}>
                  <Route path='/' element={<HomePage/>}/>
             </Route>
             <Route path='/profile' element={<Profile/>}/>
             <Route path='/login'  element={<LoginPage/>} />
           
        </Routes>
      </BrowserRouter>
  </>

  )
}

export default App
