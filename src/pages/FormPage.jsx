import React from 'react'
import countryList from 'react-select-country-list'
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion"


const FormPage = () => {
  // Get country list data
  const countries = countryList().getData();

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center md:py-15 gap-5 p-3">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex absolute left-10 top-10"
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
        className="max-w-[800px] min-h-[400px] w-full bg-white rounded-lg p-4 flex flex-col mt-[260px] gap-10 "
      >
        <form className="flex flex-col gap-4">
          {/* Date of Birth */}
          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="">
              Date of Birth <span className="font-medium opacity-50">(required)</span>
            </label>
            <input
              type="date"
              id="date"
              className="h-10 rounded-lg border-black border-[1px] w-full p-2"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <h1 className="">Name</h1>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="first_name" className="">
                  First Name <span className="font-medium opacity-50">(required)</span>
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="h-10 rounded-lg border-black border-[1px] w-full p-2"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="last_name" className="">
                  Last Name <span className="font-medium opacity-50">(required)</span>
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="h-10 rounded-lg border-black border-[1px] w-full p-2"
                />
              </div>
            </div>

          </div>

          {/* Country and Phone Number */}
          <div className="flex flex-col gap-2">
            <h1 className="">Phone</h1>

<div className='flex flex-col md:flex-row items-center  gap-3'>


            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="country" className="">
                Country <span className="font-medium opacity-50">(required)</span>
              </label>
              <select
                id="country"
                className="h-10 rounded-lg border-black border-[1px] w-full p-2"
              >
                <option value="">Select a country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-3 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="phone" className="">
                  Phone Number <span className="font-medium opacity-50">(required)</span>
                </label>
                <div className="flex items-center border-[1px] border-black rounded-lg">
                  <span className="pl-3">+1</span> {/* Replace with dynamic country code if needed */}
                  <input
                    type="tel"
                    id="phone"
                    className="h-10 rounded-lg border-none w-full p-2 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            </div>

          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="font-medium">
              Email <span className="font-medium opacity-50">(required)</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="h-10 rounded-lg border-black border-[1px] w-full p-2"
            />
          </div>

<div className='w-full flex items-center justify-center'>
    <button
    className='border-[1.5px] border-black bg-white hover:bg-black group transition duration-300 ease-in
    cursor-pointer max-w-[350px] h-[60px] w-full rounded-lg'>
        <h1 className='text-back group-hover:text-white'> Submit</h1>
    </button>
</div>




        </form>
      </motion.div>

    </div>
  );
};

export default FormPage;