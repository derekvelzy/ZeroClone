import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from "react-spring";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

const calc = (o) => `translateY(${o * 0.2}px)`;

const Power = ({ closePower, power }) => {

  return (
    <Container>
      <Overlay>
        <Close onClick={() => closePower()}>+</Close>
        <Content>
          <Parallax pages={3.3} style={{width: '80vw'}}>
            <ItemParallax>
              <ParallaxLayer speed={1}>
                <picture>
                  <source
                    style={{width: '37vw', marginLeft: '20vw', marginTop: '50px'}}
                    srcSet="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/battery.webp"
                  />
                  <img
                    style={{width: '37vw', marginLeft: '20vw', marginTop: '50px'}}
                    src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/battery.jpg"
                  />
                </picture>
                <picture>
                  <source
                    style={{width: '77vw', marginLeft: '2vw', marginTop: '200px'}}
                    srcSet="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/motor.webp"
                  />
                  <img
                    style={{width: '77vw', marginLeft: '2vw', marginTop: '200px'}}
                    src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/motor.jpg"
                  />
                </picture>
                <picture>
                  <source
                    style={{width: '50vw', height: '100vh', objectFit: 'cover', marginTop: '660px'}}
                    srcSet="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/charging.webp"
                  />
                  <img
                    style={{width: '50vw', height: '100vh', objectFit: 'cover', marginTop: '660px'}}
                    src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/charging.jpg"
                  />
                </picture>
                <picture>
                  <source
                    style={{width: '42vw', marginTop: '120px', marginLeft: '20vw'}}
                    srcSet="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/frame.webp"
                  />
                  <img
                    style={{width: '42vw', marginTop: '120px', marginLeft: '20vw'}}
                    src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/frame.jpg"
                  />
                </picture>
              </ParallaxLayer>
            </ItemParallax>
            <ParallaxLayer speed={0.7} style={{marginLeft: '10vw'}}>
              <Item style={{marginTop: '100px'}}>
                <ItemTitle>ZF14.4 BATTERY PACK</ItemTitle>
                <ItemDesc>
                  The ZF14.4 lithium-ion battery makes the SR/F capable of a 200-mile maximum range.* The battery’s industry-leading power and energy density combined with an aluminum heat-sink housing and thermal transfer interface ensure consistent cell cooling and maximum long-term powertrain performance.
                </ItemDesc>
              </Item>
              <Item style={{marginTop: '200px'}}>
                <ItemTitle>ZF75-10 MOTOR</ItemTitle>
                <ItemDesc>
                  The ZF75-10 motor delivers 140 ft-lbs of torque and 110 hp, effortlessly propelling the SR/F to a top speed of 124 mph. Pairing Zero’s renowned internal permanent magnet brushless architecture and a passively air-cooled compact design creates class-leading performance and efficiency.
                </ItemDesc>
              </Item>
              <Effortless>EFFORTLESS POWER</Effortless>
              <EffortlessDesc>
                THE UNPRECEDENTED COMBINATION OF INDUSTRY-LEADING POWER, CONTROL, AND CONNECTION.
              </EffortlessDesc>
              <Item style={{marginTop: '250px', alignItems: 'flex-end'}}>
                <ItemTitle style={{alignSelf: 'flex-start', marginLeft: '36vw'}}>
                  RAPID CHARGE SYSTEM
                </ItemTitle>
                <ItemDesc>
                  Our all-new scalable Rapid Charge System allows the bike to be configured for 3 kW, 6 kW, 9 kW or 12 kW of charging at any standard Level 2 charge station.* The SR/F Rapid Charge System will be able to charge at 38 miles of range per hour of charging (mphc) on 3 kW, 76 mphc on 6 kw, and 153 mphc on 12 kW which can recharge the battery pack to 95% capacity in 1 hour of charging.
                </ItemDesc>
              </Item>
              <Item style={{marginTop: '200px'}}>
                <ItemTitle>POWER PIVOT</ItemTitle>
                <ItemDesc>
                A proprietary concentric motor and swingarm pivot design provide the optimal architecture to ensure constant drive-belt tension and maximum torque delivery to the rear wheel. A custom-designed, large-bearing swingarm pivot allows ample space for the high-performance motor while allowing a slim chassis waist to enhance rider ergonomics and bike maneuverability.
                </ItemDesc>
              </Item>
            </ParallaxLayer>
            <Footer>
              <FootText>EFFORTLESS CONTROLL</FootText>
              <picture>
                <MojSource srcSet="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/mojave.webp" />
                <Moj src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/mojave.jpg" />
              </picture>
            </Footer>
          </Parallax>
        </Content>
      </Overlay>
    </Container>
  )
};

const Close = styled.div`
  background: rgb(96, 168, 150);
  position: fixed;
  margin-top: 42vh;
  margin-left: -28px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-weight: 100;
  color: white;
  cursor: pointer;
  transform: rotate(45deg);
  transition: all 0.4s ease;
  z-index: 105;
  &:hover {
    transform: rotate(-45deg);
    background: rgb(54, 97, 86);
  }
`
const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  color: black;
  position: fixed;
  z-index: 100;
`
const Content = styled.div`
  z-index: 102;
  position: relative;
  overflow: auto;
  height: 100%;
  width: 80vw;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
`
const Effortless = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 45px;
  color: rgb(50, 50, 50);
  margin: 250px 0px 20px 0px;
  width: 50vw;
  margin-left: 8vw;
  letter-spacing: 2px;
`
const EffortlessDesc = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  color: rgb(200, 200, 200);
  font-size: 28px;
  width: 50vw;
  margin-left: 8vw;
  letter-spacing: 2px;
`
const Footer = styled.div`
  height: 150px;
  position: absolute;
  width: 80vw;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 35px;
  color: white;
  letter-spacing: 2px;
`
const FootText = styled.div`
  position: absolute;
  z-index: 121;
`
const Item = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 60vw;
  z-index: 120;
`
const ItemDesc = styled.div`
  width: 24vw;
  color: rgb(130, 130, 130);
  font-size: 18px;
  line-height: 40px;
`
const ItemParallax = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80vw;
`
const ItemTitle = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  margin-bottom: 40px;
  font-size: 30px;
  letter-spacing: 2px;
  color: rgb(80, 80, 80);
`
const Moj = styled.img`
  object-fit: cover;
  width: 80vw;
  height: 165px;
  filter: brightness(0.3);
  z-index: 120;
`
const MojSource = styled.source`
  object-fit: cover;
  width: 80vw;
  height: 165px;
  filter: brightness(0.3);
  z-index: 120;
`
const MotorParallax = styled.div`
  display: flex;
  align-items: flex-start;
  width: 60vw;
  position: absolute;
  z-index: 110;
`
const Overlay = styled.div`
  z-index: 101;
  position: absolute;
  top: 0;
  left: 0;
  width: 80vw;
  height: 100vh;
  background: rgb(255, 255, 255);
`

export default Power;