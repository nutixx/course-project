import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Careers from "./components/Careers/Careers";
import About from "./components/About/About";
import Security from "./components/Security/Security";
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {

  return (
    <HashRouter basename={import.meta.env.VITE_BASE_URL}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </main>
      <Footer/>
    </HashRouter>
  )
}

export default App
