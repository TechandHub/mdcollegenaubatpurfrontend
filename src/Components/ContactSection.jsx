import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName : "",
        email : "",
        message : ""
    })

    // Handle input changes
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData({
            ...formData, 
            [name]: value
        })
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted: ", formData);
    };

    return (
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <section className="text-gray-600 body-font">
                <div className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-1 md:py-4 mx-auto section" id="contact-form">
                    {/* Contact Us Section */}
                    <div className="md:w-1/3 w-full">
                        <h1 className="text-2xl text-gray-800 sm:text-4xl font-bold title-font mb-4">Contact Us</h1>
                        <p className="leading-relaxed text-xl text-gray-900">
                            We're here to assist you! If you have any questions or need help, please feel free to reach out to us.
                        </p>
                        <p className="leading-relaxed text-xl text-gray-900 mt-8">
                            Also contact us on:
                        </p>
                        <span className="inline-flex mt-6 justify-center sm:justify-start">
                            <Link to="mailto:mdcollegenaubatpur@yahoo.in" className="hover:text-purple-700 flex gap-2">
                                <svg className="w-6 h-6 "
                                    aria-hidden="true"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="6 0 18 33">
                                    <path d="M28 28H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4zM4 6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" /><path d="M16 18a1 1 0 0 1-.618-.214l-14-11a1 1 0 1 1 1.236-1.572L16 15.728 29.382 5.214a1 1 0 1 1 1.236 1.572l-14 11A1 1 0 0 1 16 18z" /><path d="M2 27a1 1 0 0 1-.707-1.707l11-11a1 1 0 0 1 1.414 1.414l-11 11A1 1 0 0 1 2 27zM30 27a1 1 0 0 1-.707-.293l-11-11a1 1 0 0 1 1.414-1.414l11 11A1 1 0 0 1 30 27z" /></svg>

                            </Link>

                            <Link to="tel:06135291027" className="hover:text-purple-700 flex gap-2 bg-slate-200 ml-3">
                                <svg className="w-5 h-6"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 3 21 16"><path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" /></svg>
                            </Link>
                        </span>
                    </div>

                    {/* Contact Form Section */}
                    <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28" onSubmit={handleSubmit}>
                        <h1 className="text-2xl text-gray-800 sm:text-4xl font-bold title-font mb-4">Contact Form</h1>
                        <form action="https://fabform.io/f/{form-id}" method="post">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="fullName" className="leading-7 py-4 text-lg text-gray-900">Your Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 py-4 text-lg text-gray-900">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 py-4 text-lg text-gray-900">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button type="submit"
                                    className="flex text-white bg-purple-700 border-0 py-4 px-6 focus:outline-none hover:bg-purple-800 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha">
                                    Send Message ✉
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;
