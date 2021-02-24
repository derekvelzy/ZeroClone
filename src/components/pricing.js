import React, { useRef, useEffect, useState } from "react"
import { animated, useSpring } from "react-spring";
import styled from 'styled-components';

const Pricing = ({ paint, setPaint }) => {
  const [hovers, setHovers] = useState(['gray', 'gray', 'gray', 'gray', 'gray']);
  const [first, setFirst] = useState(21);
  const [last, setLast] = useState(495);
  const [modelType, setModelType] = useState('premium');
  const [optionsType, setOptionsType] = useState('base');

  useEffect(() => {
    let sum = 19495;
    sum += modelType === 'premium' ? 2000 : 0;
    if (optionsType === 'add') {
      sum += 2300;
    } else if (optionsType === 'power') {
      sum += 2895;
    }
    const string = sum.toString();
    setFirst(Number.parseInt(string.substring(0, 2)));
    setLast(Number.parseInt(string.substring(2)));
  }, [modelType, optionsType]);

  const firstProps = useSpring({
    number: first,
    from: {number: 0},
    config: {duration: 400},
  });
  const lastProps = useSpring({
    number: last,
    from: {number: 0},
    config: {duration: 400},
  });

  const blueFrameProps = useSpring({
    marginLeft: !paint ? '-38vw' : '-65vw',
    from: { marginLeft: '-38vw' },
    config: {duration: 400},
    delay: !paint ? 400 : 0
  });

  const blueFramePropsOpac = useSpring({
    opacity: !paint ? '1' : '0',
    from: { opacity: '1' },
    config: {duration: 0},
    delay: 400
  });

  const grayFrameProps = useSpring({
    marginLeft: !paint ? '-65vw' : '-38vw',
    from: { marginLeft: '-65vw' },
    config: {duration: 400},
    delay: !paint ? 0 : 400
  });

  const grayFramePropsOpac = useSpring({
    opacity: !paint ? '0' : '1',
    from: { opacity: '0' },
    config: {duration: 0},
    delay: 400
  });

  const blueWheelProps = useSpring({
    marginLeft: !paint ? '16vw' : '-10.8vw',
    from: { marginLeft: '16vw' },
    config: {duration: 400},
    delay: !paint ? 400 : 0
  });

  const blueWheelPropsOpac = useSpring({
    opacity: !paint ? '1' : '0',
    from: { opacity: '1' },
    config: {duration: 0},
    delay: 400
  });

  const grayWheelProps = useSpring({
    marginLeft: !paint ? '-10.8vw' : '16vw',
    from: { marginLeft: '-10.8vw' },
    config: {duration: 400},
    delay: !paint ? 0 : 400
  });

  const grayWheelPropsOpac = useSpring({
    opacity: !paint ? '0' : '1',
    from: { opacity: '0' },
    config: {duration: 0},
    delay: 400
  });

  const [hoverGray, setHoverGray] = useState(false);
  const [hoverBlue, setHoverBlue] = useState(false);

  let blueBorder = '2px solid rgb(157, 189, 174)';
  if (hoverBlue) {
    blueBorder = '2px solid rgb(250, 250, 250)';
  } else if (!paint) {
    blueBorder = '2px solid rgb(200, 200, 200)';
  }

  let grayBorder = '2px solid rgb(80, 80, 80)';
  if (hoverGray) {
    grayBorder = '2px solid rgb(250, 250, 250)';
  } else if (paint) {
    grayBorder = '2px solid rgb(200, 200, 200)';
  }

  return (
    <Container style={paint ? {background: 'rgb(90, 90, 90)'} : {}}>
      <div>
        <animated.div style={{...blueFrameProps, ...blueFramePropsOpac}}>
          <Frame
            src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/srfFrame.png"
          />
        </animated.div>
        <animated.div style={{...blueWheelProps, ...blueWheelPropsOpac}}>
          <Wheel
            style={!paint ? {transform: 'rotate(90deg)', transition: 'all 0.4s linear', transitionDelay: '0.4s'} : {transform: 'rotate(20deg)', transition: 'all 0.4s linear'}}
            src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/srfWheel.png"
          />
        </animated.div>
        <animated.div style={{...grayFrameProps, ...grayFramePropsOpac}}>
          <Frame
            src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/srfGrayFrame.png"
          />
        </animated.div>
        <animated.div style={{...grayWheelProps, ...grayFramePropsOpac}}>
          <Wheel
            style={paint ? {transform: 'rotate(90deg)', transition: 'all 0.4s linear', transitionDelay: '0.4s'} : {transform: 'rotate(20deg)', transition: 'all 0.4s linear'}}
            src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/srfGrayWheel.png"
          />
        </animated.div>
      </div>
      <Right>
        <Title>BUILD & PRICE</Title>
        <Option>COLOR</Option>
        <Switch>
          <Blue
            onMouseEnter={() => setHoverBlue(true)}
            onMouseLeave={() => setHoverBlue(false)}
            onClick={() => setPaint(false)}
            style={{border:`${blueBorder}`, transition: 'all 0.4s ease'}}
          />
          <Gray
            onMouseEnter={() => setHoverGray(true)}
            onMouseLeave={() => setHoverGray(false)}
            onClick={() => setPaint(true)}
            style={{border:`${grayBorder}`, transition: 'all 0.4s ease'}}
          />
        </Switch>
        <Option>MODEL</Option>
        <ModelOptions>
          <Button
            onMouseEnter={() => setHovers(['white', 'gray', 'gray', 'gray', 'gray'])}
            onMouseLeave={() => setHovers(['gray', 'gray', 'gray', 'gray', 'gray'])}
            onClick={() => setModelType('premium')}
            style={
              modelType === 'premium' ?
              { background: 'rgb(70, 70, 70)', border: `1px solid ${hovers[0]}` } :
              { border: `1px solid ${hovers[0]}` }}
          >
            <div>PREMIUM</div>
            <div>$21,495</div>
          </Button>
          <Q>?</Q>
          <Button
            onMouseEnter={() => setHovers(['gray', 'white', 'gray', 'gray', 'gray'])}
            onMouseLeave={() => setHovers(['gray', 'gray', 'gray', 'gray', 'gray'])}
            onClick={() => setModelType('standard')}
            style={
              modelType === 'standard' ?
              { background: 'rgb(70, 70, 70)', border: `1px solid ${hovers[1]}` } :
              { border: `1px solid ${hovers[1]}` }}
          >
            <div>STANDARD</div>
            <div>$19,495</div>
          </Button>
          <Q>?</Q>
        </ModelOptions>
        <Option>OPTIONS</Option>
        <ModelOptions>
          <Button
            onMouseEnter={() => setHovers(['gray', 'gray', 'white', 'gray', 'gray'])}
            onMouseLeave={() => setHovers(['gray', 'gray', 'gray', 'gray', 'gray'])}
            onClick={() => setOptionsType('base')}
            style={
              optionsType === 'base' ?
              { background: 'rgb(70, 70, 70)', border: `1px solid ${hovers[2]}` } :
              { border: `1px solid ${hovers[2]}` }}
          >
            <div>BASE</div>
            <div>+ $0</div>
          </Button>
          <div style={{width: '32px'}}/>
          <Button
            onMouseEnter={() => setHovers(['gray', 'gray', 'gray', 'white', 'gray'])}
            onMouseLeave={() => setHovers(['gray', 'gray', 'gray', 'gray', 'gray'])}
            onClick={() => setOptionsType('add')}
            style={
              optionsType === 'add' ?
              { background: 'rgb(70, 70, 70)', border: `1px solid ${hovers[3]}` } :
              { border: `1px solid ${hovers[3]}` }}
          >
            <div>ADDITIONAL 6 KW</div>
            <div>+ $2,300</div>
          </Button>
          <Q>?</Q>
        </ModelOptions>
        <ModelOptions style={{width: '300px'}}>
          <Button
            onMouseEnter={() => setHovers(['gray', 'gray', 'gray', 'gray', 'white'])}
            onMouseLeave={() => setHovers(['gray', 'gray', 'gray', 'gray', 'gray'])}
            onClick={() => setOptionsType('power')}
            style={
              optionsType === 'power' ?
              { background: 'rgb(70, 70, 70)', border: `1px solid ${hovers[4]}` } :
              { border: `1px solid ${hovers[4]}` }}
          >
            <div>POWER TANK</div>
            <div>+ $2,895</div>
          </Button>
          <Q >?</Q>
        </ModelOptions>
        <Price>$
          <animated.div>{firstProps.number.interpolate(n => Math.floor(n))}</animated.div>,
          <animated.div>{lastProps.number.interpolate(n => Math.floor(n))}</animated.div>
        </Price>
      </Right>
    </Container>
  )
};

