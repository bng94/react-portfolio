import { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { Section } from "../ui/Section.styled";
import { SectionHeading } from "../ui/SectionHeading.styled";
import { CSSTransition } from "react-transition-group";
import {
  StyledHighlight,
  StyledTabButton,
  StyledTabContainer,
  StyledTabList,
  StyledTabPanel,
  StyledTabPanels,
} from "./ExperienceSection.styled";
import { ExperiencesData } from "../../data/Experiences";
import { sr, srConfig } from "../../utility/sr";

const KEY_CODES = {
  ARROW_UP: "ArrowUp",
  ARROW_UP_IE11: "Up",
  ARROW_DOWN: "ArrowDown",
  ARROW_DOWN_IE11: "Down",
};

export const ExperienceSection = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);
  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <Section id="experience">
      <SectionHeading>
        <h1>Experiences & Background </h1>
      </SectionHeading>
      <StyledTabContainer ref={revealContainer}>
        <div className="inner">
          <StyledTabList
            role="tablist"
            aria-label="Job tabs"
            onKeyDown={(e) => onKeyDown(e)}
          >
            {ExperiencesData &&
              ExperiencesData.map((experiences, i) => {
                return (
                  <StyledTabButton
                    key={i}
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    ref={(el) => (tabs.current[i] = el)}
                    id={`tab-${i}`}
                    role="tab"
                    tabIndex={activeTabId === i ? "0" : "-1"}
                    aria-selected={activeTabId === i ? true : false}
                    aria-controls={`panel-${i}`}
                  >
                    <span>{experiences.company}</span>
                  </StyledTabButton>
                );
              })}
            <StyledHighlight activeTabId={activeTabId} />
          </StyledTabList>

          <StyledTabPanels>
            {ExperiencesData &&
              ExperiencesData.map((experiences, i) => {
                return (
                  <CSSTransition
                    key={i}
                    in={activeTabId === i}
                    timeout={250}
                    classNames="fade"
                  >
                    <StyledTabPanel
                      id={`panel-${i}`}
                      role="tabpanel"
                      tabIndex={activeTabId === i ? "0" : "-1"}
                      aria-labelledby={`tab-${i}`}
                      aria-hidden={activeTabId !== i}
                      hidden={activeTabId !== i}
                    >
                      <h3>
                        <span>{experiences.title}</span>
                        <span className={experiences.company}>
                          &nbsp;@&nbsp;
                          <a
                            href={experiences.url}
                            className="inline-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {experiences.company}
                          </a>
                        </span>
                      </h3>

                      <p className="range">{experiences.dateRange}</p>
                      <div>
                        <ul>
                          {experiences.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </StyledTabPanel>
                  </CSSTransition>
                );
              })}
          </StyledTabPanels>
        </div>
      </StyledTabContainer>
    </Section>
  );
};
