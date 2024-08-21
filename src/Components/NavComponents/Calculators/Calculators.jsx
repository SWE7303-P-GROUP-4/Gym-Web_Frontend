import React from "react";
import Navbar from "../../Navbar/NavbarHome";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import BMRCalculator from "./BMRCalculator";
import BMICalculator from "./BMICalculator";
import BFPCalculator from "./BFPCalculator";
import WLPCalculator from "./WLPCalculator";

export default function Calculators ({ onLogout, user }) {
    return (
        <>
            <Navbar onLogout={onLogout} user={user} />
            <div className="w-full flex flex-col items-center md:mb-10 md:mt-10">
                <Link to={"/"} className="mb-5 mt-5">
                    <button className="hover:text-purple-700 text-indigo-700 px-6 py-3 rounded-lg">
                        {"< "}HOME
                    </button>
                </Link>
                <h1 className="text-5xl md:text-7xl font-bold text-center text-gray-800 mb-3 mt-3">Essential Calculators</h1>
                <p className="text-lg md:text-2xl text-center text-gray-600 mb-8">Refine Your Fitness Journey with Precision Metrics and Calculations.</p>
            </div>

            <div style={{
            background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
        }} className="rounded-xl flex flex-col h-fit m-12 items-center justify-center p-10 md:grid md:grid-cols-2 md:grid-rows-2 lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4">
                <BMRCalculator />
                <BFPCalculator />
                <BMICalculator />
                <WLPCalculator />
            </div>

            <Footer />
        </>
    )
}