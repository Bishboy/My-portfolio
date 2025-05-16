import { useState, ChangeEvent, FormEvent } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch(
        "https://formsubmit.co/bishboy2spieking@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <section id="contact" className="lg:py-[2rem]">
      <ToastContainer />
      <div className="w-[90%] mx-auto grid md:grid-cols-2 grid-cols-1 items-center mt-[10rem] px-2">
        <div>
          <img src={contactImg} alt="Contact" />
        </div>
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
            className="text-center text-2xl font-bold strokeText uppercase hover:translate-x-1 mb-8"
          >
            Get in Touch
          </motion.h1>

          <motion.form
            action="https://formsubmit.co/2cb437aa2f91805cf7185aef4b1b4820"
            method="POST"
            initial={{ opacity: 0, x: "5%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-[1rem]"
          >
            {/* FormSubmit.co configuration fields */}
            <input type="hidden" name="_next" value="YOUR_THANK_YOU_PAGE_URL" />
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission"
            />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full text-black"
                required
              />
            </div>
            <div>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <Input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <Input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={6}
                className="w-full"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <button
                type="submit"
                className="p-2 px-8 font-bold bg-white text-black w-fit mx-auto rounded-2xl"
                disabled={buttonText === "Sending..."}
              >
                {buttonText}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
