import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[12%] absolute text-white bg-gradient-to-r from-black">
            <div className="px-12 mt-3 md:mt-0">
                <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
                <p className="hidden md:inline-block text-lg mt-4 w-1/4">{overview}</p>
            </div>
            <div className="px-12 mt-2 md:mt-6">
                <button
                    className="border bg-white text-black border-black py-1 px-2 md:py-2 w-24 md:w-32 hover:bg-opacity-90"
                    type="button"
                >
                    {" "}
                    ▶ Play
                </button>
                <button
                    className="hidden md:inline-block border bg-gray-500 text-white bg-opacity-50 py-1 px-2 md:py-2 border-black w-24 md:w-32 ml-4"
                    type="button"
                >
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
