import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchInput = () => {

    const selectLang = useSelector(store => store.config.lang);

    return (
        <div className="pt-[15%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input
                    type="text"
                    className="p-4 m-4 col-span-9"
                    placeholder={lang[selectLang].gptSearchPlaceholder}
                />
                <button
                    type="button"
                    className="py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg"
                >
                    {lang[selectLang].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchInput;
