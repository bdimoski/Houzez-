import { BrowserRouter as Router } from "react-router-dom";
import ContactUs from "./contactUs/ContactUs";

import Header from "./header/Header";
import HomePage from "./homepage/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
      <HomePage />
      <ContactUs />
    </div>
  );
}

export default App;
