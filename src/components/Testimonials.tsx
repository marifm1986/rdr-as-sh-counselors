import React from 'react';
import { StarIcon } from 'lucide-react';
export function Testimonials() {
  return <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          Results that provide peace of mind
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TestimonialCard name="Client 1" text="SH Counselors helped me consolidate my credit card debt and save over $15,000 in interest. I'm now on track to be debt-free in 3 years!" image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
          <TestimonialCard name="Client 2" text="I was drowning in medical debt after a surgery. The team at SH Counselors negotiated with my creditors and reduced my total debt by 40%." image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80" />
          <TestimonialCard name="Client 3" text="The financial education I received was invaluable. Not only am I getting out of debt, but I now have the tools to stay financially healthy." image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
          <TestimonialCard name="Client 4" text="After years of struggling with student loans, SH Counselors helped me find a repayment plan that actually works with my budget. Thank you!" image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
        </div>
        <div className="mt-12 bg-slate-100 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0">
              <div className="flex items-center justify-center md:justify-start">
                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80" alt="Rita E., a satisfied client of SH Counselors" className="w-24 h-24 rounded-full object-cover border-4 border-amber-500" />
              </div>
            </div>
            <div className="md:w-3/4">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => <StarIcon key={i} size={20} className="text-amber-500 mr-1" fill="#f59e0b" />)}
              </div>
              <p className="text-slate-700 italic mb-3">
                "Working with SH Counselors was the best financial decision I've
                ever made. Their team was compassionate, knowledgeable, and
                genuinely cared about helping me get out of debt. Within 6
                months, I've already seen a dramatic improvement in my financial
                situation."
              </p>
              <p className="font-semibold text-slate-800">Rita E.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
function TestimonialCard({
  name,
  text,
  image
}: {
  name: string;
  text: string;
  image: string;
}) {
  return <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <img src={image} alt={`${name}, a client of SH Counselors`} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-amber-500" />
        <div>
          <div className="flex mb-1">
            {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className="text-amber-500 mr-1" fill="#f59e0b" />)}
          </div>
          <p className="font-semibold text-slate-800">{name}</p>
        </div>
      </div>
      <p className="text-slate-600 mb-4">{text}</p>
      <button className="mt-4 text-sm font-medium text-slate-700 border border-slate-300 rounded-md px-4 py-2 hover:bg-slate-50 transition-colors">
        Learn More
      </button>
    </div>;
}