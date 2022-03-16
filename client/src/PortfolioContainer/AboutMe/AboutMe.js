import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Issue de l'école d'ingénieur ESIEE PARIS je suis actuellement développeur web et mobile full stack avec une connaissance approfondie des piles MERN. Je peux également développer des applications mobile sur iOS et Android grace à mes compétence en React Native.",
    highlights: {
      bullets: [
        "Développeur Web Full Stack et Mobile",
        "React - React Native",
        "Utilisation d'API tel que REST et GraphQL",
        "Gestion de base de données",
      ],
      heading: "En terme de savoir-faire : ",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"À PROPOS"} subHeading={"Qui suis-je ?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                <button className="btn highlighted-btn">
                  Télécharger mon CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
