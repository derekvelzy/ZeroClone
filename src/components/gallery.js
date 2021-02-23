import React, { useRef, useEffect, useState } from "react"
import { animated, useSpring } from "react-spring";
import styled from 'styled-components';
import Video from './video.js';
import Image from './Image.js';

const Gallery = ({ galleryView }) => {
  const ref = useRef();

  const [hovers, setHovers] = useState([0, 0, 0, 0, 0, 0, 0])

  const props = useSpring({
    opacity: galleryView > 380 ? 1 : 0,
    marginTop: galleryView > 380 ? '0px' : '-5px',
    from: { opacity: 0, marginTop: '-5px' },
    config: {duration: 700},
  });

  const imageProps = useSpring({
    transform: galleryView > 380 ? 'scale(1)' : 'scale(0.4)',
    from: { transform: 'scale(0.4)' },
    config: {duration: 400},
  });

  return (
    <Container ref={ref}>
      <animated.div style={props}>
      <Box>
        <Top>
          <Image
            imageProps={imageProps}
            jpg={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/one.jpg"}
            webp={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/one50.webp"}
            height={39}
            width={53}
          />
          <Image
            imageProps={imageProps}
            jpg={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/seven.jpg"}
            webp={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/seven50.webp"}
            height={39}
            width={31}
          />
        </Top>
        <Bottom>
          <Image
            imageProps={imageProps}
            jpg={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/six.jpg"}
            webp={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/six50.webp"}
            height={39}
            width={21}
          />
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
              <Image
                imageProps={imageProps}
                jpg={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/five.jpg"}
                webp={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/five50.webp"}
                height={18}
                width={40}
              />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Image
                imageProps={imageProps}
                jpg={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/three.jpg"}
                webp={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/three50.webp"}
                height={18}
                width={19.3}
              />
              <Image
                imageProps={imageProps}
                jpg={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/two.jpg"}
                webp={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/two50.webp"}
                height={18}
                width={19.3}
              />
            </div>
          </div>
          <Image
            imageProps={imageProps}
            jpg={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/four.jpg"}
            webp={"https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/four50.webp"}
            height={39}
            width={21}
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