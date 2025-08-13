import { MenuIcon } from 'lucide-react';
import { useContactForm } from './ContactFormProvider';
export function Header() {
  const {
    openContactForm
  } = useContactForm();
  return <header className="w-full absolute top-0 left-0 z-10">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/Logo.webp" alt="SH Counselors Logo" className="h-12" />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            <a href="#" className="text-white hover:text-amber-200 font-medium">
              Home
            </a>
            <a href="#" className="text-white hover:text-amber-200 font-medium">
              Services
            </a>
            <a href="#" className="text-white hover:text-amber-200 font-medium">
              Results
            </a>
            <a href="#" className="text-white hover:text-amber-200 font-medium">
              Testimonials
            </a>
          </nav>
          <button onClick={openContactForm} className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition duration-300">
            Contact Us
          </button>
        </div>
        <div className="md:hidden">
          <button className="p-2 text-white">
            <MenuIcon size={24} />
          </button>
        </div>
      </div>
    </header>;
}
