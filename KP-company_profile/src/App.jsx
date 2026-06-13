import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import ServiceDetail from "./pages/ServiceDetail";
import PortfolioDetail from "./pages/PortfolioDetail";
import ScrollToTop from "./components/ScrollToTop";  

function App() {
  return (
    <Router>
      <ScrollToTop />  
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/service" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<PortfolioDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
