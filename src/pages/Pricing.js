import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";


// Define brand colors
const colors = {
  primaryBlue: "#0056b3",
  lightBlue: "#4d90fe",
  darkBlue: "#003b7a",
  white: "#ffffff",
  lightGray: "#f8f9fa",
  midGray: "#e9ecef",
  textDark: "#343a40",
  accentGreen: "#28a745"
};

// Main container with a clean background
const PricingContainer = styled.div`
  padding: 5rem 2rem;
  background: linear-gradient(to bottom, ${colors.lightGray}, ${colors.white});
  min-height: 100vh;
`;

// Content wrapper with max width
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

// Section heading with blue accent
const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: ${colors.darkBlue};
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    width: 50%;
    height: 3px;
    background-color: ${colors.lightBlue};
    bottom: -10px;
    left: 25%;
  }
`;

const Subtitle = styled.p`
  color: ${colors.textDark};
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 1.5rem;
  line-height: 1.6;
`;

// Tab navigation
const ServiceTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active ? colors.primaryBlue : 'transparent'};
  color: ${props => props.active ? colors.white : colors.textDark};
  border: 2px solid ${props => props.active ? colors.primaryBlue : colors.midGray};
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? colors.primaryBlue : colors.midGray};
    transform: translateY(-2px);
  }
`;

// Enhanced pricing grid
const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

