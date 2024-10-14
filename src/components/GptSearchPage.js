import { BANNER } from "../utils/constants";
import GptSearchInput from "./GptSearchInput";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchPage = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img
                    src={BANNER}
                    alt="banner"
                />
            </div>
            <GptSearchInput />
            <GptMovieSuggestion />
        </div>

    )
}

export default GptSearchPage;