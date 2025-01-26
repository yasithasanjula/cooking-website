import React, { useState } from "react";
import "../styles/ContactFormSection.css"; // Import the CSS file

function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle form submission,
    // such as sending the data to a server using fetch or axios.
    console.log(formData); // For now, log the form data to the console
  };

  return (
    <section className="contact-form">
      <div className="container">
        <h2>At Your Service</h2>
        <p>Tel: 123-456-7890 | Email: grand39cooking@gmail.com</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}

export default ContactFormSection;
