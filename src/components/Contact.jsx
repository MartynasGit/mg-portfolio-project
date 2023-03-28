import React from 'react';

const Contact = () => {
    return (
      <div
        name="contact"
        className="w-full h-screen bg-black flex justify-center items-center p-4"
      >
        <form
          action="https://getform.io/f/b74c01d8-4d24-4c4a-af30-1f50f9bc7a4e"
          method='POST'
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#ed2835]">
              Contact
            </p>
            <p className="text-white py-4">//Submit the form below </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2 text-black"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6] text-black"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2 text-black"
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>

          <button className="text-white border-2 hover:bg-[#ed2835] hover:border-[#ed2835] px-4 py-3 my-8 mx-auto flex items-center">
            Submit
          </button>
        </form>
      </div>
    )
};

export default Contact;