// Beautiful pricing card with hover effects
const Card = styled.div`
  padding: 0;
  background: ${colors.white};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
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
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const ServiceName = styled.h3`
  color: ${colors.darkBlue};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const PriceTag = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.primaryBlue};
  margin: 1rem 0;
  
  span {
    font-size: 1rem;
    font-weight: 400;
    color: ${colors.textDark};
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  text-align: left;
`;

const Feature = styled.li`
  padding: 0.5rem 0;
  color: ${colors.textDark};
  display: flex;
  align-items: center;
  
  &:before {
    content: "✓";
    color: ${colors.accentGreen};
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 0.8rem 0;
  background: ${colors.primaryBlue};
  color: ${colors.white};
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
  
  &:hover {
    background: ${colors.darkBlue};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 86, 179, 0.3);
  }
`;

const PromoBadge = styled.div`
  position: absolute;
  top: 20px;
  right: -30px;
  background: ${colors.accentGreen};
  color: white;
  padding: 0.5rem 2.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  transform: rotate(45deg);
  z-index: 10;
`;

const InfoSection = styled.div`
  margin-top: 5rem;
  background: ${colors.lightGray};
  padding: 3rem;
  border-radius: 12px;
  text-align: left;
`;

const InfoTitle = styled.h3`
  color: ${colors.darkBlue};
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const InfoContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const InfoBox = styled.div`
  background: ${colors.white};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const InfoBoxTitle = styled.h4`
  color: ${colors.primaryBlue};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

// Enhanced service data with more details
const services = [
  { 
    name: "Basic Residential Cleaning", 
    price: 500, 
    image: "/images/residential-cleaning.jpeg",
    features: [
      "Dusting of all surfaces",
      "Vacuuming and mopping floors",
      "Bathroom cleaning",
      "Kitchen cleaning",
      "Waste removal"
    ],
    popular: false
  },
  { 
    name: "Office Cleaning", 
    price: 700, 
    image: "/images/office-cleaning.jpeg",
    features: [
      "Reception & common areas",
      "Workstations & meeting rooms",
      "Restroom sanitization",
      "Kitchen/break room cleaning",
      "Glass & window cleaning"
    ],
    popular: false
  },
  { 
    name: "Deep Cleaning", 
    price: 1000, 
    image: "/images/deep-cleaning.jpeg",
    features: [
      "All basic cleaning services",
      "Inside cabinet cleaning",
      "Baseboard & door frame cleaning",
      "Window track & blind cleaning",
      "Appliance deep cleaning"
    ],
    popular: true
  },
  { 
    name: "Carpet Cleaning", 
    price: 30, 
    unit: "per sqft",
    image: "/images/carpet-cleaning.jpeg",
    features: [
      "Hot water extraction",
      "Stain treatment",
      "Deodorizing",
      "Quick-dry technology",
      "Eco-friendly solutions"
    ],
    popular: false
  },
  { 
    name: "Couch Cleaning", 
    price: 700, 
    unit: "per seater",
    image: "/images/sofa cleaning.jpeg",
    features: [
      "Deep steam cleaning",
      "Stain removal",
      "Odor treatment",
      "Fabric-friendly detergents",
      "Quick drying process"
    ],
    popular: false
  },
  { 
    name: "Mattress Cleaning", 
    price: "2000 - 3000", 
    image: "/images/matress-cleaning.jpeg",
    features: [
      "Dust mite removal",
      "Deep steam cleaning",
      "Odor neutralization",
      "Stain treatment",
      "Allergy relief"
    ],
    popular: false
  },
  { 
    name: "Post-Construction Cleaning", 
    price: 1500, 
    image: "/images/post-construction.jpeg",
    features: [
      "Debris removal",
      "Dust and residue cleaning",
      "Window & glass cleaning",
      "Floor scrubbing",
      "Deep sanitization"
    ],
    popular: false
  },
  { 
    name: "Bathroom/Toilet Destaining", 
    price: 1000, 
    unit: "per bowl",
    image: "/images/bathroom-destaining.jpeg",
    features: [
      "Limescale & stain removal",
      "Odor elimination",
      "Deep bowl and seat scrubbing",
      "Wall & tile cleaning",
      "Eco-friendly disinfectants"
    ],
    popular: false
  },
  { 
    name: "Headlight Restoration", 
    price: 1500, 
    image: "/images/headlight-restoration.jpeg",
    features: [
      "Oxidation removal",
      "Scratch repair",
      "UV protection",
      "Restores clarity",
      "Long-lasting results"
    ],
    popular: false
  },
  { 
    name: "Car Wash", 
    price: 500, 
    image: "/images/car-wash.jpeg",
    features: [
      "Exterior hand wash",
      "Tire & rim cleaning",
      "Interior vacuuming",
      "Glass cleaning",
      "Wax & polish option"
    ],
    popular: false
  },
  { 
    name: "Interior Detailing", 
    price: 2000, 
    image: "/images/interior-detailing.jpeg",
    features: [
      "Deep carpet & seat cleaning",
      "Leather treatment",
      "Dashboard polishing",
      "Odor neutralization",
      "Complete interior sanitization"
    ],
    popular: false
  },
  { 
    name: "Pest Control and Fumigation Services", 
    price: "1000 per room, 1500 for kitchen", 
    image: "/images/pest-control.jpeg",
    features: [
      "Cockroach and rodent extermination",
      "Bedbug treatment",
      "Mosquito control",
      "Termite protection",
      "Safe for pets and children"
    ],
    popular: false
  },
  { 
    name: "Cabro and Pavement Scrubbing", 
    price: 8, 
    unit: "per sqft",
    image: "/images/cabro-cleaning.jpeg",
    features: [
      "High-pressure water cleaning",
      "Moss and algae removal",
      "Stain treatment",
      "Restores original color",
      "Sealing option available"
    ],
    popular: false
  },
  { 
    name: "Dining Chair Cleaning", 
    price: 300, 
    unit: "per chair",
    image: "/images/dining-chair.jpeg",
    features: [
      "Fabric and leather cleaning",
      "Stain removal",
      "Odor neutralization",
      "Quick drying",
      "Gentle but effective cleaning solutions"
    ],
    popular: false
  },
  { 
    name: "Office/Church Chair Cleaning", 
    price: 350, 
    unit: "per chair",
    image: "/images/office-cleaning.jpeg",
    features: [
      "Dust and allergen removal",
      "Fabric and leather treatment",
      "Stain removal",
      "Deep sanitization",
      "Restores original appearance"
    ],
    popular: false
  },
  { 
    name: "Sink Destaining", 
    price: 500, 
    image: "/images/sink-destaining.jpeg",
    unit: "per bowl",
    features: [
      "Limescale & stain removal",
      "Odor elimination",
      "Deep scrubbing",
      "Stainless steel & ceramic safe",
      "Long-lasting shine"
    ],
    popular: false
  }
];


// Service categories for filtering
const categories = ["All Services", "Residential", "Commercial", "Specialized"];

const Pricing = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All Services");

  // Filter services based on active tab
  const filteredServices = services.filter(service => {
    if (activeTab === "All Services") return true;

    if (activeTab === "Residential") {
      return (
        service.name.includes("Residential") || 
        service.name.includes("Move") || 
        service.name.includes("Mattress") || 
        service.name.includes("Couch") || 
        service.name.includes("Bathroom") ||
        service.name.includes("Sink") ||
        service.name.includes("Dining Chair")
      );
    }

    if (activeTab === "Commercial") {
      return (
        service.name.includes("Office") || 
        service.name.includes("Post-Construction") || 
        service.name.includes("Pest Control") || 
        service.name.includes("Cabro") || 
        service.name.includes("Church Chair")
      );
    }

    if (activeTab === "Specialized") {
      return (
        service.name.includes("Deep") || 
        service.name.includes("Carpet") || 
        service.name.includes("Window") || 
        service.name.includes("Headlight") || 
        service.name.includes("Car Wash") || 
        service.name.includes("Interior Detailing")
      );
    }

    return true;
  });

  
  return (
    <>
      <Navbar />
      <PricingContainer>
        <ContentWrapper>
          <SectionHeading>
            <Title>Our Pricing Plans</Title>
            <Subtitle>
              At Leleya Cleaning Solutions, we offer competitive pricing based on your specific needs.
              All prices below include all necessary cleaning supplies and equipment.
            </Subtitle>
          </SectionHeading>
          
          <ServiceTabs>
            {categories.map(category => (
              <Tab 
                key={category} 
                active={activeTab === category}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </Tab>
            ))}
          </ServiceTabs>
          
          <PricingGrid>
            {filteredServices.map((service, index) => (
              <Card key={index}>
                {service.popular && <PromoBadge>Popular</PromoBadge>}
                <ImageContainer>
                  <Image src={service.image} alt={service.name} />
                  <Overlay />
                </ImageContainer>
                <CardContent>
                  <ServiceName>{service.name}</ServiceName>
                  <PriceTag>
                    KSH {service.price} <span>{service.unit}</span>  
                  </PriceTag>                                          
                  <FeatureList>
                    {service.features.map((feature, idx) => (
                      <Feature key={idx}>{feature}</Feature>
                    ))}
                  </FeatureList>
                  <Button onClick={() => navigate(`/booking?service=${encodeURIComponent(service.name)}`)}>
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </PricingGrid>
          
          <InfoSection>
            <InfoTitle>Additional Information</InfoTitle>
            <InfoContent>
              <InfoBox>
                <InfoBoxTitle>
                  Pricing Policy
                </InfoBoxTitle>
                <p>Our prices are based on the area to be cleaned in square meters. For larger spaces, we offer volume discounts. Please contact us for custom quotes for areas over 500m².</p>
              </InfoBox>
              
              <InfoBox>
                <InfoBoxTitle>
                  Guarantees
                </InfoBoxTitle>
                <p>We offer a 100% satisfaction guarantee. If you're not completely satisfied with our service, we'll return and redo any area of concern at no additional cost.</p>
              </InfoBox>
              
              <InfoBox>
                <InfoBoxTitle>
                  Booking Process
                </InfoBoxTitle>
                <p>Book your service online or by phone. We require 24-hour notice for standard bookings. For same-day service, please call us directly for availability.</p>
              </InfoBox>
            </InfoContent>
          </InfoSection>
        </ContentWrapper>
      </PricingContainer>
      <Footer />
      <FloatingWhatsApp/>
    </>
  );
  
};

export default Pricing;