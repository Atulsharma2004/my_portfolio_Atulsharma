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
    <div id="contact" className="bg-gradient-to-b from-slate-800 to-slate-900 py-20 px-4 md:px-8">
      <div className="max-w-6xl m-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>
        <form
          action={gitFormEndpoint}
          method="POST"
          encType="multipart/form-data"
          className="bg-slate-700/40 border border-slate-600 rounded-xl p-8 max-w-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 w-full mb-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold text-slate-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-slate-600/50 border border-slate-500 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
                placeholder="Your name"
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-semibold text-slate-300 mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="bg-slate-600/50 border border-slate-500 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
                placeholder="Your phone"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="email" className="text-sm font-semibold text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-slate-600/50 border border-slate-500 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
              placeholder="your.email@example.com"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="subject" className="text-sm font-semibold text-slate-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="bg-slate-600/50 border border-slate-500 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
              placeholder="What is this about?"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="message" className="text-sm font-semibold text-slate-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              id="message"
              className="bg-slate-600/50 border border-slate-500 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 resize-none"
              placeholder="Your message here..."
              onChange={handleOnChange}
            />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
