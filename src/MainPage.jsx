import React from "react";
import HeroSection from "./Components/HeroSection";
import InfoSection from "./Components/InfoSection";
import SkillsSection from "./Components/SkillsSection";
import ContactForm from "./Components/ContactForm";
import TeamSection from "./Components/TeamSection";
import ProjectSection from "./Components/ProjectSection";
import ThemeToggle from "./Components/ThemeToggle";
import StevenImage from './Steven.png';
import MartinImage from './Martin.png';
import GabrielImage from './Gabriel.png';


const MainPage = () => {
  const skills = [
    {
      icon: "💻",
      title: "Web Development",
      skills: "HTML, CSS, JavaScript, React, Vue.js",
    },
    { icon: "🖌️", title: "Design", skills: "UI/UX, Adobe XD, Figma" },
    {
      icon: "🔒",
      title: "Cybersecurity",
      skills: "Penetration Testing, Security Audits",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      skills: "iOS, Android, React Native",
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
      skills: "AWS, Azure, Google Cloud",
    },
    { icon: "🛠️", title: "DevOps", skills: "CI/CD, Docker, Kubernetes" },
  ];

  const teamMembers = [
    {
      imageUrl:
        StevenImage,
      title: "Steven Minh-Tam Nguyen",
      description: "23 år gammel fra Kristiansand og kan bidra med erfaring innenfor design og data analyse. I løpet av studiet, har jeg tilegnet seg kompetanse i UI og UX, tjenestedesign, prosjektarbeid, databasehåndtering og webutvikling. Jeg liker å komme meg til nye situasjoner og miljøer for å utfordre, lære og utvikle meg som person. Har hatt lenge interesse innenfor teknologi, data analyse og tegning. Alltid klar og villig til å takle nye oppgaver og utfordringer, og bidra til veksten av gruppen og bedriften.",
      linkedinUrl: "https://www.linkedin.com/in/steven-minh-tam-nguyen-92406b163",
      githubUrl: "https://www.github.com/StevenMTN",
    },
    {
      imageUrl:
        MartinImage,
      title: "Martin Malja",
      description: " 24 år gammel og er fra Oslo. Jeg har under studiet lært om UI, tjenestedesign, prosjektarbeid, databasehåndtering og webutvikling. Jeg ser på meg selv som aktiv og hyggelig gutt som samarbeider godt med andre. På fritiden så liker jeg å spille, er interessert i ny teknologi og være med venner. Jeg er alltid åpen for nye utfordringer og hjelper alltid hvis det trengs i gruppen. ",
      linkedinUrl: "https://www.linkedin.com/in/martin-malja-854b8a326/",
      githubUrl: "https://github.com/Huskarl10 ",
    },
    {
      imageUrl:
        GabrielImage,
      title: "Gabriel Michael Molinski",
      description: "23 år gammel student fra Kristiansand, med en lidenskap for teknologi og problemløsning. Jeg elsker å dykke ned i koding og utforske nye måter å skape innovative løsninger på. Med et øye for detaljer og et ønske om å lære, ser jeg frem til å bidra til spennende prosjekter og utvikle meg videre som en del av dette teamet.",
      linkedinUrl: "https://no.linkedin.com/in/gabriel-michael-molinski-bb7917324",
      githubUrl: "https://github.com/B4KO",
    },
    // ... Add 5 more team members with similar structure
  ];

  const projects = [
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Project One",
      description: "This is a description of project one.",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Project Two",
      description: "This is a description of project two.",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      title: "Project Three",
      description: "This is a description of project three.",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <HeroSection
        backgroundUrl="https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Gruppe 21"
        description="Vår lidenskap for teknologi, kombinert med en sterk teoretisk bakgrunn
        og praktisk erfaring, gjør oss til et dynamisk team som er klare for å møte morgendagens utfordringer."
        buttonLabel="Les mer"
        buttonAction={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
      />
      <ThemeToggle />
      <InfoSection
        imageUrl="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        title="Vi er..."
        description="Fem unike individer, hver med sine spesifikke ferdigheter og interesser. Sammen utfyller vi hverandre og skaper en sterk enhet som er klar til å ta på oss ulike utfordringer."
        buttonLabel="Get Started"
      />
      <SkillsSection skills={skills} />
      <TeamSection teamMembers={teamMembers} />
      <ProjectSection projects={projects} />
      <ContactForm />
    </>
  );
};

export default MainPage;
