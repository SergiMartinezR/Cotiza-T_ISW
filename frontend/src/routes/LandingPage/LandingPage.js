import React, { Component } from "react";
import "./LandingPage.css";
import bannerRight from "../../assets/bannerRight.png";
import { NavLink } from "react-router-dom";
import profilePicSrc from "../../assets/profileSample.jpg";
import banner2 from '../../assets/banner2.png';

class LandingPage extends Component {
  render() {
    return (
      <div className="homeBody landingPage">
        <div className="banner">
          <div className="bannerLeft">
            <h5 className="head1">¡BIENVENIDO!</h5>
            <br />
            <h5>
              Estás y miles de empresas te están buscando.
            </h5>
            <h6>Trabaja el tiempo que necesites.</h6>
            <h6>Termina de cotizar ante tu institución de seguridad social.</h6>
            <h6>Obtén una jubilación y retiro dignos.</h6>
            <h6>Gana y vive.</h6>
            <NavLink to="/userSignup/register">
              <button>Empieza Ahora </button>
            </NavLink>
          </div>
          <div className="bannerRight">
            <img src={bannerRight} alt="bannerImage" />
          </div>
        </div>

        <div className="services">
          <div className="service">
            <i class="fas fa-bolt"></i>
            <h6 className="serviceHead">
              <b>Consigue tus años restantes</b>
            </h6>
            <h6>
              Consigue empleo con empresas que te ofrecen años de cotización, y jubilate
              sin problemas.
            </h6>
          </div>

          <div className="service">
            <i class="fas fa-scroll"></i>
            <h6 className="serviceHead">
              <b>Sube tu curriculum</b>
            </h6>
            <h6>
              Sube tu cv a tu perfil para que las empresas puedan conocer
              un poco m&aacute;s de ti y tus habilidades
            </h6>
          </div>

          <div className="service">
            <i class="fas fa-headset"></i>
            <h6 className="serviceHead">
              <b>Contacta con empresas</b>
            </h6>
            <h6>
              Aplica a trabajos de acuerdo a tus necesidades, o bien deja 
              que las empresas te contacten por tu curriculum
            </h6>
          </div>
        </div>

        <h5 className="companies">Más de 1000 compañías han publicado ofertas de trabajo.</h5>
        <div className="banner2">
          <div className="banner2Left">
            <h6>
              <b>Objetivo</b>
              <br/>
              Proporcionar una alternativa de solución al problema social del desempleo 
              de la Zona Metropolitana del Valle de México, mayores de 25 años y con años 
              de cotización ante una Institución de Seguridad Social insuficientes para ser 
              acreedores a una pensión que les permita jubilarse dignamente.
            </h6>
          </div>
          <div className="banner2Right">
            <img src={banner2} alt="bannerImage" />
          </div>
        </div>

        <div className="reviews">
          <div className="reviewsHead">
            <h5 className="companies">Reseñas de Clientes</h5>
          </div>
          <div className="reviewsBody">
            <div className="review">
              <div className="reviewHead">
                <div className="reviewPic">
                  <img
                    style={{
                      height: "52px",
                      borderRadius: "50%",
                      marginRight: "12px",
                    }}
                    src={profilePicSrc}
                  />
                </div>
                <div>
                  <h6 className="name">Perlita Perez</h6>
                  <h6 className="proffession">Desarrollador Web</h6>
                </div>
              </div>
              <div className="reviewBody">
                <p>
                  <h6>
                    Me gustó bastante la página muy bonita y responsive.
                    <br />
                    <br />
                    En cuanto a los años los conseguí súper rápido, me faltaban 4 
                    y los conseguí con 2 empresas en 3 años.
                  </h6>
                </p>
              </div>
              <div className="reviewStars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>

            <div className="review">
              <div className="reviewHead">
                <div className="reviewPic">
                  <img
                    style={{
                      height: "52px",
                      borderRadius: "50%",
                      marginRight: "12px",
                    }}
                    src={profilePicSrc}
                  />
                </div>
                <div>
                  <h6 className="name">Perlita Perez</h6>
                  <h6 className="proffession">Desarrollador Web</h6>
                </div>
              </div>
              <div className="reviewBody">
                <p>
                  <h6>
                    Me gustó bastante la página muy bonita y responsive.
                    <br />
                    <br />
                    En cuanto a los años los conseguí súper rápido, me faltaban 4 
                    y los conseguí con 2 empresas en 3 años.
                  </h6>
                </p>
              </div>
              <div className="reviewStars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>

            <div className="review">
              <div className="reviewHead">
                <div className="reviewPic">
                  <img
                    style={{
                      height: "52px",
                      borderRadius: "50%",
                      marginRight: "12px",
                    }}
                    src={profilePicSrc}
                  />
                </div>
                <div>
                  <h6 className="name">Perlita Perez</h6>
                  <h6 className="proffession">Desarrollador Web</h6>
                </div>
              </div>
              <div className="reviewBody">
                <p>
                  <h6>
                    Me gustó bastante la página muy bonita y responsive.
                    <br />
                    <br />
                    En cuanto a los años los conseguí súper rápido, me faltaban 4 
                    y los conseguí con 2 empresas en 3 años.
                  </h6>
                </p>
              </div>
              <div className="reviewStars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="addBoxPost">
          <div className="text">
            <h6 className="needEmp">Tu compañia necesita empleados?</h6>
            <h6 className="needEmpSub">
              Para publicar trabajos visita la subpagina Publicar
            </h6>
          </div>
          <div>
            <NavLink to='/userSignup/register'>
            <button className="btn btn-light">Publicar un trabajo</button>
            </NavLink>
          </div>
        </div>

        <footer className="footer">
          <div className="footer1">
            <h6>Acerca de</h6>
            <h6>Preguntas frecuentes</h6>
            <h6>Politicas</h6>
            <h6>Ayuda</h6>
          </div>
          <div className="footer2">
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-f"></i>
          </div>
          <div className='footer3'>
          &copy;2022-2022 hecho por Cotiza-T
          </div>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
