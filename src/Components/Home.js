import React from "react";
import Blogs from "./BlogsSection";
import Services from "./Services";
import AboutPage from "./AboutPage";
import ContactForm from "./Contact";
 
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
