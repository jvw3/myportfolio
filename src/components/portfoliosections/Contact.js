import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

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
      <main className="w-screen mt-96 pb-20">
        <h2 className="text-center text-6xl text-white font-mono mb-10">
          Contact Me
        </h2>
        <div className="flex justify-center">
        <div className="w-3/4 border h-40 bg-white rounded-xl mt">
          <form
            className="flex justify-center mt-10
            "
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-col">
              <label>Name</label>
              <input
                className="border rounded-md "
                type="text"
                name="user_name"
              />
              <label>Email</label>
              <input
                className="border rounded-md"
                type="email"
                name="user_email"
              />
              <label>Message</label>
              <textarea className="border rounded-md" name="message" />
              <button
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
        <div className="flex justify-center w-full mt-10 space-x-10">
          <i class="devicon-twitter-original text-white text-7xl"></i>
          <i class="devicon-linkedin-plain text-white text-7xl"></i>
          <i class="devicon-github-original text-white text-7xl"></i>
        </div>
      </main>
    </>
  );
};
