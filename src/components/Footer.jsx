import styled from "styled-components";

const FooterBar = styled.div`
height: 157px;
padding: 60px 32px;
background-color: #f6f6f6;
display: flex;
justify-content: space-between;
`
const LeftBar = styled.div`
display: flex;
float:left;
flex-direction: column;
text-align: center;
justify-content: center;
& > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    
}
& > div > img {
    
    width: 60px;
}
& > div > span {
    margin-top: 15px;
    font-weight: 700;
    letter-spacing: 3px;
}
& > p {
    margin-top: 40px;
    font-weight: 400;
    font-size: 12px;
    color: #737373;
}
`

const RightBar = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: 64px;
grid-row-gap: 50px;
max-width: 720px;

list-style-type: none;
& > ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
    & > li {
        margin: 0 2em;
        :nth-child(3) {
            width:100px;
          }    
        span {
            color: #737373;
        }
        li {
            margin: 1.5em auto;
            font-size: 13px;
            color: #737373;
            cursor: pointer;
            &:hover {
                color: #000;
            }
        }
    }
}
`

const Footer = () => {

    return (
        <FooterBar>
            <LeftBar>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/VSCO_Seal.svg/2048px-VSCO_Seal.svg.png" alt="" />
                    <span>VSCO</span>
                </div>
                <p>Copyright 2022 VSCO. All rights reserved</p>
            </LeftBar>

            <RightBar>
                <ul>
                    <li>
                        <span>Company</span>
                        <li>About Us</li>
                        <li>Our Product</li>
                        <li>Careers</li>
                    </li>

                    <li>
                        <span>Community</span>
                        <li>Guidelines</li>
                        <li>Safety</li>
                        <li>Support</li>
                        <li>Forum</li>
                    </li>

                    <li>
                        <span>Legal</span>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Notice</li>
                        <li>Cookie Settings</li>
                    </li>

                    <li>
                        <span>Contact</span>
                        <li>Brands</li>
                        <li>Press</li>
                    </li>
                </ul>
            </RightBar>
        </FooterBar>
    )
}

export default Footer