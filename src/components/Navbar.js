import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import {FaBars} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa'



const Nav = styled.nav`

height: 80px;
display: flex;
justify-content: space-between;
padding: 1rem 1rem;
z-index: 100;
position: fixed;
width: 100%;
`;
/*background: red; arriba */

const NavLink = css` 
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none; 
`;

const Logo = styled(Link)`
${NavLink}
`;

const MenuBars = styled(FaBars)`
display: none;
@media screen and (max-width: 768px){
    display: block;
    background-size: contain;
    height: 40px;
    width: 40px ;
    cursor: pointer;
    position: absolute;
    top: 0; 
    right: 0;
    transform: translate(-90%,25%);
    color: #023F52;
    font-size: 25px;
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width: 768px){
    display: none;
}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;

const NavWS = styled.div`
display: flex;
align-items: center;
margin-right: 24px;
color: #fafafa;
font-size: 1.9rem;
transition: transform 200ms ease-in;


&:hover{
    transform: scale(1.30);
  color: #ad2830;
}

@media screen and (max-width: 768px){
    display: none;
}
`;

const Navbar = ({ toggle }) => {

    const [navColor,setNavColor] = useState(false)
const ChangeColor = () => {
    if(window.scrollY >= 60) {
        setNavColor(true)
    }else {
        setNavColor(false)
    }
}

window.addEventListener('scroll', ChangeColor)



    return(
        <Nav style={navColor? {"backgroundColor":"rgba(197, 223, 248)"} : {"background-color": ""}}>
            <Logo to='/'><img src={require('../images/Logo1.png')} height='82' width='100%' alt='logo'/></Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.Link} key={index} className={`text-[20px] font-bold text-[${navColor ? '#023F52' : '#fafafa'}]`}  style={{color: navColor ? '#023F52' : '#fafafa'}} >                    {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavWS>
               <Link to={'.//api.whatsapp.com/send?phone=18294432380'} target='_blank'><FaWhatsapp color={navColor ? '#023F52' : '#fafafa'}/></Link>
            </NavWS>
        </Nav>
    );
}



export function NavTwo() {

    const NavTwo = styled.nav`

height: 82px;
display: flex;
justify-content: space-between;
padding: 1rem 1rem;
width: 100%;
background-color: rgba(197, 223, 248);
`;
  return (
    <NavTwo />
  )
}


export default Navbar
