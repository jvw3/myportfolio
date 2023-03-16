import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";

export const Contact = () => {
  const form = useRef();
  const options = { threshold: 0.4, triggerOnce: true };
  const { ref: contactRef, inView: contactVisible } = useInView(options);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text)
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <main
        ref={contactRef}
        className={`w-screen  ${
          contactVisible ? "animate-appear" : "invisible"
        }`}
      >
        <h2 className="text-center text-6xl text-white font-mono mb-5">
          Contact Me
        </h2>
        <div className="flex justify-center ">
          <div className="w-1/2 border h-[500px] bg-white rounded-xl mt">
            <form
              className="flex justify-center mt-10
            "
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex flex-col w-[400px] space-y-1.5">
                <label className="text-xl">Name</label>
                <input
                  className="border rounded-md border-slate-400 h-8"
                  type="text"
                  name="user_name"
                />
                <label className="text-xl">Email</label>
                <input
                  className="border rounded-md border-slate-400 h-8"
                  type="email"
                  name="user_email"
                />
                <label className="text-xl">Message</label>
                <textarea
                  className="border rounded-md border-slate-400 h-48 "
                  name="message"
                />
                <button
                  className="mt-3 bg-contentbackground rounded-lg text-white p-3"
                  type="submit"
                  onClick={(evt) => {
                    sendEmail(evt);
                  }}
                  button="Send"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
