import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, useTransition, config } from "react-spring";

const Carousel = ({ back, images, index, setIndex }) => {

  const forward = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  const backward = () => {
    if (index === 0) {
      setIndex(images.length - 1)
    } else {
      setIndex(index - 1);
    }
  }

  const transitions = useTransition(images[index], item => index, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.8)' },
    config: {duration: 300},
  })

  return (
    <Container>
      <Close
        onClick={() => back()}
      >
        +
      </Close>
      <Images>
        <Back onClick={() => backward()}>{'<'}</Back>
        {transitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={{
              ...props,
              willChange: 'opacity',
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              width: '100vw',
            }}
          >
            <picture>
              <ImgSource src={item.webp} />
              <Img src={item.jpg} />
            </picture>
          </animated.div>
        ))}
        <Forward onClick={() => forward()}>{'>'}</Forward>
      </Images>
    </Container>
  )
};

const Back = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  margin-left: 50px;
  z-index: 12;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border: 1px solid white;
  font-size: 30px;
  border-radius: 50%;
  transition: all 0.3s ease;
  &:hover {
    background: white;
    color: black;
  }
  &:active{
    transition: all 0.2s ease;
    background: rgb(160, 160, 160);
  }
`
const Close = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  position: fixed;
  top: 50px;
  right: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border: 1px solid white;
  font-size: 50px;
  border-radius: 50%;
  transition: all 0.3s ease;
  transform: rotate(45deg);
  &:hover {
    transform: rotate(-45deg);
    background: white;
    color: black;
  }
  &:active{
    transition: all 0.2s ease;
    background: rgb(160, 160, 160);
  }
`
const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: rgb(20, 20, 20);
  color: white;
  z-index: 10;
  position: fixed;
`
const Forward = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  margin-right: 50px;
  z-index: 12;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border: 1px solid white;
  font-size: 30px;
  border-radius: 50%;
  transition: all 0.3s ease;
  &:hover {
    background: white;
    color: black;
  }
  &:active{
    transition: all 0.2s ease;
    background: rgb(160, 160, 160);
  }
`
const Images = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`
const Img = styled.img`
  width: 70vw;
  height: 70vh;
  object-fit: cover;
`
const ImgSource = styled.source`
  width: 70vw;
  height: 70vh;
  object-fit: cover;
`

export default Carousel;