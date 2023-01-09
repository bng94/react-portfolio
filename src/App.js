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
    colors: {
      white: "rgba(217, 231, 252,1)",
      darkCyanBlue: "rgba(14, 33, 60)",
      navBackground: "rgba(2, 12, 27, 0.8)",
      background: "rgba(2, 12, 27, 1)",
      lightNavyBlue: "rgba(4, 22, 48, 1)",
      green: "rgba(0, 206, 158, 1)", //100, 255, 218
      orange: "rgba(249, 105, 14, 1)",
      purple: "rgba(102, 51, 153, 1)",
      cyan: "rgba(0,255,255)",
      lightBlue: "rgba(119, 150, 203)",
      lightShadeBlue: "rgba(168, 178, 209)",
      babyBlueEyes: "rgba(163, 188, 249)",
      aliceBlue: "rgba(227, 242, 253)",
      colbatBlue: "rgba(13, 71, 161)",
    },
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
