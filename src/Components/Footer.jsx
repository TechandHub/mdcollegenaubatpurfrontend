import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-slate-200'>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-slate-200">
                <div className="md:flex md:justify-between gap-5 bg-slate-200">
                    <div className="md:flex-initial lg:w-1/3 mb-6 md:mb-0 bg-slate-200">
                        <h2 className="mb-6 text-sm font-bold bg-slate-200 text-gray-900 uppercase">
                            Our Location
                        </h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.764836738547!2d84.9555309751973!3d25.47952677753033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2aca07d3f0bab%3A0xd378cdd84633f1ac!2sMaltidhari%20College!5e0!3m2!1sen!2sin!4v1727931233880!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="md:flex-auto grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3 bg-slate-200">
                        <div className='bg-slate-200'>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase bg-slate-200">
                                Contacts
                            </h2>
                            <ul className="text-gray-500 font-medium bg-slate-200">
                                <li className="mb-4">
                                    <NavLink to="tel:06135291027" className="hover:text-purple-700 flex gap-2 bg-slate-200">
                                        <svg className="w-4 h-6 bg-slate-200"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#7e22ce"
                                            viewBox="0 3 21 16"><path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" /></svg>
                                        06135-291027
                                    </NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink to="mailto:mdcollegenaubatpur@yahoo.in" className="hover:text-purple-700 flex gap-2 bg-slate-200">
                                        <svg className="w-4 h-6 bg-slate-200"
                                            aria-hidden="true"
                                            fill="#7e22ce"
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 3 32 16">
                                                <path d="M28 28H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4zM4 6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" /><path d="M16 18a1 1 0 0 1-.618-.214l-14-11a1 1 0 1 1 1.236-1.572L16 15.728 29.382 5.214a1 1 0 1 1 1.236 1.572l-14 11A1 1 0 0 1 16 18z" /><path d="M2 27a1 1 0 0 1-.707-1.707l11-11a1 1 0 0 1 1.414 1.414l-11 11A1 1 0 0 1 2 27zM30 27a1 1 0 0 1-.707-.293l-11-11a1 1 0 0 1 1.414-1.414l11 11A1 1 0 0 1 30 27z" /></svg>
                                        mdcollegenaubatpur@yahoo.in
                                    </NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink to="https://maps.app.goo.gl/GEhoywrDZKCn1NQJ7" className="hover:text-purple-700 flex gap-2 bg-slate-200">
                                    <svg 
                                    className="w-4 h-6 bg-slate-200"
                                    aria-hidden="true"
                                    fill="#7e22ce"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="50 40 100 100" >
                                        <path d="M100.232 149.198c-2.8 0-5.4-1.8-7.2-5.2-22.2-41-22.4-41.4-22.4-41.6-3.2-5.1-4.9-11.3-4.9-17.6 0-19.1 15.5-34.6 34.6-34.6s34.6 15.5 34.6 34.6c0 6.5-1.8 12.8-5.2 18.2 0 0-1.2 2.4-22.2 41-1.9 3.4-4.4 5.2-7.3 5.2zm.1-95c-16.9 0-30.6 13.7-30.6 30.6 0 5.6 1.5 11.1 4.5 15.9.6 1.3 16.4 30.4 22.4 41.5 2.1 3.9 5.2 3.9 7.4 0 7.5-13.8 21.7-40.1 22.2-41 3.1-5 4.7-10.6 4.7-16.3-.1-17-13.8-30.7-30.6-30.7z"/><path d="M100.332 105.598c-10.6 0-19.1-8.6-19.1-19.1s8.5-19.2 19.1-19.2c10.6 0 19.1 8.6 19.1 19.1s-8.6 19.2-19.1 19.2zm0-34.3c-8.3 0-15.1 6.8-15.1 15.1s6.8 15.1 15.1 15.1 15.1-6.8 15.1-15.1-6.8-15.1-15.1-15.1z"/></svg>
                                        Naubatpur, Patna
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className='bg-slate-200'>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase bg-slate-200 dark:text-white">
                                Links
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium bg-slate-200">
                                <li className="mb-4 bg-slate-200">
                                    <NavLink to="/" className="hover:hover:text-purple-700 bg-slate-200">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="mb-4 bg-slate-200">
                                    <NavLink to="/about" className="hover:hover:text-purple-700 bg-slate-200">
                                        About
                                    </NavLink>
                                </li>
                                <li className='bg-slate-200'>
                                    <NavLink to="/contact" className="hover:hover:text-purple-700 bg-slate-200">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        
                        <div className='bg-slate-200'>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white bg-slate-200">
                                Legal
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium bg-slate-200">
                                <li className="mb-4 bg-slate-200">
                                    <NavLink to="/privacy-policy" className="hover:text-purple-700 bg-slate-200">
                                        Privacy Policy
                                    </NavLink>
                                </li>
                                <li className='bg-slate-200'>
                                    <NavLink to="/terms" className="hover:text-purple-700 bg-slate-200">
                                        Terms & Conditions
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-purple-800 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between bg-slate-200">
                    <span className="text-sm text-black sm:text-center dark:text-gray-400 bg-slate-200">
                        © {new Date().getFullYear()}{' '}
                        <NavLink to="/" className="bg-slate-200">
                            M.D College, Naubatpur
                        </NavLink>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
