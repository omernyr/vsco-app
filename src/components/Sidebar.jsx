import { AiOutlineClose } from 'react-icons/ai';
import styled from "styled-components";
import { usePhoto } from '../context/MainContext';


const Sidebar = () => {

    const { menuToggle, setMenuToggle } = usePhoto();

    const SideBar = styled.div`
        box-shadow: -1px 0px 4px -1px rgba(0,0,0,0.75);
        display:${!menuToggle && "flex"};
        display:${menuToggle && "none"};
        transition: all 0.25s;
        position: absolute;
        height: 98vh;
        background-color: #fff;
        width: 300px;
        right: 0;
        flex-direction: column;
        padding: 1.5em 2.7em 1.5em 1em;
        & > button {
            width: fit-content;
            background-color: transparent;
            border: none;
            font-size: 29px;
            font-weight: 300;
        }
        `
    const Navs = styled.div`
        display: flex;
        margin-top: 3em;
        flex-direction: column;
        & > button {
            border: none;
            background-color: transparent;
            cursor: pointer;
            width: fit-content;
            padding: 0.67em;
            margin: 0.5em 0;
            font-size: 17px;
            &:hover {
                font-weight: 600;
            }
        }
        & > p {
            border: 0.5px solid #ddd;
        }
        `
    const FootBar = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        & > button {
            border: none;
            background-color: transparent;
            text-align: left;
            cursor: pointer;
            padding: 1.3em 0.6em;
            font-weight: 400;
            font-size: 13px;
            &:hover {
                font-weight: 600;
            }
        }
        `
    return (
            <SideBar>
                <button onClick={() => setMenuToggle(!menuToggle)}> <AiOutlineClose /> </button>
                <Navs>
                    <button>Support</button>
                    <button>Safety</button>
                    <button>Forum</button>
                    <p></p>
                </Navs>
                <FootBar>
                    <button>About Us</button>
                    <button>Guidelines</button>
                    <button>Career</button>

                    <button>Privacy</button>
                    <button>Press</button>
                    <button>Terms</button>
                </FootBar>
            </SideBar>
    )
}

export default Sidebar