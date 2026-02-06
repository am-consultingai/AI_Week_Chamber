export interface Session {
  id: string;
  title: string;
  skills: string[];
  description: string;
  shortDescription?: string; // Derived for the card view
}

export interface Group {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  level: 'Intermediate' | 'Advanced' | 'Power Users';
  color: string; // Tailwind color class prefix (e.g., 'blue', 'purple')
  sessions: Session[];
}