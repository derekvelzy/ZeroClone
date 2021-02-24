import React, { useRef, useEffect, useState } from "react"
import { animated, useSpring } from "react-spring";
import styled from 'styled-components';
import Video from './video.js';
import Image from './Image.js';
import { images } from '../pages/index.js';

const Gallery = ({ galleryView, setCaro, setIndex }) => {
  const ref = useRef();

  const props = useSpring({
    opacity: galleryView > 380 ? 1 : 0,
    marginTop: galleryView > 380 ? '0px' : '-5px',
    from: { opacity: 0, marginTop: '-5px' },
    config: {duration: 700},
  });

  return (
    <Container ref={ref}>
      <animated.div style={props}>
      <Box>
        <Top>
          <Image
            galleryView={galleryView}
            jpg={images[0].jpg}
            webp={images[0].webp}
            height={39}
            width={53}
            setCaro={setCaro}
            position={0}
            setIndex={setIndex}
          />
          <Image
            galleryView={galleryView}
            jpg={images[6].jpg}
            webp={images[6].webp}
            height={39}
            width={31}
            setCaro={setCaro}
            position={6}
            setIndex={setIndex}
          />
        </Top>
        <Bottom>
          <Image
            galleryView={galleryView}
            jpg={images[5].jpg}
            webp={images[5].webp}
            height={39}
            width={21}
            setCaro={setCaro}
            position={5}
            setIndex={setIndex}
          />
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
              <Image
                galleryView={galleryView}
                jpg={images[4].jpg}
                webp={images[4].webp}
                height={18}
                width={40}
                setCaro={setCaro}
                position={4}
                setIndex={setIndex}
              />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Image
                galleryView={galleryView}
                jpg={images[2].jpg}
                webp={images[2].webp}
                height={18}
                width={19.3}
                setCaro={setCaro}
                position={2}
                setIndex={setIndex}
              />
              <Image
                galleryView={galleryView}
                jpg={images[1].jpg}
                webp={images[1].webp}
                height={18}
                width={19.3}
                setCaro={setCaro}
                position={1}
                setIndex={setIndex}
              />
            </div>
          </div>
          <Image
            galleryView={galleryView}
            jpg={images[3].jpg}
            webp={images[3].webp}
            height={39}
            width={21}
            setCaro={setCaro}
            position={3}
            setIndex={setIndex}
          />
        </Bottom>
      </Box>
      </animated.div>
    </Container>
  )
};

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Box = styled.div`
  margin-top: -12vh;
  width: 85vw;
  height: 81vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(20, 20, 20);
`
const MBLS = styled.source`
  height: 18vh;
  width: 19.5vw;
  object-fit: cover;
  transition: all 0.3s ease;
`
const MBL = styled.img`
  height: 18vh;
  width: 19.5vw;
  object-fit: cover;
  transition: all 0.3s ease;
`
const MT = styled.img`
  height: 18vh;
  width: 40vw;
  object-fit: cover;
  transition: all 0.3s ease;
`
const MTS = styled.source`
  height: 18vh;
  width: 40vw;
  object-fit: cover;
  transition: all 0.3s ease;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`


export default Gallery;