import React from 'react';

const Contact = () => {
    return (

<div className='container px-lg-5 contact mb-5' id='contact'  data-aos="zoom-out"
                    data-aos-duration="3000" >

        <section className="mb-4">


            <h2 className="h1-responsive pre text-center fs-1 my-4">Contact us</h2>

            <h4 className="text-center w-responsive mx-auto mb-3" style={{ color: '#666666', fontFamily: 'Poppins' }}>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!.</h4>

            <div className="row">


                <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" >


                        <div className="row">


                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name" className="form-control"/>
                                        <label htmlFor="name" className="">Your name</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" className="form-control"/>
                                        <label htmlFor="email" className="">Your email</label>
                                </div>
                            </div>


                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="subject" className="form-control"/>
                                        <label htmlFor="subject" className="">Subject</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                           
                            <div className="col-md-12">

                                <div className="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                    <label htmlFor="message">Your message</label>
                                </div>

                            </div>
                        </div>


                    </form>

                    <div className="text-center text-md-left d-flex justify-content-end" >
                        <a className="btn btn-primary" style={{width:'150px', background:'#00C0FD'}}>Send</a>
                    </div>
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