import React from "react";
import ContactStyle from "./ContactStyle.css";
import PopupPage from "../PopupPage/PopupHtml";
import ContactForm from "./ContactForm";
export default function ContactPage() {
  return (
    <section id="ContactPage">
      <div className="ContactPageParent">
        <h1>Contact Us !</h1>
        <div className="ContactPageContent">
          <div className="ContactPageMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31227.170603838313!2d79.79352595118786!3d11.947038681443077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361643c3fdaeb%3A0x59aee3a2e99b9b4!2sThiru&#39;s%20IAS%20Academy!5e0!3m2!1sen!2sin!4v1660628096741!5m2!1sen!2sin"
              style={{}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="ContactForm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
