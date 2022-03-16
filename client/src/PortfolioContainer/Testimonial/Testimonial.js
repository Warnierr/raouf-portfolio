import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import memory from "../../../src/assets/Testimonial/coding-game.jpg";
import projet5 from "../../../src/assets/Testimonial/projet5.jpg";
import finance from "../../../src/assets/Testimonial/finance-tracker.jpg";
import crypto from "../../../src/assets/Testimonial/crypto-projet.jpg";
import meteo from "../../../src/assets/Testimonial/meteo.jpg";

import shape from "../../../src/assets/Testimonial/shape-bg.png";

import "./Testimonial.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projets"}
        subHeading={"Suivez mes projets accomplis et en cours"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <div className="img-radius">
                      <img src={memory} alt="no internet connection"></img>
                    </div>
                    <div className="client-info">
                      <h5>Memory Game</h5>
                      <p>React Js</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <div className="img-radius">
                      <img src={crypto} alt="no internet connection"></img>
                    </div>
                    <div className="client-info">
                      <h5>Cours Cryptomonnaies</h5>
                      <p>React js</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <div className="img-radius">
                      <img src={finance} alt="no internet connection"></img>
                    </div>
                    <div className="client-info">
                      <h5>Suivi des dépenses</h5>
                      <p>Projet à venir</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <div className="img-radius">
                      <img src={meteo} alt="no internet connection"></img>
                    </div>
                    <div className="client-info">
                      <h5>Application de météo</h5>
                      <p>React Native</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <div className="img-radius">
                      <img src={projet5} alt="no internet connection"></img>
                    </div>
                    <div className="client-info">
                      <h5>Projet en React Native</h5>
                      <p>Projet à venir</p>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Photo not responding" />
      </div>
    </div>
  );
}
