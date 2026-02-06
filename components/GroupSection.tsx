import React from 'react';
import { Group, Session } from '../types';
import { ArrowLeft, Zap, BarChart3, Bot } from 'lucide-react';

interface GroupSectionProps {
  group: Group;
  onSessionClick: (session: Session, groupColor: string) => void;
}

const GroupSection: React.FC<GroupSectionProps> = ({ group, onSessionClick }) => {
  
  const getIcon = (level: string) => {
    switch (level) {
      case 'Intermediate': return <Zap className="h-6 w-6 text-blue-500" />;
      case 'Advanced': return <BarChart3 className="h-6 w-6 text-purple-500" />;
      case 'Power Users': return <Bot className="h-6 w-6 text-emerald-500" />;
      default: return <Zap className="h-6 w-6" />;
    }
  };

  const getGradient = (color: string) => {
    switch(color) {
      case 'blue': return 'from-blue-50 to-white border-blue-100 hover:border-blue-300';
      case 'purple': return 'from-purple-50 to-white border-purple-100 hover:border-purple-300';
      case 'emerald': return 'from-emerald-50 to-white border-emerald-100 hover:border-emerald-300';
      default: return 'from-slate-50 to-white';
    }
  };

  const getBadgeColor = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-100 text-blue-700';
      case 'purple': return 'bg-purple-100 text-purple-700';
      case 'emerald': return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <section className="mb-16 last:mb-0">
      <div className="mb-8 border-b border-slate-200 pb-6">
        <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-xl bg-white shadow-sm border border-slate-100`}>
                {getIcon(group.level)}
            </div>
            <div>
                <h2 className="text-2xl font-bold text-slate-800">{group.title}</h2>
                <span className={`inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${getBadgeColor(group.color)}`}>
                    {group.subtitle}
                </span>
            </div>
        </div>
        <p className="text-slate-600 leading-relaxed max-w-4xl text-lg">
            {group.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {group.sessions.map((session) => (
          <div
            key={session.id}
            onClick={() => onSessionClick(session, group.color)}
            className={`
              group relative cursor-pointer rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-gradient-to-br
              ${getGradient(group.color)}
            `}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                  {session.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3">
                  {session.description.substring(0, 120)}...
                </p>
              </div>
              
              <div className="mt-6 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className={`flex items-center gap-1 ${getBadgeColor(group.color).replace('bg-', 'text-').replace('text-', '')}`}>
                  לפרטים נוספים
                  <ArrowLeft className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupSection;