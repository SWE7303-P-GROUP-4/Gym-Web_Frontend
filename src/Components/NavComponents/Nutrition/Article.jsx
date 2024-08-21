import axios from "axios";
import React from "react";

const Article = ({ title, content, author, date, user, id }) => {
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }


    function getInitials(name) {
        const words = name.split(" ");
        const initials = words.map(word => word.charAt(0).toUpperCase());
        return initials.join("");
    }

    async function handleDelete (e) {
        e.preventDefault()
        try {
            const response = await axios.delete(`http://ec2-16-171-30-80.eu-north-1.compute.amazonaws.com:5000/api/v1/articles/${id}`)
            if (response.status == 200) {
                console.log("Article deleted successfully");
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    return (
        <div>
            <div className="bg-transparent flex justify-center items-center p-3">
                
                <div className="w-full flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-gray-200 text-gray-700 text-xl w-full flex font-extrabold px-6 py-4">
                        <p>{title}</p>
                        {user == author &&
                    <button onClick={handleDelete} className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                    </button>
                }    
                    </div>

                    <div className="flex gap-3 items-center px-6 py-4">
                        <div className="bg-blue-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">Published On</div>
                        <div className="text-sm">{formatDate(date)}</div>
                    </div>

                    <div className="px-6 py-4 border-t border-gray-200">
                        <div className="border rounded-lg p-4 bg-gray-200">
                            {content}
                        </div>
                    </div>

                    <div className="bg-gray-200 px-6 py-4">
                        <div className="uppercase text-xs text-gray-600 font-bold">Author</div>

                        <div className="flex items-center pt-3">
                            <div className="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">{getInitials(author)}</div>
                            <div className="ml-4">
                                <p className="font-bold">{author}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;