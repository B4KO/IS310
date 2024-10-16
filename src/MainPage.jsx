import React from "react";
import HeroSection from "./Components/HeroSection";
import InfoSection from "./Components/InfoSection";
import SkillsSection from "./Components/SkillsSection";
import ContactForm from "./Components/ContactForm";
import TeamSection from "./Components/TeamSection";
import ProjectSection from "./Components/ProjectSection";
import ThemeToggle from "./Components/ThemeToggle";
import StevenImage from "./Steven.png";
import MartinImage from "./Martin.png";
import GabrielImage from "./Gabriel.png";
import SteinImage from "./Stein.png";
import NicoImage from "./Nico.png";
import NostedImage from "./Nosted.jpg";
import DanielImage from "./Daniel.png";
import PaddlegledenImage from "./Paddlegleden.jpg";

const MainPage = () => {
  const skills = [
    {
      icon: "💻",
      title: "Web Development",
      skills: "HTML, CSS, JavaScript, React, .NET",
    },
    { icon: "🖌️", title: "Design", skills: "UI/UX, Figma" },
    {
      icon: "🔒",
      title: "Cybersecurity",
      skills: "Kryptografi, Nettsted Sikkerhet, OWASP",
    },
    {
      icon: "🗄️",
      title: "Databaser",
      skills: "MySQL, MongoDB, PostgreSQL",
    },
    {
      icon: "🗓️",
      title: "Prosjekt planlegging",
      skills: "Scrum, Kanban, Trello, Waterfall, Jira",
    },
    { icon: "🛠️", title: "DevOps", skills: "CI/CD, Docker" },
  ];

  const teamMembers = [
    {
      imageUrl: StevenImage,
      title: "Steven Minh-Tam Nguyen",
      description:
        "23 år gammel fra Kristiansand og kan bidra med erfaring innenfor design og data analyse. I løpet av studiet, har jeg tilegnet seg kompetanse i UI og UX, tjenestedesign, prosjektarbeid, databasehåndtering og webutvikling. Jeg liker å komme meg til nye situasjoner og miljøer for å utfordre, lære og utvikle meg som person. Har hatt lenge interesse innenfor teknologi, data analyse og tegning. Alltid klar og villig til å takle nye oppgaver og utfordringer, og bidra til veksten av gruppen og bedriften.",
      linkedinUrl:
        "https://www.linkedin.com/in/steven-minh-tam-nguyen-92406b163",
      githubUrl: "https://www.github.com/StevenMTN",
    },
    {
      imageUrl: MartinImage,
      title: "Martin Malja",
      description:
        " 24 år gammel og er fra Oslo. Jeg har under studiet lært om UI, tjenestedesign, prosjektarbeid, databasehåndtering og webutvikling. Jeg ser på meg selv som aktiv og hyggelig gutt som samarbeider godt med andre. På fritiden så liker jeg å spille, er interessert i ny teknologi og være med venner. Jeg er alltid åpen for nye utfordringer og hjelper alltid hvis det trengs i gruppen. ",
      linkedinUrl: "https://www.linkedin.com/in/martin-malja-854b8a326/",
      githubUrl: "https://github.com/Huskarl10 ",
    },
    {
      imageUrl: GabrielImage,
      title: "Gabriel Michael Molinski",
      description:
        "23 år gammel student fra Kristiansand, med en lidenskap for teknologi og problemløsning. Jeg elsker å dykke ned i koding og utforske nye måter å skape innovative løsninger på. Med et øye for detaljer og et ønske om å lære, ser jeg frem til å bidra til spennende prosjekter og utvikle meg videre som en del av dette teamet.",
      linkedinUrl:
        "https://no.linkedin.com/in/gabriel-michael-molinski-bb7917324",
      githubUrl: "https://github.com/B4KO",
    },
    {
      imageUrl: SteinImage,
      title: "Stein Arild Vestergaard Danielsen",
      description:
        "Jeg er 21 år gammel, bosatt i Mandal, student hos UiA Kristiansand, og klar for arbeidslivet. Som mine gruppepartnere har jeg vært involvert i prosjektarbeid innenfor webutvikling, tjenestedesign, og databaser. Jeg er spent på hvor utdanning min og karrieren min tar meg videre.",
      linkedinUrl:
        "https://www.linkedin.com/in/stein-arild-vestergaard-danielsen-a84893326/",
      githubUrl: "https://github.com/SteinArildN",
    },
    {
      imageUrl: NicoImage,
      title: "Nicolai Alexander Tomulevski Bjerregård",
      description:
        "Jeg er 24 år gammel, fra Oslo. Kunnskapene jeg har tilegnet meg gjennom studie, dekker områder som webutvikling, informasjonssystemsikkerhet, prosjektarbeid, samt tjenestedesign og UI/UX design. Jeg har en interesse for mennesker. Spesifikt hvordan forskjellige løsninger påvirker forskjellige mennesker, med de utfordringene de eventuelt har. Har lang erfaring med arbeid med barn, derfor vil jeg kunne bringe inn verdifull erfaring som kan spille positivt inn, rundt utvikling av systemer for denne aldersgruppen.",
      linkedinUrl:
        "https://www.linkedin.com/in/nicolai-a-t-bjerregård-1052101a2",
      githubUrl: "https://github.com/natb0412",
    },
    {
      "imageUrl": DanielImage,
      "title": "Daniel Dahle Gray",
      "description": "Daniel D. Gray er en engasjert IT-student på 33 år fra England, med variert arbeidserfaring og stor interesse for å utvikle brukersentriske systemer. Han er for tiden i praksis som konsulent hos SmartOrg i Arendal, hvor han har fokus på onboarding, kundeopplevelse, og funksjonstesting på SmartOrg’s digitale plattform. Daniel sine styrker ligger i å identifisere brukerbehov og helhetlige løsninger; som aspirerende systemutvikler ønsker han å kunne bryne seg på utfordringer som krever et dypdykk i populære- og nyttige verktøy for innhenting, behandling eller visualisering av data.",
      "linkedinUrl": "https://www.linkedin.com/in/daniel-dahle-gray-2272501bb/",
      "githubUrl": "https://github.com/danieldg91"
    }
    
    // ... Add 5 more team members with similar structure
  ];

  const projects = [
    {
      imageUrl: NostedImage,
      title: "Nøsted &",
      description: "Digitalisering av Serviceordre",
      longer_description:
        "Nøsted & AS, en ledende norsk industrikonsern, ønsket å modernisere prosessen for håndtering av serviceordrer. Gjennom vårt prosjekt utviklet vi en skreddersydd web-applikasjon som digitaliserer hele prosessen fra mottak til oppfølging av serviceordrer for deres produktsegment IGLAND.",
      modal_id: 3,
    },
    {
      imageUrl: PaddlegledenImage,
      title: "Paddlegleden",
      description: "Digital Plattform for Padlegleden",
      longer_description:
        "Dette prosjektet var en del av emnet IS-112 Tjenestedesign og forretningsmodeller, og ble gjennomført i samarbeid med Padlegleden. Sammen med åtte IT-studenter jobbet Padlegleden for å utvikle en digital plattform som gjør det enklere for profesjonelle aktører å legge ut kurs, samt for potensielle deltakere å få en oversikt over tilgjengelige aktiviteter.",
      modal_id: 4,
    },
  ];

  return (
    <>
      <HeroSection
        backgroundUrl="https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Gruppe 19"
        description="Vår lidenskap for teknologi, kombinert med en sterk teoretisk bakgrunn
        og praktisk erfaring, gjør oss til et dynamisk team som er klare for å møte morgendagens utfordringer."
        buttonLabel="Les mer"
        buttonAction={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
      />
      <ThemeToggle />
      <InfoSection
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
