import React,{useState} from 'react'
import Video from "../../assets/videos/video.mp4"
import {Button} from "../ButtonElements"

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight

}from "./HeroElements"

const Hero = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Technology at it edge
                </HeroH1>
                <HeroP>
                    Sign up for a new account today and receive your discount for your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="/signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary="true"
                    dark="true"
                    >Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
