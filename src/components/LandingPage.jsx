import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  console.log("TOKEN FROM LANDING PAGE: " + token);

  // Handle button navigation
  const handleButtonClick = () => {
    if (token) {
      navigate("/dashboard"); // if logged in → dashboard
    } else {
      navigate("/login"); // if not logged in → login
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center">
        <div className="flex-1">
          <motion.h1 
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            Linklytics Simplifies URL Shortening For Efficient Sharing.
          </motion.h1>
          <p className="text-slate-700 text-sm my-5">
            Linklytics streamlines the process of URL shortening, making sharing
            links effortless and efficient. With its user-friendly interface,
            Linklytics allows you to generate concise, easy-to-share URLs in
            seconds. Simplify your sharing experience with Linklytics today.
          </p>

          {/* Buttons */}
         <div className="flex justify-center items-center mt-6">
            {token ? (
              // Show Create Short Link button only if logged in
              <motion.button
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={handleButtonClick}
                className="border border-blue-600 w-40 text-blue-600 rounded-md py-2 shadow-right"
              >
                Create Short Link
              </motion.button>
            ) : (
              // Show Login button if not logged in
              <motion.button 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={handleButtonClick}
                className="bg-gradient-to-r from-blue-500 to-purple-600 w-40 text-white rounded-md py-2 shadow-custom"
              >
                Login
              </motion.button>
            )}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center w-full">
          <motion.img 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover rounded-md"
            src="/images/img2.png" 
            alt="image.png" 
          />
        </div>
      </div>

      {/* Trusted Companies */}
      <div className="sm:pt-12 pt-7">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[80%] md:w-[90%] sm:w-[95%] mx-auto text-xl text-center"
        >
          <p className="mb-6">
            Trusted by individuals and teams at the world best companies:
          </p>
         <div className="flex flex-wrap justify-center gap-6 mb-6">
            <img src="/images/tata.png" alt="TCS" className="h-10 object-contain" />
            <img src="/images/accenture.png" alt="Accenture" className="h-10 object-contain" />
            <img src="/images/wipro.webp" alt="Wipro" className="h-10 object-contain" />
            <img src="/images/hcltech.webp" alt="HCLTech" className="h-10 object-contain" />
            <img src="/images/ibm.webp" alt="IBM" className="h-10 object-contain" />
            <img src="/images/techmahindra.png" alt="TechMahindra" className="h-10 object-contain" />
            <img src="/images/infosys.webp" alt="Infosys" className="h-10 object-contain" />
            <img src="/images/amazon.webp" alt="Amazon" className="h-10 object-contain" />
            <img src="/images/microsoft.webp" alt="Microsoft" className="h-10 object-contain" />
            <img src="/images/linkedin.webp" alt="LinkedIn" className="h-10 object-contain" />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <img src="/images/twitter.png" alt="Twitter" className="h-10 object-contain" />
            <img src="/images/meta.webp" alt="Meta" className="h-10 object-contain" />
            <img src="/images/youtube.png" alt="YouTube" className="h-10 object-contain" />
            <img src="/images/google.png" alt="Google" className="h-10 object-contain" />
            <img src="/images/oracle.webp" alt="Oracle" className="h-10 object-contain" />
            <img src="/images/adobe.jpg" alt="Adobe" className="h-10 object-contain" />
            <img src="/images/atlassian.png" alt="Atlassian" className="h-10 object-contain" />
            <img src="/images/cisco.png" alt="Cisco" className="h-10 object-contain" />
            <img src="/images/apple.png" alt="Apple" className="h-10 object-contain" />
            <img src="/images/dell.webp" alt="Dell" className="h-10 object-contain" />
            <img src="/images/hp.png" alt="HP" className="h-10 object-contain" />
          </div>

        </motion.div>

        {/* Features Section */}
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Simple URL Shortening"
            desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
          />
          <Card
            title="Powerful Analytics"
            desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
          />
          <Card
            title="Enhanced Security"
            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
          />
          <Card
            title="Fast and Reliable"
            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;