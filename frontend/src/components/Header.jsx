import React from 'react'
import logo from '../assets/logo.png';
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,Container} from 'react-bootstrap'
import  {FaShoppingCart,FaUser} from 'react-icons/fa'
const Header = () => {
  return (
    <header>
         <Navbar bg='dark' variant="dark" expand="lg" collapseOnSelect>
         <Container>
                <LinkContainer to='/'>
                <Navbar.Brand  >
                    <img src={logo} alt='none'/>
                    ProShop</Navbar.Brand>
                    </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                    <LinkContainer to='/cart'>
                        <Nav.Link ><FaShoppingCart/>Cart</Nav.Link></LinkContainer>
                        <LinkContainer to='/login'><Nav.Link href='/login'><FaUser/>Login</Nav.Link></LinkContainer>
                        
                    </Nav>
                </Navbar.Collapse>
        </Container>
         </Navbar>
    </header>
  )
}

export default Header