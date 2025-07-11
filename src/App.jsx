import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NavBar from './components/Navbar';
import Cart from './components/Cart';
import About from './components/About';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import OrdersContainer from './components/Orders/OrdersContainer';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext';

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Cart />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/foods" element={<ItemListContainer />} />
                    {/* <Route path="/foods/:category" element={<ItemListContainer />} /> */}
                    <Route path="/food/:id" element={<ItemDetailContainer />} />
                    <Route path="/orders" element={<OrdersContainer />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </CartContextProvider>
    );
}

export default App;
