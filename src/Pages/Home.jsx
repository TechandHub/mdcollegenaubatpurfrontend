import React from 'react'
import Carousel from '../Components/Carousel'
import PrincipalDesk from '../Components/PrincipalDesk';
import ImageGallery from '../Components/ImageGallery';
import NoticeSection from '../Components/NoticeSection';
import { Link } from 'react-router-dom';

export default function Home() {
  const regularCourses = [
    { image: "humanities.jpeg", course: "Bachelor of Arts (Humanities Subject)" },
    { image: "socialScience.jpg", course: "Bachelor in Arts (Social Science Subjects)" },
    { image: "science.jpg", course: "Bachelor of Science" }
  ]

  const vocationalCourses = [
    { image: "bca.jpg", course: "BCA" },
    { image: "bba.webp", course: "BBA" }
  ]

  const notices = [
    {
      noticeImages: "images/logo.png",
      noticeTitle: "This is notice Title kjlkd zxjhfksd ksjdhfsd fkjs ",
      noticeDescription: "This is description"
    },
    {
      noticeImages: "images/logo.png",
      noticeTitle: "This is notice Title",
      noticeDescription: "This is description"
    },
    {
      noticeImages: "images/logo.png",
      noticeTitle: "This is notice Title",
      noticeDescription: "This is description"
    },
    {
      noticeImages: "images/logo.png",
      noticeTitle: "This is notice Title",
      noticeDescription: "This is description"
    },
    {
      noticeImages: "images/logo.png",
      noticeTitle: "This is notice Title",
      noticeDescription: "This is description"
    },
    {
      noticeImages: "images/logo.png",
      noticeTitle: "This is notice Title",
      noticeDescription: "This is description"
    },
    {
      noticeImages: "images/logo.png",
      noticeTitle: "This is notice Title",
      noticeDescription: "This is description"
    },
    {
      noticeImages: "images/logo.png",
      noticeTitle: "This is notice Title",
      noticeDescription: "This is description"
    }
  ]

  return (
    <>
      <Carousel />
      <PrincipalDesk />

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-7 bg-slate-200">
        <div className="bg-slate-200">
          <div className='flex justify-center gap-2 pb-4 bg-slate-200'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="45"
              height="45"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }}
              viewBox="0 0 6.827 6.827"
              className='bg-slate-200'
            >
              <defs>
                <style>
                  {`
          .str0 { stroke: #353535; stroke-width: 0.00694488; stroke-linecap: round; stroke-linejoin: round; }
          .fil8 { fill: #7e7e7e; }
          .fil1,.fil4 { fill: #202020; fill-rule: nonzero; }
          .fil1 { fill: #2f2f2f; }
        `}
                </style>
              </defs>
              <g id="Layer_x0020_1">
                <path
                  d="M1.067.853H5.76c.059 0 .107.048.107.107v3.067a.107.107 0 0 1-.107.106H1.067a.107.107 0 0 1-.107-.106V.96c0-.059.048-.107.107-.107zm.106.214V3.92h4.48V1.067h-4.48z"
                  style={{ fill: "#2f2f2f" }}
                />
                <path className="fil1" d="M.907 4.223a.107.107 0 0 0 0 .213H5.92a.107.107 0 0 0 0-.213H.907z" />
                <path className="fil1" d="M1.513 5.822a.106.106 0 0 0 .193.09l.716-1.527a.106.106 0 0 0-.192-.09l-.717 1.527zM5.121 5.912a.106.106 0 0 0 .193-.09l-.717-1.527a.106.106 0 0 0-.192.09l.716 1.527z" />
                <path style={{ fill: "#bfbfbf" }} d="M1.173 1.067V3.92h4.48V1.067z" />
                <g id="_378607688">
                  <path id="_378609872" style={{ fill: "#fff" }} d="M2.447 1.288H4.38v2.41H2.447z" />
                  <path id="_378609464" className="fil4" d="M2.638 1.454h.423c.014 0 .026.011.026.026v.423a.026.026 0 0 1-.026.025h-.423a.026.026 0 0 1-.026-.025V1.48c0-.015.012-.026.026-.026zm.397.051h-.371v.372h.371v-.372z" />
                  <path id="_378609440" className="fil4" d="M3.178 1.588a.026.026 0 0 0 0 .052h1.014a.026.026 0 0 0 0-.052H3.178z" />
                  <path id="_378609944" className="fil4" d="M3.178 1.803a.026.026 0 0 0 0 .052h1.014a.026.026 0 0 0 0-.052H3.178z" />
                  <path id="_378609008" className="fil4" d="M2.635 2.018a.026.026 0 0 0 0 .051h1.557a.026.026 0 0 0 0-.051H2.635z" />
                  <path id="_378608936" className="fil4" d="M2.635 2.236a.026.026 0 0 0 0 .051h1.557a.026.026 0 0 0 0-.051H2.635z" />
                  <path id="_378608576" className="fil4" d="M2.635 2.454a.026.026 0 0 0 0 .052h1.557a.026.026 0 0 0 0-.052H2.635z" />
                  <path id="_378608720" className="fil4" d="M2.635 2.672a.026.026 0 0 0 0 .052h1.557a.026.026 0 0 0 0-.052H2.635z" />
                  <path id="_378608480" className="fil4" d="M2.635 2.89a.026.026 0 0 0 0 .052h1.557a.026.026 0 0 0 0-.052H2.635z" />
                  <path id="_378608648" className="fil4" d="M2.638 3.058h.423c.014 0 .026.012.026.026v.423a.026.026 0 0 1-.026.026h-.423a.026.026 0 0 1-.026-.026v-.423c0-.014.012-.026.026-.026zm.397.052h-.371v.371h.371V3.11z" />
                  <path id="_378608600" className="fil4" d="M3.178 3.193a.026.026 0 0 0 0 .051h1.014a.026.026 0 0 0 0-.051H3.178z" />
                  <path id="_378608432" className="fil4" d="M3.178 3.407a.026.026 0 0 0 0 .052h1.014a.026.026 0 0 0 0-.052H3.178z" />
                  <path id="_378608504" className="str0" style={{ fill: "#dadada" }} d="M2.664 1.505v.372h.371v-.372z" />
                  <path id="_378608048" className="str0" style={{ fill: "#868686" }} d="M2.664 3.11v.371h.371V3.11z" />
                </g>
                <g id="_378607064">
                  <path id="_378607928" style={{ fill: "#8b8b8b" }} d="m4.159 1.477.152-.151.02.02.02.02-.151.151-.06.02z" />
                  <path id="_378607664" className="fil8" d="m4.42 1.405.154-.153-.075-.075-.075-.075-.153.154.075.074z" />
                  <path id="_378608096" className="fil8" d="m4.56 1.262.084-.018-.106-.106-.106-.105-.018.084.079.066z" />
                  <path id="_378608168" className="fil8" d="m4.444 1.377-.018.085-.106-.106-.105-.106.084-.018.067.079z" />
                </g>
              </g>
              <path style={{ fill: "none" }} d="M0 0h6.827v6.827H0z" />
            </svg>
            <p className="text-3xl md:text-4xl font-bold pt-0 bg-slate-200">Notice / सूचना</p>
          </div>

          {/* ========================== */}
          <div className='grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-1 h-[400px] bg-slate-200 rounded'>
            <div className='h-full overflow-y-scroll no-scrollbar pt-4 rounded'>
              {
                notices.length === 0 ? "Notice not found" :
                  notices.map((notice, index) => {
                    return (
                      <NoticeSection key={index} image={notice.noticeImages} title={notice.noticeTitle} />
                    )
                  })
              }
            </div>
          </div>

          <div className='pt-6 flex justify-center bg-slate-200'>
            <Link
              to="/gallery"
              className="py-2 px-4 bg-purple-700 hover:bg-purple-800 rounded text-white focus:ring-4 focus:ring-purple-300 font-medium text-md lg:px-5 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
            >
              View All
            </Link>
          </div>

        </div>
      </div>

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-slate-200">
        <div className='text-center py-5 bg-slate-200'>
          <h4 className='bg-slate-200 mb-3 text-4xl font-bold'>Gallery</h4>
          <p className='bg-slate-200 text-2xl font-semibold text-purple-700'>Latest Images</p>
        </div>
        <ImageGallery />
      </div>

      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className='text-center py-5'>
          <h4 className='mb-3 text-4xl font-bold'>Courses We Offer</h4>
          <p className='text-2xl font-semibold text-purple-700 pb-8'>Our Regular Courses</p>

          <div className='md:flex gap-2'>
            {
              regularCourses.map((course, index) => {
                return (
                  <div key={index} className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md mb-4 md:mb-16">
                    <div className="relative">
                      <img
                        className="w-full h-64 object-cover"
                        src={`images/${course.image}`}
                        alt={`${course.image} Image`}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{course.course}</h3>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <p className='text-2xl font-semibold text-purple-700 pb-8'>Our Vocational Courses</p>

          <div className='md:flex'>
            {
              vocationalCourses.map((course, index) => {
                return (
                  <div key={index} className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md">
                    <div className="relative">
                      <img
                        className="w-full h-64 object-cover"
                        src={`images/${course.image}`}
                        alt={`${course.image} Image`}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{course.course}</h3>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
