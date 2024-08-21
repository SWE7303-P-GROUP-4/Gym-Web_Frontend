import React, { useState } from "react";
import Navbar from "../../Navbar/NavbarHome"
import Footer from "../../Footer/Footer";
import ArticleForm from "./ArticleForm";
import { Link } from "react-router-dom";
import ArticlesFeed from "./ArticlesFeed";

export default function Nutrition({ onLogout, user }) {
    return (
        <>
            <Navbar onLogout={onLogout} user={user} />
            <div className="w-full flex flex-col items-center md:mb-10 md:mt-10">
                <Link to={"/"} className="mb-5 mt-5">
                    <button className="hover:text-purple-700 text-indigo-700 px-6 py-3 rounded-lg">
                        {"< "}HOME
                    </button>
                </Link>
                <h1 className="text-5xl md:text-7xl font-bold text-center text-gray-800 mb-3 mt-3">Healthy Eating</h1>
                <p className="text-lg md:text-2xl text-center text-gray-600 mb-8">Discover the diet plans that fuel you so you can feel your best every day.</p>
            </div>

            <div>
                <ArticleForm user={user}  />
            </div>
            <div>
                <ArticlesFeed user={user}  />
            </div>
            <Footer />
        </>
    )
}