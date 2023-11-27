
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/login/LoginPage'
import Header from './components/client/Header'
import Footer from './components/client/Footer'
import Profile from './pages/Profile'
import Layout from './components/client/Layout'
import ProductDetailwidthId from './pages/product/ProductDetailwidthId'
import Dashboard from './components/admin/Dashboard'
import Products from './pages/admin/Product'
import UpdateProduct from './pages/admin/UpdateProduct'
import Addproduct from './pages/admin/Addproduct'
import AddProductPage from './pages/admin/AddProductPage'
import EditProduct from './pages/admin/EditProduct'
function App() {

  return (<>
      <BrowserRouter>
        <Routes>
             <Route path='/' element={<Layout/>}>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/product/:id' element={<ProductDetailwidthId />} />
             </Route>
             <Route path='/profile' element={<Profile/>}/>
             <Route path='/login'  element={<LoginPage/>} />
             <Route path='/admin' element={<Dashboard />}>
                    <Route path='product' element={<Products />}/>
                    <Route path='product/add' element={<AddProductPage />}/>
                    <Route path='product/:id' element={<EditProduct  />}/>
                    
             </Route>
        </Routes>
      </BrowserRouter>
  </>

  )
}

export default App
