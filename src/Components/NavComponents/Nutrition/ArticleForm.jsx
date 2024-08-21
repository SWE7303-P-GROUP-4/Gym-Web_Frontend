import React from "react";
import { useState } from "react";
import axios from "axios"

export default function ArticleForm({ user }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://ec2-16-171-30-80.eu-north-1.compute.amazonaws.com:5000/api/v1/articles", {
                title: title,
                author: user,
                body: content
            })
            if (response.status == 201) {
                setMessage("Article Posted Successfully")
            } else {
                setMessage("Internal Server Error Occurred")
            }
        } catch (error) {
            console.error("Error: ", error);
            setMessage("An Error Occured While Posting The Article.");
        }
    }

    return (
        <div style={{
            background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
        }} className=" p-6 mx-4 lg:mx-20 mt-6 lg:mt-0 rounded shadow">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mb-6">Post An Article</h1>

            <div className="bg-white rounded p-6">
                <form>

                    <div className="mb-6 flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/3 pr-4 mb-4 lg:mb-0">
                            <label className="block text-gray-600 font-bold mb-3" htmlFor="my-textfield">
                                Title
                            </label>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <input
                                className="block w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-800 placeholder-gray-500 border border-gray-300"
                                id="my-textfield"
                                value={title}
                                onChange={(e) => {setTitle(e.target.value)}}
                                type="text"
                                placeholder="Enter your text here..."
                            />
                            <p className="py-2 text-sm text-gray-600">Choose a suitable title for your article</p>
                        </div>
                    </div>

                    <div className="mb-6 flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/3 pr-4 mb-4 lg:mb-0">
                            <label className="block text-gray-600 font-bold mb-3" htmlFor="my-textarea">
                                Content
                            </label>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <textarea
                                className="block w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-800 placeholder-gray-500 border border-gray-300"
                                id="my-textarea"
                                value={content}
                                onChange={(e) => {setContent(e.target.value)}}
                                rows="8"
                                placeholder="Enter your text here..."
                            ></textarea>

                            <p className="py-2 text-sm text-gray-600">Add a captivating content to capture the users minds</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-10">
                        <button className="bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSubmit}>
                            Post
                        </button>
                        <p>{message}</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
