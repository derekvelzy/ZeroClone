import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from "react-spring";

const Power = ({ closePower, power }) => {

  return (
    <Container>
      <Overlay>
        <Content>
          <Close
            onClick={() => closePower()}
          >
            +
          </Close>
          <div>me!</div>
          <div style={{height: '9000px'}}>me!</div>
          <div>h</div>
        </Content>
      </Overlay>
    </Container>
  )
};

const Close = styled.div`
  background: rgb(96, 168, 150);
  position: fixed;
  margin-top: 42vh;
  margin-left: -28px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-weight: 100;
  color: white;
  cursor: pointer;
  transform: rotate(45deg);
  transition: all 0.4s ease;
  &:hover {
    transform: rotate(-45deg);
    background: rgb(54, 97, 86);
  }
`
const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  color: black;
  position: fixed;
  z-index: 100;
`
const Content = styled.div`
  z-index: 102;
  position: relative;
  overflow: auto;
  height: 100%;
  background: rgb(240, 240, 240);
`
const Overlay = styled.div`
  z-index: 101;
  position: absolute;
  top: 0;
  left: 0;
  width: 80vw;
  height: 100vh;
  background: rgb(240, 240, 240);
  padding: 1px;
`

export default Power;