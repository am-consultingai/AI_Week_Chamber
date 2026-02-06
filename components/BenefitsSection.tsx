import React from 'react';
import { Youtube, Pencil, Map, Presentation } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Youtube className="w-12 h-12 text-white" strokeWidth={1.5} />,
      bgClass: 'bg-teal-500',
      textClass: 'text-teal-600',
      title: 'הקלטות זמינות תמיד',
      subtitle: 'למידה בקצב שלכם',
      description: 'כלל המפגשים והסדנאות מתועדים וזמינים עבורכם בספריית הווידאו שלנו. כך תוכלו לחזור על החומר, להעמיק בנושאים מורכבים וללמוד בכל זמן ומכל מקום שנוח לכם, גם הרבה אחרי שהסדנה הסתיימה.'
    },
    {
      icon: <Pencil className="w-12 h-12 text-white" strokeWidth={1.5} />,
      bgClass: 'bg-fuchsia-500',
      textClass: 'text-fuchsia-600',
      title: 'למידה מבוססת התנסות',
      subtitle: 'כלים עוצמתיים בידיים שלכם',
      description: 'אנחנו מאמינים בלמידה דרך הרגליים. התכנית כוללת תרגול מעשי (Hands-on) על כלי ה-AI המתקדמים בשוק, כדי שתוכלו להטמיע את היכולות החדשות בעבודה היומיומית שלכם כבר מהרגע הראשון.'
    },
    {
      icon: <Map className="w-12 h-12 text-white" strokeWidth={1.5} />,
      bgClass: 'bg-sky-400',
      textClass: 'text-sky-500',
      title: 'מסלולים בבנייה אישית',
      subtitle: 'דיוק לצרכים המקצועיים שלכם',
      description: 'מערך הלמידה שלנו גמיש ומודולרי. תוכלו להרכיב לעצמכם את הנתיב הנכון עבורכם – החל מהכרת הכלים הבסיסיים ועד לבניית מערכות אוטונומיות – כדי להבטיח שהתוכן ישרת את המטרות הספציפיות שלכם.'
    },
    {
      icon: <Presentation className="w-12 h-12 text-white" strokeWidth={1.5} />,
      bgClass: 'bg-violet-600',
      textClass: 'text-violet-700',
      title: 'מפגשי AI LIVE וליווי',
      subtitle: 'מעטפת מקצועית מקצה לקצה',
      description: 'חוויית למידה חיה ואינטראקטיבית הכוללת הרצאות לייב וסדנאות עומק. המפגשים מלווים על ידי מומחים בתחום ומעניקים לכם ערכת כלים מקיפה שתומכת בכם לאורך כל הדרך, מצבירת הידע ועד ליישום בשטח.'
    }
  ];

  return (
    <section className="py-8 mb-12 border-b border-slate-100 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
            <div className={`${item.bgClass} p-5 rounded-2xl shadow-lg mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {item.icon}
            </div>
            <h3 className={`text-xl font-bold mb-1 ${item.textClass}`}>
                {item.title}
            </h3>
            <p className={`text-lg font-medium mb-3 ${item.textClass} opacity-90`}>
                {item.subtitle}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                {item.description}
            </p>
            </div>
        ))}
        </div>
    </section>
  );
};

export default BenefitsSection;