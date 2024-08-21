import React from "react";
import ExerciseCard from "./ExerciseCard";

export default function Exercises({ exercises }) {
    return (
        <div>
            <div className="flex items-center justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-900">Workouts Based On Your Preference</h1>
            </div>
            <div style={{
                background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
            }} className="rounded-xl h-fit m-12 flex flex-col lg:grid lg:grid-cols-3 lg:items-center lg:justify-center items-center justify-center p-10 gap-5">
                
                {
                    exercises.map(exercise => {
                        return <ExerciseCard name={exercise.name} amount={exercise.amount} instructions={exercise.instructions} difficulty={exercise.difficulty.toLowerCase()} focus={exercise.focus.toLowerCase()} time={exercise.duration} />
                    })
                }

            </div>
        </div>
    );
}