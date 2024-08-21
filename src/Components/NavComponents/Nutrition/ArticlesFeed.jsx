import React, { useState, useEffect } from "react";
import axios from "axios"
import Article from "./Article";

const ArticlesFeed = ({ user }) => {
    const [selectedFilter, setSelectedFilter] = useState("allArticles");
    const [articles, setArticles] = useState([])
    

    const getArticles = async () => {
        try {
            const response = await axios.get("http://ec2-16-171-30-80.eu-north-1.compute.amazonaws.com:5000/api/v1/articles");
            setArticles(response.data);
        } catch (error) {
            console.log("Error fetching articles...", error);
        }
    }

    useEffect(() => {
        getArticles();
    }, [])

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    useEffect(() => {
        if (selectedFilter == "userArticles") {
            setArticles(articles.filter((article) => article.author == user));
        } else {
            getArticles();
        }
    }, [selectedFilter])

    console.log(articles);

    return (
        <div className="p-6 mx-4 lg:mx-20 mt-6 lg:mt-0">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold blue-text-gradient text-center mb-6">Articles Feed</h1>
            <div className="flex items-center justify-center space-x-8">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="radio"
                        className="hidden"
                        name="articleFilter"
                        value="allArticles"
                        checked={selectedFilter === "allArticles"}
                        onChange={handleFilterChange}
                    />
                    <div className={`relative flex-shrink-0 w-6 h-6 border-2 ${selectedFilter == "allArticles" ? "bg-indigo-500" : ""} border-gray-300 rounded-md focus-within:border-indigo-500`}>
                        <div className="absolute inset-0 bg-indigo-500 rounded-md opacity-0 transition duration-300"></div>
                    </div>
                    <span className="ml-2 text-gray-800 font-medium hover:text-indigo-500 transition-colors duration-300">All Articles</span>
                </label>

                <label className="flex items-center cursor-pointer">
                    <input
                        type="radio"
                        className="hidden"
                        name="articleFilter"
                        value="userArticles"
                        checked={selectedFilter === "userArticles"}
                        onChange={handleFilterChange}
                    />
                    <div className={`relative flex-shrink-0 w-6 h-6 border-2 ${selectedFilter === "userArticles" ? "bg-indigo-500" : ""} border-gray-300 rounded-md focus-within:border-indigo-500`}>
                        <div className="absolute inset-0 bg-indigo-500 rounded-md opacity-0 transition duration-300"></div>
                    </div>
                    <span className="ml-2 text-gray-800 font-medium hover:text-indigo-500 transition-colors duration-300">My Articles</span>
                </label>
            </div>
            <div style={{
                background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
            }} className="mt-10 p-5 gap-2">
                {articles.map((article) => {
                    return <Article id={article.id} user={user} title={article.title} content={article.body} author={article.author} date={article.DatePublished} />
                })}
            </div>
        </div>
    );
}

export default ArticlesFeed;