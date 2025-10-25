import React from "react";
import featureImage from "../../assets/mobileImage.png";
const FeatureSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#258AFF] justify-center items-center md:p-36 md:gap-12">
      <div className="w-full md:w-1/2 order-2 md:order-1 md:flex md:justify-center md:p-15 md:mt-10 md:items-center md:mb-[-50px] md:ml-[-150px]">
        <img src={featureImage} alt="" />
      </div>
      <div className="order-1 py-20 mt-20 text-white flex flex-col md:w-1/2 md:justify-center pt-5 md:p-16 text-start font-sans">
        <p className="text-sm uppercase tracking-widest font-semibold mb-4">
          DESIGN IS EVERYTHING
        </p>
        <h1 className="text-4xl md:text-4xl font-bold mb-6">
          Present your app <br /> features like this way.
        </h1>
        <p className="text-base md:text-lg max-w-xl opacity-90 md:mb-8">
          We designed and tested prototypes that helped identify pain points in
          the account creation process. Together, we shaped the new standard.
        </p>
        <button
          className="bg-white text-blue-600 font-bold py-3 px-8 mt-5 rounded-full shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 max-w-5/12"
          onClick={() => console.log("Get started clicked!")}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default FeatureSection;
