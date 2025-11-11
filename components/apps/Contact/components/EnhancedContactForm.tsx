import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Zap, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import { m as motion, AnimatePresence } from 'motion/react';

const FormContainer = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #0066ff;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #0066ff;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, #0066ff, #00ccff);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
  }
`;

const StatusMessage = styled(motion.div)<{ success?: boolean }>`
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  background: ${props => props.success 
    ? 'rgba(46, 204, 113, 0.1)' 
    : 'rgba(231, 76, 60, 0.1)'};
  border: 1px solid ${props => props.success 
    ? 'rgba(46, 204, 113, 0.3)' 
    : 'rgba(231, 76, 60, 0.3)'};
`;

const StatusIcon = styled.div<{ success?: boolean }>`
  color: ${props => props.success ? '#2ecc71' : '#e74c3c'};
`;

const StatusText = styled.div`
  color: white;
  font-size: 0.9rem;
`;

const EnhancedContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    name: '',
    subject: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ message: string, success: boolean; } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_o9j7m4p',
        'template_jxoz491',
        {
          email: formData.email,
          message: formData.message,
          name: formData.name,
          subject: formData.subject,
          time: new Date().toLocaleString('pt-PT', {
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            month: 'long',
            year: 'numeric'
          })
        },
        '_CETS980EBGWXuB6G'
      );

      console.log('Email sent successfully:', result);

      // Send auto-reply
      await emailjs.send(
        'service_o9j7m4p',
        'template_irxvs6a',
        {
          email: formData.email,
          message: formData.message,
          name: formData.name,
          subject: formData.subject
        },
        '_CETS980EBGWXuB6G'
      );

      setSubmitStatus({
        message: 'Message sent successfully! I\'ll get back to you soon.',
        success: true
      });
      setFormData({ email: '', message: '', name: '', subject: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        message: 'Failed to send message. Please try again.',
        success: false
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <FormTitle>
        <MessageSquare size={20} />
        Send a Message
      </FormTitle>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="name">
            <User size={16} />
            Full Name
          </FormLabel>
          <FormInput
            disabled={isSubmitting}
            id="name"
            onChange={handleChange}
            placeholder="Enter your full name"
            type="text"
            value={formData.name}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="email">
            <Mail size={16} />
            Email Address
          </FormLabel>
          <FormInput
            disabled={isSubmitting}
            id="email"
            onChange={handleChange}
            placeholder="your.email@example.com"
            type="email"
            value={formData.email}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="subject">
            <Zap size={16} />
            Subject
          </FormLabel>
          <FormInput
            disabled={isSubmitting}
            id="subject"
            onChange={handleChange}
            placeholder="What is this regarding?"
            type="text"
            value={formData.subject}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="message">
            <MessageSquare size={16} />
            Your Message
          </FormLabel>
          <FormTextArea
            disabled={isSubmitting}
            id="message"
            onChange={handleChange}
            placeholder="Tell me about your project or ask any questions..."
            value={formData.message}
            required
          />
        </FormGroup>
        
        <SubmitButton
          disabled={isSubmitting}
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: "linear", repeat: Infinity }}
              >
                <Send size={18} />
              </motion.div>
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </SubmitButton>
      </form>
      
      <AnimatePresence>
        {submitStatus && (
          <StatusMessage
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: 10 }}
            success={submitStatus.success}
          >
            <StatusIcon success={submitStatus.success}>
              {submitStatus.success ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            </StatusIcon>
            <StatusText>{submitStatus.message}</StatusText>
          </StatusMessage>
        )}
      </AnimatePresence>
      
      <Toaster 
        position="bottom-center"
        toastOptions={{
          style: {
            backdropFilter: 'blur(10px)',
            background: 'rgba(30, 30, 46, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            color: '#fff',
          },
        }}
      />
    </FormContainer>
  );
};

export default EnhancedContactForm;