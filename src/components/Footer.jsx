import React from 'react';
import Nav from 'react-bootstrap/Nav';


const Footer = () => {
    return (
        <footer className='container-fluid' >
            <div className='row'>
               
                <div className='col-12 d-flex justify-content-center pt-3' >
                    <Nav className='gap-3' >
                        <Nav.Link href="https://github.com/BrajhanLopez" style={{color:'#42446E'}}><i className="fa-brands fa-github fs-2"></i></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/brajhan-lopez-suasnabar-5b2787194/" style={{color:'#42446E'}}><i className="fa-brands fa-linkedin fs-2"></i></Nav.Link>
                        <Nav.Link href="https://www.twitch.tv/brajhan_xls" style={{color:'#42446E'}}><i className="fa-brands fa-twitch fs-2 "></i></Nav.Link>
                    </Nav>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-12 col-md-6 pb-3'>
                <Nav className="m-auto gap-2 justify-content-center  fs-6 " >
                            <Nav.Link className='pp' href="#features" style={{color:'#42446E'}}>Home</Nav.Link>
                            <Nav.Link  style={{color:'#42446E'}} href="#pricing">About</Nav.Link>
                            <Nav.Link style={{color:'#42446E'}} href="#pricing">Tech Stack</Nav.Link>
                            <Nav.Link style={{color:'#42446E'}} href="#pricing">Projects</Nav.Link>
                            <Nav.Link style={{color:'#42446E'}} href="#pricing">Contact</Nav.Link>

                        </Nav>
                </div>

                <div className='col-12 col-md-6 '>
                <Nav className="m-auto gap-2 justify-content-center fs-6 " >
                <Nav.Link style={{color:'#42446E'}} href="#pricing">Designed and built by Bals 2022.</Nav.Link>
                
                </Nav>
                    
                </div>
            </div>

        </footer>

    );
};

export default Footer;