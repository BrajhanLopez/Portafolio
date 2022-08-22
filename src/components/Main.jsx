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
import pokedex from '../img/pokedex.jpg'
import clima from '../img/weather.jpg'
import ecomerce from '../img/ecomerce.jpg'


const Main = () => {
    return (
        <div className='container pt-3 pb-5'>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <br />
            <br />
            <br />
            <br />
            <div className='row mb-2 mb-md-5'>
                <div className='col-12 col-sm-6 d-flex align-items-center justify-content-center' data-aos="fade-up"
                    data-aos-duration="3000">
                    <div>
                        <h2 className='pre'>Hi 👋,</h2>
                        <h2 className='pre'>My name is</h2>
                        <h2 className='pre'>Brajhan Lopez</h2>
                        <h2 className='pre'>I build things for web</h2>

                        <a href="https://drive.google.com/file/d/1iQkO0_PirQJ_7oM18AmxMK9Ybiz3o2jY/view?usp=sharing" target='_blank'>
                            <div className="button mt-3 mb-2" >
                                <div className="button-wrapper">

                                    <div className="text">

                                        Download CV
                                    </div>
                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                                    </span>
                                </div>
                            </div></a>

                    </div>
                </div>
                <div className='col-12 col-sm-6 d-flex align-items-center justify-content-center p-4 p-sm-2 p-lg-5' data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="3000">
                    <div className='foto1 '>
                        <img className='foto img-fluid ' src={foto} alt="" />
                    </div>
                </div>
                <div id='tech'></div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div className='row'  >
                <div className='col-12 mt-md-5' data-aos="fade-up"
                    data-aos-duration="3000" >
                    <h2 className='pre text-center fs-1 mt-5'  >My Tech Stack</h2>
                </div>

            </div>
            <div className='row' >
                <div className='col-12' data-aos="fade-up"
                    data-aos-duration="3000" >
                    <h4 className='text-center' style={{ color: '#666666', fontFamily: 'Poppins' }}> Technologies I’ve been working with recently</h4>
                </div>

            </div>

            <div className='row mt-md-5 mb-md-5' >
                <div className='col-6 col-sm-4 col-lg-3  col-xxl-2 offset-xxl-1  d-flex justify-content-center mb-5' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500">

                    <img className='tech img-fluid' src={html} alt="" />



                </div>
                <div className='col-6 col-sm-4  col-lg-3 col-xxl-2 d-flex justify-content-center mb-5' data-aos="fade-up"
     data-aos-duration="3000">

                    <img className='tech img-fluid' src={css} alt="" />



                </div>
                <div className='col-6  col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="2500">

                    <img className='tech img-fluid' src={js} alt="" />



                </div>
                <div className='col-6  col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500">

                    <img className='tech img-fluid' src={react} alt="" />



                </div>
                <div className='col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5' data-aos="fade-up"
     data-aos-duration="3000">

                    <img className='tech img-fluid' src={redux} alt="" />



                </div>
                <div className='col-6 col-sm-4 col-lg-3 col-xxl-2 offset-xxl-1 d-flex justify-content-center mb-5' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="2500">



                    <img className='tech img-fluid' src={boot} alt="" />

                </div>
                <div className='col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5' data-aos="fade-up"
     data-aos-duration="3000">



                    <img className='tech img-fluid' src={tail} alt="" />

                </div>
                <div className='col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500">



                    <img className='tech img-fluid' src={sass} alt="" />

                </div>
                <div className='col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5' data-aos="fade-up"
     data-aos-duration="3000">



                    <img className='tech img-fluid' src={git} alt="" />

                </div>
                <div className='col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex justify-content-center mb-5' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500">



                    <img className='tech img-fluid' src={github} alt="" />

                </div>
                <div id='project'></div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className='row' id='project'>
                <div className='col-12'>
                    <h2 className='pre text-center fs-1 mt-5' data-aos="fade-up"
                    data-aos-duration="3000"  >Projects</h2>
                </div>
                <div className='col-12'>
                    <h4 className='text-center mb-md-3'  style={{ color: '#666666', fontFamily: 'Poppins' }} data-aos="fade-up"
                    data-aos-duration="3000" > Things I’ve built so far</h4>
                </div>


            </div>

            <div className='row gy-3'>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4' data-aos="fade-up"
                    data-aos-duration="3000" >
                    <Card className=' h-100 im shadow'>

                        <Card.Img className='box-img' variant="top" src={landinpage} />

                        <Card.Body className='d-flex flex-column'>
                            <Card.Title className='f t text-center'>Sitio Web Educativo</Card.Title>
                            <Card.Text className='justify f c' style={{ fontWeight: '300' }}>
                                Página estática creada como landing page para promocionar una institución educativa.
                            </Card.Text>
                            <Card.Text className='f fs-7 justify' style={{ color: '#42446E' }}>
                                <b>Tech stack: </b> HTML, CSS, JS, Bootstrap, Sass.
                            </Card.Text>
                            <div className='d-flex justify-content-around'>
                                <Card.Link className='lk' style={{ color: '#000000', textDecoration: 'none' }} target='_blank' href="https://friendsgardens.netlify.app/"><i className="fa-solid fa-link"></i>  Live Preview</Card.Link>
                                <Card.Link className='lk' style={{ color: '#000000', textDecoration: 'none' }} target='_blank' href="https://github.com/BrajhanLopez/school-Lopez"><i className="fa-brands fa-github"></i>   View Code</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 ' data-aos="fade-up"
                    data-aos-duration="3000" >
                    <Card className='h-100 im shadow'>

                        <Card.Img className='box-img' variant="top" src={clima} />

                        <Card.Body className='d-flex flex-column'>
                            <Card.Title className='f t text-center'>Sitio Web del Clima</Card.Title>
                            <Card.Text className='justify f c' style={{ fontWeight: '300' }}>
                                Página que nos muestra en tiempo real el clima de la cuidad donde nos esta visitando.
                            </Card.Text>
                            <Card.Text className='f fs-7 justify' style={{ color: '#42446E' }}>
                                <b>Tech stack: </b> HTML, CSS, Bootstrap, JS, React.
                            </Card.Text>
                            <div className='d-flex justify-content-around'>
                                <Card.Link className='lk' style={{ color: '#000000', textDecoration: 'none' }} target='_blank' href="https://blsweatherapp.netlify.app/"><i className="fa-solid fa-link"></i>  Live Preview</Card.Link>
                                <Card.Link className='lk' style={{ color: '#000000', textDecoration: 'none' }} target='_blank' href="https://github.com/BrajhanLopez/appclimate"><i className="fa-brands fa-github"></i>   View Code</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-12 col-sm-6 col-md-6 col-lg-4 ' data-aos="fade-up"
                    data-aos-duration="3000" >
                    <Card className='h-100 im shadow'>

                        <Card.Img className='box-img' variant="top" src={pokedex} />

                        <Card.Body className='d-flex flex-column'>
                            <Card.Title className='f t text-center'>Sitio Web Pokedex</Card.Title>
                            <Card.Text className='justify f c' style={{ fontWeight: '300' }}>
                                Sitio web que nos muestra el funcionamiento de una pokedex real, utilizando la Api PokeApi.
                            </Card.Text>
                            <Card.Text className='f fs-7 justify' style={{ color: '#42446E' }}>
                                <b>Tech stack: </b> HTML, CSS, JS, React.
                            </Card.Text>
                            <div className='d-flex justify-content-around'>
                                <Card.Link className='lk' style={{ color: '#000000', textDecoration: 'none' }} target='_blank' href="https://pokemonpokeapi.netlify.app/"><i className="fa-solid fa-link"></i>  Live Preview</Card.Link>
                                <Card.Link className='lk' style={{ color: '#000000', textDecoration: 'none' }} target='_blank' href="https://github.com/BrajhanLopez/Pokedexapp"><i className="fa-brands fa-github"></i>   View Code</Card.Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-12 col-sm-6 col-md-6 col-lg-4 ' data-aos="fade-up"
                    data-aos-duration="3000" >
                    <Card className='h-100 im shadow'>

                        <Card.Img className='box-img' variant="top" src={ecomerce} />

                        <Card.Body className='d-flex flex-column'>
                            <Card.Title className='f t text-center'>E-Commerce</Card.Title>
                            <Card.Text className='justify f c' style={{ fontWeight: '300' }}>
                                Sitio web que nos muestra el funcionamiento de una tienda virtual realizando el proceso de compra.
                            </Card.Text>
                            <Card.Text className='f fs-7 justify' style={{ color: '#42446E' }}>
                                <b>Tech stack: </b> HTML, CSS, JS, Bootstrap, React, Redux.
                            </Card.Text>
                            <div className='d-flex justify-content-around'>
                                <Card.Link className='lk' style={{ color: '#000000', textDecoration: 'none' }} target='_blank' href="https://stupendous-biscochitos-1a9e93.netlify.app/"><i className="fa-solid fa-link"></i>  Live Preview</Card.Link>
                                <Card.Link className='lk' style={{ color: '#000000', textDecoration: 'none' }} target='_blank' href="https://stupendous-biscochitos-1a9e93.netlify.app/"><i className="fa-brands fa-github"></i>   View Code</Card.Link>
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