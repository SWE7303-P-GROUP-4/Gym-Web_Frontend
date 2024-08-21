import React, { useState } from "react";
import axios from "axios"

export default function BMICalculator() {
    const [formData, setFormData] = useState({
        weight: "",
        height: "",
        bmiresult: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://ec2-16-171-30-80.eu-north-1.compute.amazonaws.com:5000/api/v1/calculator/bmi", formData);
            console.log("Response from backend:", response.data);
            // Update the bmiresult field in the form data with the received value
            setFormData({ ...formData, bmiresult: response.data.bmi });
        } catch (error) {
            console.error("Error:", error);
            // Handle error
        }
    };
    
    const reset = () => {
        setFormData({
            weight: "",
            height: "",
            bmiresult: ""
        })
    }
    return (
        <div className="bg-white shadow-md rounded-lg p-6 h-fit">
            <form onSubmit={handleSubmit}>
                <h4 className="text-2xl font-semibold mb-4">BMI Calculator</h4>
                <hr className=" border-black mb-5" />
                <div className="mb-4">
                    <label htmlFor="weight" className="block mb-2">Weight (kg)</label>
                    <input type="number" name="weight" id="weight" value={formData.weight} onChange={handleChange} className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" placeholder="Enter weight" />
                </div>

                <div className="mb-4">
                    <label htmlFor="height" className="block mb-2">Height (m)</label>
                    <input type="number" name="height" id="height" value={formData.height} onChange={handleChange} className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" placeholder="Enter height" />
                </div>

                <div className="mb-4">
                    <label htmlFor="bmiresult" className="block mb-2">Your BMI is</label>
                    <input type="text" name="bmiresult" id="bmiresult" value={formData.bmiresult} className="w-full border border-gray-300 bg-gray-200 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" readOnly />
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