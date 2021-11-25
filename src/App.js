import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  return (
<Router>
<Header/>
<Routes>
<Route path="/" exact element={<Home/>} />
<Route path="/about"  element={<About/>} />
<Route path="/contact"  element={<Contact/>} />

</Routes>
<Footer />
</Router>
  );
}

export default App;
