import React from 'react';
import { useLoaderData, useParams, Link } from 'react-router-dom';

const FriendsDetail = () => {
  const { id } = useParams();
  const allFriends = useLoaderData();

  const friend = allFriends?.find(f => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="max-w-md mx-auto my-20 text-center font-sans">
        <p className="text-red-500 font-bold mb-4">Friend Not Found!</p>
        <Link to="/" className="text-[#284a3c] underline text-sm font-semibold">Return to Dashboard</Link>
      </div>
    );
  }

  const getStatusStyle = (status) => {
    if (status === "On-track") return "bg-emerald-100 text-emerald-700 border-emerald-200";
    if (status === "Almost Due") return "bg-amber-100 text-amber-700 border-amber-200";
    return "bg-red-100 text-red-700 border-red-200";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-sans min-h-[calc(100vh-16rem)] bg-slate-50/50">
      <div className="mb-6">
        <Link to="/" className="text-[#284a3c] hover:underline inline-flex items-center gap-2 text-sm font-semibold">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm text-center flex flex-col items-center">
            <img 
              src={friend.picture} 
              alt={friend.name} 
              className="w-24 h-24 rounded-full object-cover border-4 border-slate-100 mb-4 shadow-sm"
            />
            <h2 className="text-xl font-bold text-slate-800">{friend.name}</h2>
            
            <div className="flex flex-col items-center gap-2 mt-2">
              <span className={`px-3 py-0.5 text-xs font-bold uppercase rounded-full border ${getStatusStyle(friend.status)}`}>
                {friend.status}
              </span>
              <div className="flex flex-wrap gap-1 justify-center">
                {friend.tags?.map(tag => (
                  <span key={tag} className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm italic text-gray-500 mt-5 border-t border-dashed border-gray-100 pt-4 w-full">
              "{friend.bio}"
            </p>
            <p className="text-xs text-gray-400 mt-3 font-medium">{friend.email}</p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-150 shadow-sm space-y-2">
            <button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 border border-gray-200 rounded-xl text-xs font-bold text-slate-700 transition cursor-pointer">
              📅 Snooze 2 Weeks
            </button>
            <button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 border border-gray-200 rounded-xl text-xs font-bold text-slate-700 transition cursor-pointer">
              📁 Archive
            </button>
            <button className="w-full py-2.5 bg-red-50 hover:bg-red-100 border border-red-100 rounded-xl text-xs font-bold text-red-600 transition cursor-pointer">
              🗑️ Delete Contact
            </button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm text-center">
              <span className="block text-3xl font-black text-slate-800">{friend.days_since_contact}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1.5 block">Days Since Contact</span>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm text-center">
              <span className="block text-3xl font-black text-slate-800">{friend.goal}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1.5 block">Goal (Days)</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm text-center flex flex-col justify-center items-center">
              <span className="block text-md font-bold text-slate-700">{friend.next_due_date}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1.5 block">Next Due</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-150 shadow-sm flex justify-between items-center">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Relationship Goal</h3>
              <p className="text-sm text-slate-700 font-medium">Connect every <span className="font-bold text-slate-900">{friend.goal} days</span></p>
            </div>
            <button className="px-3.5 py-1.5 border border-gray-200 hover:bg-slate-50 rounded-lg text-xs font-bold text-slate-600 transition cursor-pointer">
              Edit
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Quick Check-in</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 border border-gray-200 rounded-xl transition group cursor-pointer">
                <span className="text-xl group-hover:scale-110 transition-transform mb-1">📞</span>
                <span className="text-xs font-bold text-slate-600">Call</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 border border-gray-200 rounded-xl transition group cursor-pointer">
                <span className="text-xl group-hover:scale-110 transition-transform mb-1">💬</span>
                <span className="text-xs font-bold text-slate-600">Text</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 border border-gray-200 rounded-xl transition group cursor-pointer">
                <span className="text-xl group-hover:scale-110 transition-transform mb-1">☕</span>
                <span className="text-xs font-bold text-slate-600">Meetup</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendsDetail;