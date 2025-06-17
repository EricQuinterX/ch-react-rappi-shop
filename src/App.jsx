import NavBar from "./components/Navbar"
import About from "./components/About"
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer"

import { BrowserRouter, Routes, Route } from 'react-router';

// import data from './../data-foods.json'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/foods" element={<ItemListContainer />} />
          <Route path="/food/:id" element={<ItemDetailContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
