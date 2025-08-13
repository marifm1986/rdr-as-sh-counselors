import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
export function Footer() {
  return <footer className="w-full bg-slate-900 text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <div className="mr-3">
              <img
                src="/Logo.webp"
                alt="SH Counselors Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">SH Counselors</h3>
              <p className="text-xs text-slate-400">Financial Solutions</p>
            </div>
          </div>
          <p className="text-slate-400 mb-4">
            Helping people achieve financial freedom through expert debt
            relief solutions since 2005.
          </p>

        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Debt Consolidation
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Debt Settlement
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Credit Counseling
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Financial Education
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Budget Planning
              </a>
            </li>
          </ul>
        </div>

      </div>
      <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>
          © {new Date().getFullYear()} SH Counselors. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-slate-300 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors">
            Disclaimer
          </a>
        </div>
      </div>
    </div>
  </footer>;
}