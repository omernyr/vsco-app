import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { usePhoto } from "../../context/MainContext"

const LeftDiv = styled.div`
  height: 50px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0 35px;
  font-size: 17px;
  font-weight: 400;
  button:not(:last-child) {
    color: #000;
    font-weight: 400;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 17px;
  }
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
  cursor: pointer;
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
  cursor: pointer;    
`
const Header = styled.header`
  position: fixed;
  width: 96%;
  background-color: #fff;  
  max-width:100%;
  height: 38px;
  padding: 24px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Navbar = () => {

  const { setMenuToggle } = usePhoto();

  return (
    <Header>
      <LeftDiv>
        <Image src="https://1000logos.net/wp-content/uploads/2022/09/VSCO-Symbol.png" alt="logo" />
        <button>Stories</button>
        <button>Sign In</button>
        <Button>Download VSCO</Button>
      </LeftDiv>
      <RightDiv>
        <span><AiOutlineSearch /></span>
        <span onClick={() => setMenuToggle(false)}><HiOutlineMenuAlt4 /></span>
      </RightDiv>
    </Header>
  )
}

export default Navbar