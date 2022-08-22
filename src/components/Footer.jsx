import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (

        <footer className='container-fluid' >
            <div className='row'>

                <div className='col-12 d-flex justify-content-center pt-3' >
                    <Nav className='gap-3' >
                        <Nav.Link href="https://github.com/BrajhanLopez" target='_blank' style={{ color: '#42446E' }}><i className="fa-brands  fa-github fs-2"></i></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/brajhan-lopez-suasnabar-5b2787194/" target='_blank' style={{ color: '#42446E' }}><i className="fa-brands fa-linkedin fs-2"></i></Nav.Link>
                        <Nav.Link href="https://wa.me/51930428602" target='_blank' style={{ color: '#42446E' }}><i className="fa-brands fa-whatsapp fs-2"></i></Nav.Link>
                    </Nav>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-12 col-md-6 pb-3'>
                   
                        <ul className="m-auto d-flex gap-4 justify-content-center  fs-6 tstyle " >
                            <li className='pp' onClick={()=>window.scrollTo( 0, 0 )}> <a className='text-decoration-none tstyle' href="#home"> Home</a></li>
                            {/* <li href="#pricing">About</li> */}
                            <li> <a href="#tech"  className='text-decoration-none tstyle'> Tech Stack </a></li>
                            <li> <a href="#project"  className='text-decoration-none tstyle'> Projects</a></li>
                            <li><a href="#contact" className='text-decoration-none tstyle'> Contact</a></li>

                        </ul>
                  
                </div>

                <div className='col-12 col-md-6 '>
                    <ul className="m-auto d-flex gap-2 justify-content-center fs-6 tstyle " >
                        <li>Designed and built by Bals 2022.</li>

                    </ul>

                </div>
            </div>

        </footer>

    );
};

export default Footer;