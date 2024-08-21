import React from 'react'
import Navbar from '../Navbar/NavbarDummy'
import Footer from '../Footer/Footer'
import Hero from './HomeComponents/Hero'
import Hero2 from './HomeComponents/Hero2'
import Explore from './HomeComponents/Explore'

function DummyHome({  }) {
    return (
        <div>
            <Navbar />
            <Hero />
            <Hero2 />
            <Explore />
            <Footer />
        </div>
    )
}

export default DummyHome