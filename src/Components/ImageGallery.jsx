import React from 'react';
import { Link } from 'react-router-dom';

const ImageGallery = () => {
    const images = [
        "images/latestPic1.jpg",
        "images/latestPic2.jpg",
        "images/latestPic3.jpg",
        "images/latestPic4.jpeg",
        "images/latestPic5.jpeg",
        // "images/latestPic6.jpeg",
    ];

    return (
        <>
            <div className="columns-1 md:columns-2 xl:columns-3 gap-7 bg-slate-200">
                {images.map((src, index) => (
                    <div className="break-inside-avoid mb-8 bg-slate-200" key={index}>
                        <img className="h-auto max-w-full rounded-lg" src={src} alt={`Gallery image ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className='pt-6 flex justify-center bg-slate-200'>
                <Link
                    to="/gallery"
                    className="py-2 px-4 bg-purple-700 hover:bg-purple-800 rounded text-white focus:ring-4 focus:ring-purple-300 font-medium text-md lg:px-5 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
                >
                    View Gallery
                </Link>
            </div>
        </>
    );
};

export default ImageGallery;
