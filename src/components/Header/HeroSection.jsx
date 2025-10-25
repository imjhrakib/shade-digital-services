import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you for subscribing!", {
        position: "top-center",
        autoClose: 2000,
      });
      setShowBtn(true);
    }, 1000);
  };
  return (
    <section className="bg-[#e8f0f8] text-center py-30 px-4">
      <p className="uppercase tracking-wide text-sm font-semibold text-gray-600 mb-5">
        Present your service
      </p>

      <h1 className="text-4xl md:text-7xl font-bold mt-3 mb-5 text-[#1f1f1f]">
        Make landing page <br /> fast and easily.
      </h1>

      <p className="text-[#666] mt-5 text-xl max-w-xl mx-auto">
        Create custom landing pages with Shades that convert <br /> more
        visitors than any website—no coding required.
      </p>

      <div className="my-4">
        {showBtn ? (
          <div className="bg-[#dddddd] w-4/12 mx-auto p-5 rounded-sm">
            Thank you! Your submission has been received!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex justify-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-3 rounded-md border border-gray-300 w-64 focus:outline-none bg-white"
              required
            />
            <button
              type="submit"
              className="bg-[#fc593b] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#ff4444] transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Trusted by over 50,000+ customers
      </p>
      <ToastContainer />
    </section>
  );
};

export default HeroSection;
