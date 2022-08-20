import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/blsDev.png'

const Header = () => {
    return (
        <div className='bg-secondary'>
            <Navbar className='nav-bar' collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
                <Container>
                   
                    <Navbar.Brand href="#home"><img className='img-logo' src={logo} alt="logo" /></Navbar.Brand>
                    <Nav className='d-flex flex-row gap-4 d-lg-none'>
                        <Nav.Link href="https://github.com/BrajhanLopez"><i className="fa-brands fa-github rs"></i></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/brajhan-lopez-suasnabar-5b2787194/"><i className="fa-brands fa-linkedin rs"></i></Nav.Link>
                       
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto gap-2 text-center fs-5">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Tech Stack</Nav.Link>
                            <Nav.Link href="#pricing">Projects</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>

                        </Nav>
                        <Nav className='gap-2 d-none d-lg-flex'>
                            <Nav.Link href="https://github.com/BrajhanLopez"><i className="fa-brands fa-github rs"></i></Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/brajhan-lopez-suasnabar-5b2787194/"><i className="fa-brands fa-linkedin rs"></i></Nav.Link>
                            <Nav.Link href="#deets"><i className="fa-brands fa-twitch rs"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;