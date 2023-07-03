import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Index from './Project/Index';
import Category from './Project/Category';
import SingleProduct from './Project/SingleProduct';
import CheckOut from './Project/CheckOut';
import Cart from './Project/Cart';
import Blog from './Project/Blog';
import SingleBlog from './Project/SingleBlog';
import Tracking from './Project/Tracking';
import Elements from './Project/Elements';
import Contact from './Project/Contact';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index path='/' element={<Index/>} />
                    <Route path='/Category' element={<Category/>} />
                    <Route path='/SingleProduct' element={<SingleProduct/>} />
                    <Route path='/CheckOut' element={<CheckOut/>} />
                    <Route path='/Cart' element={<Cart/>} />
                    <Route path='/Blog' element={<Blog/>} />
                    <Route path='/SingleBlog' element={<SingleBlog/>} />
                    <Route path='/Tracking' element={<Tracking/>} />
                    <Route path='/Elements' element={<Elements/>} />
                    <Route path='/Contact' element={<Contact/>} />
                </Route>
            </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
