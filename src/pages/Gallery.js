import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";


// Color palette to match booking component
const colors = {
  primary: "#1A76D2", // Main blue
  primaryLight: "#4C9AEA",
  primaryDark: "#0D47A1",
  accent: "#F5FAFF",
  text: "#253858",
  textLight: "#5E6C84",
  white: "#FFFFFF",
  border: "#E0E7FF",
  shadowColor: "rgba(9, 30, 66, 0.15)",
  cardBg: "#F8FBFF"
};

const GalleryContainer = styled.div`
  padding: 3rem 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryHeader = styled.div`
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  color: ${colors.primary};
  font-size: 2rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  color: ${colors.textLight};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.75rem;
  margin-top: 1rem;
`;

const Card = styled.div`
  background: ${colors.cardBg};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px ${colors.shadowColor};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px ${colors.shadowColor};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    opacity: ${props => props.hovering ? 1 : 0};
    transition: opacity 0.3s ease;
  }
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

const Caption = styled.div`
  padding: 1.25rem;
  text-align: left;
`;

const CaptionTitle = styled.h3`
  font-weight: 600;
  color: ${colors.text};
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
`;

const CaptionText = styled.p`
  color: ${colors.textLight};
  margin: 0;
  font-size: 0.9rem;
`;

const ViewButton = styled.button`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.6rem 1.2rem;
  background: ${colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  opacity: ${props => props.visible ? 1 : 0};
  transition: all 0.3s ease;
  z-index: 2;
  
  &:hover {
    background: ${colors.primaryDark};
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => props.visible ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 80%;
  max-height: 80%;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: ${colors.primaryLight};
  }
`;

const ModalCaption = styled.p`
  color: white;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
`;

// Extended image data with descriptions
const images = [
  { 
    src: "/gallery/office2-cleaning.jpeg", 
    caption: "Office Cleaning Excellence", 
    description: "Professional team handling deep cleaning services for corporate spaces."
  },
  { 
    src: "/gallery/residential2-cleaning.jpeg", 
    caption: "Residential Cleaning Services", 
    description: "Our specialists delivering exceptional cleaning solutions for homes."
  },
  { 
    src: "/gallery/carpet2-cleaning.jpeg", 
    caption: "Carpet Deep Cleaning", 
    description: "Advanced equipment and techniques for thorough carpet cleaning."
  },
  { 
    src: "/gallery/window2-cleaning.jpeg", 
    caption: "Crystal Clear Windows", 
    description: "Professional window cleaning services for both homes and businesses."
  },
  { 
    src: "/gallery/restaurant-cleaning.jpeg", 
    caption: "Restaurant Sanitation", 
    description: "Specialized cleaning for food service establishments meeting health codes."
  },
  { 
    src: "/gallery/eco-cleaning.jpeg", 
    caption: "Eco-Friendly Solutions", 
    description: "Environmentally responsible cleaning products and sustainable practices."
  },
];

const Gallery = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <Navbar/>
    <GalleryContainer>
      <GalleryHeader>
        <Title>Our Cleaning Gallery</Title>
        <Subtitle>
          See our professional cleaning team in action. Quality service is at the heart of everything we do.
        </Subtitle>
      </GalleryHeader>
      
      <GalleryGrid>
        {images.map((image, index) => (
          <Card 
            key={index} 
            onMouseEnter={() => setHoveredCard(index)} 
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ImageContainer hovering={hoveredCard === index}>
              <Image src={image.src} alt={image.caption} />
              <ViewButton 
                visible={hoveredCard === index}
                onClick={() => openModal(index)}
              >
                View
              </ViewButton>
            </ImageContainer>
            <Caption>
              <CaptionTitle>{image.caption}</CaptionTitle>
              <CaptionText>{image.description}</CaptionText>
            </Caption>
          </Card>
        ))}
      </GalleryGrid>
      
      <Modal visible={selectedImage !== null} onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {selectedImage && (
            <>
              <CloseButton onClick={closeModal}>×</CloseButton>
              <ModalImage src={selectedImage.src} alt={selectedImage.caption} />
              <ModalCaption>{selectedImage.caption}</ModalCaption>
            </>
          )}
        </ModalContent>
      </Modal>
    </GalleryContainer>
    <FloatingWhatsApp/>
    <Footer/>
    
    </>
  );
};

export default Gallery;