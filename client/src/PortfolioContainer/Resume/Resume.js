import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen != props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "FORMATIONS", logoSrc: "education.svg" },
    { label: "EXPÉRIENCES PROFESSIONNELLES", logoSrc: "work-history.svg" },
    { label: "LANGAGE DE PROGRAMMATION", logoSrc: "programming-skills.svg" },
    { label: "PROJETS", logoSrc: "projects.svg" },
    { label: "INTÉRÊTS", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 65 },
    { skill: "React Native", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 80 },
    { skill: "SQL", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: "Application Mobile - Météo",
      duration: { fromDate: "Mars ", toDate: " Avril 2022" },
      description:
        "Développement d'une application Mobile (Cross-Platform) permettant de consulter la météo",
      subHeading: "Technologies utilisées: React Native",
    },
    {
      title: "Interface Web - Créateur de CV",
      duration: { fromDate: "Mars ", toDate: " Avril 2022" },
      description:
        "Développement en cours d'une interface Web permettant de créer son CV en y posant ses informations personnelles",
      subHeading:
        "Technologies utilisées: MangoDB, Express Js, Node Js, React Js",
    },
    {
      title: "Site internet - Portfolio",
      duration: { fromDate: "Février ", toDate: " Mars 2022" },
      description: "Développement d'un site internet ",
      subHeading: "Technologies utilisées: Javascript, React Js",
    },

    {
      title: "Application Mobile - Guidéo",
      duration: { fromDate: "Janvier ", toDate: " Février 2022" },
      description:
        "Conception d'une application sous iOS ayant pour but d'aider les jeunes à s'orienter professionnellement",
      subHeading: "Technologies utilisées: Swift",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"SIMPLON.CO"}
        subHeading={"Formation développeur Mobile - Swift UI"}
        fromDate={"Janvier "}
        toDate={" Février 2022"}
      />

      <ResumeHeading
        heading={"UNIVERSITÉ GUSTAVE EIFFEL - ESIEE PARIS"}
        subHeading={"École Supérieure d'Ingénieurs en Informatique"}
        fromDate={"2014 "}
        toDate={" 2019"}
      />
      <ResumeHeading
        heading={"LYCÉE MONTAIGNE"}
        subHeading={"Baccalauréat Scientifique"}
        fromDate={"2011 "}
        toDate={" 2013"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Groupe Renault"}
          subHeading={"DATA SCIENTIST"}
          fromDate={"Janvier "}
          toDate={" Juillet 2019"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Développer une stratégie d'apprentissage semi-supervisé (via une
            stratégie d'active learning) pour classifier automatiquement les
            verbatims des clients.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Construire à moindre coût, un modèle de classification sur des
            sources de données où il n’existe pas de verbatim déjà labelisés.
          </span>
          <br />
          <span className="resume-description-text">
            - Réduire le coût dû au processus d'annotation en sélectionnant les
            données les plus pertinentes à labelliser.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Musculation"
        description="J'aime développer ma force physique mais aussi mental tout en essayant d'être en bonne santé à travers des activités tel que la musculation ou le cardio."
      />
      <ResumeHeading
        heading="Voyages"
        description="Passionné de voyages, j'aime découvrir de nouvelles contrées, des différentes cultures et ouvrir mon esprit à une nouvelle façon de voir."
      />
      <ResumeHeading
        heading="Méditation"
        description="Comme on dit, un esprit sain dans un corps sain. La méditation m'aide à me recentrer, m'aide à faire abstraction des pensées négatives et m'aide à développer une meilleur maitrise de moi-même."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Résumé"} subHeading={"Curriculum Vitae"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
