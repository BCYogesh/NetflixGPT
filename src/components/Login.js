import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [signInForm, setSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setSignInForm(!signInForm);
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
                <form className="relative text-white bg-black w-4/12 p-8 m-2 bg-opacity-80 rounded-lg">
                    <h3
                        htmlFor="signIn"
                        className="text-white font-bold text-3xl mb-2 text-left py-2 my-4"
                    >
                        {signInForm ? "Sign Up" : "Sign In"}
                    </h3>
                    {signInForm && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-4 my-4 w-full border border-black bg-gray-700"
                        />
                    )}
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="p-4 my-4 w-full border border-black bg-gray-700"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-4 my-4 w-full border border-black bg-gray-700"
                    />
                    <button
                        type="button"
                        className="p-3 bg-red-600 my-6 w-full text-white font-bold"
                    >
                        {signInForm ? "Sign Up" : "Sign In"}
                    </button>
                    <p className="cursor-pointer" onClick={toggleSignInForm}>
                        {signInForm
                            ? "Already registered. Sign In Now!."
                            : "New to Netflix? Sign Up Now."}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
