import { ThemeProvider } from "styled-components";
import { Fragment } from "react";
import { GlobalStyles } from "./components/ui/Globals.styled";
import { NavBar } from "./components/layout/NavBar";
import { HeroSection } from "./components/hero/HeroSection";
import { Container } from "./components/ui/Container.styled";
import { AboutSection } from "./components/about/AboutSection";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { NoteworthySection } from "./components/noteworthy/NoteworthySection";
import { ContactSection } from "./components/contact/ContactSection";
import { Footer } from "./components/layout/Footer";
import { ExperienceSection } from "./components/experience/ExperienceSection";

const App = () => {
  const theme = {
    mobile: "768px",
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar />
        <Container>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <NoteworthySection />
          <ContactSection />
        </Container>
        <Footer />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
