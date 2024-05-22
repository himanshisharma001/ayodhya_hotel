import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
// import '@/styles/globals.css';

const Location = () => {
  return (
    <>
    <div className="mt-3">
     <h3><b>Map</b></h3>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.4360211611!2d75.62574274340832!3d26.885421392086815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1714641071151!5m2!1sen!2sin" width="100%" height="450" className="map-box-dtls" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
    </>
  );
};

export default Location;
