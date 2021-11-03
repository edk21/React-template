import React, {useState} from 'react'
import Hero from '../components/hero'
import Info from '../components/infos'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infos/Data'
import Navbar from '../components/navbar'
import SideBar from '../components/sidebar'
import img1 from "../assets/images/svg-1.svg"
import img2 from "../assets/images/svg-2.svg"
import img3 from "../assets/images/svg-3.svg"
import Services from '../components/services'
import Footer from '../components/footer'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Info {...homeObjOne} img={img1}/>
            <Info {...homeObjTwo} img={img2}/>
            <Services />
            <Info {...homeObjThree} img={img3}/>
            <Footer />
        </>
    )
}

export default Home
