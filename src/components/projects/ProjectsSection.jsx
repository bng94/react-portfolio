import { useEffect, useRef } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { Projects } from "../../data/Projects";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { sr, srConfig } from "../../utility/sr";
import { Section } from "../ui/Section.styled";
import { SectionHeading } from "../ui/SectionHeading.styled";
import {
  ProjectDescription,
  ProjectImageContainer,
  SingleProject,
  Tags,
} from "./ProjectsSection.styled";

export const ProjectsSection = () => {
  const revealContainer = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    );
  }, [prefersReducedMotion]);

  return (
    <Section id="projects">
      <SectionHeading>
        <h1>Projects</h1>
        <p>Featured Projects</p>
      </SectionHeading>
      <div ref={revealContainer}>
        {Projects &&
          Projects.map((project, index) => (
            <SingleProject
              key={index}
              ref={(el) => (revealProjects.current[index] = el)}
            >
              <ProjectImageContainer href={project.liveLink} target="_blank">
                <img src={project.image} alt={project.title} />
              </ProjectImageContainer>
              <ProjectDescription>
                <h1>{project.title}</h1>
                <Tags>
                  {project.tags &&
                    project.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                </Tags>
                <p>{project.description}</p>
                <div>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink />
                    <span>View Project</span>
                  </a>
                </div>
              </ProjectDescription>
            </SingleProject>
          ))}
      </div>
    </Section>
  );
};
