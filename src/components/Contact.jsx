import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bfbe2ebb-fcbd-4d39-8e33-bf52644f9f2b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success('Message submitted successfully')
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult(data.message);
    }
  };

  return (
    <motion.div 
        initial={{opacity: 0, x:-200}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'>
        <h2 className='text-2xl md:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light '>With Us</span></h2>
        <p className='text-gray-500 max-w-80 mb-8 text-center mx-auto'>Lorem ipsum dolor sit amet consectetur.</p>

        <form onSubmit={onSubmit} className='max-w-2xl pt-8 mx-auto text-gray-600'>
            <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-4'>

            <div className='w-full md:w-1/2 text-left'>
                <label htmlFor="name">Your name</label>
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' id="name" placeholder='Your name ...' required />
            </div>
            <div className='w-full md:w-1/2 text-left'>
                <label htmlFor="mail">Your e-mail</label>
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Email' id="mail" placeholder='Your e-mail ...' required />
            </div>
            </div>
            <div className='my-6 text-left'>
              <label htmlFor="message">Your message</label>
              <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" id="message" placeholder='Your message ...' required></textarea>
            </div>
            <button className='bg-blue-500 px-8 py-3 rounded text-white'>{result ? result : 'Send Message'}</button>
        </form>
    </motion.div>
  )
}

export default Contact