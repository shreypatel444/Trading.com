import React, { useState } from "react";
import "../style/Contact.css";
import { toast } from "react-toastify";

export default function Contact() {
  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const changed = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!data.username.trim()) {
      toast.error("Full Name is required");
      return false;
    }
    if (!data.email.trim()) {
      toast.error("Email Address is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Invalid Email Address");
      return false;
    }
    if (!data.message.trim()) {
      toast.error("Message is required");
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    // Simulate form submission success
    toast.success("Message sent successfully!");
    setData({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact_us">
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-cell-block wk-desk-5 wk-ipadp-4 wk-tab-12 wk-mobile-12">
            <img
              className="mainImg"
              src="https://i.pinimg.com/736x/c1/65/be/c165be894772f75383be93c07e3a35ff.jpg"
              alt="Contact Us"
            />
          </div>
          <div className="responsive-cell-block wk-desk-7 wk-ipadp-8 wk-tab-12 wk-mobile-12">
            <p className="text-blk heading">Contact Me</p>
            <form className="formTable" id="izml" onSubmit={handleSubmit}>
              <div className="firstRow">
                <div className="fullNameArea">
                  <p className="cardHead">Full Name</p>
                  <input
                    className="fullName"
                    id="fullName"
                    name="username"
                    type="text"
                    value={data.username}
                    onChange={changed}
                  />
                </div>
                <div className="emailArea">
                  <p className="cardHead">Email Address</p>
                  <input
                    className="email"
                    id="email"
                    name="email"
                    type="text"
                    value={data.email}
                    onChange={changed}
                  />
                </div>
              </div>
              <div className="messageArea">
                <p className="cardHead">Message</p>
                <textarea
                  className="message"
                  cols="30"
                  id="message"
                  name="message"
                  rows="10"
                  value={data.message}
                  onChange={changed}
                ></textarea>
              </div>
              <button className="submit" type="submit" id="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
