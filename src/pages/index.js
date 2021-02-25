import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

const Model = loadable(() => import('../components/model.js'));
const Video = loadable(() => import('../components/video.js'));
const Gallery = loadable(() => import('../components/gallery.js'));
const Info = loadable(() => import('../components/info.js'));
const Specs = loadable(() => import('../components/specs.js'));
const Pricing = loadable(() => import('../components/pricing.js'));
const Carousel = loadable(() => import('../components/carousel.js'));
const Power = loadable(() => import('../components/power.js'));

export const images = [
  {
    jpg: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/one.jpg',
    webp: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/one50.webp'
  },
  {
    jpg: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/two.jpg',
    webp: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/two50.webp'
  },
  {
    jpg: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/three.jpg',
    webp: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/three50.webp'
  },
  {
    jpg: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/four.jpg',
    webp: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/four50.webp'
  },
  {
    jpg: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/five.jpg',
    webp: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/five50.webp'
  },
  {
    jpg: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/six.jpg',
    webp: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/six50.webp'
  },
  {
    jpg: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/seven.jpg',
    webp: 'https://derekvelzy-website-images.s3-us-west-1.amazonaws.com/zero/seven50.webp'
  },
]

const IndexPage = () => {
  const [paint, setPaint] = useState(false);
  const [galleryView, setGalleryView] = useState(0);
  const [specView, setSpecView] = useState(0);
  const [caro, setCaro] = useState(false);
  const [power, setPower] = useState(false);
  const [index, setIndex] = useState(0);
  const [pageTop, setPageTop] = useState(0);

  const modelRef = useRef(null);
  const galleryRef = useRef(null);
  const infoRef = useRef(null);
  const specsRef = useRef(null);
  const pricingRef = useRef(null);

  const modelScroll = () => modelRef.current.scrollIntoView({behavior: "smooth", block: "nearest"});
  const galleryScroll = () => galleryRef.current.scrollIntoView({behavior: "smooth", block: "nearest"});
  const infoScroll = () => infoRef.current.scrollIntoView({behavior: "smooth", block: "nearest"});
  const specsScroll = () => specsRef.current.scrollIntoView({behavior: "smooth", block: "nearest"});
  const pricingScroll = () => pricingRef.current.scrollIntoView({behavior: "smooth", block: "nearest"});

  const back = async () => {
    await setCaro(false);
    setGalleryView(381);
    galleryRef.current.scrollIntoView({block: "nearest"});
  }

  const openPower = () => {
    setPower(true);
    setPageTop(window.scrollY);
  };

  const closePower = async () => {
    await setPower(false);
    window.scrollTo(0, pageTop);
  }

  let conditionalStyle = {
    position: 'relative',

  }
  if (power) {
    conditionalStyle = {
      top: `-${window.scrollY}px`,
      position: 'fixed',
      filter: 'blur(20px) brightness(0.2)',
    }
  } else if (caro) {
    conditionalStyle = {
      position: 'fixed',

    }
  }

  return (
    <div>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>Zero SR/F</title>
        <meta name="Description" content="zero clone" />
      </Helmet>
      <PowerCont style={power ? {marginRight: '0vw'} : {marginRight: '-85vw'}}>
        <Power closePower={closePower} power={power} />
      </PowerCont>
      <Container style={conditionalStyle}>
        <div style={caro ? {display: 'block'} : {display: 'none'}}>
          <Carousel back={back} images={images} index={index} setIndex={setIndex} caro={caro} />
        </div>
        <Switch>
          <Buttons style={
            paint ?
              {color: 'rgb(200, 200, 200)', transition: 'all 0.4 ease'} :
              {color: 'rgb(130, 130, 130)', transition: 'all 0.4 ease'}
            }
          >
            <Button onClick={modelScroll}>ZERO SR/F</Button>
            <Button onClick={galleryScroll}>GALLERY</Button>
            <Button onClick={infoScroll}>TECH</Button>
            <Button onClick={specsScroll}>SPECS</Button>
            <Button onClick={pricingScroll}>BUILD</Button>
          </Buttons>
        </Switch>
        <div>
          <div ref={modelRef}>
            <Model
              paint={paint}
              setPaint={setPaint}
            />
          </div>
          <div>
            <Video
              setGalleryView={setGalleryView}
            />
          </div>
          <div style={{ background: 'rgb(20, 20, 20)', height: '100px' }}/>
          <div ref={galleryRef}>
            <Gallery galleryView={galleryView} setCaro={setCaro} setIndex={setIndex} />
          </div>
          <div ref={infoRef}><Info setSpecView={setSpecView} openPower={openPower} /></div>
          <div ref={specsRef}><Specs specView={specView} /></div>
          <div ref={pricingRef}><Pricing paint={paint} setPaint={setPaint} /></div>
        </div>
      </Container>
    </div>
  )
};

const Button = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s ease;
  z-index: 4;
  &:hover {
    color: white;
  }
`
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55vw;
  height: 80px;
`
const Container = styled.div`
  margin: 0;
  padding: 0;
  transition: all 0.4s ease;
`
const PowerCont = styled.div`
  display: flex;
  justify-content: flex-end;
  transition: all 0.4s ease;
`
const Switch = styled.div`
  background: rgba(0, 0, 0, 0.6);
  font-family: 'Montserrat', sans-serif;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 4;
  bottom: 0;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 10px;
`

export default IndexPage
