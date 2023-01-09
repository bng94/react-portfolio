import { ArchivedProjects } from "../../data/ArchivedProjects";
import { Section } from "../ui/Section.styled";
import { SectionHeading } from "../ui/SectionHeading.styled";
import { ReactComponent as FolderSvg } from "../ui/folder.svg";
import {
  ButtonContainer,
  IconsWrapper,
  NoteworthyItems,
  SingleNoteworthyProjects,
  SvgIconLink,
  Tags,
} from "./NoteworthySection.styled";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button.styled";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { sr, srConfig } from "../../utility/sr";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FaGithub } from "react-icons/fa";

export const NoteworthySection = () => {
  const [showMore, setShowMore] = useState(false);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  const GRID_LIMIT = 3;
  const displayArchivedProjects = showMore
    ? ArchivedProjects.slice(0)
    : ArchivedProjects.slice(0, GRID_LIMIT);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    );
  }, [prefersReducedMotion]);

  useEffect(() => {}, [displayArchivedProjects]);

  const handleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <Section id="noteworthy">
      <SectionHeading>
        <h1>Other Noteworthy Projects</h1>
      </SectionHeading>
      <NoteworthyItems>
        <TransitionGroup component={null}>
          {ArchivedProjects &&
            displayArchivedProjects.map((archived, index) => {
              return (
                <CSSTransition
                  key={index}
                  classNames="fadeup"
                  timeout={
                    index >= GRID_LIMIT ? (index - GRID_LIMIT) * 200 : 200
                  }
                  exit={false}
                >
                  <SingleNoteworthyProjects
                    ref={(el) => (revealProjects.current[index] = el)}
                    style={{
                      transitionDelay: `${
                        index >= GRID_LIMIT ? (index - GRID_LIMIT) * 100 : 0
                      }ms`,
                    }}
                    href={archived.liveLink}
                  >
                    <IconsWrapper>
                      <FolderSvg width="40px" height="40px" />
                      <SvgIconLink
                        href={archived.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </SvgIconLink>
                    </IconsWrapper>
                    <h1>
                      <a
                        href={archived.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {archived.title}
                      </a>
                    </h1>
                    <p>
                      <a
                        href={archived.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {archived.description}
                      </a>
                    </p>
                    <Tags>
                      {archived.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                    </Tags>
                  </SingleNoteworthyProjects>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </NoteworthyItems>

      <ButtonContainer>
        <Button onClick={handleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </ButtonContainer>
    </Section>
  );
};
