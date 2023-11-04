import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/blsDev.png'

const Header = ({theme}) => {

        


    return (
        
            <Navbar className='nav-bar' collapseOnSelect  expand="lg" bg={theme?'dark':'light'} variant={theme?'dark':'light'} sticky='top' >
                <Container>
                   
                    <Navbar.Brand href="#home"><img className='img-logo'  src={logo} alt="logo" /></Navbar.Brand>
                    <Nav className='d-flex flex-row gap-4 d-lg-none'>
                        <Nav.Link href="https://github.com/BrajhanLopez"><i className="fa-brands fa-github rs"></i></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/brajhan-lopez-suasnabar-5b2787194/"><i className="fa-brands fa-linkedin rs"></i></Nav.Link>
                       
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto gap-2 text-center fs-5">
                            <Nav.Link href="#home" onClick={()=>window.scrollTo( 0, 0 )}>Inicio</Nav.Link>
                            {/* <Nav.Link href="#">About</Nav.Link> */}
                            <Nav.Link href="#tech">Tecnologías</Nav.Link>
                            <Nav.Link href="#project">Proyectos</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>

                        </Nav>
                        <Nav className='gap-2 d-none d-lg-flex' >
                            <Nav.Link href="https://github.com/BrajhanLop" target='_blank'><i className="fa-brands fa-github rs"></i></Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/brajhanlopez/" target='_blank'><i className="fa-brands fa-linkedin rs"></i></Nav.Link>
                            <Nav.Link href="https://www.youtube.com/channel/UCZ6iBi9rLrDC6CbY77vnB2Q" target='_blank'><i className="fa-brands fa-youtube rs"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
      
    );
};

export default Header;