import { BANNER } from "../utils/constants";
import GptSearchInput from "./GptSearchInput";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchPage = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img
                    src={BANNER}
                    alt="banner"
                    className="h-screen w-screen object-cover"
                />
            </div>
            <div>
                <GptSearchInput />
                <GptMovieSuggestion />
            </div>
        </>
    );
};

export default GptSearchPage;
