import React, { useEffect } from 'react';
import { Session } from '../types';
import { X, CheckCircle2, BookOpen } from 'lucide-react';

interface SessionModalProps {
  session: Session | null;
  isOpen: boolean;
  onClose: () => void;
  color: string;
}

const SessionModal: React.FC<SessionModalProps> = ({ session, isOpen, onClose, color }) => {
  // Prevent body scroll when modal is open
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

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !session) return null;

  // Dynamic color classes map
  const colorMap: Record<string, string> = {
    blue: 'text-blue-600 bg-blue-50 border-blue-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-200',
    emerald: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  };

  const iconColorMap: Record<string, string> = {
    blue: 'text-blue-500',
    purple: 'text-purple-500',
    emerald: 'text-emerald-500',
  };

  const buttonColorMap: Record<string, string> = {
    blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    purple: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500',
    emerald: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500',
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      aria-labelledby="modal-title" 
      role="dialog" 
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className={`border-b px-6 py-5 ${colorMap[color].split(' ')[2]}`}>
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold leading-6 text-slate-900 pr-2" id="modal-title">
              {session.title}
            </h3>
            <button
              type="button"
              className="rounded-md p-1 text-slate-400 hover:text-slate-500 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              onClick={onClose}
            >
              <span className="sr-only">סגור</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6 max-h-[70vh] overflow-y-auto">
          
          <div className="mb-8">
            <h4 className={`text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-2 ${iconColorMap[color]}`}>
              <BookOpen className="h-4 w-4" />
              על המפגש
            </h4>
            <p className="text-slate-600 leading-relaxed text-lg">
              {session.description}
            </p>
          </div>

          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wide mb-3 flex items-center gap-2 ${iconColorMap[color]}`}>
              <CheckCircle2 className="h-4 w-4" />
              מיומנויות נרכשות
            </h4>
            <ul className="space-y-3">
              {session.skills.map((skill, index) => (
                <li key={index} className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <span className={`mt-1.5 h-2 w-2 rounded-full flex-shrink-0 ${buttonColorMap[color].split(' ')[0]}`} />
                  <span className="text-slate-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 flex flex-row-reverse">
          <button
            type="button"
            className={`inline-flex w-full justify-center rounded-lg px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto transition-all ${buttonColorMap[color]}`}
            onClick={onClose}
          >
            סגור
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionModal;