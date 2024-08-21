import React, { useState } from "react";
import _15 from "../../../../public/exPngs/15.png"
import _30 from "../../../../public/exPngs/30.png"
import _45 from "../../../../public/exPngs/45.png"
import _60 from "../../../../public/exPngs/60.png"

import muscle from "../../../../public/exPngs/muscle.png"
import strength from "../../../../public/exPngs/strength.png"
import speed from "../../../../public/exPngs/run.png"
import mobility from "../../../../public/exPngs/mobility.png"
import flexibility from "../../../../public/exPngs/flexibility.png"
import cardio from "../../../../public/exPngs/cardio.png"

export default function ExerciseCard({ name, amount, instructions, difficulty, time, focus }) {
    const [show, setShow] = useState(false);

    const data = {
        "15": _15,
        "30": _30,
        "45": _45,
        "60": _60,
        "muscle": muscle,
        "strength": strength,
        "speed": speed,
        "mobility": mobility,
        "flexibility": flexibility,
        "cardio": cardio,
        "beginner": "border-green-600 text-green-600",
        "intermediate": "border-blue-600 text-blue-600",
        "advanced": "border-red-600 text-red-600"
    }

    const linesMatch = instructions.matchAll(/[A-Z\-\s]+:\s.*?(?=[A-Z\-\s]+:|$)/g);
    const lines = [];
    for (const line of linesMatch) {
        lines.push(line)
    }

    return (
        <div className="container mx-auto">
            <div className="max-w-md w-full bg-gray-200 shadow-lg rounded-xl p-6">
                <div className="flex flex-col">

                    <div className="">
                        <div className="flex flex-col lg:flex-row md:flex-row justify-between">
                            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mr-auto cursor-pointer truncate ">{name}</h2>
                            <div className={`flex items-center w-fit self-start text-center justify-center border-2 ${data[difficulty]} font-bold text-md px-2 py-1 rounded-lg`}>
                                {difficulty.toUpperCase()}
                            </div>
                        </div>
                        <div className="text-xl text-gray-800 font-semibold mt-1">{amount}</div>
                        <hr className="w-full border-black mt-5" />

                        <div className="flex flex-col lg:flex-row items-start md:flex-row lg:items-center justify-between">
                            <div className="text-2xl underline mb-5 text-gray-800 font-semibold mt-4">INSTRUCTIONS{!show && " ...."}</div>
                            <div className="lg:ml-auto ml-0 mb-5 mt-4 items-center justify-center">
                                <button onClick={() => setShow(!show)} type="button" className="inline-flex justify-center rounded-md border border-transparent shadow-sm bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Expand
                                    <svg className="-mr-1 ml-2 h-5 w-5 transform rotate-180 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 12a1 1 0 00-.707.293l-4 4a1 1 0 001.414 1.414l4-4a1 1 0 00-.707-1.707z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M10 4a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 6.414 6.707 9.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 4zm0 8a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 14.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 12z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {show &&
                            <div className="my-3 flex flex-col gap-5">
                                {
                                    lines.map((line, index) => {
                                        return (
                                            <div key={index}>
                                                <h1 className="text-gray-700 text-lg font-bold">{line[0].split(":")[0]}</h1>
                                                <p>{line[0].split(":")[1]}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        }

                        <hr className="w-full border-black mt-5" />
                        <div className="lg:flex py-4 text-sm text-gray-600">
                            <div className="flex-1 inline-flex items-center">
                                <div className="w-full flex-none text-sm flex items-center text-gray-600">
                                    <ul className="flex flex-row w-full justify-center items-center space-x-2">
                                        <li className="">
                                            <img className="w-16" src={data[time]} alt="" />
                                        </li>
                                        <li className="">
                                            <img className="w-16" src={data[focus]} alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}