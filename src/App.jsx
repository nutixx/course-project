import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Careers from "./components/Careers/Careers";
import About from "./components/About/About";
import Security from "./components/Security/Security";
import Footer from "./components/Footer/Footer";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router basename={import.meta.env.VITE_BASE_URL}>
      <ScrollToTop/>
      <Routes>
        {/* Маршрути з хедером і футером */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/security" element={<Security />} />
                  {/* Якщо немає відповідного маршруту */}
                  <Route path="*" element={<Navigate to="/404" />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
        
        {/* Окремий маршрут для NotFound без хедера і футера */}
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;