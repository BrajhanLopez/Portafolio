import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto from '../img/foto.png'
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import react from '../img/react.png'
import redux from '../img/redux.png'
import boot from '../img/bootstrap.png'
import tail from '../img/tailwind.png'
import sass from '../img/sass.png'
import git from '../img/git.png'
import github from '../img/github.png'
import landinpage from '../img/Friendsgarden.jpg'

const Main = () => {
    return (
        <div className='container mt'>
            <div className='row mt-3'>
                <div className='col-12 d-flex justify-content-end'>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
            <div className='row mb-2 mb-md-5'>
                <div className='col-12 col-sm-6 d-flex align-items-center justify-content-center'>
                    <div>
                        <h2 className='pre'>Hi 👋,</h2>
                        <h2 className='pre'>My name is</h2>
                        <h2 className='pre'>Brajhan Lopez</h2>
                        <h2 className='pre'>I build things for web</h2>

                        <div className="button mt-3 mb-2" data-tooltip="Size: 2Mb">
                            <div className="button-wrapper">
                                <div className="text">Download CV</div>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-12 col-sm-6 d-flex align-items-center justify-content-center p-4 p-sm-2 p-lg-5'>
                    <div className='foto1 '>
                        <img className='foto img-fluid ' src={foto} alt="" />
                    </div>
                </div>
            </div>



            <div className='row'>
                <div className='col-12 mt-md-5'>
                    <h2 className='pre text-center fs-1 mt-5'>My Tech Stack</h2>
                </div>

            </div>
            <div className='row'>
                <div className='col-12'>
                    <h4 className='text-center' style={{ color: '#666666', fontFamily: 'Poppins' }}> Technologies I’ve been working with recently</h4>
                </div>

            </div>

            <div className='row mt-md-5 mb-md-5'>
                <div className='col-6 col-sm-4 col-lg-3  col-xxl-2 offset-xxl-1  d-flex justify-content-center mb-5'>

                    <img className='tech img-fluid' src={html} alt="" />



                </div>
                <div className='col-6 col-sm-4  col-lg-3 col-xxl-2 d-flex justify-content-center mb-5'>

                    <img className='tech img-fluid' src={css} alt="" />



                </div>
                <div className='col-6  col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5'>

                    <img className='tech img-fluid' src={js} alt="" />



                </div>
                <div className='col-6  col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5'>

                    <img className='tech img-fluid' src={react} alt="" />



                </div>
                <div className='col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5'>

                    <img className='tech img-fluid' src={redux} alt="" />



                </div>
                <div className='col-6 col-sm-4 col-lg-3 col-xxl-2 offset-xxl-1 d-flex justify-content-center mb-5'>



                    <img className='tech img-fluid' src={boot} alt="" />

                </div>
                <div className='col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5'>



                    <img className='tech img-fluid' src={tail} alt="" />

                </div>
                <div className='col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5'>



                    <img className='tech img-fluid' src={sass} alt="" />

                </div>
                <div className='col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5'>



                    <img className='tech img-fluid' src={git} alt="" />

                </div>
                <div className='col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5'>



                    <img className='tech img-fluid' src={github} alt="" />

                </div>

            </div>
            <div className='row'>
                <div className='col-12'>
                    <h2 className='pre text-center fs-1 mt-5'>Projects</h2>
                </div>
                <div className='col-12'>
                    <h4 className='text-center mb-md-3' style={{ color: '#666666', fontFamily: 'Poppins' }}> Things I’ve built so far</h4>
                </div>


            </div>

            <div className='row'>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 '>
                    <Card className='mb-5 cdr im '>
                        <div className=''>
                        <Card.Img className='' variant="top" src={landinpage} />
                        </div>
                        <Card.Body>
                            <Card.Title className='f t'>Sitio Web Educativo</Card.Title>
                            <Card.Text className='justify f c' style={{fontWeight: '300'}}>
                                Página estática creada como landing page para promocionar una institución educativa.
                            </Card.Text>
                            <Card.Text className='f fs-7 justify' style={{color: '#42446E'}}>
                               <b>Tech stack: </b> HTML, CSS, JS, Bootstrap, Sass.
                            </Card.Text>
                            <div className='text-center'>
                            <Card.Link style={{color: '#000000', textDecoration: 'none'}} href="https://friendsgardens.netlify.app/"><i className="fa-solid fa-link"></i>  Live Preview</Card.Link>
                            <Card.Link  style={{color: '#000000', textDecoration: 'none'}} href="https://github.com/BrajhanLopez/school-Lopez"><i className="fa-brands fa-github"></i>   View Code</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
                    <Card className='mb-5 cdr im'>
                        <Card.Img className='' variant="top" src={landinpage}/>
                        <Card.Body>
                            <Card.Title className='f t'>Sitio Web Educativo</Card.Title>
                            <Card.Text className='justify f c' style={{fontWeight: '300'}}>
                                Página estática creada como landing page para promocionar una institución educativa.
                            </Card.Text>
                            <Card.Text className='f fs-7 justify' style={{color: '#42446E'}}>
                               <b>Tech stack: </b> HTML, CSS, JS, Bootstrap, Sass.
                            </Card.Text>
                            <div className='text-center'>
                            <Card.Link style={{color: '#000000', textDecoration: 'none'}} href="#"><i className="fa-solid fa-link"></i>  Live Preview</Card.Link>
                            <Card.Link style={{color: '#000000', textDecoration: 'none'}} href="#"><i className="fa-brands fa-github"></i>   View Code</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
                    <Card className='mb-5 cdr im'>
                        <Card.Img variant="top" src={landinpage} />
                        <Card.Body>
                            <Card.Title className='f t'>Sitio Web Educativo</Card.Title>
                            <Card.Text className='justify f c' style={{fontWeight: '300'}}>
                                Página estática creada como landing page para promocionar una institución educativa.
                            </Card.Text>
                            <Card.Text className='f fs-7 justify' style={{color: '#42446E'}}>
                               <b>Tech stack: </b> HTML, CSS, JS, Bootstrap, Sass.
                            </Card.Text>
                            <div className='text-center'>
                            <Card.Link style={{color: '#000000', textDecoration: 'none'}} href="#"><i className="fa-solid fa-link"></i>  Live Preview</Card.Link>
                            <Card.Link style={{color: '#000000', textDecoration: 'none'}} href="#"><i className="fa-brands fa-github"></i>   View Code</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
                    <Card className='mb-5 cdr im'>
                        <Card.Img variant="top" src={landinpage} />
                        <Card.Body>
                            <Card.Title className='f t'>Sitio Web Educativo</Card.Title>
                            <Card.Text className='justify f c' style={{fontWeight: '300'}}>
                                Página estática creada como landing page para promocionar una institución educativa.
                            </Card.Text>
                            <Card.Text className='f fs-7 justify' style={{color: '#42446E'}}>
                               <b>Tech stack: </b> HTML, CSS, JS, Bootstrap, Sass.
                            </Card.Text>
                            <div className='text-center'>
                            <Card.Link style={{color: '#000000', textDecoration: 'none'}} href="#"><i className="fa-solid fa-link"></i>  Live Preview</Card.Link>
                            <Card.Link style={{color: '#000000', textDecoration: 'none'}} href="#"><i className="fa-brands fa-github"></i>   View Code</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
                    <Card className='mb-5 cdr im'>
                        <Card.Img variant="top" src={landinpage} />
                        <Card.Body>
                            <Card.Title className='f t'>Sitio Web Educativo</Card.Title>
                            <Card.Text className='justify f c' style={{fontWeight: '300'}}>
                                Página estática creada como landing page para promocionar una institución educativa.
                            </Card.Text>
                            <Card.Text className='f fs-7 justify' style={{color: '#42446E'}}>
                               <b>Tech stack: </b> HTML, CSS, JS, Bootstrap, Sass.
                            </Card.Text>
                            <div className='text-center'>
                            <Card.Link style={{color: '#000000', textDecoration: 'none'}} href="#"><i className="fa-solid fa-link"></i>  Live Preview</Card.Link>
                            <Card.Link style={{color: '#000000', textDecoration: 'none'}} href="#"><i className="fa-brands fa-github"></i>   View Code</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
                    <Card className='mb-5 cdr im'>
                        <Card.Img variant="top" src={landinpage} />
                        <Card.Body>
                            <Card.Title className='f t'>Sitio Web Educativo</Card.Title>
                            <Card.Text className='justify f c' style={{fontWeight: '300'}}>
                                Página estática creada como landing page para promocionar una institución educativa.
                            </Card.Text>
                            <Card.Text className='f fs-7 justify' style={{color: '#42446E'}}>
                               <b>Tech stack: </b> HTML, CSS, JS, Bootstrap, Sass.
                            </Card.Text>
                            <div className='text-center'>
                            <Card.Link style={{color: '#000000', textDecoration: 'none'}} href="#"><i className="fa-solid fa-link"></i>  Live Preview</Card.Link>
                            <Card.Link style={{color: '#000000', textDecoration: 'none'}} href="#"><i className="fa-brands fa-github"></i>   View Code</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
               
            </div>





            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Main;