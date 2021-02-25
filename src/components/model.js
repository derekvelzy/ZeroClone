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
  const [svgOpen, setSvgOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [idx, setIdx] = useState(1);


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

  const down = (e) => {
    if (!paint) {
      setZeroFade(true);
      setSRFFade(true);
      setClick(true);
    }
  }
  const drag = (e) => {
    let v = e.clientX;
    let el = document.getElementById('drag').getBoundingClientRect().x;
    if (click && !paint) {
      if ((el - v + 492) < 3 || (el - v + 492) > 489) {
        lift();
      }
      let newIdx = Math.ceil((el - v + 492)/41);
      if (newIdx >= 1 && newIdx <= 12) {
        setIdx(newIdx);
      }
    }
  }
  const lift = (e) => {
    if (!paint) {
      setClick(false);
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
      <Svg src="https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/logo.svg" />
      <Burger onClick={() => setSvgOpen(!svgOpen)} width="45" height="33" viewBox="0 0 57 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <TBL x1="2" y1="22.3947" x2="40.2295" y2="22.3947" stroke="white" strokeWidth="3"
           strokeDasharray={svgOpen ? '0 39' : '39 39'}
           strokeDashoffset={svgOpen ? '-17px' : '0px'}
        />
        <TB d="M2 8.28744 H41.3755C43.6556 8.28744 45.882 8.97964 47.7601 10.2725V10.2725C50.4657 12.1349 52.2232 15.0857 52.5721 18.3517L54.7231 38.4889C54.8992 40.1377 54.3623 41.7832 53.2477 43.0109L53.1138 43.1583C52.4033 43.9408 51.4702 44.487 50.44 44.7234V44.7234C46.9769 45.518 43.3482 44.4805 40.8285 41.9752L2 3.36841" stroke="white" strokeWidth="3"
          strokeDasharray='38 150'
          strokeDashoffset={svgOpen ? '-102px' : '0px'}
        />
        <TB d="M2 38.7125H41.3755C43.6556 38.7125 45.882 38.0203 47.7601 36.7275V36.7275C50.4657 34.8651 52.2232 31.9143 52.5721 28.6483L54.7231 8.51107C54.8992 6.86224 54.3623 5.21673 53.2477 3.98907L53.1138 3.84167C52.4033 3.05914 51.4702 2.51296 50.44 2.27658V2.27658C46.9769 1.48195 43.3482 2.51948 40.8285 5.02474L2 43.6316" stroke="white" strokeWidth="3"
          strokeDasharray='38 150'
          strokeDashoffset={svgOpen ? '-102px' : '0px'}
        />
      </Burger>
      <DragBox
        id="drag"
        onMouseDown={(e) => down(e)}
        onMouseMove={(e) => drag(e)}
        onMouseUp={(e) => lift(e)}
      />
      <animated.div style={zeroProps}>
        <Zero
          style={paint ?
            {color: 'rgb(140, 140, 140)', transition: 'all 0.7s ease'} :
            {color: 'rgb(225, 87, 77)', transition: 'all 0.4s ease'}}
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
      {
        paint ? <Bike src="https://d29sx7s964xey6.cloudfront.net/95572365-de9a-497b-adc7-d166534a43e5_1-SR-F_Black_CFCFCF.png?auto=compress,format&amp;w=1920&amp;fit=clip" id="poster"/> :
        <Bike src={`https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/bike-${idx}.png`} id="poster" />
      }
    </Container>
  )
};

const Burger = styled.svg`
  cursor: pointer;
  position: absolute;
  right: 40px;
  top: 26px;
`
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
const DragBox = styled.div`
  margin-top: 140px;
  height: 480px;
  width: 492px;
  position: absolute;
  z-index: 4;
  &:hover {
    cursor: grab;
  }
  &:active {
    cursor: grabbing;
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
const Svg = styled.img`
  z-index: 9;
  width: 120px;
  position: absolute;
  left: 40px;
  top: 26px;
`
const Switch = styled.div`
  position: absolute;
  left: 30px;
  top: 45vh;
`
const TB = styled.path`
  transition: all 0.5s ease;
`
const TBL = styled.line`
  transition: all 0.5s ease;
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
