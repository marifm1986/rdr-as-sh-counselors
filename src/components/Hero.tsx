import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { useContactForm } from './ContactFormProvider';
import { debtAmounts, usStates } from './ContactFormModal';
import { AnimatedElement } from './AnimatedElements';
export const EMAILJS_SERVICE_ID = 'service_5uxk1v9';
export const EMAILJS_TEMPLATE_ID = 'template_a38o3v9';
export const EMAILJS_USER_ID = 'SLZXO8rySdneEkfDW';
export function Hero() {
  const {
    openContactForm
  } = useContactForm();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    debtAmount: '',
    state: '',
    consent: false
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      consent: e.target.checked
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      .then((res) => {
        alert("Successfully Submitted")
      })
      .catch((err) => {
        console.error('Error sending email:', err);

      });
  };
  return <section className="w-full relative pt-28 pb-20 md:pt-36 md:pb-28">
    {/* Background image with overlay */}
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-slate-900/80"></div>
    </div>
    {/* Content */}
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side - Text content (now centered) */}
        <div className="md:w-1/2 text-center mx-auto">
          <AnimatedElement type="slideLeft" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              DROWNING IN DEBT?
            </h1>
            <p className="text-xl text-slate-200 mb-6 max-w-xl mx-auto">
              Get out of Debt by reducing your credit card and unsecured loans
              in as little as 24-48 months with a one-time low monthly payment
              plan. No Up Front fees and no Obligation.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-md transition duration-300 text-lg" onClick={openContactForm}>
              Start Living Debt Free
            </button>
          </AnimatedElement>
        </div>
        {/* Right side - Form (height reduced) */}
        <AnimatedElement type="slideUp" delay={0.2} className="md:w-5/12  bg-white p-5 rounded-lg shadow-lg">
          <div className='sm:w-full'>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">
              Get Free Quote
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="block text-slate-700 mb-1 text-sm">
                    First Name*
                  </label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-slate-700 mb-1 text-sm">
                    Last Name*
                  </label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="email" className="block text-slate-700 mb-1 text-sm">
                    Email Address*
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-slate-700 mb-1 text-sm">
                    Phone Number*
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(123) 456-7890" className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500" required />
                </div>
              </div>
              <div>
                <label htmlFor="debtAmount" className="block text-slate-700 mb-1 text-sm">
                  Total Debt Amount*
                </label>
                <select id="debtAmount" name="debtAmount" value={formData.debtAmount} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 appearance-none bg-white" required>
                  <option value="">Select your debt amount</option>
                  {debtAmounts.map(amount => <option key={amount} value={amount}>
                    {amount}
                  </option>)}
                </select>
              </div>
              <div>
                <label htmlFor="state" className="block text-slate-700 mb-1 text-sm">
                  State*
                </label>
                <select id="state" name="state" value={formData.state} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 appearance-none bg-white" required>
                  <option value="">Select your state</option>
                  {usStates.map(state => <option key={state} value={state}>
                    {state}
                  </option>)}
                </select>
              </div>
              {/* <div className="flex items-start">
                <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleCheckboxChange} className="mt-1 mr-2" required />
                <label htmlFor="consent" className="text-slate-600 text-xs">
                  I consent to receive calls and SMS from SH Counselors.*
                </label>
              </div> */}
              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2.5 px-6 rounded-md transition duration-300 text-lg">
                Get Free Debt Relief Quote
              </button>
            </form>
          </div>
        </AnimatedElement>
      </div>
    </div>
  </section>;
}