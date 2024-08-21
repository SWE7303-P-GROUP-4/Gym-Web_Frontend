import React, { useState } from "react";
import axios from "axios"

export default function Selectors({ setExercises }) {
    const [selections, setSelections] = useState({
        Duration: "15",
        Difficulty: "Beginner",
        Focus: "Muscle"
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setSelections(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const generate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://ec2-16-171-30-80.eu-north-1.compute.amazonaws.com:5000/api/v1/exercises", selections);
            if (response.status == 200) {
                let data = response.data;
                data = data.map(obj => {
                    return {
                        ...obj,
                        duration: selections.Duration,
                        difficulty: selections.Difficulty,
                        focus: selections.Focus
                    }
                })
                setExercises(data);
            } else {
                console.log("Internal Server Error", response);
            }
        } catch (error) {
            console.log("Error, ", error);
        }
    }

    return (
        <div style={{
            background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
        }} className="rounded-xl h-fit m-12 flex flex-col lg:flex-row items-center justify-center p-10 gap-5">

            <div className=" w-full lg:basis-1/4">
                <label for="Duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration (Minutes)</label>
                <select id="Duration" className="bg-gray-200 border border-gray-200 text-gray-900 mb-6 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-md font-bold" onChange={handleChange}>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                    <option value="60">60</option>
                </select>
            </div>

            <div className=" w-full lg:basis-1/4">
                <label for="Difficulty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Difficulty</label>
                <select id="Difficulty" className="bg-gray-200 border border-gray-200 text-gray-900 mb-6 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-md font-bold" onChange={handleChange}>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>

            <div className=" w-full lg:basis-1/4">
                <label for="Focus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Focus</label>
                <select id="Focus" className="bg-gray-200 border border-gray-200 text-gray-900 mb-6 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-md font-bold" onChange={handleChange}>
                    <option value="Muscle">Muscle</option>
                    <option value="Strength">Strength</option>
                    <option value="Speed">Speed</option>
                    <option value="Mobility">Mobility</option>
                    <option value="Flexibility">Flexibility</option>
                    <option value="Cardio">Cardio</option>
                </select>
            </div>

            <div className=" w-full lg:basis-1/4 flex items-center justify-center">
                <button onClick={generate}><span class="h-12 flex text-white rounded-xl items-center justify-center uppercase font-semibold px-8 border-2 border-white hover:bg-white hover:border-blue-800 hover:text-blue-800 transition duration-300 ease-in-out focus:bg-gray-100 active:bg-gray-400">Generate</span></button>
            </div>

        </div>
    );
}