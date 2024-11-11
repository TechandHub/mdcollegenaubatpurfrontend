import React, { useState } from 'react'
import { useEffect } from 'react';
import 'flowbite/dist/flowbite.min.js'; // Import Flowbite JS
import 'flowbite'; // Import Flowbite JavaScript
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'
import DashboardContent from '../Portal-Content/DashboardContent';
import UrgentCLCContent from '../Portal-Content/UrgentCLCContent';
import DuplicateCLCContent from '../Portal-Content/DuplicateCLCContent';
import CharacterCertificateContent from '../Portal-Content/CharacterCertificateContent';

export default function Dashboard() {
    const { logoutUser } = useAuth()
    useEffect(() => {
        // Optional: You can load Flowbite manually after component mounts
        import('flowbite');
    }, []);

    const [activeTab, setActiveTab] = useState('dashboard');
    const renderContent = () => {
        switch (activeTab) {
          case 'dashboard':
            return <DashboardContent />;
          case 'urgentCLC':
            return <UrgentCLCContent />;
          case 'duplicateCLC':
            return <DuplicateCLCContent />;
          case 'characterCertificate':
            return <CharacterCertificateContent />;
          default:
            return <DashboardContent />;
        }
      };

    return (
        <>


            <nav className="fixed top-0 z-50 w-full bg-bgColor border-b border-gray-200">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <Link to="/" className="flex ms-2 md:me-24">
                                <img src="/images/logo.png" className="h-8 me-3" alt="College Logo" />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">MD College</span>
                            </Link>
                            {/* <Link to="/" className="flex items-center">
                                <img
                                    src='/images/logowithname.png'
                                    className="mr-3 md:h-12 hidden md:block"
                                    alt="Logo"
                                />
                                <img
                                    src='/images/logo.png'
                                    className="h-11 mr-3 md:hidden"
                                    alt="Logo"
                                />
                            </Link> */}
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                            <Link
                            to="/"
                            className="mr-2 text-dark bg-origin-border border-2 border-accentColor hover:bg-accentColor hover:text-white hover:border-none focus:ring-3 focus:ring-accentColor font-medium rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">
                            Home
                            </Link>
                            <button
                            onClick={logoutUser}
                            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none">
                            Logout
                            </button> 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link onClick={() => setActiveTab('dashboard')} to="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-purple-700 group">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-purple-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-purple-700" aria-controls="dropdown-certificates" data-collapse-toggle="dropdown-certificates">
                                {/* <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-purple-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                </svg> */}
                        
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-purple-700" aria-hidden="true" width="20px" height="20px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <title>certificate-ssl-solid</title>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="invisible_box" data-name="invisible box">
                                            <rect width="48" height="48" fill="none" />
                                            <rect width="48" height="48" fill="none" />
                                        </g>
                                        <g id="icons_Q2" data-name="icons Q2">
                                            <path d="M46,24a12.9,12.9,0,0,0-4-9.4V7a2,2,0,0,0-2-2H4A2,2,0,0,0,2,7V41a2,2,0,0,0,2,2H26v1.6c0,2,2,3.1,3.3,1.8L33,43l3.7,3.4c1.3,1.3,3.3.2,3.3-1.8V34.9A12.9,12.9,0,0,0,46,24ZM33,15a9,9,0,1,1-9,9A9,9,0,0,1,33,15ZM12,14H24.7L23,15.7A11.4,11.4,0,0,0,21.5,18H12a2,2,0,0,1,0-4Zm0,8h8.2a6.5,6.5,0,0,0-.2,2,6.8,6.8,0,0,0,.2,2H12a2,2,0,0,1,0-4Zm0,12a2,2,0,0,1,0-4h9.5A11.4,11.4,0,0,0,23,32.3,13.7,13.7,0,0,0,24.7,34Z" fill="currentColor" />
                                            <circle cx="33" cy="24" r="5" fill="currentColor" />
                                        </g>
                                    </g>
                                </svg>

                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Certificates</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <ul id="dropdown-certificates" className="hidden py-1 space-y-1">
                                <li>
                                    <Link onClick={() => setActiveTab('urgentCLC')} to="#" className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-purple-700">Urgent CLC</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setActiveTab('duplicateCLC')} to="#" className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-purple-700">Duplicate / Re-issue CLC</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setActiveTab('characterCertificate')} to="#" className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-purple-700">Character Certificate</Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-purple-700" aria-controls="dropdown-miscellaneous-fee" data-collapse-toggle="dropdown-miscellaneous-fee">
                                {/* <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-purple-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                </svg> */}
                        
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-purple-700" aria-hidden="true" width="20px" height="20px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <title>certificate-ssl-solid</title>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="invisible_box" data-name="invisible box">
                                            <rect width="48" height="48" fill="none" />
                                            <rect width="48" height="48" fill="none" />
                                        </g>
                                        <g id="icons_Q2" data-name="icons Q2">
                                            <path d="M46,24a12.9,12.9,0,0,0-4-9.4V7a2,2,0,0,0-2-2H4A2,2,0,0,0,2,7V41a2,2,0,0,0,2,2H26v1.6c0,2,2,3.1,3.3,1.8L33,43l3.7,3.4c1.3,1.3,3.3.2,3.3-1.8V34.9A12.9,12.9,0,0,0,46,24ZM33,15a9,9,0,1,1-9,9A9,9,0,0,1,33,15ZM12,14H24.7L23,15.7A11.4,11.4,0,0,0,21.5,18H12a2,2,0,0,1,0-4Zm0,8h8.2a6.5,6.5,0,0,0-.2,2,6.8,6.8,0,0,0,.2,2H12a2,2,0,0,1,0-4Zm0,12a2,2,0,0,1,0-4h9.5A11.4,11.4,0,0,0,23,32.3,13.7,13.7,0,0,0,24.7,34Z" fill="currentColor" />
                                            <circle cx="33" cy="24" r="5" fill="currentColor" />
                                        </g>
                                    </g>
                                </svg>

                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Miscellaneous Fee</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <ul id="dropdown-miscellaneous-fee" className="hidden py-1 space-y-1">
                                <li>
                                    <Link to="#" className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-purple-700">Marksheet</Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-purple-700">T.C</Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-purple-700">Original Passing Certificate (Inter)</Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-purple-700">Bonafied</Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-purple-700">Forwarding (Degree/Migration)</Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-purple-700">Registration Forwarding</Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-purple-700">Documnent Verification</Link>
                                </li>
                                <li>
                                    <Link to="#" className="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-purple-700">Miscellaneous</Link>
                                </li>
                            </ul>
                        </li>

                        {/* <li>
                            <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-purple-700  group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-purple-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full group-hover:text-purple-700">Pro</span>
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-purple-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-purple-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-purple-600 bg-blue-100 rounded-full group-hover:text-purple-700">3</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-purple-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-purple-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-purple-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-purple-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-purple-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-purple-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:text-purple-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-purple-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </aside>

            <div className="p-6 sm:ml-64">
                <div className="p-6 border-2 border-gray-200 rounded-lg mt-14">
                    {/*  */}
                    {renderContent()}
                </div>
            </div>

        </>
    )
}
