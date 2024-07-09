import React from "react";
import {
  BrowserRouter as Router,
  Route,
   Routes,
} from "react-router-dom";
import ContactForm from "./Components/Contact";
import Blogs from "./Components/BlogsSection";
import Services from "./Components/Services";
import AboutPage from "./Components/AboutPage";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import "./App.css";
import './css/bootstrap.min.css'
 function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <main className="main-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/service" element={<Services />} />
              <Route path="/aboutus" element={<AboutPage />} />
              <Route path="/contact" element={<ContactForm />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
