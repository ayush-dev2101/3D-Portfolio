import React, { useState, useRef } from "react";

import TitleHeader from "@/components/TitleHeader";
import { ContactCard } from "@/components/ui/ContactCard";
import { ContactButton } from "@/components/ui/ContactButton";

import { contactInfo } from "@/constants";

import emailjs from "@emailjs/browser";
const Contact = () => {
  //Handling the form for Contacting
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true); //Shows loading state

    try {
      if (!formRef.current) return;

      const response = await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      console.log(response);

      //Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("EmailJS Error:", JSON.stringify(error)); //Shows Toast
    } finally {
      setLoading(false); //Always stop loading, even on error
    }
  };
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Get In Touch With Me" sub="Contact Information🤝" />
        <div className="mt-16">
          <ContactCard
            heading={
              <div>
                <span>Let's Work Together</span>
              </div>
            }
            description="I'm always open to interships, collaborations, freelance projects and exciting oppoturnities. Feel free to send me a message"
            contactInfo={contactInfo}
          >
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-4"
              ref={formRef}
            >
              <input
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg
                text-black-200
                border bg-background p-3
              outline-none
              transition-all
              focus:ring-2"
              />
              <input
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="email"
                placeholder="Your Email"
                className="
      w-full
      rounded-lg
      border
      bg-background
      p-3
      text-black
      outline-none
      transition-all
      focus:ring-2
    "
              />

              <textarea
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                placeholder="Your Message"
                className="
      w-full
      resize-none
      rounded-lg
      border
      bg-background
      p-3
      text-black
      outline-none
      transition-all
      focus:ring-2
    "
              />
              <ContactButton
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Loading..." : "Send Message"}
              </ContactButton>
            </form>
          </ContactCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
