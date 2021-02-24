import React, { useRef, useEffect, useState } from "react"
import { animated, useSpring, interpolate } from "react-spring";
import styled from 'styled-components';

const Pricing = ({ paint, setPaint }) => {
  const [hovers, setHovers] = useState(['gray', 'gray', 'gray', 'gray', 'gray']);
  const [first, setFirst] = useState(21);
  const [last, setLast] = useState(495);
  const [modelType, setModelType] = useState('premium');
  const [optionsType, setOptionsType] = useState('base');
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);

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
    marginLeft: !paint ? '-500px' : '-850px',
    from: { marginLeft: '-500px' },
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
    marginLeft: !paint ? '-850px' : '-500px',
    from: { marginLeft: '-850px' },
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
    marginLeft: !paint ? '202px' : '-145px',
    from: { marginLeft: '202px' },
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
    marginLeft: !paint ? '-145px' : '202px',
    from: { marginLeft: '-145px' },
    config: {duration: 400},
    delay: !paint ? 0 : 400
  });

  const grayWheelPropsOpac = useSpring({
    opacity: !paint ? '0' : '1',
    from: { opacity: '0' },
    config: {duration: 0},
    delay: 400
  });

  const blueShadowProps = useSpring({
    marginLeft: !paint ? '-300px' : '-625px',
    from: { marginLeft: '-300px' },
    config: {duration: 400},
    delay: !paint ? 400 : 0,
  });
  const grayShadowProps = useSpring({
    marginLeft: !paint ? '-625px' : '-300px',
    from: { marginLeft: '-625px' },
    config: {duration: 400},
    delay: !paint ? 0 : 400,
  });

  const aProps = useSpring({opacity: a ? '1' : '0', config: { duration: 600 }});
  const bProps = useSpring({opacity: b ? '1' : '0', config: { duration: 600 }});
  const cProps = useSpring({opacity: c ? '1' : '0', config: { duration: 600 }});
  const dProps = useSpring({opacity: d ? '1' : '0', config: { duration: 600 }});

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
            style={!paint ? {transform: 'rotate(90deg)', transition: 'all 0.4s linear', transitionDelay: '0.4s'} : {transform: 'rotate(0deg)', transition: 'all 0.4s linear'}}
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
            style={paint ? {transform: 'rotate(90deg)', transition: 'all 0.4s linear', transitionDelay: '0.4s'} : {transform: 'rotate(0deg)', transition: 'all 0.4s linear'}}
            src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/srfGrayWheel.png"
          />
        </animated.div>
        <animated.div style={blueShadowProps}>
          <Shadow />
        </animated.div>
        <animated.div style={grayShadowProps}>
          <Shadow />
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
              { background: 'rgb(60, 60, 60)', border: `1px solid ${hovers[0]}` } :
              { border: `1px solid ${hovers[0]}` }}
          >
            <div>PREMIUM</div>
            <div>$21,495</div>
          </Button>
          <Q
            onMouseEnter={() => setA(true)}
            onMouseLeave={() => setA(false)}
          >?</Q>
          <animated.div style={{...aProps, width: '0'}}>
            <ModalA
              style={a ? {display: 'flex'} : {display: 'none'}}
            >
              Premium model includes 6 kW Rapid Charge System, fly screen, heated grips, and aluminum bar grips.
            </ModalA>
          </animated.div>
          <Button
            onMouseEnter={() => setHovers(['gray', 'white', 'gray', 'gray', 'gray'])}
            onMouseLeave={() => setHovers(['gray', 'gray', 'gray', 'gray', 'gray'])}
            onClick={() => setModelType('standard')}
            style={
              modelType === 'standard' ?
              { background: 'rgb(60, 60, 60)', border: `1px solid ${hovers[1]}` } :
              { border: `1px solid ${hovers[1]}` }}
          >
            <div>STANDARD</div>
            <div>$19,495</div>
          </Button>
          <Q
            onMouseEnter={() => setB(true)}
            onMouseLeave={() => setB(false)}
          >?</Q>
          <animated.div style={{...bProps, width: '0'}}>
            <ModalA
              style={b ? {display: 'flex'} : {display: 'none'}}
            >
              Standard model includes 3 kW Rapid Charge System.
            </ModalA>
          </animated.div>
        </ModelOptions>
        <Option>OPTIONS</Option>
        <ModelOptions>
          <Button
            onMouseEnter={() => setHovers(['gray', 'gray', 'white', 'gray', 'gray'])}
            onMouseLeave={() => setHovers(['gray', 'gray', 'gray', 'gray', 'gray'])}
            onClick={() => setOptionsType('base')}
            style={
              optionsType === 'base' ?
              { background: 'rgb(60, 60, 60)', border: `1px solid ${hovers[2]}` } :
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
              { background: 'rgb(60, 60, 60)', border: `1px solid ${hovers[3]}` } :
              { border: `1px solid ${hovers[3]}` }}
          >
            <div>ADDITIONAL 6 KW</div>
            <div>+ $2,300</div>
          </Button>
          <Q
            onMouseEnter={() => setC(true)}
            onMouseLeave={() => setC(false)}
          >?</Q>
          <animated.div style={{...cProps, width: '0'}}>
            <ModalA
              style={c ? {display: 'flex'} : {display: 'none'}}
            >
              Additional 6kW option is not compatible with motorcycles equiped with the Power Tank accessory. Standard models require purchase and installation of the Accessory Power Panel at an MSRP of $500.
            </ModalA>
          </animated.div>
        </ModelOptions>
        <ModelOptions style={{width: '300px'}}>
          <Button
            onMouseEnter={() => setHovers(['gray', 'gray', 'gray', 'gray', 'white'])}
            onMouseLeave={() => setHovers(['gray', 'gray', 'gray', 'gray', 'gray'])}
            onClick={() => setOptionsType('power')}
            style={
              optionsType === 'power' ?
              { background: 'rgb(60, 60, 60)', border: `1px solid ${hovers[4]}` } :
              { border: `1px solid ${hovers[4]}` }}
          >
            <div>POWER TANK</div>
            <div>+ $2,895</div>
          </Button>
          <Q
            onMouseEnter={() => setD(true)}
            onMouseLeave={() => setD(false)}
          >?</Q>
          <animated.div style={{...dProps, width: '0'}}>
            <ModalA
              style={d ? {display: 'flex'} : {display: 'none'}}
            >
              The Power Tank will be available for Zero SR/F and SR/S in March 2020. Standard models require purchase and installation of the Accessory Power Panel at an MSRP of $500.
            </ModalA>
          </animated.div>
        </ModelOptions>
        <ModelOptions>
          <Price>$
            <animated.div>{firstProps.number.interpolate(n => Math.floor(n))}</animated.div>,
            <animated.div>{lastProps.number.interpolate(n => Math.floor(n))}</animated.div>
          </Price>
          <Dealer>
            FIND A DEALER
          </Dealer>
        </ModelOptions>
        <Msrp>Starting MSRP</Msrp>
        <Inclusions>
          Does not include government incentives. Does not include local shipping, applicable taxes, PDI, or road registration fees.
        </Inclusions>
      </Right>
    </Container>
  )
};

