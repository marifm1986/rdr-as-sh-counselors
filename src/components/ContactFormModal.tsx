import emailjs from 'emailjs-com';
import React, { useEffect, useState } from 'react';
import { XIcon } from 'lucide-react';
import { useContactForm } from './ContactFormProvider';
// US states array for the dropdown
export const usStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
// Debt amount options
export const debtAmounts = ['$0 - $4,999', '$5,000 - $7,499', '$7,500 - $9,999', '$10,000 - $14,999', '$15,000 - $19,999', '$20,000 - $29,999', '$30,000 - $39,999', '$40,000 - $49,999', '$50,000 - $59,999', '$60,000 - $69,999', '$70,000 - $79,999', '$80,000 - $89,999', '$90,000 - $99,999', '$100,000+'];
export const EMAILJS_SERVICE_ID = 'service_5uxk1v9';
export const EMAILJS_TEMPLATE_ID = 'template_a38o3v9';
export const EMAILJS_USER_ID = 'SLZXO8rySdneEkfDW';
interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function ContactFormModal({
  isOpen,
  onClose
}: ContactFormModalProps) {
  const { showSuccessModal } = useContactForm();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    debtAmount: '',
    state: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {
          ...prev
        };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (
      !/^(\+1\s?)?(\(?[0-9]{3}\)?)[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)
    ) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.debtAmount) newErrors.debtAmount = 'Please select your debt amount';
    if (!formData.state) newErrors.state = 'Please select your state';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      const templateParams = {
        to_email: 'oxaleinfo@gmail.com',
        emailSubject: `Request a Quote Mail from SHCounselors | Royal Debt Relief`,
        fromName: `${formData.firstName} ${formData.lastName}`,
        first_name: `${formData.firstName}`,
        last_name: `${formData.lastName}`,
        user_email: formData.email,
        user_phone: formData.phone,
        user_debt_amount: formData.debtAmount,
        user_state: formData.state,
        reply_to: formData.email
      };

      emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      )
        .then(() => {
          // Reset form data after successful submission
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            debtAmount: '',
            state: '',
          });
          setErrors({});
          setIsSubmitting(false);
          // Show success modal after successful submission
          showSuccessModal();
        })
        .catch((err) => {
          console.error('Error sending email:', err);
          setIsSubmitting(false);
        });
      // // Form submission logic would go here
      // console.log('Form submitted:', formData);
      // alert('Thank you for your submission! A debt relief specialist will contact you shortly.');
    }
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
      <div className="flex items-center justify-between p-6 border-b border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800">
          Get Debt Relief Help
        </h2>
        <button onClick={onClose} className="p-2 text-slate-500 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors">
          <XIcon size={20} />
        </button>
      </div>
      <div className="p-6">
        <p className="text-slate-600 mb-6">
          Fill out the form below and one of our debt relief specialists will
          contact you to discuss your options.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                First Name*
              </label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-slate-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`} />
              {errors.firstName && <p className="mt-1 text-sm text-red-500">
                {errors.firstName}
              </p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                Last Name*
              </label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-slate-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`} />
              {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email Address*
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`} />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                Phone Number*
              </label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-slate-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`} placeholder="(123) 456-7890" />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="debtAmount" className="block text-sm font-medium text-slate-700 mb-1">
              Total Debt Amount*
            </label>
            <select id="debtAmount" name="debtAmount" value={formData.debtAmount} onChange={handleChange} className={`w-full px-4 py-2 border ${errors.debtAmount ? 'border-red-500' : 'border-slate-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}>
              <option value="">Select your debt amount</option>
              {debtAmounts.map(amount => <option key={amount} value={amount}>
                {amount}
              </option>)}
            </select>
            {errors.debtAmount && <p className="mt-1 text-sm text-red-500">{errors.debtAmount}</p>}
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-1">
              State*
            </label>
            <select id="state" name="state" value={formData.state} onChange={handleChange} className={`w-full px-4 py-2 border ${errors.state ? 'border-red-500' : 'border-slate-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}>
              <option value="">Select your state</option>
              {usStates.map(state => <option key={state} value={state}>
                {state}
              </option>)}
            </select>
            {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full font-medium py-3 px-6 rounded-md transition duration-300 ${
              isSubmitting 
                ? 'bg-orange-400 cursor-not-allowed' 
                : 'bg-orange-500 hover:bg-orange-600'
            } text-white`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Get Free Debt Relief Quote...
              </div>
            ) : (
              'Get Free Debt Relief Quote'
            )}
          </button>
        </form>
      </div>
    </div>
  </div>;
}