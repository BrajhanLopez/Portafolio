import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import foto from "../img/foto3.png";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react.png";
import redux from "../img/redux.png";
import boot from "../img/bootstrap.png";
import tail from "../img/tailwind.png";
import sass from "../img/sass.png";
import git from "../img/git.png";
import github from "../img/github.png";
import node from "../img/nodejs.png"
import express from "../img/expressjs.png"
import firebase from "../img/firebase.png"
import mongo from "../img/mongodb.png"
import postgre from "../img/postgre.png"
import landinpage from "../img/Friendsgarden.jpg";
import running from "../img/running.png";
import dale from "../img/dale.png";
import aula from "../img/aula.png";
import taki from "../img/taki.png";
import cai from "../img/cai.png";
import smart from "../img/smart.png";
import clima from "../img/weather.jpg";
import ecomerce from "../img/ecomerce.jpg";
import aromaticas from '../img/aromaticas.jpg'
import ecomercejs from '../img/ecomercejs.jpg'
import buscador from '../img/buscador.jpg'
import rick from '../img/rickandmorty.jpg'
import crud from '../img/crud.png'
import meli from '../img/meli.png'
import cabini from '../img/cabini.png'
import ecommercetech from '../img/EcomerRopa.png'
import move from '../img/move.png'
const Main = () => {
  return (
    <div className="container pt-3 pb-5">
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
      <div className="row mb-2 mb-md-5">
        <div
          className="col-12 col-sm-6 d-flex align-items-center justify-content-center"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div>
            <h2 className="pre">Hola 👋,</h2>
            <h2 className="pre">Mi nombre es</h2>
            <h2 className="pre">Brajhan Lopez</h2>
            <h2 className="pre">soy Ingeniero de Sistemas y desarrollador Web FullStack</h2>

            <a
              href="https://drive.google.com/file/d/1hZXNL9RrSCWwnbRz__dY6yDxzWLTSK-z/view?usp=sharing"
              target="_blank"
            >
              <div className="button mt-3 mb-2">
                <div className="button-wrapper">
                  <div className="text">Descargar CV</div>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="2em"
                      height="2em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div
          className="col-12 col-sm-6 d-flex align-items-center justify-content-center p-4 p-sm-2 p-lg-5"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="3000"
        >
          <div className="foto1 ">
            <img className="foto img-fluid " src={foto} alt="" />
          </div>
        </div>
        <div></div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="row" id="tech">
        <div
          className="col-12 mt-md-5"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h2 className="pre text-center fs-1 mt-5">Tecnologías que domino</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12" data-aos="fade-up" data-aos-duration="3000">
          <h4
            className="text-center"
            style={{ color: "#666666", fontFamily: "Poppins" }}
          >
            {" "}
            Trabajando recientemente en mis proyectos
          </h4>
        </div>
      </div>

      <div className="row mt-md-5 mb-md-5">
        <div
          className="col-6 col-sm-4 col-lg-3  col-xxl-2 offset-xxl-1  d-flex flex-column align-items-center mb-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          <img className="tech img-fluid" src={html} alt="" />
          <p className="fw-bold">HTML</p>
        </div>
        <div
          className="col-6 col-sm-4  col-lg-3 col-xxl-2 d-flex flex-column align-items-center mb-5"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img className="tech img-fluid" src={css} alt="" />
          <p className="fw-bold">CSS</p>
        </div>
        <div
          className="col-6  col-sm-4 col-lg-3 col-xxl-2 d-flex flex-column align-items-center mb-5"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2500"
        >
          <img className="tech img-fluid" src={js} alt="" />
          <p className="fw-bold">JAVASCRIPT</p>
        </div>
        <div
          className="col-6  col-sm-4 col-lg-3 col-xxl-2 d-flex flex-column align-items-center mb-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          <img className="tech img-fluid" src={react} alt="" />
          <p className="fw-bold mt-3">REACT</p>
        </div>
        <div
          className="col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex flex-column align-items-center mb-5"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img className="tech img-fluid" src={redux} alt="" />
          <p className="fw-bold mt-3">REDUX</p>
        </div>
        <div
          className="col-6 col-sm-4 col-lg-3 col-xxl-2 offset-xxl-1 d-flex flex-column align-items-center justify-content-center mb-5"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2500"
        >
          <img className="tech img-fluid" src={boot} alt="" />
          <p className="fw-bold mt-3">BOOTSTRAP</p>
        </div>
        <div
          className="col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex flex-column align-items-center justify-content-center mb-5"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img className="tech img-fluid" src={tail} alt="" />
          <p className="fw-bold mt-2">TAILWINDCSS</p>
        </div>
        <div
          className="col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex flex-column align-items-center justify-content-center mb-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          <img className="tech img-fluid" src={sass} alt="" />
          <p className="fw-bold mt-3">SASS</p>
        </div>
        <div
          className="col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex flex-column align-items-center justify-content-center mb-5"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img className="tech img-fluid" style={{ width: '100px' }} src={node} alt="" />
          <p className="fw-bold mt-2">NODEJS</p>
        </div>
        <div
          className="col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex flex-column align-items-center justify-content-center mb-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          <img className="tech img-fluid" src={express} style={{ width: '90px' }} alt="" />
          <p className="fw-bold mt-3">EXPRESSJS</p>
        </div>

        <div
          className="col-6 col-sm-4 col-lg-3  col-xxl-2 offset-xxl-1  d-flex flex-column align-items-center mb-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          <img className="tech img-fluid" style={{ width: '110px' }} src={firebase} alt="" />
          <p className="fw-bold" style={{ marginTop: '10px' }}>FIREBASE</p>
        </div>
        <div
          className="col-6 col-sm-4  col-lg-3 col-xxl-2 d-flex flex-column align-items-center mb-5"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img className="tech img-fluid" src={mongo} style={{ width: '110px' }} alt="" />
          <p className="fw-bold" style={{ marginTop: '10px' }}>MONGODB</p>
        </div>
        <div
          className="col-6  col-sm-4 col-lg-3 col-xxl-2 d-flex flex-column align-items-center mb-5"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2500"
        >
          <img className="tech img-fluid" src={postgre} style={{ width: '110px' }} alt="" />
          <p className="fw-bold" style={{ marginTop: '10px' }}>POSTGRESQL</p>
        </div>
        <div
          className="col-6  col-sm-4 col-lg-3 col-xxl-2 d-flex flex-column align-items-center mb-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          <img className="tech img-fluid" src={git} alt="" />
          <p className="fw-bold mt-3">GIT</p>
        </div>
        <div
          className="col-6 col-sm-4 col-lg-3 col-xxl-2 d-flex flex-column align-items-center mb-5"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img className="tech img-fluid" src={github} alt="" />
          <p className="fw-bold mt-3">GITHUB</p>
        </div>


        <div id="project"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="row" id="project">
        <div className="col-12">
          <h2
            className="pre text-center fs-1 mt-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Proyectos para Empresas
          </h2>
        </div>
        <div className="col-12">
          <h4
            className="text-center mb-md-3"
            style={{ color: "#666666", fontFamily: "Poppins" }}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {" "}
            Desarrollo proyectos web fullstack para cubrir las necesidades empresariales.

          </h4>
        </div>
      </div>

      <div className="row gy-3">

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={running} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">Zona Running.Mx</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
              Plataforma web integral para consultora de entrenamiento de alto rendimiento. Conecta especialistas en entrenamiento, nutrición y psicología para preparar atletas.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> React, NextJs, TailwindCSS, Redux, NodeJs, Express, Typescript, MongoDB, REST.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://zonarunning.com.mx/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                {/* <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/wilmer-energy/FinalReact"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link> */}
              </div>
            </Card.Body>
          </Card>
        </div>

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={taki} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">Market Place Takiven - Perú</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
              Marketplace de la importadora Takiven Perú - E.I.R.L. que permite a tiendas mayoristas vender online sus productos directamente al público en general.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> React, NextJs, TailwindCSS, Redux, C#, Core, REST, MySQL .
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://takiven.vercel.app/home"
                >
                  <i className="fa-solid fa-link"></i> Live Preview (versión Demo)
                </Card.Link>
                {/* <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/ProjectsDevLatam/AromaticsApp"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link> */}
              </div>
            </Card.Body>
          </Card>
        </div>

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={aula} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center"> Web de gestión Educativa - Aula X</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
              Desarrollo de una plataforma web educativa para la I.E. High School Dreams. Esta plataforma facilita el control de asistencia, gestión de tareas y registro de calificaciones.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> React, NextJs, TailwindCSS, Redux, nodejs, Typescript, REST, PostgreSQL .
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://www.aulaequis.com/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                {/* <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/ProjectsDevLatam/AromaticsApp"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link> */}
              </div>
            </Card.Body>
          </Card>
        </div>



        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={cai} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center"> Web de consultoria y Asesoria</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
              Desarrollo de un sitio web para CAI Ventures E.I.R.L., un centro de investigación y asociados. La página web actúa como una agenda de citas, permitiendo pagos a través de códigos QR para mayor comodidad y eficiencia.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> React, JS, TailwindCSS, EmailJs, Firebase, Tunky.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://www.caiventuresconsultoria.com/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                {/* <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/ProjectsDevLatam/AromaticsApp"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link> */}
              </div>
            </Card.Body>
          </Card>
        </div>

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={smart} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center"> Web de consultoria Jurídica</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
              Sitio web para ReclamaSmart S.A.C., una plataforma que proporciona información detallada, orientación y la posibilidad de agendar citas para asesoramiento personalizado. 
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> React, nextJs, TailwindCSS, EmailJs, typescript.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://reclama-smart.vercel.app/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                {/* <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/ProjectsDevLatam/AromaticsApp"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link> */}
              </div>
            </Card.Body>
          </Card>
        </div>

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={dale} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center"> ONG DalequeValent.Arg</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
              Sitio web para la ONG DaleQueValen. Ofrece información detallada sobre la historia y datos relevantes de la organización, además de servir como plataforma para recibir donaciones y apoyo.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> React, nextJs, TailwindCSS, EmailJs, typescript.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://reclama-smart.vercel.app/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                {/* <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/ProjectsDevLatam/AromaticsApp"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link> */}
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12">
          <h4
            className="text-center mb-md-3"
            style={{ color: "#666666", fontFamily: "Poppins" }}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {" "}
            ¡Y muchos más proyectos!
          </h4>
          <h5
            className="text-center mb-md-3"
            style={{ color: "#666666", fontFamily: "Poppins" }}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {" "}
            Formo parte de <a href="https://www.linkedin.com/company/footalent/">@FooTalentGroup.</a> Si quieres conocer más sobre mi trabajo, no dudes en <a href="https://api.whatsapp.com/send?phone=51930428602">contactarme</a> 😉.
          </h5>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* PROYECTOS PERSONALES */}
      <div className="row" id="project">
        <div className="col-12">
          <h2
            className="pre text-center fs-1 mt-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Mis proyectos personales
          </h2>
        </div>
        <div className="col-12">
          <h4
            className="text-center mb-md-3"
            style={{ color: "#666666", fontFamily: "Poppins" }}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {" "}
            Sitios web de práctica y aprendizaje
          </h4>
        </div>
      </div>
      <div className="row gy-3">


   

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={move} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">Alquiler de vehiculos - MoveAr</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
              Aplicación web de alquiler de vehículos para mudanzas. Permite a los usuarios registrarse, buscar y reservar vehículos disponibles en su ciudad para sus necesidades de transporte.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b>  React, TailwindCss, NextJs, react-hook-forms,  typescript, Java, springboot, API REST, Mercado Pago.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://s7-12-m-javareact.vercel.app/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/No-Country/s7-12-m-javareact"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>            

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={ecommercetech} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">E-Commerce SmartStyle</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
                Sitio web Fullstack, Ecomerce donde poder realizar la compra de ropa - accesorios y hacer pagos por stripe.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> HTML, CSS, JS, TailwindCss, React, Redux, java, springboot, Stripe.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://c14-26-m-java-react.vercel.app/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/BrajhanLop/EcommerceTech"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={ecomerce} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">E-Commerce - Tienda Electrónica</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
                Sitio web que nos muestra el funcionamiento de una tienda
                virtual realizando el proceso de compra.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> HTML, CSS, JS, Bootstrap, React, Redux.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://stupendous-biscochitos-1a9e93.netlify.app/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/wilmer-energy/FinalReact"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={cabini} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">Reserva de Hotel - Cabinni</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
              Aplicación web de reserva de hoteles. Ofrece la posibilidad de buscar habitaciones por país y realizar reservas de manera sencilla y eficiente.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> JS, Vite, Bootstrap, React, Redux, java, springboot.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://clon-no-country.vercel.app/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/No-Country/c8-22-m-javareact"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={aromaticas} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">Aromaticas Web</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
                Sitio web informativo para los amantes de las plantas, nos surmerge al mundo de la siembra de plantas y su cuidado.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> HTML, CSS, JS, Bootstrap, React, nodejs, expressjs.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://aromatics.netlify.app/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/ProjectsDevLatam/AromaticsApp"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className=" h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={landinpage} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">
                Sitio Web Educativo
              </Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
                Página estática creada como landing page para promocionar una
                institución educativa.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> HTML, CSS, JS, Bootstrap, Sass.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://friendsgardens.netlify.app/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/BrajhanLopez/school-Lopez"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={clima} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">
                Sitio Web del Clima
              </Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
                Página que nos muestra en tiempo real el clima de la cuidad
                donde nos esta visitando.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> HTML, CSS, Bootstrap, JS, React.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://blsweatherapp.netlify.app/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/BrajhanLopez/appclimate"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={ecomercejs} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">E-Commerce CompuTech</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
                Sitio web que nos simula el proceso de compra, agregando productos al carrito para luego enviar un email con tu orden de pedido, realizado con javascript Vanilla.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> HTML, CSS, JS Vanilla, Bootstrap.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://brajhanlop.github.io/Ecommer_Basico/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/BrajhanLop/Ecommer_Basico"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={meli} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">Clon Mercado Libre - Meli</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
              Aplicación web FullStack con funcionalidades similares a  mercadolibre que permiten a los usuarios elegir productos y proceder con la compra de manera fácil y segura.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> React, Vite, Redux, TailwindCSS, Java, Springboot.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://www.canva.com/design/DAFkoByCqps/c3dW5Wi5SGx9Dscce5jhtw/watch?utm_content=DAFkoByCqps&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/No-Country/s8-08-t-java-react-mercadolibre"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={buscador} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">Buscador de Stickers</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
                Sitio web en el cual puedes buscar facilmente stickers de todos los gustos, tan solo escribe y busca.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> HTML, CSS, JS, TailwindCss, React, API REST.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://buscastickers.vercel.app/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/BrajhanLop/Ecommer_Basico"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={rick} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">Rick and Morty Wiki</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
              Sitio web que nos muestra informacion de los personajes y más de la serie de televisión Rick and Morty.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> HTML, CSS, JS, Bootstrap, React.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://rickandmorthyapp.netlify.app/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/BrajhanLop/Rickandmorthy"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div
          className="col-12 col-sm-6 col-md-6 col-lg-4 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Card className="h-100 im shadow">
            <Card.Img className="box-img" variant="top" src={crud} />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="f t text-center">CRUD - API REST</Card.Title>
              <Card.Text className="justify f c" style={{ fontWeight: "300" }}>
              Aplicación web y una API REST que permite la gestión de usuarios, incluyendo la capacidad de agregar, editar y eliminar perfiles.
              </Card.Text>
              <Card.Text
                className="f fs-7 justify"
                style={{ color: "#42446E" }}
              >
                <b>Tech stack: </b> HTML, CSS, JS, Bootstrap, React.
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://crudusers-dev.netlify.app/"
                >
                  <i className="fa-solid fa-link"></i> Live Preview
                </Card.Link>
                <Card.Link
                  className="lk"
                  style={{ color: "#000000", textDecoration: "none" }}
                  target="_blank"
                  href="https://github.com/Brajhandev/crud-app"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </Card.Link>
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
