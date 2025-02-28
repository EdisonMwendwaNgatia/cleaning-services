import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// Primary blue colors for the brand
const colors = {
  primary: "#1a73e8",
  primaryDark: "#0d47a1",
  secondary: "#e8f0fe",
  white: "#ffffff",
  lightGray: "#f5f5f5",
  text: "#333333",
  lightText: "#757575"
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background: ${colors.white};
  color: ${colors.text};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    flex-wrap: wrap;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.primary};
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${colors.primary};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }

  &.active {
    color: ${colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${colors.primary};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CompanyName = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.primary};
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContactButton = styled(Link)`
  background-color: ${colors.primary};
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${colors.primaryDark};
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <LogoContainer>
        <LogoImage>
          <img src="/images/leleya logo.jpg" alt="Leleya Cleaning Services Logo" />
        </LogoImage>
        <CompanyName>Leleya Cleaning Services</CompanyName>
      </LogoContainer>
      
      <MenuToggle onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </MenuToggle>
      
      <NavLinks isOpen={isMenuOpen}>
        <StyledLink 
          to="/" 
          className={isActive("/")} 
          onClick={(e) => handleScroll(e, "about")}
        >
          About
        </StyledLink>
        <StyledLink 
          to="/" 
          className={isActive("/")} 
          onClick={(e) => handleScroll(e, "services")}
        >
          Services
        </StyledLink>
        <StyledLink 
          to="/pricing" 
          className={isActive("/pricing")}
        >
          Pricing
        </StyledLink>
        <StyledLink 
          to="/gallery" 
          className={isActive("/gallery")}
        >
          Gallery
        </StyledLink>
        <ContactButton 
          to="/" 
          onClick={(e) => handleScroll(e, "contact")}
        >
          Contact Us
        </ContactButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;