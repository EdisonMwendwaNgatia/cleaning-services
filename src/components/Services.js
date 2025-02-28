import React from "react";
import styled from "styled-components";

// Primary color palette to match other components
const colors = {
  primary: "#1a73e8",
  primaryDark: "#0d47a1",
  secondary: "#e8f0fe",
  white: "#ffffff",
  lightGray: "#f8f9fa",
  cardBg: "#f8f9fa",
  text: "#333333",
  lightText: "#757575",
  border: "#eaeaea"
};

const ServicesSection = styled.section`
  padding: 5rem 4rem;
  background: ${colors.white};
  text-align: center;
  
  @media (max-width: 992px) {
    padding: 4rem 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${colors.primaryDark};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled.p`
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${colors.lightText};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
`;

const ServiceCard = styled.a`
  background: ${colors.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  border: 1px solid ${colors.border};
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(26, 115, 232, 0.15);
    border-color: ${colors.secondary};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ServiceCard}:hover & {
    transform: scale(1.05);
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: ${colors.primary};
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: ${colors.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ServiceButton = styled.span`
  display: inline-block;
  padding: 0.5rem 0;
  color: ${colors.primary};
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;
  
  &::after {
    content: "→";
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  ${ServiceCard}:hover &::after {
    transform: translateX(5px);
  }
`;

const ServiceTag = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${colors.primary};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.9;
`;

// Enhanced service data with additional fields
const services = [
  {
    title: "Residential Cleaning",
    description: "We make your home spotless and fresh with our detailed residential cleaning service. From regular maintenance to spring cleaning, we've got you covered.",
    image: "/images/residential-cleaning.jpeg",
    tag: "Most Popular"
  },
  {
    title: "Office Cleaning",
    description: "Maintain a clean and productive work environment with our office cleaning solutions. We clean after hours to ensure minimal disruption to your business.",
    image: "/images/office-cleaning.jpeg",
    tag: ""
  },
  {
    title: "Deep Cleaning",
    description: "A thorough and intensive cleaning service for a healthier and cleaner space. Perfect for move-in/move-out situations or seasonal deep cleaning needs.",
    image: "/images/deep-cleaning.jpeg",
    tag: "Thorough"
  },
  {
    title: "Carpet Cleaning",
    description: "Revive your carpets with our professional steam and dry cleaning methods. We remove tough stains, allergens, and odors for fresher, cleaner carpets.",
    image: "/images/carpet-cleaning.jpeg",
    tag: ""
  },
];

const Services = () => {
  return (
    <ServicesSection id="services">
      <SectionTitle>Our Services</SectionTitle>
      <SectionDescription>
        Leleya Cleaning Services offers a comprehensive range of cleaning solutions for both residential and commercial clients. All our services can be customized to meet your specific needs.
      </SectionDescription>
      
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} href={`/pricing?service=${encodeURIComponent(service.title)}`}>
            <ImageContainer>
              <Image src={service.image} alt={service.title} />
              {service.tag && <ServiceTag>{service.tag}</ServiceTag>}
            </ImageContainer>
            
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceButton>View Pricing</ServiceButton>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;