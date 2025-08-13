import { CheckCircleIcon } from 'lucide-react';
import { AnimatedElement } from './AnimatedElements';
import { useContactForm } from './ContactFormProvider';
export function ContactSection() {
  const {
    openContactForm
  } = useContactForm();
  return <section className="w-full py-16 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <AnimatedElement type="scale" >
            <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Financial advisor consulting with client about debt relief options" className="rounded-lg shadow-lg w-full" />
          </AnimatedElement>
        </div>
        <AnimatedElement type="stagger" delay={0.3} className="md:w-1/2">
          <div >
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Solutions that meet your needs
            </h2>
            <p className="text-slate-600 mb-8">
              We offer a variety of debt relief solutions tailored to your
              specific financial situation. Our goal is to help you become
              debt-free as quickly as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircleIcon className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Debt Consolidation
                  </h3>
                  <p className="text-slate-600">
                    Combine multiple debts into a single, manageable monthly
                    payment.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Debt Settlement
                  </h3>
                  <p className="text-slate-600">
                    Negotiate with creditors to reduce the total amount you owe.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Credit Counseling
                  </h3>
                  <p className="text-slate-600">
                    Get expert advice on managing your finances and improving
                    your credit.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Financial Education
                  </h3>
                  <p className="text-slate-600">
                    Learn strategies to maintain financial stability and prevent
                    future debt.
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-md transition duration-300" onClick={openContactForm}>
              Explore Our Services
            </button>
          </div>
        </AnimatedElement>
      </div>
    </div>
  </section>;
}