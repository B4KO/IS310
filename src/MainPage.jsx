import React from "react";
import HeroSection from "./Components/HeroSection";
import InfoSection from "./Components/InfoSection";
import SkillsSection from "./Components/SkillsSection";
import ContactForm from "./Components/ContactForm";
import TeamSection from "./Components/TeamSection";
import ProjectSection from "./Components/ProjectSection";
import ThemeToggle from "./Components/ThemeToggle";

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
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
      linkedinUrl: "#",
      githubUrl: "#",
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
