import React, { useState } from "react"
import { animated, useSpring } from "react-spring";
import styled from 'styled-components';

const Specs = ({ specView }) => {
  const [standard, setStandard] = useState(20);
  const [premium, setPremium] = useState(20);
  const [selected, setSelected] = useState('standard');
  const [hover, setHover] = useState(0);
  const [drawer, setDrawer] = useState(0);

  const openDrawer = () => {
    drawer === 0 ? setDrawer(45) : setDrawer(0);
  }

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
    <div>
      <Container>
        <Title>TECHNICAL SPECIFICATIONS</Title>
        <Buttons>
          <Button
            onMouseEnter={() => setStandard(90)}
            onMouseLeave={() => setStandard(20)}
            onClick={() => setSelected('standard')}
          >
            <div style={selected === 'standard' ?
            {color: 'rgb(150, 150, 150)', transition: 'all 0.4s ease'} :
            {color: 'black', transition: 'all 0.4s ease'}}
          >Standard</div>
            <Line style={selected === 'standard' ? {border: '1px solid rgb(150, 150, 150)', width: `${standard}px`} : {border: '1px solid black', width: `${standard}px`}}/>
          </Button>
          <Button
            onMouseEnter={() => setPremium(90)}
            onMouseLeave={() => setPremium(20)}
            onClick={() => setSelected('premium')}
          >
            <div style={selected === 'premium' ?
            {color: 'rgb(150, 150, 150)', transition: 'all 0.4s ease'} :
            {color: 'black', transition: 'all 0.4s ease'}}
          >Premium</div>
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
          onClick={() => openDrawer()}
          style={{transform: `rotate(${hover + drawer}deg)`}}
        >+</Plus>
      </Container>
      <Drawer style={drawer === 45 ? {display: 'flex'} : {display: 'none'}}>
        <More>
          <div style={{width: '30vw'}}>Range</div>
          <Spec style={{marginRight: '1vw'}}>STANDARD</Spec>
          <Spec style={{marginRight: '11vw'}}>PREMIUM</Spec>
        </More>
        <Columns>
          <Col1>
            <ColItem>City</ColItem>
            <ColItem>Highway, 55 mph (89 km/h)</ColItem>
            <ColItem>Highway, 70 mph (113 km/h)</ColItem>
          </Col1>
          <Col2>
            <ColDet>161 miles (259 km)</ColDet>
            <ColDet>99 miles (159 km)</ColDet>
            <ColDet>82 miles (132 km)</ColDet>
          </Col2>
          <Col2>
            <ColDet>161 miles (259 km)</ColDet>
            <ColDet>99 miles (159 km)</ColDet>
            <ColDet>82 miles (132 km)</ColDet>
          </Col2>
        </Columns>
      </Drawer>
    </div>
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
const Col1 = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Col2 = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const ColItem = styled.div`
  margin-top: 15px;
  color: rgb(100, 100, 100);
  font-size: 16px;
`
const ColDet = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  margin-top: 10px;
  font-size: 16px;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 295px;
`
const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vw;
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
const Drawer = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -90px;
  height: 200px;
  background: rgb(240, 240, 240);
`
const Line = styled.div`
  margin-top: 10px;
  transition: all 0.4s ease;
`
const More = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(100, 100, 100);
  width: 70vw;
  color: rgb(100, 100, 100);
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
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
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