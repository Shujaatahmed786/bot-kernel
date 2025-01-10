import React from "react";

const form = () => {
  return (
    <div>
      <div>
        {" "}
        <h1
          className="bg-[#fef4ff] mx-auto text-[#ac81b3] text-center p-2 text-xs font-semibold 
          max-w-14 mb-4 rounded-lg mt-4 w-full"
        >
          Form
        </h1>
        <h2 className="text-[#490852]  font-bold leading-normal text-[32px]  text-center">
          Fill out the form
        </h2>
        <h4 className="text-center text-sm mt-2 mb-5">
          To get the ball rolling, please schedule a
          <span className="ml-1">
            <u className="text-[#7C2A88] cursor-pointer">free consultation</u>
          </span>{" "}
          or fill out the form below.
        </h4>
        <div className="flex justify-center">
          <div className="flex flex-col items-center max-w-[27rem] w-full gap-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="outline-none border-[#6B6B6B] border focus:border-[#4CAF50] rounded-[7px] w-full placeholder:text-xs p-2"
            />
            <input
              type="text"
              placeholder="Email"
              className="outline-none border-[#6B6B6B] border focus:border-[#4CAF50] rounded-[7px] w-full placeholder:text-xs p-2"
            />
            <input
              type="text"
              placeholder="Phone"
              className="outline-none border-[#6B6B6B] border focus:border-[#4CAF50] rounded-[7px] w-full placeholder:text-xs p-2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="outline-none border-[#6B6B6B] border focus:border-[#4CAF50] rounded-[7px] w-full placeholder:text-xs p-2"
            />
            <textarea
              type="text"
              placeholder="Write your message"
              className="outline-none border-[#6B6B6B] border focus:border-[#4CAF50] rounded-[7px] w-full placeholder:text-xs p-2"
            />
            <button className="text-white  text-xs leading-normal bg-[#a8ca55] rounded-[30px]  mb-2 px-12 py-3">
              Send message
            </button>
          </div>
        </div>
        <p className="text-center text-sm mt-12 mb-28">
          Alternatively, email us at{" "}
          <span className="text-[#7C2A88]">Hello@botkernel.com</span> with your
          contact details and we'll be in touch soon!
        </p>
      </div>
    </div>
  );
};

export default form;
