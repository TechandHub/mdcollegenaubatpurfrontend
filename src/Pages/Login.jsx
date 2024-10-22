import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postMethod } from "../services/GetServices";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Login() {
    const navigate = useNavigate()
    const { storeTokenInLS } = useAuth()
    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const [formData, setFormData] = useState({
        userName: "",
        password: ""
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
            const res = await postMethod("auth/login", formData)
            console.log(res.data)
            if (res.status == 200) {
                if (localStorage.getItem("token")) {
                    localStorage.removeItem("token") 
                 }
                const userData = [res.data.token, res.data.fullName, res.data.userID, res.data.userName ]
                storeTokenInLS(userData)
                setFormData({ userName: "", password: "" })
                navigate("/student-portal/dashboard")
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
                            <img src="/images/login.png" width="30px" />Student Login
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="userName"
                                    className="flex gap-1 mb-2 text-sm font-medium text-gray-900"
                                >
                                    <img src="/images/user.png" width="18px" />Username
                                </label>
                                <input
                                    type="text"
                                    name="userName"
                                    id="userName"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="Email / Mobile / University Reg. Number"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="flex gap-1 mb-2 text-sm font-medium text-gray-900"
                                >
                                    <img src="/images/padlock.png" width="18px" />Password
                                </label>
                                <div className="flex relative cursor-pointer">
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="**********"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                                        required
                                    />
                                    {
                                    passwordVisible ?
                                    <svg
                                        onClick={togglePasswordVisibility}
                                        className="absolute top-2 right-2 w-5 h-6"
                                        aria-hidden="true"
                                        fill="#7e22ce"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#7e22ce" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                    </svg>
                                    :
                                    <svg 
                                    onClick={togglePasswordVisibility}
                                    className="absolute top-2 right-2 w-5 h-6"
                                    aria-hidden="true"
                                    fill="#7e22ce"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#7e22ce" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>
                                    }
                                </div>

                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Log In
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                Haven't an account?{" "}
                                <Link
                                    className="font-medium text-purple-700 hover:underline"
                                    to="/student-portal/register"
                                >
                                    Register
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
