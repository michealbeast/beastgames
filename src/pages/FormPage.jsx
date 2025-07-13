/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import countryList from "react-select-country-list";
import { motion } from "framer-motion";

const FormPage = () => {
  const countries = countryList().getData();

  const [formData, setFormData] = useState({
    dob: "",
    firstName: "",
    lastName: "",
    country: "",
    phoneNo: "",
    email: "",
  });

  const formspreeID = import.meta.env.VITE_FORMSPREE_ID;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setSubmitMessage("Please fill all fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Form submitted!");
        setFormData({
          dob: "",
          firstName: "",
          lastName: "",
          country: "",
          phoneNo: "",
          email: "",
        });
        setTimeout(() => {
      
        }, 2000);
      } else {
        throw new Error("Form submission failed!");
      }
    } catch (error) {
      console.error("FAILED...", error);
      setSubmitMessage("Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center md:py-15 gap-5 p-3">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
   className='flex absolute md:left-10 left-5 top-10 md:h-[178px] md:w-[522px] h-[70px] w-[320px]'
      >
        <img
          alt="Beast Games Logo"
          className="h-[178px]"
          src="https://images.squarespace-cdn.com/content/v1/6658dc833079153370a6e050/c2848d91-b7e8-4af4-ace2-b872a372ca1f/BG_BEAST_GAMES_LOGO_FULL_COLOR_RGB_900PX_W_300PPI.png?format=1500w"
        />
      </motion.div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-[800px] min-h-[400px] w-full bg-white rounded-lg p-4 flex flex-col mt-[260px] gap-10"
      >
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Date of Birth */}
          <div className="flex flex-col gap-2">
            <label htmlFor="dob">
              Date of Birth <span className="font-medium opacity-50">(required)</span>
            </label>
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              className="h-10 rounded-lg border-black border-[1px] w-full p-2"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <h1>Name</h1>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="firstName">
                  First Name <span className="font-medium opacity-50">(required)</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="h-10 rounded-lg border-black border-[1px] w-full p-2"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="lastName">
                  Last Name <span className="font-medium opacity-50">(required)</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="h-10 rounded-lg border-black border-[1px] w-full p-2"
                />
              </div>
            </div>
          </div>

          {/* Country and Phone Number */}
          <div className="flex flex-col gap-2">
            <h1>Phone</h1>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="country">
                  Country <span className="font-medium opacity-50">(required)</span>
                </label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="h-10 rounded-lg border-black border-[1px] w-full p-2"
                >
                  <option value="">Select a country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.label}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="phoneNo">
                  Phone Number <span className="font-medium opacity-50">(required)</span>
                </label>
                <div className="flex items-center border-[1px] border-black rounded-lg">
                  <span className="pl-3">+1</span>
                  <input
                    type="tel"
                    id="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    className="h-10 rounded-lg border-none w-full p-2 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">
              Email <span className="font-medium opacity-50">(required)</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-10 rounded-lg border-black border-[1px] w-full p-2"
            />
          </div>

          {/* Submit */}
          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="border-[1.5px] border-black bg-white hover:bg-black group transition duration-300 ease-in cursor-pointer max-w-[350px] h-[60px] w-full rounded-lg"
            >
              <h1 className="text-black group-hover:text-white">
                {isSubmitting ? "Submitting..." : "Submit"}
              </h1>
            </button>
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div className="text-center text-green-500 text-xl font-bold">{submitMessage}</div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default FormPage;
