import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { auth } from "../utils/firebase";

const Dashboard = () => {
    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <h1>Loading...</h1>;
    }
    if (!user) {
        router.push("/auth/Login");
    }
    if (user) {
        return (
            <div className=" mt-10">
                <h2 className=" text-center font-medium text-3xl">
                    Welcome to the Dashboard {user.displayName} !
                </h2>
                <button
                    onClick={() => {
                        auth.signOut();
                    }}
                    className="bg-gray-500 p-2 rounded-lg mt-10 text-white font-medium"
                >
                    Sign Out
                </button>
            </div>
        );
    }
};

export default Dashboard;
