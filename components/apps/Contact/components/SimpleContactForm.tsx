import { useState } from "react";
import { Send, User, Mail, MessageSquare, Zap } from "lucide-react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import CustomScrollbar from "components/apps/Contact/styles/CustomScrollbar";

const FormContainer = styled.div`
  backdrop-filter: blur(12px);
  background: rgb(255 255 255 / 5%);
  border: 1px solid rgb(255 255 255 / 15%);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgb(0 0 0 / 20%);
  padding: 2.5rem;
  ${CustomScrollbar}

  @media (width <= 1200px) {
    padding: 2rem;
  }

  @media (width <= 992px) {
    padding: 1.75rem;
  }

  @media (width <= 768px) {
    padding: 1.5rem;
  }

  @media (width <= 576px) {
    padding: 1.25rem;
  }
`;

const FormTitle = styled.h3`
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  background-clip: text;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  gap: 1rem;
  justify-content: center;
  margin: 0 0 2rem;
  text-align: center;
  -webkit-text-fill-color: transparent;

  @media (width <= 768px) {
    font-size: 1.3rem;
    gap: 0.75rem;
  }

  @media (width <= 576px) {
    font-size: 1.2rem;
    gap: 0.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.75rem;

  @media (width <= 768px) {
    margin-bottom: 1.5rem;
  }

  @media (width <= 576px) {
    margin-bottom: 1.25rem;
  }
`;

const FormLabel = styled.label`
  align-items: center;
  color: rgb(255 255 255 / 90%);
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (width <= 768px) {
    font-size: 0.95rem;
    gap: 0.6rem;
  }

  @media (width <= 576px) {
    font-size: 0.9rem;
    gap: 0.5rem;
  }
`;

const FormInput = styled.input`
  background: rgb(0 0 0 / 25%);
  border: 1px solid rgb(255 255 255 / 15%);
  border-radius: 12px;
  color: white;
  font-size: 1.05rem;
  padding: 1rem 1.25rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  &:focus {
    background: rgb(0 0 0 / 30%);
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgb(102 126 234 / 30%);
    outline: none;
  }

  &::placeholder {
    color: rgb(255 255 255 / 50%);
  }

  @media (width <= 992px) {
    font-size: 1rem;
    padding: 0.875rem 1.125rem;
  }

  @media (width <= 768px) {
    font-size: 0.95rem;
    padding: 0.8rem 1rem;
  }

  @media (width <= 576px) {
    font-size: 0.9rem;
    padding: 0.75rem 0.875rem;
  }
`;

const FormTextArea = styled.textarea`
  background: rgb(0 0 0 / 25%);
  border: 1px solid rgb(255 255 255 / 15%);
  border-radius: 12px;
  color: white;
  font-size: 1.05rem;
  min-height: 150px;
  padding: 1rem 1.25rem;
  resize: vertical;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  ${CustomScrollbar}

  &:focus {
    background: rgb(0 0 0 / 30%);
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgb(102 126 234 / 30%);
    outline: none;
  }

  &::placeholder {
    color: rgb(255 255 255 / 50%);
  }

  @media (width <= 992px) {
    font-size: 1rem;
    min-height: 130px;
    padding: 0.875rem 1.125rem;
  }

  @media (width <= 768px) {
    font-size: 0.95rem;
    min-height: 120px;
    padding: 0.8rem 1rem;
  }

  @media (width <= 576px) {
    font-size: 0.9rem;
    min-height: 110px;
    padding: 0.75rem 0.875rem;
  }
`;

const SubmitButton = styled.button`
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 1.1rem;
  font-weight: 600;
  gap: 1rem;
  justify-content: center;
  overflow: hidden;
  padding: 1.25rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  &:disabled {
    cursor: not-allowed;
    opacity: 70%;
    transform: none !important;
  }

  &:hover:not(:disabled) {
    box-shadow: 0 10px 25px rgb(102 126 234 / 40%);

    &::before {
      background: linear-gradient(135deg, rgb(255 255 255 / 20%), transparent);
      content: "";
      height: 100%;
      left: 0;
      opacity: 0%;
      position: absolute;
      top: 0;
      transition: opacity 0.3s ease;
      width: 100%;
    }

    &:hover:not(:disabled)::before {
      opacity: 100%;
    }
  }

  @media (width <= 992px) {
    font-size: 1.05rem;
    padding: 1.125rem;
  }

  @media (width <= 768px) {
    font-size: 1rem;
    padding: 1rem;
  }

  @media (width <= 576px) {
    font-size: 0.95rem;
    gap: 0.75rem;
    padding: 0.875rem;
  }
`;

const StatusMessage = styled.div<{ success?: boolean }>`
  align-items: center;
  animation: slide-up 0.3s ease-out;
  background: ${(props) =>
    props.success ? "rgba(46, 204, 113, 0.15)" : "rgba(231, 76, 60, 0.15)"};
  border: 1px solid
    ${(props) =>
      props.success ? "rgba(46, 204, 113, 0.3)" : "rgba(231, 76, 60, 0.3)"};
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1.25rem;

  @media (width <= 768px) {
    gap: 0.75rem;
    padding: 1rem;
  }

  @media (width <= 576px) {
    gap: 0.6rem;
    margin-top: 1rem;
    padding: 0.875rem;
  }
`;

const StatusText = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 500;

  @media (width <= 768px) {
    font-size: 0.95rem;
  }

  @media (width <= 576px) {
    font-size: 0.9rem;
  }
`;

const SimpleContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    { message: string; success: boolean } | undefined
  >();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(undefined);

    try {
      // Send email using EmailJS - Main email to you
      await emailjs.send(
        "service_o9j7m4p",
        "template_jxoz491",
        {
          email: formData.email,
          message: formData.message,
          name: formData.name,
          // This ensures the reply-to is set to the user's email
          reply_to: formData.email,

          subject: formData.subject,

          time: new Date().toLocaleString("pt-PT", {
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            month: "long",
            year: "numeric",
          }),
        },
        "_CETS980EBGWXuB6G"
      );

      // Send auto-reply to the user
      await emailjs.send(
        "service_o9j7m4p",
        "template_irxvs6a",
        {
          email: formData.email,
          from_email: "contacto@miguelweb.dev",
          // Set from email to your address
          from_name: "Miguel Santos",

          message: formData.message,

          name: formData.name,

          subject: `Re: ${formData.subject}`,
        },
        "_CETS980EBGWXuB6G"
      );

      setSubmitStatus({
        message: "Message sent successfully! I'll get back to you soon.",
        success: true,
      });
      setFormData({ email: "", message: "", name: "", subject: "" });
    } catch {
      setSubmitStatus({
        message: "Failed to send message. Please try again.",
        success: false,
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
            <Mail size={20} />
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
            <Zap size={20} />
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
            <MessageSquare size={20} />
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

        <SubmitButton disabled={isSubmitting} type="submit">
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
