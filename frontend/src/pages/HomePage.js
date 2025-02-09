import React from "react";
import { useLocation, NavLink } from "react-router-dom";

import "../components/homepage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.js";
import cr1 from "./images/cr1.jpg";
import cr2 from "./images/cr2.jpg";
import cr3 from "./images/cr3.jpg";
import a from "./images/a.jpg";
import t1 from "./images/t1.jpg";
import t2 from "./images/t2.jpg";
import t4 from "./images/t4.jpg";
import { colors } from "@material-ui/core";

export default function HomePage() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={cr1}
              style={{ objectFit: "cover" }}
              className="d-block w-100"
              alt="..."
            />
            <div style={{ zIndex: "30px" }} className="carousel-caption text-white font-bold">
              <h5 >Your Dream house</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                ab adipisci ipsa enim similique maiores!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={cr2}
              style={{ objectFit: "cover" }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption text-white  font-bold">
              <h5>Always Dedicated</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                ab adipisci ipsa enim similique maiores!
              </p>
              <p>
                {/* <NavLink className="btn btn-primary mt3" to="/patientlist">
                  Learn More
                </NavLink> */}
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={cr3}
              style={{ objectFit: "cover" }}
              className="d-block w-100"
              alt="..."
            />
            <div
              className="carousel-caption text-white  font-bold"
              style={{ color: "white !important" }}
            >
              <h5>True Construction</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                ab adipisci ipsa enim similique maiores!
              </p>
              <p>
                {/* <NavLink className="btn btn-primary mt3" to="/patientlist">
                  Learn More
                </NavLink> */}
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section id="about" className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img src={a} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text">
                <h2>
                  We provide Best Quality <br />
                  Service ever
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  nostrum dolorem maiores officia dolorum delectus fugiat
                  possimus. Quos nesciunt consequuntur facere ex iure sunt enim
                  impedit dolorum labore, repudiandae hic.
                </p>

                <NavLink className="btn btn-primary mt3" to="/patientlist">
                  Explore More
                </NavLink>
                {/* <a href="#" className="btn btn100 btn-success">
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

    
    <section id="services" className="service section-padding bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-80 py-10">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold-100 text-black">Our Services</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Service Card 1 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gray-800 bg-opacity-90 shadow-lg rounded-lg overflow-hidden text-black text-center p-6">
              <i className="bi bi-subtract text-4xl text-black mb-4"></i>
              <h3 className="text-xl font-semibold text-black mb-2">Best Quality</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat minus doloremque quidem deleniti nulla. Fugiat
                voluptate cum enim nobis ad illo rem obcaecati magni a?
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gray-800 bg-opacity-90 shadow-lg rounded-lg overflow-hidden text-black text-center p-6">
              <i className="bi bi-playstation text-4xl text-black mb-4"></i>
              <h3 className="text-xl font-semibold text-black mb-2">Integrity</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat minus doloremque quidem deleniti nulla. Fugiat
                voluptate cum enim nobis ad illo rem obcaecati magni a?
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gray-800 bg-opacity-90 shadow-lg rounded-lg overflow-hidden text-black text-center p-6">
              <i className="bi bi-slack text-4xl text-black mb-4"></i>
              <h3 className="text-xl font-semibold text-black mb-2">Sustainability</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat minus doloremque quidem deleniti nulla. Fugiat
                voluptate cum enim nobis ad illo rem obcaecati magni a?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section id="team" className="team section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pd-5">
                <h2>Our Team Members</h2>
                <p className="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  <br />
                  Accusantium iusto architecto a? Expedita, earum. Sint ex quis
                  voluptas voluptates obcaecati
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img src={t1} alt="" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">Jack Wilson</h3>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti eum, autem ullam nobis sit natus?
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img src={t2} alt="" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">Tom Blue</h3>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti eum, autem ullam nobis sit natus?
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img src={t1} alt="" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">Jack Wilson</h3>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti eum, autem ullam nobis sit natus?
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center">
                <div className="card-body">
                  <img src={t4} alt="" className="img-fluid rounded-circle" />
                  <h3 className="card-title py-2">Jack Wilson</h3>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti eum, autem ullam nobis sit natus?
                  </p>
                  <p className="socials">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                    <i className="bi bi-facebook text-dark mx-1"></i>
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pd-5">
                <h2>Contact Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                 
                </p>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-12 p-0 pt-4 pb-4">
              <form action="#" className="bg-light p-4 m-auto">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="Your Full name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        required
                        placeholder="Your Email Here"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        rows="3"
                        required
                        className="form-control"
                        placeholder="Your Query Here"
                      ></textarea>
                    </div>
                  </div>
                  <button className="btn btn-success btn-lg btn-block mt-3">
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container__footer container__flex">
          <div id="footer-links">
            <ul id="footer__linkList">
              <li className="footer__links">
                <NavLink to="/aboutus">About</NavLink>
              </li>

              <li className="footer__links">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li className="footer__links">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="footer__links">
                <NavLink to="/ourserivce">service</NavLink>
              </li>
            </ul>
          </div>
          <div id="footer-contact">
            <ul id="footer__contact">
              <li className="contact__list">contact</li>
              <li className="contact__list">+2519878378</li>
              <li className="contact__list">+2519878378</li>
              <li className="contact__list">+2519878378</li>
            </ul>
          </div>
          <div id="footer-logo">
            <div>
              <div id="footer-image-name">
                <h1 id="footer__logo__header1">
                  <i className="fa fa-stethoscope"></i>
                  <span style={{ color: "greenyellow" }}>Save</span>
                  <span style={{ color: "white" }}>lives</span>
                </h1>
              </div>
              <div id="footer-socials">
                <h2 id="footer__socials__header2">Follow Us On</h2>
                <div>
                  <ul id="footer__socials__list">
                    <li className="footer__social__links">
                      <a href="#" className="instagram">
                        <i
                          className="fa-brands fa-instagram"
                          style={{ paddingRight: "10px", fontSize: "40px" }}
                        ></i>
                        <br />
                        instagram
                      </a>
                    </li>
                    <li className="footer__social__links">
                      <a href="#" className="facebook">
                        <i
                          className="fa-brands fa-facebook"
                          style={{ paddingRight: "10px", fontSize: "40px" }}
                        ></i>
                        <br />
                        facebook
                      </a>
                    </li>
                    <li className="footer__social__links">
                      <a href="#" className="twitter">
                        <i
                          className="fa-brands fa-twitter"
                          style={{ paddingRight: "10px", fontSize: "40px" }}
                        ></i>
                        <br />
                        twitter
                      </a>
                    </li>
                    <li className="footer__social__links">
                      <a href="#" className="linkedin">
                        <i
                          className="fa-brands fa-linkedin"
                          style={{ paddingRight: "10px", fontSize: "40px" }}
                        ></i>
                        <br />
                        linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="footer__text">
          <i className="bi bi-c-circle me-2"></i>All Rights reserved save lives
        </p>
      </footer>
    </>
  );
}

{
  /* <div
      id="carouselBasicExample"
      className="carousel slide carousel-fade"
      data-mdb-ride="carousel"
      style={{ marginTop: "120px" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
            className="d-block"
            style={{ width: "100%", height: "400px" }}
            alt="Sunset Over the City"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
            className="d-block w-100"
            alt="Canyon at Nigh"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
            className="d-block w-100"
            alt="Cliff Above a Stormy Sea"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div> */
}
