import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#110e0d] border border-brand-gold/20 shadow-2xl p-6 md:p-10 my-8 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6 shrink-0">
              <h3 className="text-2xl md:text-3xl font-serif text-brand-gold pr-8 leading-tight">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="text-brand-muted hover:text-brand-light transition-colors absolute top-6 right-6 md:top-8 md:right-8 bg-black/50 p-2 rounded-full border border-white/5 hover:border-brand-gold/30 hover:bg-brand-gold/10"
                aria-label="Закрыть"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content (Scrollable if needed) */}
            <div className="text-brand-light font-light leading-relaxed prose prose-invert prose-p:text-brand-muted/90 prose-p:mb-5 prose-strong:text-brand-light prose-strong:font-normal overflow-y-auto pr-2 custom-scrollbar flex-grow">
              {children}
            </div>

            {/* Footer / Border Decor */}
            <div className="mt-8 pt-6 border-t border-brand-light/10 text-center shrink-0">
              <button
                onClick={onClose}
                className="text-sm uppercase tracking-[0.2em] text-brand-muted hover:text-brand-gold transition-colors pb-1 border-b border-transparent hover:border-brand-gold"
              >
                Закрыть
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
