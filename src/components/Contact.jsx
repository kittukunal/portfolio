import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");

  const [loading, setLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(email)

    // First email to send the form details to you
    emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: name,            // user's entered name
        to_name: "Kunal",         // your name
        from_email: email,           // user's entered email
        to_email: "kunalyadav8614@gmail.com", // your receiving email
        message: message,            // user's message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        console.log("Form details sent to your email.");
        alert("Thank you! Your message has been sent.");
      },
      (error) => {
        console.error("Error sending form details to your email:", error);
        alert("Oops! Something went wrong. Please try again.");
      }
    );
    setLoading(false);
    setEmail("")
    setMessage("")
    setName("")
  }  

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden align-center justify-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e=>setName(e.target.value)}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              placeholder="Your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={message}
              onChange={e=>setMessage(e.target.value)}
              placeholder="Do you have any message for me?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

       <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
       <EarthCanvas /> 
      </motion.div> 
    </div>
  );
};

export default SectionWrapper(Contact, "contact");