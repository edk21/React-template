import React from 'react'
import Icon1 from "../../assets/images/svg-4.svg"
import Icon2 from "../../assets/images/svg-5.svg"
import Icon3 from "../../assets/images/svg-6.svg"
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from "./ServiceElements"

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expences</ServicesH2>
                    <ServicesP>We help you increase your revenue and reduce your fees.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual offices</ServicesH2>
                    <ServicesP>You can get acces to our platform online from anywhere around the globe. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that gives you 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
