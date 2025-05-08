import { useState, ChangeEvent, FormEvent } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";


type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

type Status = {
  success?: boolean;
  message?: string;
}

const Contact: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState<Status>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setButtonText('sending...')

    let response = await fetch("http://localhost:500/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formData),
    });

    setButtonText('send');
    let result = await response.json()
    setFormData({...formData})
    if (result.code == 200) {
      setStatus({ success: true, message: 'Message sent successfully'});
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.'});
    }


   

    
  };
 
  

  return (
    <section id="contact">
      <div className=" w-[90%] mx-auto grid md:grid-cols-2 grid-cols-1 items-center mt-[10rem] px-2 ">
        <div>
          <img src={contactImg} alt="Contact" />
        </div>
        <div className=" w-full ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
            className="text-center text-2xl font-bold strokeText uppercase hover:translate-x-1 mb-8 "
          >
            Get in Touch
          </motion.h1>

          <motion.form
            initial={{ opacity: 0, x: "5%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            className=" flex flex-col gap-[1rem] "
          >
            <div>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full text-black"
              />
            </div>
            <div>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
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
              />
            </div>
            <div className="flex items-center justify-between w-full ">
              <button
                type="submit"
                className="p-2 px-8 font-bold bg-white text-black w-fit mx-auto rounded-2xl"
              >
                {buttonText}
              </button>
            </div>
            <div>
              {status && (
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
