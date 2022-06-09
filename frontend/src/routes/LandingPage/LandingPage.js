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
              <b>Get the recognition you deserve</b>
            </h6>
            <h6>
              You're already making the right way, but which of the 28,000+
              certifications do you have- & which matter?
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

        <h5 className="companies">Over 1000+ company posted jobs</h5>
        <div className="banner2">
          <div className="banner2Left">
            <h6>
              <span>The </span>
              Imperdiet, egestas penatibus vehicula elementum cubilia. Imperdiet
              sociosqu tempus maecenas integer neque metus posuere sollicitudin!
              Enim ullamcorper fermentum felis nullam.
            </h6>
            <br />
            <h6>
              Imperdiet, egestas penatibus vehicula elementum cubilia. Imperdiet
              sociosqu tempus maecenas integer neque metus
            </h6>
            <br />
            <h6>
              Imperdiet, egestas penatibus vehicula elementum cubilia. Imperdiet
              sociosqu tempus maecenas integer neque metus. Imperdiet, egestas
              penatibus vehicula elementum cubilia. Imperdiet sociosqu tempus
              maecenas integer neque metusImperdiet, egestas penatibus vehicula
              elementum cubilia.
            </h6>
          </div>
          <div className="banner2Right">
            <img src={banner2} alt="bannerImage" />
          </div>
        </div>

        <div className="reviews">
          <div className="reviewsHead">
            <h5 className="companies">Customer Reviews</h5>
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
                  <h6 className="name">Regina Filange</h6>
                  <h6 className="proffession">Web-Developer</h6>
                </div>
              </div>
              <div className="reviewBody">
                <p>
                  <h6>
                    hdfg 8rhfuf uhuizf iu uhdsuizhfiu hufhe fuh uihufhuefhu
                    uhuishfuefh ydggfuw uihufheuwf wuhuish
                    <br />
                    <br />
                    hdfg 8rhfuf uhuizf iu uhdsuizhfiu hufhe fuh uihufhuefhu
                    uhuishfuefh ydggfuw uihufheuwf wuhuish
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
                  <h6 className="name">Regina Filange</h6>
                  <h6 className="proffession">Web-Developer</h6>
                </div>
              </div>
              <div className="reviewBody">
                <p>
                  <h6>
                    hdfg 8rhfuf uhuizf iu uhdsuizhfiu hufhe fuh uihufhuefhu
                    uhuishfuefh ydggfuw uihufheuwf wuhuish
                    <br />
                    <br />
                    hdfg 8rhfuf uhuizf iu uhdsuizhfiu hufhe fuh uihufhuefhu
                    uhuishfuefh ydggfuw uihufheuwf wuhuish
                  </h6>
                </p>
              </div>
              <div className="reviewStars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
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
                  <h6 className="name">Regina Filange</h6>
                  <h6 className="proffession">Web-Developer</h6>
                </div>
              </div>
              <div className="reviewBody">
                <p>
                  <h6>
                    hdfg 8rhfuf uhuizf iu uhdsuizhfiu hufhe fuh uihufhuefhu
                    uhuishfuefh ydggfuw uihufheuwf wuhuish
                    <br />
                    <br />
                    hdfg 8rhfuf uhuizf iu uhdsuizhfiu hufhe fuh uihufhuefhu
                    uhuishfuefh ydggfuw uihufheuwf wuhuish
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
            <h6 className="needEmp">Does your company needs good employees?</h6>
            <h6 className="needEmpSub">
              To post jobs visit subpage for employees
            </h6>
          </div>
          <div>
            <NavLink to='/userSignup/register'>
            <button className="btn btn-light">Post a Job</button>
            </NavLink>
          </div>
        </div>

        <footer className="footer">
          <div className="footer1">
            <h6>About</h6>
            <h6>FAQ</h6>
            <h6>Policies</h6>
            <h6>Help</h6>
          </div>
          <div className="footer2">
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-f"></i>
          </div>
          <div className='footer3'>
          &copy;2008-2020 by findit.com
          </div>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
