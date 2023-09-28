import { useState } from "react";

const gitFormEndpoint = import.meta.env.VITE_GITFORM_ENDPOINT;

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  console.log(data.email);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="sm:text-4xl text-3xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form
        action={gitFormEndpoint}
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="uppercase text-sm py-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 rounded-lg p-3 flex border-gray-300"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="uppercase text-sm py-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="border-2 rounded-lg p-3 flex border-gray-300"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="email" className="uppercase text-sm py-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 rounded-lg p-3 flex border-gray-300"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="subject" className="uppercase text-sm py-2">
            Subject
          </label>
          <input
            type="subject"
            name="subject"
            id="subject"
            className="border-2 rounded-lg p-3 flex border-gray-300"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="message" className="uppercase text-sm py-2">
            Message
          </label>
          <textarea
            name="message"
            rows={10}
            id="message"
            className="border-2 rounded-lg p-2 border-gray-300"
            onChange={handleOnChange}
          />
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-3 rounded-lg cursor-pointer">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
