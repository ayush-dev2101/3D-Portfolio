import TitleHeader from "@/components/TitleHeader";
import { ContactCard } from "@/components/ui/ContactCard";
import { ContactButton } from "@/components/ui/ContactButton";

import { contactInfo } from "@/constants";

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Get In Touch With Me" sub="Contact Information" />
        <div className="mt-16">
          <ContactCard
            heading={
              <div>
                <span>Let's Work Together👋</span>

                <span className="wave-hand ml-2"></span>
              </div>
            }
            description="I'm always open to interships, collaborations, freelance projects and exciting oppoturnities. Feel free to send me a message"
            contactInfo={contactInfo}
          >
            <form className="w-full space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border bg-background p-3
              outline-none
              transition-all
              focus:ring-2"
              />
              <ContactButton type="submit" className="w-full">
                Send Message
              </ContactButton>
            </form>
          </ContactCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
