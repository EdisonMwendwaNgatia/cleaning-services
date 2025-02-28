import React, { useState } from "react";
import styled from "styled-components";

// Primary color palette to match other components
const colors = {
  primary: "#1a73e8",
  primaryDark: "#0d47a1",
  secondary: "#e8f0fe",
  white: "#ffffff",
  lightGray: "#f8f9fa",
  text: "#333333",
  lightText: "#757575",
  border: "#e0e0e0",
  error: "#d32f2f",
  success: "#43a047"
};

const ContactSection = styled.section`
  padding: 5rem 4rem;
  background: linear-gradient(to bottom, ${colors.lightGray} 0%, ${colors.white} 100%);
  position: relative;
  
  @media (max-width: 992px) {
    padding: 4rem 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
  background: ${colors.white};
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 992px) {
    padding: 2rem;
  }
`;

const FormWrapper = styled.div`
  flex: 1.5;
  padding: 3rem;
  
  @media (max-width: 992px) {
    padding: 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.light ? colors.white : colors.primaryDark};
  text-align: ${props => props.centered ? 'center' : 'left'};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${colors.text};
`;

const Input = styled.input`
  padding: 0.9rem 1rem;
  border: 1px solid ${colors.border};
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.secondary};
  }
  
  &::placeholder {
    color: #bdbdbd;
  }
`;

const TextArea = styled.textarea`
  padding: 0.9rem 1rem;
  border: 1px solid ${colors.border};
  border-radius: 6px;
  resize: vertical;
  min-height: 120px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.secondary};
  }
  
  &::placeholder {
    color: #bdbdbd;
  }
`;

const Button = styled.button`
  padding: 1rem;
  background: ${colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: ${colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(26, 115, 232, 0.25);
  }
  
  &:disabled {
    background: #bdbdbd;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const InfoText = styled.p`
  margin-bottom: 2rem;
  line-height: 1.6;
  color: ${props => props.light ? 'rgba(255, 255, 255, 0.9)' : colors.lightText};
`;

const InfoItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
`;

const InfoDetail = styled.p`
  margin: 0;
  opacity: 0.9;
`;

const FormResponse = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 6px;
  text-align: center;
  background-color: ${props => props.success ? 'rgba(67, 160, 71, 0.1)' : 'rgba(211, 47, 47, 0.1)'};
  color: ${props => props.success ? colors.success : colors.error};
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });
  
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      try {
        // Construct mailto link
        const subject = `New Inquiry from ${formData.name} - ${formData.service || 'General Inquiry'}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`;
        
        const mailtoLink = `mailto:edinsonbrian95@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the mail client
        window.location.href = mailtoLink;
        
        // Update form status
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you! Your message has been sent. We'll get back to you soon."
        });
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: ""
        });
      } catch (error) {
        setFormStatus({
          submitted: true,
          success: false,
          message: "There was an error sending your message. Please try again."
        });
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactInfo>
          <SectionTitle light>Get in Touch</SectionTitle>
          <InfoText light>
            We're here to help with all your cleaning needs. Contact us today to schedule a service or to get a free quote.
          </InfoText>
          
          <InfoItem>
            <IconWrapper>
              <span>📍</span>
            </IconWrapper>
            <InfoContent>
              <InfoTitle>Our Location</InfoTitle>
              <InfoDetail>Nyayo Estate Gate D, Embakasi, Nairobi</InfoDetail>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <IconWrapper>
              <span>📞</span>
            </IconWrapper>
            <InfoContent>
              <InfoTitle>Phone Number</InfoTitle>
              <InfoDetail>(+254) 768 629 466</InfoDetail>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <IconWrapper>
              <span>✉️</span>
            </IconWrapper>
            <InfoContent>
              <InfoTitle>Email Address</InfoTitle>
              <InfoDetail>leleyacleaning@gmail.com</InfoDetail>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <IconWrapper>
              <span>⏰</span>
            </IconWrapper>
            <InfoContent>
              <InfoTitle>Office Hours</InfoTitle>
              <InfoDetail>Monday - Friday: 8am - 6pm</InfoDetail>
            </InfoContent>
          </InfoItem>
        </ContactInfo>
        
        <FormWrapper>
          <SectionTitle>Send us a Message</SectionTitle>
          <InfoText>
            Fill out the form below, and we'll get back to you as soon as possible. We look forward to helping you with your cleaning needs!
          </InfoText>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(XXX) XXX-XXXX"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="service">Service Interest (Optional)</Label>
              <Input
                as="select"
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="Residential Cleaning">Residential Cleaning</option>
                <option value="Office Cleaning">Office Cleaning</option>
                <option value="Deep Cleaning">Deep Cleaning</option>
                <option value="Carpet Cleaning">Carpet Cleaning</option>
                <option value="Couch Cleaning">Couch Cleaning</option>
                <option value="Mattress Cleaning">Mattress Cleaning</option>
                <option value="Post-Construction Cleaning">Post-Construction Cleaning</option>
                <option value="Bathroom/Toilet Destaining">Bathroom/Toilet Destaining</option>
                <option value="Headlight Restoration">Headlight Restoration</option>
                <option value="Car Wash">Car Wash</option>
                <option value="Interior Detailing">Interior Detailing</option>
                <option value="Pest Control and Fumigation Services">Pest Control and Fumigation Services</option>
                <option value="Cabro and Pavement Scrubbing">Cabro and Pavement Scrubbing</option>
                <option value="Other">Other</option>
              </Input>
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Your Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Tell us about your cleaning needs..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              {!loading && <span>→</span>}
            </Button>
            
            {formStatus.submitted && (
              <FormResponse success={formStatus.success}>
                {formStatus.message}
              </FormResponse>
            )}
          </Form>
        </FormWrapper>
      </ContactContainer>
    </ContactSection>
  );
};

export default ContactForm;