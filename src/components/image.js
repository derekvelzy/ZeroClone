import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from "react-spring";

const Image = ({ galleryView, jpg, webp, height, width, setCaro, position, setIndex }) => {
  const [hover, setHover] = useState(1);
  const [shrink, setShrink] = useState(1);
  const [plusHover, setPlusHover] = useState(0);

  const imageProps = useSpring({
    transform: galleryView > 380 ? 'scale(1)' : 'scale(0.4)',
    from: { transform: 'scale(0.4)' },
    config: { duration: 320 + (position * 70) },
  });

  const open = () => {
    setIndex(position);
    setCaro(true)
  }

  return (
    <animated.div style={imageProps}>
      <div
        style={hover > 1 ?
          {display: 'block'} :
          {display: 'none'}}
      >
        <Plus
          onMouseEnter={() => {
            setHover(1.03)
            setShrink(0.85)
            setPlusHover(-90);
          }}
          onMouseLeave={() => {
            setHover(1)
            setPlusHover(0);
          }}
          onClick={() => open()}
          style={height > 18 ?
            {marginTop: '15vh', marginLeft: `${width * 0.45}vw`, transform: `rotate(${plusHover}deg)`} :
            {marginTop: '6vh', marginLeft: `${width * 0.4}vw`, transform: `rotate(${plusHover}deg)`}}
        >+</Plus>
      </div>
      <ImageContainer
        style={{
          height: `${height}vh`,
          width: `${width}vw`,
          transition: 'all 0.4s ease',
          transform: `scale(${hover})`,
        }}
      >
        <picture
          onMouseEnter={() => {
            setHover(1.03)
            setShrink(0.85)
          }}
          onMouseLeave={() => {
            setHover(1)
            setShrink(1)
          }}
        >
          <source
            style={{
              height: `${height}vh`,
              width: `${width}vw`,
              objectFit: 'cover',
              transition: 'all 0.4s ease',
              transform: `scale(${hover + 0.3})`,
              cursor: 'pointer',
              zIndex: 0,
            }}
            srcSet={webp}
          />
          <img
            style={{
              height: `${height}vh`,
              width: `${width}vw`,
              objectFit: 'cover',
              transition: 'all 0.4s ease',
              transform: `scale(${shrink + 0.3})`,
              cursor: 'pointer',
              zIndex: 0,
            }}
            src={jpg}
          />
        </picture>
      </ImageContainer>
    </animated.div>
  )
}

const ImageContainer = styled.div`
  overflow: hidden;
`
const Plus = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  position: absolute;
  border: 1px solid white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    background: rgb(255, 255, 255);
    color: black;
  }
`

export default Image;