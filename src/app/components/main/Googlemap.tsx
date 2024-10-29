import React from "react";

const GoogleMap = () => {

  
  return (
    <div className="w-full pt-16">
      <iframe
        className=" w-screen h-[250px] md:h-[400px] lg:h-[500px] shadow-input  shadow-white    "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.3949542197706!2d-73.57706742257038!3d45.60270652418517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91f9d03bcf79f%3A0x9dfab9934c41b7d3!2sKS%20TECHNOLOGIE%20Inc!5e0!3m2!1sen!2sma!4v1718284316530!5m2!1sen!2sma"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;