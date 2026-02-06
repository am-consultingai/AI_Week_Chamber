import React, { useState } from 'react';
import { SYLLABUS_DATA } from './constants';
import { Session } from './types';
import Header from './components/Header';
import GroupSection from './components/GroupSection';
import InstructorSection from './components/InstructorSection';
import SessionModal from './components/SessionModal';
import BenefitsSection from './components/BenefitsSection';

const App: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [activeGroupColor, setActiveGroupColor] = useState<string>('blue');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSessionClick = (session: Session, color: string) => {
    setSelectedSession(session);
    setActiveGroupColor(color);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Add a small delay before clearing data for smooth exit animation
    setTimeout(() => {
        setSelectedSession(null);
    }, 200);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-12 max-w-6xl">
        
        <BenefitsSection />

        <div className="space-y-12">
            {SYLLABUS_DATA.map((group) => (
                <GroupSection 
                    key={group.id} 
                    group={group} 
                    onSessionClick={handleSessionClick} 
                />
            ))}
        </div>

        <InstructorSection />
      </main>

      <footer className="bg-white border-t border-slate-200 mt-20 py-12">
        <div className="container mx-auto px-4 text-center text-slate-500">
            <p className="text-sm">
                © {new Date().getFullYear()} סילבוס הכשרת AI מתקדמת. כל הזכויות שמורות.
            </p>
        </div>
      </footer>

      <SessionModal 
        session={selectedSession} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        color={activeGroupColor}
      />
      
    </div>
  );
};

export default App;