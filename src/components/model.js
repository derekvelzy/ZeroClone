import React, { useRef, useEffect, useState } from "react"
import styled from 'styled-components';
import { animated, useSpring, Spring } from "react-spring";
import Video from './video.js';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Model = ({paint, setPaint}) => {
  const ref = useRef();

  const [zeroFade, setZeroFade] = useState(false);
  const [SRFFade, setSRFFade] = useState(false);

  const handleScroll = () => {
    const offset = -1 * ref.current.getBoundingClientRect().top;
    if (offset > 180) {
      setSRFFade(true);
    } else if (offset > 140) {
      setZeroFade(true);
    } else {
      setZeroFade(false);
      setSRFFade(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })


  const zeroProps = useSpring({
    opacity: zeroFade ? 0 : 1,
    marginTop: zeroFade ? '-50px' : '0px',
    from: { opacity: 0, marginTop: '-50px' },
    config: {duration: 400},
  });
  const srfProps = useSpring({
    opacity: SRFFade ? 0 : 1,
    zIndex: 2,
    marginTop: SRFFade ? '-50px' : '0px',
    from: { opacity: 0, zIndex: 2, marginTop: '-50px' },
    config: {duration: 800},
  })

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
    <Container
      ref={ref}
      style={paint ?
        {background: 'rgb(200, 200, 200)', transition: 'all 0.7s ease'} :
        {background: 'rgb(41, 41, 41)', transition: 'all 0.5s ease'}}
    >
      <animated.div style={zeroProps}>
        <Zero
          style={paint ?
            {color: 'rgb(140, 140, 140)', transition: 'all 0.7s ease'} :
            {color: 'rgb(242, 91, 68)', transition: 'all 0.4s ease'}}
        >
          ZERO
        </Zero>
      </animated.div>
      <animated.div style={srfProps}>
        <SRF>SR/F</SRF>
      </animated.div>
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
      {paint ? <Bike src="https://d29sx7s964xey6.cloudfront.net/95572365-de9a-497b-adc7-d166534a43e5_1-SR-F_Black_CFCFCF.png?auto=compress,format&amp;w=1920&amp;fit=clip" id="poster"/> :
      <Bike src="https://d29sx7s964xey6.cloudfront.net/1931d1a8-edec-4f3d-9776-ce3352e9630f_1-SR-F_Mint_242424.png?auto=compress,format&amp;w=1920&amp;fit=clip" id="poster" />}
    </Container>
  )
};

const Container = styled.div`
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
const Bike = styled.img`
  position: absolute;
  margin-top: 100px;
  height: 620px;
  z-index: 1;
`
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
const SRF = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  position: absolute;
  font-size: 180px;
  margin-top: 280px;
  left: 16vw;
  z-index: 2;
  color: white;
`
const Switch = styled.div`
  position: absolute;
  left: 30px;
  top: 45vh;
`
const Zero = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  position: absolute;
  font-size: 180px;
  margin-top: 100px;
  left: 16vw;
  z-index: 0;
`

export default Model;
