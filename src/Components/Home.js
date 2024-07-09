import React from "react";
import Blogs from "./BlogsSection";
import Services from "./Services";
import AboutPage from "./AboutPage";
import ContactForm from "./Contact";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div>
       <Services />
      <AboutPage />
      <Blogs />
      <ContactForm />
     </div>
  );
}

export default Home;
