import React from 'react'
import { Link } from "react-router-dom";

export default function PrincipalDesk() {
  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-10 lg:py-20">
        <section>
          <div className="container mx-auto lg:flex gap-20">
            <div className="lg:w-2/5 rounded overflow-hidden">
              <div className='w-full mb-6'>
                <img className='rounded' src="images/principal.jpeg" alt="Principal" />
              </div>
            </div>

            <div className="text-left lg:text-left lg:w-3/5">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-none">Message from Principle's desk</h1>

              <p className="text-xl lg:text-2xl mt-4 font-semibold text-purple-700">Prof. (Dr.) Sita Sinha</p>

              <p className="mt-4 text-gray-600">The primary goal of modern education is to foster character development alongside innovation and practical skills. It should imbue ethical values while preparing students for careers. Education enlightens minds, fostering critical thinking. While students often enter college with some maturity, high expectations prevail. Not all students belong in college; some enroll due to external pressures or misconceptions about success. Genuine joy in learning should be the main motivator for college enrollment. With over 26 years of teaching experience, I've seen varied outcomes. Serious consideration and earnest commitment to learning can significantly impact student success, ensuring a fulfilling educational journey for all.</p>

              <p className="mt-8 md:mt-12">
              <Link
                to="/about"
                className="py-2 px-4 bg-purple-700 hover:bg-purple-800 rounded text-white focus:ring-4 focus:ring-purple-300 font-medium text-md lg:px-5 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
              >
                About
              </Link>
              </p>
            </div>
          </div>
        </section>
    </div>
  )
}
