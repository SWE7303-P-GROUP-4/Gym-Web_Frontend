import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant, staggerContainer } from './motion'
import { shuffle, takeRight } from 'lodash';
import axios from "axios"
import { Link } from "react-router-dom"


const ServiceCard2 = ({ index }) => {
    const [articles, setArticles] = useState([])
    
    const getArticles = async () => {
        try {
            const response = await axios.get("http://ec2-16-171-30-80.eu-north-1.compute.amazonaws.com:5000/api/v1/articles");
            console.log(response.data);
            setArticles(takeRight(shuffle(response.data), 3));
        } catch (error) {
            console.log("Error fetching articles...", error);
        }
    }

    useEffect(() => {
        getArticles();
    }, [])

    return (
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full p-[1px] rounded-[20px]'>
            <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-gray-300 relative rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <div class="bg-gray-100 p-8">
                    <h2 class="text-3xl font-bold text-center text-gray-900 mb-6">Latest Articles</h2>

                    {/* This part is to be made dynamic */}
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="p-6 bg-white rounded-lg shadow-md">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">{articles.length > 0 && articles[0].title}</h3>
                            <p class="text-gray-700 mb-4">{ articles.length > 0 && articles[0].body.split(" ").splice(0, 10).join(" ") + "..."}</p>
                            <Link to='/nutrition'><a href="#" class="text-blue-600 hover:text-blue-800">Learn More</a></Link>
                        </div>

                        <div class="p-6 bg-white rounded-lg shadow-md">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">{articles.length > 0 && articles[1].title}</h3>
                            <p class="text-gray-700 mb-4">{ articles.length > 0 && articles[1].body.split(" ").splice(0, 10).join(" ") + "..."}</p>
                            <Link to='/nutrition'><a href="#" class="text-blue-600 hover:text-blue-800">Learn More</a></Link>
                        </div>


                        <div class="p-6 bg-white rounded-lg shadow-md">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">{articles.length > 0 && articles[2].title}</h3>
                            <p class="text-gray-700 mb-4">{ articles.length > 0 && articles[2].body.split(" ").splice(0, 10).join(" ") + "..."}</p>
                            <Link to='/nutrition'><a href="#" class="text-blue-600 hover:text-blue-800">Learn More</a></Link>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>


    );
}

const Hero2 = () => {

    return (
        <section className='z-0 flex flex-col mb-10 mt-10'>
            <div className="z-0">
                <motion.div variants={textVariant()}>
                    <p className="blue-text-gradient font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</p>
                </motion.div>
                <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 font-semibold text-lg text-gray-700  text-[17px] max-w-3xl leading-[30px]'>
                    Welcome to Pro Nutrition & Fitness! We're here to help you reach your fitness goals with personalized nutrition plans, tailored workouts, and expert guidance. Let's embark on this journey to a healthier, stronger you together!
                </motion.p>
                <hr className='mt-5 border-black' />
                <div className='mt-20 flex flex-col gap-5'>
                    <ServiceCard2 index={0} />
                </div>
            </div>
        </section>
    );

}

const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section variants={staggerContainer()} initial='hidden' whileInView={'show'} viewport={{ once: true, amount: 0.25 }} className={`sm:px-16 px-6 max-w-7xl mx-autor relative z-0`}>
            <span className='hash-span' id={idName}></span>
            <Component />
        </motion.section>
    );
}


export default SectionWrapper(Hero2, "about")