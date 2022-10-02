import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ScrollToTop from "react-scroll-to-top";

import Header from "./header/Header";
import HomePage from "./homepage/HomePage";
import AboutUs from "./About Us/AboutUs";
import ContactUs from "./contactUs/ContactUs";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Router>
        <Header />
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
