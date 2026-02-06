import React from 'react';

const InstructorSection: React.FC = () => {
  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm mt-20 relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 left-0 -ml-10 -mt-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
        {/* Image */}
        <div className="shrink-0">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full opacity-10 blur-lg transform translate-y-2"></div>
                <img 
                    src="https://github.com/israelichamberit-cmd/images/blob/main/avishay_casual_nw.png?raw=true" 
                    alt="אבישי מרון" 
                    className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-xl bg-slate-50"
                />
            </div>
        </div>

        {/* Content */}
        <div className="text-center md:text-right flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">על המרצה</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                אבישי מרון עוסק ב"אילוף" בינה מלאכותית מזה למעלה מעשור ומביא עמו ניסיון עשיר וייחודי לחזית הטכנולוגיה. כמנכ"ל ומייסד AM Consulting, אבישי מלווה ארגונים בתהליכי אימוץ והטמעה של פתרונות בינה מלאכותית להעצמת היכולות העסקיות שלהם. אבישי הוא חתום על למעלה מ-10 פטנטים בתחום ה-AI ומתמחה בהנגשת רעיונות מורכבים של בינה מלאכותית לכל קהל, תוך הפיכת הטכנולוגיה מכלי מורכב לשותף עבודה פרקטי ויומיומי.
            </p>
            
            <a 
                href="https://www.linkedin.com/in/avishay-meron/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-slate-700 font-semibold hover:text-blue-700 transition-all group bg-slate-50 hover:bg-blue-50 px-5 py-2.5 rounded-full border border-slate-200 hover:border-blue-200"
            >
                <img 
                    src="https://github.com/israelichamberit-cmd/images/blob/main/linkedin.png?raw=true" 
                    alt="LinkedIn" 
                    className="w-6 h-6 group-hover:scale-110 transition-transform"
                />
                <span>התחבר עם אבישי בלינקדאין</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;