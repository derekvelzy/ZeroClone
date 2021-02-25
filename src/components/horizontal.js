import React, { useRef } from "react"
import styled from 'styled-components';

const Horizontal = () => {
  const ref = useRef();

  const scrollref = () => ref.current.scrollIntoView({behavior: "smooth", block: "nearest"});

  return (
    <Container>
      <Scroll>
        <Desc>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Title>EFFORTLESS CONTROL</Title>
            <Spec>
            The SR/F, equipped with Zero’s Cypher III operating system and Bosch’s Motorcycle Stability Control (MSC), is equal parts brawn and brains. Effortless power is paired with intuitive control, creating the new standard for premium performance—an adaptable motorcycle and powertrain combination that navigates diverse road terrain and conditions, effortlessly.
            </Spec>
          </div>
          <Plus
            onClick={scrollref}
          >{'>'}</Plus>
        </Desc>
        <picture>
          <BGSource alt="srfonewebp" srcSet="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/scrollonecomp.webp" />
          <BG alt="srfonejpg" src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/scrollone.jpg" />
        </picture>
        <picture ref={ref}>
          <BGSource alt="srftwowebp" srcSet="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/scrolltwo.webp" />
          <BG alt="srftwopng" src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/scrolltwo.png"/>
        </picture>
        <picture>
          <BGSource alt="srfthreewebp" srcSet="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/scrollthreecomp.webp" />
          <BG alt="srfthreejpg" src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/scrollthree.jpg" />
        </picture>
      </Scroll>
    </Container>
  )
};

const BGSource = styled.source`
  width: 45vw;
  height: 70vh;
  object-fit: cover;
  filter: brightness(35%);
  zIndex: 1;
  margin: 0 20px 0 20px;
  transition: all 0.4s ease;
  &:hover {
    filter: brightness(100%);
    transform: scale(1.05);
  }
`
const BG = styled.img`
  width: 45vw;
  height: 70vh;
  object-fit: cover;
  filter: brightness(35%);
  zIndex: 1;
  margin: 5vh 20px 5vh 20px;
  transition: all 0.4s ease;
  &:hover {
    filter: brightness(100%);
    transform: scale(1.05);
  }
`
const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  height: 80vh;
`
const Desc = styled.div`
  zIndex: 5;
  color: white;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  width: 550px;
  height: 80vh;
  flex: 0 0 auto;
  margin-left: 80px;
`
const Plus = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
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
  }
`
const Scroll = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  background: black;
`
const Spec = styled.div`
  width: 400px;
  line-height: 30px;
`
const Title = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 32px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  margin-top: -5vh;
`

export default Horizontal;
