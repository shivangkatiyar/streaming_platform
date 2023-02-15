import styled from "styled-components";
const Header = (props) => {
    return(
        <Nav>
            <Logo>
                <img src = "/Images/Logo.svg" alt = "Disney+" />
            </Logo>
            <NavMenu>menu</NavMenu>
        </Nav>
    )
}
export default Header;

const NavMenu = styled.div`
    
`

const Nav = styled.nav`
    position: fixed;
    background-color: #090b13;
    top:0;
    left:0;
    right:0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    aligh-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding:0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;

    img{
        display: block;
        width: 100%;
    }

`;