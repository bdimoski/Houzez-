import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./About Us/AboutUs";
import ContactUs from "./contactUs/ContactUs";
import Footer from "./Footer/Footer";


import HomePage from "./homepage/HomePage";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        < Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
