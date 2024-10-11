import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[12%] absolute text-white bg-gradient-to-r from-black">
            <div className="px-12">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-lg mt-4 w-1/4">{overview}</p>
            </div>
            <div className="px-12 mt-6">
                <button className="border bg-white text-black border-black p-2 w-32 hover:bg-opacity-90" type="button"> ▶ Play</button>
                <button className="border bg-gray-500 text-white bg-opacity-50 border-black p-2 w-32 ml-4" type="button">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle