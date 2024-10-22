import React, { useState } from "react";
import { Link } from "react-router-dom";

const NoticeMarque = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="overflow-hidden whitespace-nowrap py-2 bg-accentColor"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex animate-marquee bg-accentColor ${
          isPaused ? "paused" : "" 
        }`}
      >
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 1
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 2
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 3
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 4
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 5
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 6
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 7
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 8
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 9
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 10
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 11
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 12
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 13
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 14
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 15
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 16
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 17
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 18
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 19
        </Link>
        <Link  to="#" className="text-white mx-4 font-medium bg-accentColor hover:text-purple-700">
            Link 20
        </Link>
        
        
        {/* Repeat the links if needed for continuous scroll */}
      </div>
    </div>
  );
};

export default NoticeMarque;