const Blue = styled.div`
  background: rgb(96, 168, 150);
  height: 22px;
  width: 22px;
  border-radius: 50%;
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
const Dealer = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 16px;
  color: white;
  width: 220px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: rgb(100, 100, 100);
  transition: all 0.2s ease;
  &:hover{
    background: rgb(120, 120, 120);
    transform: scale(1.03);
  }
`
const Frame = styled.img`
  position: absolute;
  height: 620px;
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
const Inclusions = styled.div`
  font-size: 12px;
  color: rgb(120, 120, 120);
  margin-top: 20px;
  width: 400px;
  line-height: 20px;
`
const ModalA = styled.div`
  position: absolute;
  background: rgb(200, 200, 200);
  width: 220px;
  font-size: 11px;
  padding: 10px;
  margin-top: -30px;
  border-radius: 10px;
  margin-left: -300px;
  text-align: center;
`
const ModelOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 620px;
  margin-bottom: 20px;
`
const Msrp = styled.div`
  color: rgb(160, 160, 160);
  font-size: 13px;
  margin-top: 15px;
`
const Option = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  letter-spacing: 2px;
  color: white;
  margin-top: 1.5vh;
  margin-bottom: 1vh;
  font-size: 18px;
`
const Price = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 28px;
  letter-spacing: 2px;
  color: white;
  margin-top: 1vh;
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
  cursor: pointer;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50vw;
  z-index: 3;
`
const Shadow = styled.div`
  position: absolute;
  border: 1px solid rgb(10, 10, 10);
  border-radius: 70%;
  width: 700px;
  margin-top: 590px;
  box-shadow: rgb(0, 0, 0) 0px 0px 15px 10px;
`
const Switch = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75px;
  margin-bottom: 1vh;
`
const Title = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 28px;
  letter-spacing: 2px;
  color: white;
  margin-bottom: 1vh;
  margin-top: 2.5vh;
`
const Wheel = styled.img`
  position: absolute;
  height: 245px;
  margin-top: 345px;
  z-index: 1;
`

export default Pricing;