import React from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@material-ui/icons"
import Badge from "@material-ui/core/Badge"



const Container = styled.div`
  height: 100px;
  margin-top:-35px;

`;

const Wraper = styled.div`

  padding:10px 20px;
  display: flex;
  justify-content: space-between;
  align-items:center;
`;
const Language = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight:bold;
`;

const SearchContainer = styled.div`
margin-left:20px;
border: 1px solid grey;
padding:5px;
display:flex;
align-items:center;
border-radius:15px;
`;

const Input = styled.input`
border:none;



`;


const MenuItems =styled.div`
cursor: pointer;
flex: 1;
font-weight:900px;
font-weight: bold ;

`;
const Logo = styled.h2`
font-size:32px;
font-weight:bold;
`;



const Left = styled.div`

  flex: 1;
  display:flex;
  align-items:center;
`;
const Center = styled.div`
  flex: 1;
  text-align:center;
`;
const Right = styled.div`
  flex: 1;
  display:flex;
  justify-content:flex-end;
  margin-left:5px;
`;

const NavBar = () => {
  return (
    <Container>
      <Wraper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
          <Input/>
          <Search style={{cursor:'pointer', color:'lightgray',  fontSize:'18px'}}/>
          </SearchContainer>
        </Left>
        <Center>
        <Logo>
    €OBIN$.
        </Logo>    
        </Center>
        <Right>
            <MenuItems>REGISTER</MenuItems>
            <MenuItems>SIGN IN</MenuItems>
            <MenuItems>
            <Badge badgeContent={4} color="primary">
  <ShoppingCartOutlined color="action" />
</Badge>
            </MenuItems>

        </Right>
      </Wraper>
    </Container>
  );
};

export default NavBar;
