import React, { useRef, useEffect } from "react"
// import { graphql, useStaticQuery } from 'gatsby'
import { animated, useSpring } from "react-spring";
import styled from 'styled-components';

const calc = (o) => `translateX(${o * 0.2}px)`;

const Video = ({ setGalleryView }) => {
  const ref = useRef();

  const handleScroll = () => {
    const offset = -1 * ref.current.getBoundingClientRect().top;
    setGalleryView(offset);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <Container ref={ref}>
      <iframe
        style={{width: "100vw", height: "100vh"}}
        src="https://www.youtube.com/embed/0-GvTyxbFGQ"
        frameBorder="0"
        allowFullScreen
        ng-show="showvideo"
      ></iframe>
    </Container>
  )
};

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default Video;