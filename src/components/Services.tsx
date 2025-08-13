import { Ear, TrendingUp, ShieldCheck } from 'lucide-react';
import { useContactForm } from './ContactFormProvider';
import { AnimatedElement } from './AnimatedElements';

export function Services() {
  const { openContactForm } = useContactForm();

  const services = [
    {
      icon: <Ear className="w-10 h-10 text-pink-500" />,
      title: "LET'S HEAR IT",
      description: "Review your financial situation. If you are falling delinquent and in dire need of help or you are thinking of filing bankruptcy, do give us a call at 800-900-4070. We will evaluate and research your financial circumstances and lay before you multiple options to get a debt relief plan tailored for your debt needs.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-purple-500" />,
      title: 'THE WAY FORWARD',
      description: 'Once you have selected a plan we will enroll you in our debt relief program. You could begin your path to debt relief in just a few days by paying a one-time low monthly payment in your customized dedicated account. You can be stress-free as you have found the right solution for the first time with professional support.',
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
      title: "KNOW WHEN YOU'LL BE DEBT FREE",
      description: "We specialize in negotiating with creditors to reduce the amount of debt you owe and all your creditors will be paid off from your Dedicated Account one by one until all your enrolled debt is behind you. It will take you 12-48 months to be debt free depending on your financial situation.",
    },
  ];

  return (
    <section className="w-full py-16 relative" style={{ backgroundColor: '#e1e8f0' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {services.map((service, index) => (
            <AnimatedElement type="stagger" delay={index / 10}>
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 ${index === 1 ? 'md:-mt-8' : ''}`}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
        <div className="text-center mt-20">
          <button
            onClick={openContactForm}
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
          >
            See how much you can save
          </button>
        </div>
      </div>
    </section>
  );
}
