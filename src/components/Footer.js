import React from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

// Define brand colors
const colors = {
  primaryBlue: "#0056b3", // Primary blue color
  lightBlue: "#4d90fe", // Lighter blue for hover states
  darkBlue: "#003b7a", // Darker blue for footer background
  white: "#ffffff",
  lightGray: "#f5f5f5",
  gray: "#cccccc",
};

const FooterContainer = styled.footer`
  padding: 3rem 2rem;
  background: ${colors.darkBlue};
  color: ${colors.white};
  font-family: "Poppins", sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h3`
  color: ${colors.white};
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-weight: 600;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 50px;
    height: 2px;
    background-color: ${colors.lightBlue};

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const QuickLink = styled.a`
  color: ${colors.gray};
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  display: inline-block;

  &:hover {
    color: ${colors.white};
    padding-left: 5px;

    @media (max-width: 768px) {
      padding-left: 0;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: ${colors.white};
  background-color: rgba(255, 255, 255, 0.1);
  text-decoration: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.lightBlue};
    transform: translateY(-3px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  color: ${colors.gray};

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactIcon = styled.span`
  margin-right: 10px;
  color: ${colors.lightBlue};
`;

const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.9rem;
  color: ${colors.gray};
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 1rem;

  span {
    color: ${colors.lightBlue};
  }
`;

const CompanyDesc = styled.p`
  color: ${colors.gray};
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            Leleya <span>Cleaning</span>
          </Logo>
          <CompanyDesc>
            Professional cleaning solutions for homes and businesses. Reliable,
            efficient, and environmentally friendly services.
          </CompanyDesc>
          <SocialLinks>
            <SocialLink
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialLink>
            <SocialLink
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <QuickLink href="/">Home</QuickLink>
          <QuickLink href="#about">About Us</QuickLink>
          <QuickLink href="#services">Our Services</QuickLink>
          <QuickLink href="/pricing">Pricing</QuickLink>
          <QuickLink href="#testimonials">Testimonials</QuickLink>
          <QuickLink href="#contact">Contact Us</QuickLink>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Our Services</FooterHeading>
          <QuickLink href="/pricing">Residential Cleaning</QuickLink>
          <QuickLink href="/pricing">Commercial Cleaning</QuickLink>
          <QuickLink href="/pricing">Deep Cleaning</QuickLink>
          <QuickLink href="/pricing">Move In/Out Cleaning</QuickLink>
          <QuickLink href="/pricing">Post Construction</QuickLink>
          <QuickLink href="/pricing">Sanitization</QuickLink>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Contact Us</FooterHeading>
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-map-marker-alt"></i>
            </ContactIcon>
            Nyayo Estate Gate D, Embakasi, Nairobi
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-phone-alt"></i>
            </ContactIcon>
            (+254) 768-629-466
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-envelope"></i>
            </ContactIcon>
            leleyacleaning@gmail.com
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <i className="fas fa-clock"></i>
            </ContactIcon>
            Mon-Fri: 8:00 AM - 6:00 PM
          </ContactItem>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>
          &copy; {currentYear} Leleya Cleaning Solutions. All rights reserved.
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
