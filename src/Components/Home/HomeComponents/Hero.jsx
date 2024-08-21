import React from 'react';
import hero from "../../../../public/download.jpg"

function Hero() {
    return (
        <div className="mt-0 text-white" style={{
            background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
        }}>
            <div class="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
                <div class="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
                    <div class="w-full md:w-1/2 lg:pr-32">
                        <h2 class="text-4xl lg:text-5xl text-center md:text-left text-white leading-tight font-medium">Unlock Your Potential with Pro Nutrition & Fitness</h2>
                        <h3
                            class=" mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-white tracking-wider leading-relaxed">"Empower Yourself with Expert Guidance and Tailored Solutions for Optimal Health and Performance"
                        </h3>
                        <div class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                            <button class="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">Get started</button>
                            <button class="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">Watch a Demo</button>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 flex justify-center md:justify-end">
                        <img className='w-fit h-fit' src={hero}></img>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Hero