import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Color palette
const colors = {
  primary: "#1A76D2", // Main blue
  primaryLight: "#4C9AEA",
  primaryDark: "#0D47A1",
  accent: "#F5FAFF",
  text: "#253858",
  textLight: "#5E6C84",
  success: "#00875A",
  white: "#FFFFFF",
  border: "#E0E7FF",
  shadowColor: "rgba(9, 30, 66, 0.15)"
};

const BookingContainer = styled.div`
  padding: 2.5rem;
  background-color: ${colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 12px ${colors.shadowColor};
  max-width: 500px;
  margin: 2rem auto;
`;

const BookingHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: ${colors.primary};
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  color: ${colors.textLight};
  font-size: 1rem;
  margin-top: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.25rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${colors.border};
  border-radius: 6px;
  font-size: 1rem;
  color: ${colors.text};
  background-color: ${colors.white};
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primaryLight}40;
  }
  
  &::placeholder {
    color: ${colors.textLight};
    opacity: 0.7;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${colors.border};
  border-radius: 6px;
  font-size: 1rem;
  color: ${colors.text};
  background-color: ${colors.white};
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%235E6C84' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primaryLight}40;
  }
  
  &:invalid {
    color: ${colors.textLight};
  }
`;

const ReadOnlyInput = styled(Input)`
  background-color: ${colors.accent};
  font-weight: 500;
  color: ${colors.primary};
  border-color: ${colors.primaryLight}40;
`;

const Button = styled.button`
  padding: 0.875rem;
  background: ${props => props.disabled ? colors.textLight : colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  margin-top: 0.5rem;
  
  &:hover:not(:disabled) {
    background: ${colors.primaryDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px ${colors.shadowColor};
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px ${colors.shadowColor};
  }
`;

const ProgressIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const ProgressStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => props.active ? colors.primary : colors.accent};
  color: ${props => props.active ? colors.white : colors.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StepLabel = styled.span`
  font-size: 0.75rem;
  color: ${props => props.active ? colors.primary : colors.textLight};
  font-weight: ${props => props.active ? '600' : '400'};
`;

const locations = [
  "Karen",
  "Lang'ata",
  "Westlands",
  "Kilimani",
  "Eastleigh",
  "Roysambu",
  "Kasarani",
  "Embakasi",
  "Ruaraka",
  "Dagoretti",
];

const Booking = () => {
  const location = useLocation();
  const selectedService = new URLSearchParams(location.search).get("service") || "";
  
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    location: "",
    service: selectedService,
  });

  const [formStep] = useState(1);
  
  const isFormValid = formData.fullName && 
                      formData.mobileNumber && 
                      formData.email && 
                      formData.location;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Construct mailto link
      const subject = `New Service Booking Request from ${formData.fullName}`;
      const body = `Full Name: ${formData.fullName}%0D%0AMobile Number: ${formData.mobileNumber}%0D%0ALocation: ${formData.location}%0D%0AService: ${formData.service}`;
      const mailtoLink = `mailto:edinsonbrian95@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      // Open the email client
      window.location.href = mailtoLink;
    }
  };

  return (
    <>
      <Navbar />
      <BookingContainer>
        <BookingHeader>
          <Title>Book a Service</Title>
          <Subtitle>Schedule your cleaning appointment with Leleya Cleaning Services</Subtitle>
        </BookingHeader>
  
        <ProgressIndicator>
          <ProgressStep>
            <StepCircle active={formStep >= 1}>1</StepCircle>
            <StepLabel active={formStep >= 1}>Information</StepLabel>
          </ProgressStep>
          <ProgressStep>
            <StepCircle active={formStep >= 2}>2</StepCircle>
            <StepLabel active={formStep >= 2}>Review</StepLabel>
          </ProgressStep>
          <ProgressStep>
            <StepCircle active={formStep >= 3}>3</StepCircle>
            <StepLabel active={formStep >= 3}>Confirmation</StepLabel>
          </ProgressStep>
        </ProgressIndicator>
  
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </FormGroup>
  
          <FormGroup>
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input
              id="mobileNumber"
              type="tel"
              name="mobileNumber"
              placeholder="Enter your mobile number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </FormGroup>
  
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
  
          <FormGroup>
            <Label htmlFor="location">Location</Label>
            <Select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select your location</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </Select>
          </FormGroup>
  
          <FormGroup>
            <Label htmlFor="service">Selected Service</Label>
            <ReadOnlyInput
              id="service"
              type="text"
              name="service"
              value={formData.service}
              readOnly
            />
          </FormGroup>
  
          <Button type="submit" disabled={!isFormValid}>
            Book Now
          </Button>
        </Form>
      </BookingContainer>
      <Footer />
    </>
  );
  
};

export default Booking;