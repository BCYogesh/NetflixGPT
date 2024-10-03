import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
    // state variable
    const [signUpForm, setSignUpForm] = useState(true);
    const [errorMessage, setErrorMessge] = useState(null);

    // Ref variable
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    // Toggle page sign in/sing up
    const toggleSignInForm = () => {
        setSignUpForm(!signUpForm);
    };

    const handleButtonClick = () => {
        // validate the form data
        const flagFullName = signUpForm ? fullName.current.value : "";
        const msg = checkValidData(
            flagFullName,
            email.current.value,
            password.current.value,
            signUpForm
        );
        setErrorMessge(msg);

        if (msg) return;

        if (signUpForm) {
            // Sign up logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessge(errorCode + "-", errorMessage);
                    // ..
                });
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessge(errorCode + "-", errorMessage);
                });
        }
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
                    alt="banner"
                />
            </div>
            <div className="flex items-center justify-center h-screen">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="relative text-white bg-black w-4/12 p-8 m-2 bg-opacity-80 rounded-lg"
                >
                    <h3
                        htmlFor="signIn"
                        className="text-white font-bold text-3xl mb-2 text-left py-2 my-4"
                    >
                        {signUpForm ? "Sign Up" : "Sign In"}
                    </h3>
                    {signUpForm && (
                        <input
                            ref={fullName}
                            type="text"
                            placeholder="Full Name"
                            className="p-4 my-4 w-full border border-black bg-gray-700"
                        />
                    )}
                    <input
                        ref={email}
                        type="text"
                        placeholder="Email Address"
                        className="p-4 my-4 w-full border border-black bg-gray-700"
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="p-4 my-2 w-full border border-black bg-gray-700"
                    />
                    <p className="text-red-600 font-bold">{errorMessage}</p>
                    <button
                        type="submit"
                        className="p-3 bg-red-600 my-6 w-full text-white font-bold"
                        onClick={handleButtonClick}
                    >
                        {signUpForm ? "Sign Up" : "Sign In"}
                    </button>
                    <p className="cursor-pointer" onClick={toggleSignInForm}>
                        {signUpForm
                            ? "Already registered. Sign In Now!."
                            : "New to Netflix? Sign Up Now."}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
