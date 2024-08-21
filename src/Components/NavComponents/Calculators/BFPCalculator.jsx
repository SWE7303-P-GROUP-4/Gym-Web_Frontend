import React, { useState } from "react";
import axios from "axios";

export default function BFPCalculator() {
    const [formData, setFormData] = useState({
        waist: "",
        height: "",
        neck: "",
        bfpresult: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://ec2-16-171-30-80.eu-north-1.compute.amazonaws.com:5000/api/v1/calculator/bfp", formData);
            console.log("Response from backend:", response.data);
            // Update the bfpresult field in the form data with the received value
            setFormData({ ...formData, bfpresult: response.data.bfp });
        } catch (error) {
            console.error("Error:", error);
            // Handle error
        }
    };
    
    const reset = () => {
        setFormData({
            waist: "",
            height: "",
            neck: "",
            bfpresult: ""
        })
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <form onSubmit={handleSubmit}>
                <h4 className="text-2xl font-semibold mb-4">Body Fat % Calculator</h4>
                <hr className=" border-black mb-5" />
                <div className="mb-4">
                    <label htmlFor="waist" className="block mb-2">Waist (in.)</label>
                    <input type="number" name="waist" id="waist" value={formData.waist} onChange={handleChange} className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" placeholder="Enter Waist" />
                </div>

                <div className="mb-4">
                    <label htmlFor="neck" className="block mb-2">Neck (in.)</label>
                    <input type="number" name="neck" id="neck" value={formData.neck} onChange={handleChange} className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" placeholder="Enter Neck" />
                </div>

                <div className="mb-4">
                    <label htmlFor="height" className="block mb-2">Height (cm)</label>
                    <input type="number" name="height" id="height" value={formData.height} onChange={handleChange} className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" placeholder="Enter height" />
                </div>

                <div className="mb-4">
                    <label htmlFor="bfpresult" className="block mb-2">Your Body Fat Percentage Is</label>
                    <input type="text" name="bfpresult" id="bfpresult" value={formData.bfpresult} readOnly className="w-full border border-gray-300 bg-gray-200 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-400" />
                </div>

                <hr className="my-6 border-t" />

                <div className="flex justify-between">
                    <button type="submit" className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400">Calculate</button>
                    <button onClick={reset} type="reset" className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400">Reset</button>
                </div>
            </form>
        </div>
    );
}
