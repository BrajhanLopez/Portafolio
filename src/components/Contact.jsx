import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        if (!form.current.name.value || !form.current.email.value || !form.current.subject.value || !form.current.message.value) {
            Swal.fire(
                'Campos Vacios!',
                'Tienes que completar todos los campos para enviar el formulario',
                'warning'
            )
            return
        }
          emailjs.sendForm('service_cumf9k7', 'template_lj1ox5c', form.current, 'yG8cKR77looZvhJEv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            Swal.fire(
                'Formulario enviado!',
                'Gracias por contactarme, te responderé en breve',
                'success'
              )
              e.target.user_name.value = ''
              e.target.user_email.value = ''
              e.target.subject.value = ''
              e.target.message.value = ''

              setTimeout(()=> {
                window.location.reload()
              }, 3000)

    };

    return (

        <div className='container px-lg-5 contact mb-5' id='contact' data-aos="zoom-out"
            data-aos-duration="3000" >

            <section className="mb-4">


                <h2 className="h1-responsive pre text-center fs-1 my-4">Contacto</h2>

                <h4 className="text-center w-responsive mx-auto mb-3" style={{ color: '#666666', fontFamily: 'Poppins' }}>Ya sea que esté interesado en trabajar conmigo o simplemente quiera saludarme, ¡me encantaría saber de usted!</h4>

                <div className="row">


                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" ref={form} onSubmit={sendEmail} >


                            <div className="row">


                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="user_name" className="form-control" />
                                        <label htmlFor="name" className="" >Nombre</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="user_email" className="form-control" />
                                        <label htmlFor="email" className="">Email</label>
                                    </div>
                                </div>


                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control" />
                                        <label htmlFor="subject" className="">Asunto</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">


                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" rows="2" className="form-control md-textarea" name="message" ></textarea>
                                        <label htmlFor="message">Mensaje</label>
                                    </div>

                                </div>
                            </div>

                            <div className="text-center text-md-left d-flex justify-content-end" >
                                <button className="btn btn-primary" type="submit" style={{ width: '150px', background: '#00C0FD' }}>Enviar</button >
                            </div>

                        </form>

                        <div className="status"></div>
                    </div>

                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">


                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+51 930428602</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>losubra1@gmail.com</p>
                            </li>
                        </ul>
                    </div>


                </div>

            </section>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Contact;