import styled from "styled-components";

const Footer = () => {

    const Footer = styled.div`
    height: 157px;
    padding: 60px 32px;
    background-color: #f0f0f1;
    bottom: 0;
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
    padding-left: 0;
    list-style-type: none;
    
    & > ul {
        list-style-type: none;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    `
    return (
        <Footer>
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
        </Footer>
    )
}

export default Footer