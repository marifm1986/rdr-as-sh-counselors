import { useEffect } from 'react';
import { CheckCircleIcon, XIcon } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export function SuccessModal({
  isOpen,
  onClose,
  message = "Thank you for your submission! A debt relief specialist will contact you shortly."
}: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
      
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto';
      };
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-green-600 flex items-center">
            <CheckCircleIcon size={28} className="mr-3" />
            Success!
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 text-slate-500 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          >
            <XIcon size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircleIcon size={32} className="text-green-600" />
            </div>
            
            <p className="text-slate-700 text-lg mb-6 leading-relaxed">
              {message}
            </p>
            
            <div className="space-y-3">
              <p className="text-sm text-slate-600">
                We'll review your information and get back to you within 24 hours.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>Next Steps:</strong> Our debt relief specialist will call you to discuss your personalized debt relief options.
                </p>
              </div>
            </div>
            
            <button 
              onClick={onClose}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
