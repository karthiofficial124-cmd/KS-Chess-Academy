import React, { createContext, useContext, useState, useEffect } from 'react';
import { X, MessageCircle, Mail, Copy, Check, ExternalLink, HelpCircle } from 'lucide-react';
import { ACADEMY_DATA, getWhatsAppLink } from '../data/academyData';

const EnquiryContext = createContext(null);

export const EnquiryProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: 'General Enquiry',
    badge: 'Admissions & Queries',
    message: 'Hello KS Chess Academy, I would like to enquire about chess classes. Please share details.',
    emailSubject: 'Enquiry - KS Chess Academy',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const openEnquiry = (data = {}) => {
    setModalData({
      title: data.title || 'Admissions Enquiry',
      badge: data.badge || 'KS Chess Academy',
      message: data.message || 'Hello KS Chess Academy, I would like to enquire about chess classes. Please share details.',
      emailSubject: data.emailSubject || `Enquiry: ${data.title || 'Chess Classes'}`,
    });
    setCopiedEmail(false);
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeEnquiry();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(ACADEMY_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const whatsappHref = getWhatsAppLink('general', modalData.message);
  const mailtoHref = `mailto:${ACADEMY_DATA.email}?subject=${encodeURIComponent(
    modalData.emailSubject
  )}&body=${encodeURIComponent(modalData.message)}`;

  return (
    <EnquiryContext.Provider value={{ openEnquiry, closeEnquiry }}>
      {children}

      {/* Enquiry Modal with 2 Options: WhatsApp and Email */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeEnquiry}
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-modal-title"
        >
          <div 
            className="bg-[#0D1117] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-white transform transition-all animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeEnquiry}
              className="absolute top-5 right-5 p-2 rounded-xl text-[#A8AFB8] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F2D58A] text-[11px] font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{modalData.badge}</span>
            </div>

            {/* Title & Description */}
            <h3 id="enquiry-modal-title" className="text-2xl font-cinzel font-bold text-white mb-2">
              {modalData.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#A8AFB8] leading-relaxed mb-6 font-light">
              Choose your preferred channel below to connect directly with our coaching team.
            </p>

            {/* Two Options: WhatsApp & Email */}
            <div className="space-y-4">
              
              {/* Option 1: WhatsApp */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeEnquiry}
                className="group flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#161D26] hover:bg-[#1C2633] border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-200 shadow-md hover:shadow-xl text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#F2D58A] transition-colors">
                      Enquire on WhatsApp
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#25D366]/20 text-[#25D366] shrink-0">
                      Fastest Reply
                    </span>
                  </div>
                  <p className="text-xs text-[#A8AFB8] font-light leading-relaxed">
                    Direct instant chat for batch timings, fee details, and quick questions.
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#A8AFB8] group-hover:text-[#F2D58A] shrink-0 mt-1 transition-colors" />
              </a>

              {/* Option 2: Email */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#161D26] hover:bg-[#1C2633] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-200 shadow-md text-left">
                <a
                  href={mailtoHref}
                  onClick={closeEnquiry}
                  className="group flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#F2D58A] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#F2D58A] transition-colors">
                        Enquire via Email
                      </span>
                      <ExternalLink className="w-4 h-4 text-[#A8AFB8] group-hover:text-[#F2D58A] shrink-0 transition-colors" />
                    </div>
                    <p className="text-xs text-[#A8AFB8] font-light leading-relaxed break-all">
                      {ACADEMY_DATA.email}
                    </p>
                  </div>
                </a>

                {/* Copy Email Helper */}
                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#A8AFB8]">
                  <span className="text-[11px]">Need to write from another device?</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#07090C] hover:bg-white/10 text-[#F2D58A] hover:text-white border border-white/10 transition-colors cursor-pointer text-xs"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#25D366]" />
                        <span className="text-[#25D366]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Dismiss */}
            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <button
                type="button"
                onClick={closeEnquiry}
                className="text-xs font-semibold text-[#A8AFB8] hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};
