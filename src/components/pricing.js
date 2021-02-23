import React, { useRef, useEffect } from "react"
// import { graphql, useStaticQuery } from 'gatsby'
import { animated, useSpring } from "react-spring";
import styled from 'styled-components';

const calc = (o) => `translateX(${o * 0.2}px)`;

const Pricing = () => {
  const ref = useRef();
  const [{offset}, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const offset = ref.current.getBoundingClientRect().top;
    set({ offset });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  return (
    <Container ref={ref}>
      <div>pricing</div>
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

export default Pricing;