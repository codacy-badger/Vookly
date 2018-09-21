import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/Vookly-icon.png'


const HeaderWrapper = styled.div`
   
   background: #524763;
   margin-bottom: 1.45rem;
   h1 {
     img{
       height: 30 px;
       margin-left:0; 
       size:2em;

     } 
   }
  
`;

const HeaderContainer = styled.div`
   
   margin:0 auto;
   max-width: 960px;
   padding: 1.45rem 1.0875rem;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        </Link> 
        <img src = {logo} alt="Vookly"/>
      </h1>
    <Link to="/howto/">Comment ça marche?</Link>
    <Link to="/signin/">Mon espace</Link>
    <Link to="/register/">S'inscrire</Link>

    </HeaderContainer>
  </HeaderWrapper>
)
export default Header
