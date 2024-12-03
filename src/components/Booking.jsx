/* src/BookingWidget.js
import React, { useEffect } from 'react';

const Booking = () => {
  useEffect(() => {
    // Dynamically load the Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []); // Empty dependency array to run this only once on component mount

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h2>Book a Consultation</h2>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/adityashrm500"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </div>
  );
};

export default Booking; */
