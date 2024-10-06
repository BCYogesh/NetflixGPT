import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

const Header = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    };

    const user = useSelector((store) => store.user);

    return (
        <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
            <img
                className="w-40"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            ></img>
            {user && (
                <div className="flex content-center p-2">
                    <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="user-profile" />
                    <button
                        type="button"
                        className="font-bold mx-2"
                        onClick={handleSignOut}
                    >
                        sign out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
