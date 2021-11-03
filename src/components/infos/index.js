import React from 'react'
import { Button } from '../ButtonElements'
import {  
    InfoContainer,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    SubTitle,
    Heading,
    BtnWrap,
    ImgWrap,
    Img,
    InfoWrapper
} from "./InfoElements"

//import img from "../../assets/images/svg-1.svg"

const Info = ({ lightBg, id, imgStart, topLine, headLine, darkText, description, lightText, buttonLabel, alt, primary, dark, img }) => {
    return (
        <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart={imgStart} >
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText} >{headLine}</Heading>
                        <SubTitle darkText={darkText} >{description}</SubTitle>
                        <BtnWrap>
                            <Button 
                                to="/home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}    
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default Info
