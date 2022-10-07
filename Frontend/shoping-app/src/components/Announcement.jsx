import React from "react";
import styled from "styled-components";

const Container = styled.div`
width:100%;
height:8vh;
background-color:darkblue;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
`;

const Announcement = () => {
  return <Container>Get 50% of our monthly sales as you shop with us</Container>;
};

export default Announcement;
