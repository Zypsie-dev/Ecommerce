import React, { useState, useEffect } from "react";
import styled from "styled-components";

<<<<<<< HEAD
 const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  width: 450px;
  max-width: 90%;
  height: max-content;
  max-height: 70vh; /* Limit the height to 80% of the viewport */
  background-color: white;
  box-shadow: 0 0px 0px 1000px rgba(0, 0, 0, 0.3);
  padding: 20px;
  z-index: 1000;
  border-radius: 10px; /* Correct border-radius value */
  display: ${(p) => (p.isOpen ? "block" : "none")};
  overflow-y: auto; /* Enable vertical scrolling */
`;
=======
const Container = styled.div`
    max-height: 90vh;
    max-height: 90dvh;
    overflow-y: auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    max-width: 90%;
    height: max-content;
    background-color: white;
    box-shadow: 0 0px 0px 1000px rgba(0,0,0,.3);
    padding: 20px;
    z-index: 102;
    border-radius: 1vmax;
    display: ${p => p.isOpen ? "block": "none"};
`
>>>>>>> aba27ca38602025d85ead54ff7e99684893f39be


function ModalComp({ children, isOpen }) {
  return <Container isOpen={isOpen}>{children}</Container>;
}

export default ModalComp;
