import React, { useState } from "react";
import axios from "axios"

export default function WLPCalculator() {
    const [formData, setFormData] = useState({
        start: "",
        current: "",
        wlpresult: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://ec2-16-171-30-80.eu-north-1.compute.amazonaws.com:5000/api/v1/calculator/wlp", formData);
            console.log("Response from backend:", response.data);
            // Update the wlpresult field in the form data with the received value
            setFormData({ ...formData, wlpresult: response.data.wlp });
        } catch (error) {
            console.error("Error:", error);
            // Handle error
        }
    };
    
    const reset = () => {
        setFormData({
            start: "",
            current: "",
            wlpresult: ""
        })
    }
    return (
        <div className="bg-white shadow-md rounded-lg p-6 h-fit">
            <form onSubmit={handleSubmit}>
                <h4 className="text-2xl font-semibold mb-4">Weight Loss % Calculator</h4>
                <hr className=" border-black mb-5" />
                <div className="mb-4">
                    <label htmlFor="start" className="block mb-2">Start Weight (kg)</label>
                    <input type="number" name="start" id="start" value={formData.start} onChange={handleChange} className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" placeholder="Enter Start Weight" />
                </div>

                <div className="mb-4">
                    <label htmlFor="current" className="block mb-2">Current Weight (kg)</label>
                    <input type="number" name="current" id="current" value={formData.current} onChange={handleChange} className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" placeholder="Enter Current Weight" />
                </div>

                <div className="mb-4">
                    <label htmlFor="wlpresult" className="block mb-2">Your Weight Loss Percentage Is</label>
                    <input type="text" name="wlpresult" id="wlpresult" value={formData.wlpresult} className="w-full border border-gray-300 bg-gray-200 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" readOnly />
                </div>

                <hr className="my-6 border-t" />

                <div className="flex justify-between">
                    <button type="submit" className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400">Calculate</button>
                    <button onClick={reset} type="button" className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400">Reset</button>
                </div>
            </form>
        </div>

    );
}