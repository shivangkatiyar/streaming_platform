import React from "react";
import styled from "styled-components";

const Login = (props) => {
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src = "/Images/cta-logo-one.svg"></CTALogoOne>
                    <Signup>Get All There</Signup>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21,
                        the price of Disney+ and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src = "/Images/cta-logo-two.png"></CTALogoTwo>

                </CTA>
                <BgImage />
            </Content>
        </Container>
 )
}
const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-image: url("/Images/backgroundImage.jpg");
    z-index: -1;   //It determine the depth of the element, by this one can be the top of one another
`;

const CTA = styled.div`
max-width: 650px;
width: 100%;
display:flex;
flex-direction: column;

`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;

`;

const Signup = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color:#0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size:18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

 &:hover {
    background-color: #0483ee;
}

`;

const Description = styled.p`
    colo: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
   max-width: 600px; 
   margin-bottom: 20px;
   display: inline-block;
   vertical-align: bottom;
   width: 100%;
`;


export default Login;