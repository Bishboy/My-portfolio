import { useState, ChangeEvent, FormEvent } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2, Send } from "lucide-react";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (
      formData.phone &&
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
        formData.phone
      )
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });
      formPayload.append("_captcha", "false");
      formPayload.append("_template", "table");

      const response = await fetch(
        "https://formsubmit.co/ajax/bishboy2spieking@gmail.com",
        {
          method: "POST",
          body: formPayload,
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
          theme: "dark",
        });

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
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="lg:py-[4rem] py-8 bg-gradient-to-b from-gray-900 to-gray-800 lg:mt-[4rem] mt-[2rem]"
    >
      <ToastContainer />
      <div className="w-[90%] max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 items-center gap-12">
        {/* Contact Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden lg:block"
        >
          <img
            src={contactImg}
            alt="Contact"
            className="w-full h-auto max-w-lg mx-auto"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 shadow-xl"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-3xl font-bold text-white mb-2"
          >
            Get in <span className="text-purple-400">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-300 mb-8"
          >
            Have a question or want to work together? Fill out the form below
            and I'll get back to you soon.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                required
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number (Optional)"
                className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-md px-3 py-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition-colors mt-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
