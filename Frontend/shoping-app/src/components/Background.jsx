import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(113, 113, 222);
  height: 100%;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content:center ;
`;

const ImageContainer = styled.div`
  height: 100%;
  margin: 100px 0px;
  justify-content:space-between;
`;

const Imageone = styled.img`
   height:70vh;
  margin:0px 50px;
 border-radius:25px;
 border:4px solid orange;
  width:300px;
`;
const Imagetwo = styled.img`
  justify-content:space-between ;
  width:300px;
  height:70vh;
  border-radius:25px;
  border:4px solid orange;
`;
const Imagethree = styled.img`
   justify-content:space-between ;
   width:300px;
   border-radius:25px;
   height:70vh;
   border:4px solid orange;
`;

const Tittle = styled.h2`
margin-top:70px;
color:orange;
font-weight:bolder;

`

const Background = () => {
  return (
    <Container>
      <Wrapper>
        <Tittle>
          MALE ATTIRE  
        </Tittle>
        <ImageContainer>
        
        <Imagetwo src="https://i.ibb.co/jznt7CJ/1ad59ed02120b0f40295d1ef976de2e9.jpg"/>
        <Imageone src="https://i.ibb.co/M2rMtX8/cf00b8b009f8061e58f48c999af4f4b1.jpg"/>
        <Imagethree src="https://i.ibb.co/9r4F6C4/3o3bpd2cuef26ph58.jpg"/>
          
        </ImageContainer>
      </Wrapper>
    </Container>
  );
  
};


export default Background;
