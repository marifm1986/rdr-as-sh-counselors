import { useState, createContext, useContext, ReactNode } from 'react';
import { ContactFormModal } from './ContactFormModal';
interface ContactFormContextType {
  openContactForm: () => void;
  closeContactForm: () => void;
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
  const openContactForm = () => setIsOpen(true);
  const closeContactForm = () => setIsOpen(false);
  return <ContactFormContext.Provider value={{
    openContactForm,
    closeContactForm
  }}>
      {children}
      <ContactFormModal isOpen={isOpen} onClose={closeContactForm} />
    </ContactFormContext.Provider>;
}