import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from "react-spring";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

const calc = (o) => `translateY(${o * 0.2}px)`;

const Power = ({ closePower, power }) => {
  // const ref = useRef();
  // const [{offset}, set] = useSpring(() => ({ offset: 0 }));

  // const handleScroll = () => {
  //   console.log(document.getElementById('content').pageYOffset);
  //   // const offset = -1 * ref.current.getBoundingClientRect().top;
  //   // set({ offset });
  // }

  // useEffect(() => {
  //   document.getElementById('content').addEventListener('scroll', handleScroll);
  //   return () => {
  //     document.getElementById('content').removeEventListener("scroll", handleScroll);
  //   }
  // })

  return (
    <Container>
      <Overlay>
        <Close onClick={() => closePower()}>+</Close>
        <Parallax pages={3} style={{width: '80vw'}}>
          <Content>
            <Battery>
              <BatteryStats>
                <BattTitle>ZF14.4 BATTERY PACK</BattTitle>
                <BattDesc>
                  The ZF14.4 lithium-ion battery makes the SR/F capable of a 200-mile maximum range.* The battery’s industry-leading power and energy density combined with an aluminum heat-sink housing and thermal transfer interface ensure consistent cell cooling and maximum long-term powertrain performance.
                </BattDesc>
              </BatteryStats>
              <BatteryParallax>
                <ParallaxLayer speed={1.4} offset={0.4} style={{width: '30vw'}}>
                  <div>image</div>
                </ParallaxLayer>
              </BatteryParallax>
            </Battery>
            <div style={{height: '9000px'}}>me!</div>
            <div>h</div>

          </Content>
        </Parallax>
      </Overlay>
    </Container>
  )
};

const Battery = styled.div`
  margin-top: 100px;
  align-self: center;
  display: flex;
  justify-content: space-between;
  width: 60vw;
`
const BattTitle = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  margin-bottom: 40px;
  font-size: 30px;
  letter-spacing: 2px;
`
const BattDesc = styled.div`
  width: 24vw;
  color: rgb(100, 100, 100);
  font-size: 18px;
  line-height: 50px;
`
const BatteryParallax = styled.div`
  display: flex;
  align-items: flex-end;
  border: 1px solid green;
  width: 30vw;
`
const BatteryStats = styled.div`
  width: 30vw;
  border: 1px solid black;
`
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
  background: rgb(240, 240, 240);
  display: flex;
  flex-direction: column;
`
const Overlay = styled.div`
  z-index: 101;
  position: absolute;
  top: 0;
  left: 0;
  width: 80vw;
  height: 100vh;
  background: rgb(240, 240, 240);
`

export default Power;