const Blue = styled.div`
  background: rgb(96, 168, 150);
  height: 22px;
  width: 22px;
  border-radius: 50%;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    border: '1px solid rgb(30, 230, 230)'
  }
`
const Button = styled.div`
  width: 220px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(170, 170, 170);
  font-size: 13px;
  padding: 0px 15px 0px 15px;
  cursor: pointer;
  transition: all 0.4s ease;
`
const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  transition: all 1s ease;
`
const Frame = styled.img`
  position: absolute;
  height: 90vh;
  z-index: 2;
`
const Gray = styled.div`
  background: rgb(80, 80, 80);
  height: 22px;
  width: 22px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: '1px solid rgb(30, 230, 230)'
  }
`
const ModelOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 620px;
  margin-bottom: 20px;
`
const Option = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  letter-spacing: 2px;
  color: white;
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 18px;
`
const Price = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 28px;
  letter-spacing: 2px;
  color: white;
  margin-top: 15px;
  display: flex;
`
const Q = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: rgb(100, 100, 100);
  color: white;
  font-size: 13px;
  margin-right: 5px;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50vw;
  z-index: 3;
`
const Switch = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75px;
`
const Title = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 28px;
  letter-spacing: 2px;
  color: white;
  margin-bottom: 10px;
  margin-top: 20px;
`
const Wheel = styled.img`
  position: absolute;
  height: 36vh;
  margin-top: 49.6vh;
  z-index: 1;
`

export default Pricing;