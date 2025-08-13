import { useState, createContext, useContext, ReactNode } from 'react';
import { ContactFormModal } from './ContactFormModal';
import { SuccessModal } from './SuccessModal';
interface ContactFormContextType {
  openContactForm: () => void;
  closeContactForm: () => void;
  showSuccessModal: () => void;
  closeSuccessModal: () => void;
}
const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);
export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
}
interface ContactFormProviderProps {
  children: ReactNode;
}
export function ContactFormProvider({
  children
}: ContactFormProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  
  const openContactForm = () => setIsOpen(true);
  const closeContactForm = () => setIsOpen(false);
  const showSuccessModal = () => {
    setIsOpen(false); // Close contact form first
    setIsSuccessOpen(true);
  };
  const closeSuccessModal = () => setIsSuccessOpen(false);

  return <ContactFormContext.Provider value={{
    openContactForm,
    closeContactForm,
    showSuccessModal,
    closeSuccessModal
  }}>
      {children}
      <ContactFormModal isOpen={isOpen} onClose={closeContactForm} />
      <SuccessModal isOpen={isSuccessOpen} onClose={closeSuccessModal} />
    </ContactFormContext.Provider>;
}