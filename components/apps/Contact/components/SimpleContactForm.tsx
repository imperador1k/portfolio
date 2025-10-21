import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Zap } from 'lucide-react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import CustomScrollbar from '../styles/CustomScrollbar';

const FormContainer = styled.div`
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  ${CustomScrollbar}
  
  @media (max-width: 1200px) {
    padding: 2rem;
  }
  
  @media (max-width: 992px) {
    padding: 1.75rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 1.25rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    gap: 0.75rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.2rem;
    gap: 0.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.75rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 1.25rem;
  }
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    gap: 0.6rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    gap: 0.5rem;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: white;
  font-size: 1.05rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
    background: rgba(0, 0, 0, 0.3);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  @media (max-width: 992px) {
    padding: 0.875rem 1.125rem;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.9rem;
  }
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: white;
  font-size: 1.05rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  ${CustomScrollbar}
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
    background: rgba(0, 0, 0, 0.3);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  @media (max-width: 992px) {
    padding: 0.875rem 1.125rem;
    font-size: 1rem;
    min-height: 130px;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    font-size: 0.95rem;
    min-height: 120px;
  }
  
  @media (max-width: 576px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.9rem;
    min-height: 110px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1.25rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none !important;
  }
  
  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
    
    &::before {
      opacity: 1;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  @media (max-width: 992px) {
    padding: 1.125rem;
    font-size: 1.05rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.875rem;
    font-size: 0.95rem;
    gap: 0.75rem;
  }
`;

const StatusMessage = styled.div<{ success?: boolean }>`
  padding: 1.25rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  background: ${props => props.success 
    ? 'rgba(46, 204, 113, 0.15)' 
    : 'rgba(231, 76, 60, 0.15)'};
  border: 1px solid ${props => props.success 
    ? 'rgba(46, 204, 113, 0.3)' 
    : 'rgba(231, 76, 60, 0.3)'};
  animation: slideUp 0.3s ease-out;
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.75rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.875rem;
    gap: 0.6rem;
    margin-top: 1rem;
  }
`;

const StatusText = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const SimpleContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS - Main email to you
      const result = await emailjs.send(
        'service_o9j7m4p',
        'template_jxoz491',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString('pt-PT', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          // This ensures the reply-to is set to the user's email
          reply_to: formData.email
        },
        '_CETS980EBGWXuB6G'
      );

      console.log('Email sent successfully:', result);

      // Send auto-reply to the user
      await emailjs.send(
        'service_o9j7m4p',
        'template_irxvs6a',
        {
          name: formData.name,
          email: formData.email,
          subject: `Re: ${formData.subject}`,
          message: formData.message,
          // Set from email to your address
          from_name: "Miguel Moinho Velho",
          from_email: "miguel@moinho-velho.pt"
        },
        '_CETS980EBGWXuB6G'
      );

      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <FormTitle>
        <MessageSquare size={24} />
        Send a Message
      </FormTitle>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="name">
            <User size={20} />
            Full Name
          </FormLabel>
          <FormInput
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            disabled={isSubmitting}
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="email">
            <Mail size={20} />
            Email Address
          </FormLabel>
          <FormInput
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            disabled={isSubmitting}
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="subject">
            <Zap size={20} />
            Subject
          </FormLabel>
          <FormInput
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this regarding?"
            required
            disabled={isSubmitting}
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="message">
            <MessageSquare size={20} />
            Your Message
          </FormLabel>
          <FormTextArea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project or ask any questions..."
            required
            disabled={isSubmitting}
          />
        </FormGroup>
        
        <SubmitButton
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Send size={20} />
              Sending Message...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </SubmitButton>
      </form>
      
      {submitStatus && (
        <StatusMessage success={submitStatus.success}>
          <StatusText>{submitStatus.message}</StatusText>
        </StatusMessage>
      )}
    </FormContainer>
  );
};

export default SimpleContactForm;