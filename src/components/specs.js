import React, { useRef, useEffect, useState } from "react"
// import { graphql, useStaticQuery } from 'gatsby'
import { animated, useSpring } from "react-spring";
import styled from 'styled-components';

const Specs = ({ specView }) => {
  const [standard, setStandard] = useState(20);
  const [premium, setPremium] = useState(20);
  const [selected, setSelected] = useState('standard');
  const [hover, setHover] = useState(0);

  const topSpeed = useSpring({
    number: specView > 230 ? 124 : 0,
    config: {duration: 700},
  });

  const peakTorque = useSpring({
    number: specView > 230 ? 140 : 0,
    config: {duration: 700},
  });

  const oct = useSpring({
    number: specView > 230 ? 80 : 0,
    config: {duration: 700},
  });

  return (
    <Container>
      <Title>TECHNICAL SPECIFICATIONS</Title>
      <Buttons>
        <Button
          onMouseEnter={() => setStandard(90)}
          onMouseLeave={() => setStandard(20)}
          onClick={() => setSelected('standard')}
        >
          <div style={selected === 'standard' ? {color: 'rgb(150, 150, 150)'} : {color: 'black'}}>Standard</div>
          <Line style={selected === 'standard' ? {border: '1px solid rgb(150, 150, 150)', width: `${standard}px`} : {border: '1px solid black', width: `${standard}px`}}/>
        </Button>
        <Button
          onMouseEnter={() => setPremium(90)}
          onMouseLeave={() => setPremium(20)}
          onClick={() => setSelected('premium')}
        >
          <div style={selected === 'premium' ? {color: 'rgb(150, 150, 150)'} : {color: 'black'}}>Premium</div>
          <Line style={selected === 'premium' ? {border: '1px solid rgb(150, 150, 150)', width: `${premium}px`} : {border: '1px solid black', width: `${premium}px`}}/>
        </Button>
      </Buttons>
      <SpecContainer>
        <Column>
          <Spec>TOP SPEED (MAX)</Spec>
          <Big><animated.div>{topSpeed.number.interpolate(num => Math.floor(num))}</animated.div></Big>
          <Spec style={{marginBottom: '10px'}}>MPH</Spec>
          <Other>200 MILE RANGE</Other>
          <Details>With Power Tank</Details>
          <Other>161 MILES</Other>
          <Details>City Range</Details>
          <Other>BOSCH</Other>
          <Details>Motorcycle stability control</Details>
        </Column>
        <Column>
          <Spec>PEAK TORQUE</Spec>
          <Big><animated.div>{peakTorque.number.interpolate(num => Math.floor(num))}</animated.div></Big>
          <Spec style={{marginBottom: '10px'}}>FT-LB</Spec>
          <Other>100% ELECTRIC POWERTRAIN</Other>
          <Details>Low maintenance</Details>
          <Other>CLUTCHLESS DIRECT DRIVE</Other>
          <Details>Transmission</Details>
          <Other>31.0 IN</Other>
          <Details>Seat height</Details>
        </Column>
        <Column>
          <Spec>OPTIMAL CHARGING TIME</Spec>
          <Big><animated.div>{oct.number.interpolate(num => Math.floor(num))}</animated.div></Big>
          <Spec style={{marginBottom: '10px'}}>MINUTES</Spec>
          <Other>CYPHER III</Other>
          <Details>Operating system</Details>
          <Other>485 LB</Other>
          <Details>Curb weight</Details>
          <Other>5 YEARS/UNLIMITED MILES</Other>
          <Details>Power pack warranty*</Details>
        </Column>
      </SpecContainer>
      <div style={{ color: 'rgb(150, 150, 150)', marginTop: '36px' }}>Full Specs</div>
      <Plus
        onMouseEnter={() => setHover(-90)}
        onMouseLeave={() => setHover(0)}
        style={{transform: `rotate(${hover}deg)`}}
      >+</Plus>
    </Container>
  )
};

const Big = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 80px;
  margin-top: -20px;
  margin-bottom: -10px;
`
const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease;
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  font-size: 24px;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 295px;
`
const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(240, 240, 240);
`
const Details = styled.div`
  color: rgb(150, 150, 150);
  margin-top: 3px;
`
const Line = styled.div`
  margin-top: 10px;
  transition: all 0.4s ease;
`
const Other = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  margin-top: 16px;
`
const Plus = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  margin-top: 10px;
  border: 1px solid rgb(150, 150, 150);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(150, 150, 150);
  font-size: 35px;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background: rgb(200, 200, 200);
  }
`
const Spec = styled.div`
  color: rgb(150, 150, 150);
  font-size: 15px;
`
const SpecContainer = styled.div`
  margin-top: 30px;
  width: 900px;
  display: flex;
  justify-content: space-between;
`
const Title = styled.div`
  font-size: 35px;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  margin-bottom: 24px;
  margin-top: -80px;
`

export default Specs;