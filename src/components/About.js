import React from "react";
import styled from "styled-components";

// Primary color palette to match navbar and slider
const colors = {
  primary: "#1a73e8",
  primaryDark: "#0d47a1",
  secondary: "#e8f0fe",
  white: "#ffffff",
  lightGray: "#f8f9fa",
  text: "#333333",
  lightText: "#757575"
};

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 4rem;
  background: ${colors.lightGray};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, ${colors.primary}, ${colors.primaryDark});
  }

  @media (max-width: 992px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 3rem 1.5rem;
    gap: 2.5rem;
  }
`;

const Content = styled.div`
  max-width: 600px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${colors.primaryDark};
  position: relative;
  padding-bottom: 0.75rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 80px;
    height: 3px;
    background-color: ${colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${colors.text};
`;

const Highlight = styled.span`
  color: ${colors.primary};
  font-weight: 600;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 450px;
  height: 380px;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    background-color: ${colors.primary};
    opacity: 0.1;
    border-radius: 12px;
    z-index: 0;
  }

  @media (max-width: 992px) {
    width: 400px;
    height: 320px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 450px;
    height: auto;
    aspect-ratio: 4/3;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 1.5rem 0;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
`;

const CheckIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  font-size: 0.9rem;
  flex-shrink: 0;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: ${colors.primary};
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(26, 115, 232, 0.25);
  margin-top: 1rem;
  
  &:hover {
    background-color: ${colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(26, 115, 232, 0.3);
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Content>
        <SectionTitle>About Us</SectionTitle>
        <Paragraph>
          At <Highlight>Leleya Cleaning Services</Highlight>, we take pride in delivering top-quality 
          cleaning solutions tailored to your specific needs. With over 5 years of industry experience,
          we've built our reputation on reliability, attention to detail, and customer satisfaction.
        </Paragraph>
        <Paragraph>
          Our trained professionals use eco-friendly products and state-of-the-art 
          equipment to guarantee exceptional results for both residential and commercial spaces.
          We believe that a clean environment contributes to healthier, happier living and working conditions.
        </Paragraph>
        
        <FeatureList>
          <FeatureItem>
            <CheckIcon>✓</CheckIcon>
            Experienced & Vetted Staff
          </FeatureItem>
          <FeatureItem>
            <CheckIcon>✓</CheckIcon>
            Eco-Friendly Products
          </FeatureItem>
          <FeatureItem>
            <CheckIcon>✓</CheckIcon>
            Customized Cleaning Plans
          </FeatureItem>
          <FeatureItem>
            <CheckIcon>✓</CheckIcon>
            100% Satisfaction Guarantee
          </FeatureItem>
        </FeatureList>
        
        <Button href="#services">Our Services</Button>
      </Content>
      
      <ImageContainer>
        <Image src="/images/about.jpeg" alt="Leleya Professional Cleaning Service" />
      </ImageContainer>
    </AboutSection>
  );
};

export default About;