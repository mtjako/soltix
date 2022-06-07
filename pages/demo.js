import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Demo() {
  return (
      <Wrapper>
        <Nav>
          <NavWrap>
            <Logo>Company Name</Logo>
            <Menu>
              <MenuList>About</MenuList>
              <MenuList>FAQ</MenuList>
              <MenuList>Contact</MenuList>
            </Menu>
            <MenuIcon>
              <img src="/modeofaction/demo/menu.svg"/>
            </MenuIcon>
          </NavWrap>
        </Nav>
        <Content>
          <ImgWrap>
          <img src="/modeofaction/demo/img1.jpg"/>
          <img src="/modeofaction/demo/img2.jpg"/>
          <img src="/modeofaction/demo/img3.jpg"/>
          </ImgWrap>
          <TextWrap>
            <Categories>
              <Category>
                <img src="/modeofaction/demo/grid.svg"/><p>Autumn collection</p>
              </Category>
              <Category>
                <img src="/modeofaction/demo/cart.svg"/><p>15 in stock</p>
              </Category>
            </Categories>
            <h1>Orange blanket</h1>
            <p>Amet, metus egestas nunc lectus feugiat. Urna dui sed est ac at lectus eget. Felis cras maecenas aenean pulvinar tellus condimentum volutpat, diam. Euismod nullam enim gravida sapien lectus eget. Turpis elementum proin nunc arcu in nulla ut eget est.</p>
            <button>$110.00</button>
          </TextWrap>
        </Content>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: -72px;
  background-color: #F4EDE5;
  min-height: 100vh;
`;
const Nav = styled.div`
background-color: #2f2f2f;
height: 64px;
width: 100%;
`;
const NavWrap = styled.div`
height: 100%;
width: 100%;
padding: 0 20px;
display: flex;
align-items: center;
justify-content: space-between;
color: #f5f5f5;
`;
const Logo = styled.div`
font-weight: bold;
cursor: pointer;
`;
const Menu = styled.ul`
list-style-type: none;
display: none;
@media(min-width: 650px){
  display: flex;
}
`;
const MenuIcon = styled.div`
display: flex;
@media(min-width: 650px){
  display: none;
}
align-items: center;
justify-content: center;
cursor: pointer;
img{
  width: 24px;
  height: 24px;
}

`;
const MenuList = styled.li`
margin-left: 32px;
color: inherit;
cursor: pointer;
`;
const Content = styled.div`
padding: 20px;
display: grid;
flex-direction: column;
@media(min-width: 650px){
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  align-items: center;
}
`;
const ImgWrap = styled.div`
display: grid;
@media(min-width: 800px){
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: 240px 190px;
  gap: 20px;
  }
&>img{
  display: none;

  object-fit: cover;
  max-width: 100%;
  border-radius: 20px;
  &:first-child{
    display: block;
    width: 100%;
    height: 200px;
    @media(min-width: 650px){
      height: 450px;
}
  }
  @media(min-width: 800px){
display: block;
width: 100%;
height: 100%;
&:first-child{
  grid-column: 1/-1;
  width: 100%;
height: 100%;
}
  }
}
`;
const TextWrap = styled.div`
margin-top: 20px;
width: 100%;
h1{
  margin: 4px 0 8px;
  font-size: 24px;
}
p{
  font-size: 12px;
  color: #373737;
  @media(min-width: 800px){

    max-width: 450px;
}
}
button{
  background-color: #BAAEA0;
  color: #f5f5f5;
  border: none;
  padding: 8px 32px;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 16px;
  cursor: pointer;
}
`;

const Categories = styled.div`
display: flex;
`;
const Category = styled.div`
display: flex;
margin-right: 20px;
img{
width: 16px;
height: 16px;
}
p{
font-size: 12px;
line-height: 16px;
margin-left: 6px;
color: #373737;
}
`;