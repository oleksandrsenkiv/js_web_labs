import Navigation from "./components/Navigation/Navigation";
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import Catalog from "./components/Pages/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import ItemPage from "./components/Pages/ItemPage/ItemPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
              <Route path="/" element = {<Home/>} />
              <Route path="/catalog" element ={<Catalog/>} />
              <Route path="/itempage/:id" element={<ItemPage/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
