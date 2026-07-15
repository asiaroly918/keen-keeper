import React, { useState, useEffect } from 'react';

const TimelinePage = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const staticEntries = [
      { id: 1, type: 'Call', person: 'Tom Baker', date: 'Mar 29, 2026' },
      { id: 2, type: 'Text', person: 'Sarah Chen', date: 'Mar 28, 2026' },
      { id: 3, type: 'Video', person: 'Olivia Martinez', date: 'Mar 26, 2026' },
      { id: 4, type: 'Video', person: 'Aisha Patel', date: 'Mar 23, 2026' },
      { id: 5, type: 'Text', person: 'Sarah Chen', date: 'Mar 21, 2026' },
      { id: 6, type: 'Call', person: 'Marcus Johnson', date: 'Mar 19, 2026' }
    ];

    const savedHistory = localStorage.getItem('timeline_history');
    if (savedHistory) {
      const parsed = JSON.parse(savedHistory);
      
      const formattedSaved = parsed.map(item => ({
        id: item.id,
        type: item.type,
        person: item.title.split(' with ')[1] || 'Friend',
        date: item.date
      }));

      const combined = [...formattedSaved, ...staticEntries];
      const uniqueEntries = Array.from(new Map(combined.map(item => [item.id, item])).values());
      
      setTimelineData(uniqueEntries);
    } else {
      setTimelineData(staticEntries);
    }
  }, []);

  const filteredEntries = filter === 'All' 
    ? timelineData 
    : timelineData.filter(entry => entry.type === filter);

  const getIcon = (type) => {
    if (type === 'Call') {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    }
    if (type === 'Text') {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    }
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Timeline</h1>
            <p className="text-sm text-gray-500 mt-1">A history of interactions with your friends.</p>
          </div>

          <div className="relative">
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none w-48 bg-white border border-gray-200 text-slate-600 px-4 py-2.5 pr-10 rounded-xl text-sm font-semibold shadow-sm focus:outline-none focus:border-[#284a3c] cursor-pointer"
            >
              <option value="All">All Interactions</option>
              <option value="Call">Calls</option>
              <option value="Text">Texts</option>
              <option value="Video">Videos</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredEntries.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
              <p className="text-gray-400 text-sm">No interactions matched your filter.</p>
            </div>
          ) : (
            filteredEntries.map((entry) => (
              <div 
                key={entry.id} 
                className="bg-white rounded-2xl p-5 flex items-center border border-gray-100 shadow-sm transition-transform duration-200 hover:scale-[1.01]"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-emerald-50 text-[#284a3c] rounded-xl mr-4 shrink-0">
                  {getIcon(entry.type)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-800 text-sm font-semibold">
                    <span className="text-[#284a3c]">{entry.type}</span> with {entry.person}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{entry.date}</p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default TimelinePage;