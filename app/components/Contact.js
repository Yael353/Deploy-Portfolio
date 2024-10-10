import React from "react";
import { LuMapPin } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
// import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";

function Contact() {
  // const { register, handleSubmit } = useForm();

  // const onSubmit = async (formData) => {
  //   const queryString = new URLSearchParams(formData).toString();
  //   const onSubmit = (formdata) => {
  //     window.location.href = `mailto:Yaser.elkhabiry@outlook.com?subject=${formData.subject}&body=${formData.body},${formData.message},(${formData.email})`;
  //   };
  // };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:text-row max-w-7xl justify-evenly mx-auto items-center">
      <h3
        id="Contact"
        className="tracking-[20px] mx-auto text-center mb-5 uppercase text-gray-400 text-2xl"
      >
        Contact
      </h3>

      <div className="flex flex-col space-y-5 items-start justify-center">
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <MdEmail className="h-8 w-8 animate-pulse" />
            <p className="text-xl text-white text-center">
              Yaser.Elkhabiry@outlook.com
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <LuMapPin className="h-8 w-8 animate-pulse" />
          <p className="text-xl text-white text-center">Stockholm</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <FaGithub className="h-8 w-8 animate-pulse" />
          <p className="text-xl text-white text-center">Yael353</p>
        </div>

        {/* <form
          // onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-60 sm:w-full mx-auto"
        >
          <div className="space-y-2 flex flex-col md:flex">
            <input
              // {...register("name")}
              placeholder="Name"
              type="text"
              className="outline_none w-80 bg-slate-400/10 rounded-sm px-6 py-4 text-gray-500 placeholder-gray-500"
            />
            <input
              // {...register("email")}
              placeholder="Email"
              type="email"
              className="outline_none w-80 bg-slate-400/10 rounded-sm px-6 py-4 text-gray-500 placeholder-gray-500"
            />
          </div>

          <input
            // {...register("subject")}
            placeholder="Subject"
            type="text"
            className="outline_none w-80 bg-slate-400/10 rounded-sm px-6 py-4 text-gray-500 placeholder-gray-500"
          />

          <textarea
            // {...register("message")}
            placeholder="Message "
            className="outline_none w-80 bg-slate-400/10 rounded-sm px-6 py-4 text-gray-500 placeholder-gray-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 w-80 px-4 py-3 rounded-full font-bold text-white"
          >
            Submit
          </button>
        </form> */}
      </div>
    </div>
  );
}

export default Contact;
