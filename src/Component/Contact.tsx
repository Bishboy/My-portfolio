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
      // Create FormData object instead of JSON
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });

      // Add FormSubmit.co specific fields
      formPayload.append("_captcha", "false");
      formPayload.append("_template", "table");

      const response = await fetch(
        "https://formsubmit.co/ajax/bishboy2spieking@gmail.com", // Note the /ajax endpoint
        {
          method: "POST",
          body: formPayload, // Send as FormData
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Reset form after submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <section id="contact" className="lg:py-[2rem] pb-4">
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
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: "5%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-[1rem]"
          >
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
                type="email"  
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              <Input
                type="tel"  
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
