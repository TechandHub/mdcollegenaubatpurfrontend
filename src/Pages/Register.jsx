import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postMethod } from "../services/GetServices";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Register() {
    const navigate = useNavigate()
    const {storeTokenInLS} = useAuth()
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobileNumber: ""
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted: ", formData);

        try {
            const res = await postMethod("auth/register", formData)
            // console.log(res.data)
            if (res.status == 201) {
                if (localStorage.getItem("token")) {
                   localStorage.removeItem("token") 
                }
                const userData = [res.data.token, res.data.fullName, res.data.userID, res.data.userName ]
                storeTokenInLS(userData)
                setFormData({ fullName: "", email: "", mobileNumber: "" })
                navigate("/student-portal/login")
            }
        } catch (error) {
            console.log(error)
            alert(error.response.data.msg)
        }
    };
    return (
        <div className="mx-auto w-full max-w-screen-xl p-4 mb-3 py-6 lg:py-8 bg-slate-200">
            <section className="flex flex-col items-center pt-1 bg-slate-200">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="flex gap-2 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            <img src="/images/studentIcon.png" width="30px" />Register Student
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="flex gap-1 mb-2 mt-2 text-sm font-medium text-gray-900"
                                >
                                    <img src="/images/user.png" width="18px" />Full name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="flex gap-1 mb-2 mt-2 text-sm font-medium text-gray-900"
                                >
                                    <img src="/images/mail.png" width="18px" />Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="flex gap-1 mb-2 mt-2 text-sm font-medium text-gray-900"
                                >
                                    <img src="/images/call.png" width="18px" />Mobile Number
                                </label>
                                <input
                                    type="number"
                                    name="mobileNumber"
                                    id="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="Enter your mobile number"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Register
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account?{" "}
                                <Link
                                    className="font-medium text-purple-700 hover:underline"
                                    to="/student-portal/login"
                                >
                                    Log In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
