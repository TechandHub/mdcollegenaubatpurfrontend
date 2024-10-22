import React from 'react'
import { Link } from 'react-router-dom'

export default function NoticeSection({image, title, description}) {
    return (
        <>
            <div className="flex items-start gap-4 mb-4 px-4">
                <Link to={image}>
                    <h3 className='font-semibold text-accentColor'>View Notice </h3>
                </Link>

                <div>
                    <h3 className="text-lg/tight font-medium text-gray-900">{title}</h3>
                </div>
            </div>
        </>
    )
}
