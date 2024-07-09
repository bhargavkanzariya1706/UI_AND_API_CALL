import React, { useState } from "react";
import { submitContactForm } from "../Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  });
  console.log("form Data :", formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (
      !formData.fname ||
      !formData.lname ||
      !formData.email ||
      !formData.phone ||
      !formData.budget ||
      !formData.description
    ) {
      toast.error("All fields are required", { position: "top-center" });
      return;
    }
    try {
      await submitContactForm(formData);
      toast.success("Message sent successfully", { position: "top-center" });
    } catch (error) {
      toast.error("Failed to send message", { position: "top-center" });
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="contact-header">
              <h1>Contact</h1>
            </div>
            <div className="col-md-6">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="fname"
                      placeholder="First Name"
                      value={formData.fname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      value={formData.lname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      name="budget"
                      placeholder="Budget"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="submit"
                      value="SUBMIT"
                      className="inptBtn"
                      name="Submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
