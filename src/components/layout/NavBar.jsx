import { useState } from "react";
import { NavItems } from "../../data/NavItems";
import {
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  MenuIcon,
  Nav,
  NavItem,
  NavLink,
  NavList,
  Profile,
  SocialIcons,
} from "./Nav.styled";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import useScrollDirection from "../../hooks/useScrollDirection";
export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection("down");

  return (
    <Nav scrollDirection={scrollDirection}>
      <div>
        <a href="../#">
          <Logo src="./images/logo.png" />
        </a>
      </div>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        <LineOne menuOpen={menuOpen} />
        <LineTwo menuOpen={menuOpen} />
        <LineThree menuOpen={menuOpen} />
      </MenuIcon>
      <NavList menuOpen={menuOpen}>
        {NavItems &&
          NavItems.map((navItem, index) => (
            <NavItem
              key={index}
              index={index}
              menuOpen={menuOpen}
              onClick={() => setMenuOpen(false)}
            >
              {navItem.isProfile && (
                <NavLink href="#">
                  <Profile>
                    <img src="./images/brandonNg.jpg" alt="Brandon Ng" />
                    <span>Brandon Bing Ng</span>
                  </Profile>
                </NavLink>
              )}
              {navItem.text && (
                <NavLink href={navItem.href}>{navItem.text}</NavLink>
              )}
              {navItem.hasSocialIcons && (
                <SocialIcons>
                  <NavLink
                    href="https://github.com/bng94"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </NavLink>
                  <NavLink
                    href="https://www.linkedin.com/in/bng94"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin />
                  </NavLink>
                </SocialIcons>
              )}
              {/* {navItem.hasFile && (
                <Button href={navItem.fileLink} target="_blank" rel="noopener noreferrer">
                  Resume
                </Button>
              )} */}
            </NavItem>
          ))}
      </NavList>
    </Nav>
  );
};
