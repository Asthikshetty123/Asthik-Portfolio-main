import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';

// Container and Layout
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 20px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  gap: 24px;
`;

// Title and Description
const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Contact Info Section
const InfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
`;

const InfoCard = styled.div`
  flex: 1 1 200px;
  max-width: 260px;
  padding: 24px;
  background: ${({ theme }) => theme.card};
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(23, 92, 230, 0.15);
`;

const Icon = styled.div`
  font-size: 28px;
  margin-bottom: 12px;
`;

const Label = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  word-break: break-word;
`;

// Contact Form
const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1), hsla(294, 100%, 50%, 1));
  padding: 13px 16px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

// Component
const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_rl3l72a', 'template_9xy5ol7', form.current, 'xp4wktqPSXOZ0oC_D')
      .then(() => {
        setOpen(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log('Email Error:', error.text);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>

        {/* Contact Info Cards */}
        <InfoGrid>
          <InfoCard>
  <Icon>📍</Icon>
  <Label>Address</Label>
  <p style={{ color: 'white' }}>Bengaluru, India</p>
</InfoCard>
          <InfoCard>
            <Icon>📞</Icon>
            <Label>Contact Number</Label>
            <ContactLink href="tel:+9901321647">+9901321647</ContactLink>
          </InfoCard>
          <InfoCard>
            <Icon>✉️</Icon>
            <Label>Email Address</Label>
            <ContactLink href="mailto:asthikshetty9999@gmail.com">asthikshetty9999@gmail.com</ContactLink>
          </InfoCard>
        </InfoGrid>

        {/* Email Form */}
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" rows="4" name="message" required />
          <ContactButton type="submit" value="Send" />
        </ContactForm>

        {/* Success Snackbar */}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
            Email sent successfully!
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
