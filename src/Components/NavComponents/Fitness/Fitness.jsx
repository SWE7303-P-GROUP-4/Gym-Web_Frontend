import React, { useState } from "react";
import Navbar from "../../Navbar/NavbarHome"
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import Selectors from "./Selectors";
import Exercises from "./Exercises";

export default function Fitness({ onLogout, user }) {
    const [exercises, setExercises] = useState([]);
    return (
        <>
            <Navbar onLogout={onLogout} user={user} />
            <div className="w-full flex flex-col items-center md:mb-10 md:mt-10">
                <Link to={"/"} className="mb-5 mt-5">
                    <button className="hover:text-purple-700 text-indigo-700 px-6 py-3 rounded-lg">
                        {"< "}HOME
                    </button>
                </Link>
                <h1 className="text-5xl md:text-7xl font-bold text-center text-gray-800 mb-3 mt-3">Explore Workouts</h1>
                <p className="text-lg md:text-2xl text-center text-gray-600 mb-8">Discover Your Perfect Workout Routine Tailored to Your Goals and Fitness Level.</p>
            </div>

            <Selectors setExercises={setExercises} />
            <Exercises exercises={exercises} />

            <Footer />
        </>
    )
}