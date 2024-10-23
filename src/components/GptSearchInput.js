import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import useGptMovies from "../hooks/useGptMovies";



const GptSearchInput = () => {

    const selectLang = useSelector((store) => store.config.lang);

    const searchInput = useRef(null);

    const handleGptSearch = useGptMovies(searchInput);

    return (
        <div className="pt-[35%] md:pt-[10%] flex justify-center px-5 md:px-0">
            <form className="w-full md:w-1/2  bg-black grid grid-cols-12">
                <input
                    type="text"
                    ref={searchInput}
                    className="p-4 m-4 col-span-9"
                    placeholder={lang[selectLang].gptSearchPlaceholder}
                />
                <button
                    type="button"
                    className="py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg"
                    onClick={handleGptSearch}
                >
                    {lang[selectLang].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchInput;
