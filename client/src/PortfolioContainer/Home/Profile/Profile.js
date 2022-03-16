import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/feed/">
                <i className="fa fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/Warnierr?tab=projects">
                <i className="fa fa-brands fa-github"></i>
              </a>
              <a href="https://www.instagram.com/raoufwarnier/?hl=fr">
                <i className="fa  fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Bonjour, je m'appelle{" "}
              <span className="highlighted-text">Raouf Warnier</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Développeur Web / Mobile",
                    1000,
                    "Développeur Full Stack 💻",
                    1000,
                    "React / React Native 📱",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Ingénieur issue de l'université Gustave iffel - ESIEE PARIS
            </span>
          </div>

          <div className="profile-options">
            <a href="CV_RAOUF-WARNIER.pdf" download="CV_Raouf-Warnier.pdf">
              <button className="btn highlighted-btn">
                Télécharger mon CV
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
