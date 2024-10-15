import { useState } from "react"
import contactImg from '../assets/img/contact-img.svg'
 
 
const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '', 
        lastName: '',
        email:'',
        phone:'',
        message: ''

    })

    const handleChange = (e) => { 
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }

    const handleSuubmit = () => {
        e.preventDefault();
    }

    const [button, setButton ] =useState('send');
    const [status, setStatus] = useState({})
  return (
    <section>
      <div>
        <div>
          <img src={contact} alt="" />
        </div>
        <div>
          <h2>Get in Touch</h2>
          <form action="">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>
            <div>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div>
                <textarea name="message" id="" rows='6' placeholder="Message" value={formData.message}>

                </textarea>
                <button type="submit"></button>
              {/* <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              /> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact
