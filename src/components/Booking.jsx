import React, { useEffect } from 'react';
import BookingEmbed from './functions/BookingEmbed';
import JotformEmbed from 'react-jotform-embed';

const Booking = () => {
//   useEffect(() => {
//     // Load the Mailchimp script
//     const script = document.createElement('script');
//     script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
//     script.async = true;
//     script.onload = () => {
//       // Initialize Mailchimp form functionality
//       window.fnames = new Array();
//       window.ftypes = new Array();
//       window.fnames[0] = 'EMAIL';
//       window.ftypes[0] = 'email';
//       window.fnames[1] = 'FNAME';
//       window.ftypes[1] = 'text';
//       window.fnames[2] = 'LNAME';
//       window.ftypes[2] = 'text';
//       window.fnames[3] = 'MMERGE3';
//       window.ftypes[3] = 'date';
//       window.fnames[4] = 'MMERGE4';
//       window.ftypes[4] = 'text';
//       const $mcj = $.noConflict(true);
//     };
//     document.body.appendChild(script);

//     // Clean up script when the component unmounts
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);
    
    const url = 'https://form.jotform.com/242096678140157';
        
  return (
    <section>
      <div className="booking">
            <iframe
            id="JotFormIFrame-242096678140157"
            title="Book Me for a Show"
            style={{height: "100%", width: "100%"}}
            // allowtransparency="true"
            // allow="geolocation; microphone; camera; fullscreen"
            src="https://form.jotform.com/242096678140157"
            frameborder="0"
            // style="min-width:100%;max-width:100%;height:539px;border:none;"
            // scrolling="no"
            >
            </iframe>
        </div>
    </section>
  );
};

export default Booking;
