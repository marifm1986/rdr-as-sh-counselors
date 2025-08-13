import React from 'react';
import { ShieldCheckIcon, BadgeCheckIcon, AwardIcon } from 'lucide-react';
import { AnimatedElement } from './AnimatedElements';
export function WhyChooseUs() {
  return <section className="w-full py-16 bg-slate-900 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why choose us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatedElement type="slideUp" delay={0.1} >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ShieldCheckIcon size={48} className="text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Trusted Experience</h3>
            <p className="text-slate-300">
              With over 15 years of experience in debt relief services, we've
              helped thousands of clients regain their financial freedom.
            </p>
          </div>
        </AnimatedElement>
        <AnimatedElement type="slideUp" delay={0.2} >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <BadgeCheckIcon size={48} className="text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Certified Professionals
            </h3>
            <p className="text-slate-300">
              Our team consists of certified financial counselors who are
              dedicated to providing the best advice for your situation.
            </p>
          </div>
        </AnimatedElement>
        <AnimatedElement type="slideUp" delay={0.2} >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <AwardIcon size={48} className="text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
            <p className="text-slate-300">
              We've helped clients reduce their debt by an average of 50% and
              become debt-free in as little as 24-48 months.
            </p>
          </div>
        </AnimatedElement>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <AnimatedElement type="scale" delay={0.4} >
          <div className="rounded-lg overflow-hidden aspect-[4/3] w-full">
            <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Financial team meeting to discuss client debt relief strategies" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
        </AnimatedElement>
        <AnimatedElement type="scale" delay={0.5} >
          <div className="rounded-lg overflow-hidden aspect-[4/3] w-full">
            <img src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Client celebrating financial freedom after successful debt relief program" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
        </AnimatedElement>
      </div>
    </div>
  </section>;
}