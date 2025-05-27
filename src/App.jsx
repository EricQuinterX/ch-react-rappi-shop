import NavBar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"

import data from './../data-foods.json'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
      <NavBar />
      <Main lista={data}/>
      <Footer />
    </>
  )
}

export default App
