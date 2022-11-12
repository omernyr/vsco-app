import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {

  const LeftDiv = styled.div`
    height: 50px;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0 35px;
    font-size: 17px;
    font-weight: 400;
  `
  const Button = styled.button`
    outline: none;
    border: none;
    background-color: #3478f6;
    color: #fff;
    border-radius: 2px;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
  `
  const RightDiv = styled.div`

    dislay: flex;
    align-items: center;
    
    span { svg {
      width: 29px;
      height: 30px;
      margin:0 10px;
      color: #737373;
      font-weight: 400;
    }
    }
  `
  const Image = styled.img`
    width:83px;
    fill: none;
  `
  const Header = styled.header`
    max-width:100%;
    height: 38px;
    padding: 24px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  return (
    <Header>
      <LeftDiv>
        <Image src="https://1000logos.net/wp-content/uploads/2022/09/VSCO-Symbol.png" alt="logo" />
        <span>Stories</span>
        <span>Sign In</span>
        <Button>Download VSCO</Button>
      </LeftDiv>
      <RightDiv>
        <span><AiOutlineSearch /></span>
        <span><HiOutlineMenuAlt4 /></span>
      </RightDiv>
    </Header>
  )
}

export default Navbar