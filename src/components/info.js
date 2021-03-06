import React, { useState, useEffect, useRef } from "react"
import styled from 'styled-components';

const Info = ({ setSpecView, openPower }) => {
  const ref = useRef();

  const [hover, setHover] = useState(0);

  const handleScroll = () => {
    const offset = -1 * ref.current.getBoundingClientRect().top;
    setSpecView(offset);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <Container ref={ref}>
      <picture>
        <BGSource
          alt="desert webp"
          srcSet="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/desert.webp"
        />
        <BG alt="desert" src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/desert.jpg" />
      </picture>
      <Desc>
        <Title>EFFORTLESS POWER</Title>
        <Spec>The SR/F delivers 140 ft-lbs of torque and 110 horsepower with the simple twist of a throttle thanks to the class-leading performance and efficiency of Zero’s new ZF75-10 motor and ZF14.4 lithium-ion battery.</Spec>
        <Plus
          onMouseEnter={() => setHover(-90)}
          onMouseLeave={() => setHover(0)}
          onClick={() => openPower()}
          style={{transform: `rotate(${hover}deg)`}}
        >+</Plus>
      </Desc>
    </Container>
  )
};

const BGSource = styled.source`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: brightness(35%);
  zIndex: 1;
`
const BG = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: brightness(35%);
  zIndex: 1;
`
const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
const Desc = styled.div`
  position: absolute;
  zIndex: 5;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Plus = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  margin-top: 40px;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 45px;
  cursor: pointer;
  transition: all 0.4s ease;
  background: rgb(96, 168, 150);
  &:hover {
    background: rgba(54, 97, 86, 0.6);
    backdrop-filter: blur(12px);
  }
`
const Spec = styled.div`
  width: 650px;
  text-align: center;
  line-height: 24px;
`
const Title = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 32px;
  letter-spacing: 2px;
  margin-top: 41vh;
  margin-bottom: 35px;
`

export default Info;
