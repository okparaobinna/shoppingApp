import React from "react";
import styled from "styled-components";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height:525px;
  background: rgb(80, 80, 210);
  margin-top: -25px;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content:space-between;
  flex: 1;
  align-items: center;
  
`;
const InfoContainer = styled.div`

 
 
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
 
`;

const Tittle = styled.h1`
 margin-top:-30px;
  color: #ffff;
  font-weight:bolder;
  

 
`;

const Desc = styled.div`
 color: #ffff;
 font-weight:1800px;
 letter-spacing:0.5px;
 max-width:350px;
 margin-right:70px;



 


`;


const Button = styled.button`
 margin-top:110px;
 margin-left:95px; 
 padding:10px;
 background-color: orange;
 color:#ffff;
 border:none;
 cursor: pointer;
 
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src="https://i.ibb.co/mJVsdXQ/081df1114e127bdb.jpg" />
          </ImageContainer>
          <InfoContainer>
            <Tittle>AFRICAN SHIRTS</Tittle>
            <Desc>
              Check out our african men shirt selection for the very best in
              unique or custom, handmade pieces from our men's clothing shops.
            </Desc>

            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
