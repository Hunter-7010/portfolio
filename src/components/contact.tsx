import { useState, useRef, ChangeEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { StarsCanvas } from "./canvas";
//template_m7bfeqi
//service_bdoaa7i
//txHoftJzDvRd8_3Sm
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_bdoaa7i",
        "template_m7bfeqi",
        {
          from_name: form.name,
          to_name: "Zaki Orya",
          from_email: form.email,
          to_email: "zakioria@gmail.com",
          message: form.message,
        },
        "txHoftJzDvRd8_3Sm"
      )
      .then(() => {
        setLoading(false);
        alert("thank you i will get back to you!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((e) => {
        setLoading(false);
        console.log("Error", e);
        alert("Something went wrong");
      });
  };
  return (
    <section className="flex min-h-screen flex-col-reverse py-6 lg:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="mx-0 rounded-2xl border py-8 px-4 dark:bg-gradient-to-l dark:from-[#101212] dark:to-[#08201D] md:m-0 lg:w-[448px] lg:py-16"
      >
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
          Don't hesitate to reach out - whether it's for a potential
          collaboration, to discuss a job opportunity, or just to say hello, I'm
          always happy to connect.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-emerald-500 dark:focus:ring-emerald-500"
              placeholder="Provide Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm dark:focus:border-emerald-500 dark:focus:ring-emerald-500"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-emerald-500 dark:focus:ring-emerald-500"
              placeholder="Leave a message..."
              id="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-lg bg-emerald-700 py-3 px-5 text-center text-sm font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 sm:w-fit"
          >
            {loading ? "Sending..." : " Send message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
        <StarsCanvas />
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
