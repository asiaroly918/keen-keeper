import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const summaryStats = [  
    { value: 10, label: 'Total Friends' },
    { value: 3, label: 'On Track' },
    { value: 6, label: 'Need Attention' },
    { value: 12, label: 'Interactions This Month' }
  ];

  return (
    <section className="bg-[#f9fafb] pt-16 pb-12 px-4 font-sans w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748b] text-base md:text-lg max-w-2xl leading-relaxed mb-8 px-4">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>

        <button 
          onClick={() => navigate('/add-friend')}
          className="flex items-center gap-2 bg-[#284a3c] hover:bg-[#1e382d] text-white px-6 py-2.5 rounded-md font-semibold transition-all duration-200 mb-16 shadow-sm cursor-pointer"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add a Friend
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-2">
          {summaryStats.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center transition-transform duration-200 hover:scale-[1.02]"
            >
              <span className="text-4xl font-bold text-[#284a3c] mb-2">
                {item.value}
              </span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Banner;