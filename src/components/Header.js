import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../redux/slice/userSlice";
import { gptSearchView } from "../redux/slice/gptSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLang } from "../redux/slice/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);
    const gptPage = useSelector((store) => store.gpt.toggleGptView);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    };

    useEffect(() => {
        // Whenever auth will be change this will be call.
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // SignIn
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                // Signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unSubscribe();
    }, []);

    const toggleGptPage = () => {
        dispatch(gptSearchView());
    };

    const handleLangChange = (e) => {
        dispatch(changeLang(e.target.value));
    };

    return (
        <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex-col md:flex-row z-10">
            <img className="w-40 mx-auto md:mx-0" src={LOGO} alt="logo"></img>
            {user && (
                <div className="flex content-center p-2 justify-between">
                    {gptPage && (
                        <select
                            className="mr-2 p-2 bg-gray-900 text-white"
                            onChange={handleLangChange}
                        >
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <option key={lang.identifier} value={lang.identifier}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}

                    <button
                        type="button"
                        className="bg-purple-800 px-2 py-2 md:py-0 md:mr-4 text-white font-bold rounded-lg hover:bg-purple-600"
                        onClick={toggleGptPage}
                    >
                        {gptPage ? "Home" : "GPT Search"}
                    </button>
                    <img
                        className="w-12 h-12 rounded-full hidden md:inline-block "
                        src={user.photoURL}
                        alt="user-profile"
                    />
                    <button
                        type="button"
                        className="font-bold mx-2 text-white"
                        onClick={handleSignOut}
                    >
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
