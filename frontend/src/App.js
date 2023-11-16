import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import banner_ethnic from './Components/Assets/banner_ethnic.jpg';



function App() {
  return (
    <div>
      <div>
        {/* <ShopContextProvider> */}
          <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/ethnic' element={<ShopCategory banner={banner_ethnic} category="ethnic"/>}/>
              <Route path='/indo-western' element={<ShopCategory category="indo-western"/>}/>
              <Route path='/handlooms' element={<ShopCategory category="handlooms"/>}/>
              <Route path="/product" element={<Product/>} >
                <Route path=":productId" element={<Product/>} />
              </Route>
              <Route path='/cart' element={<Cart/>} />             
              <Route path='/login' element={<LoginSignup/>} />             
            </Routes>
            <Footer/>
          </Router>
        {/* </ShopContextProvider> */}
       

      </div>
    
    </div>
  );
}

export default App;
