import React from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useTimeline } from '../context/TimelineContext';
import friendsData from "../data/friends.json";

const FriendsDetail = () => {
  const { id } = useParams();
  const { addTimelineEntry } = useTimeline();

  const friend = friendsData.find((f) => String(f.id) === String(id)) || friendsData[0];

  const handleQuickCheckIn = (type) => {
    addTimelineEntry(type, friend.name);
    toast.success(`Logged ${type} with ${friend.name}!`, {
      style: { background: '#284a3c', color: '#fff' },
    });
  };

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen py-10 px-4 font-sans text-slate-800">
      <Toaster position="top-center" />
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm flex flex-col items-center">
              <img
                src={friend?.picture}
                alt={friend?.name}
                className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-slate-100"
              />
              <h2 className="text-xl font-bold text-slate-900 mb-1">{friend?.name}</h2>
              <div className="flex flex-wrap gap-1.5 justify-center mb-3">
                <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase">
                  {friend?.status || 'Overdue'}
                </span>
                {friend?.tags?.map((tag) => (
                  <span key={tag} className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 italic mb-1">"{friend?.bio || 'Great friend'}"</p>
              <p className="text-[11px] text-gray-400">Email: {friend?.email}</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100 overflow-hidden text-xs font-semibold text-gray-700">
              <button className="w-full py-3.5 px-4 text-center hover:bg-gray-50 flex items-center justify-center gap-2">
                <span>⏰</span> Snooze 2 Weeks
              </button>
              <button className="w-full py-3.5 px-4 text-center hover:bg-gray-50 flex items-center justify-center gap-2">
                <span>📁</span> Archive
              </button>
              <button className="w-full py-3.5 px-4 text-center hover:bg-gray-50 text-red-500 flex items-center justify-center gap-2">
                <span>🗑️</span> Delete
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h3 className="text-2xl font-bold text-slate-800">{friend?.days_since_contact}</h3>
                <p className="text-[11px] text-gray-400 mt-1">Days Since Contact</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h3 className="text-2xl font-bold text-slate-800">{friend?.goal}</h3>
                <p className="text-[11px] text-gray-400 mt-1">Goal (Days)</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h3 className="text-xl font-bold text-slate-800">{friend?.next_due_date}</h3>
                <p className="text-[11px] text-gray-400 mt-1">Next Due</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-700 mb-1">Relationship Goal</h4>
                <p className="text-xs text-gray-500">
                  Connect every <span className="font-bold text-slate-800">{friend?.goal} days</span>
                </p>
              </div>
              <button className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">Edit</button>
            </div>

            {/* Quick Check-In Section */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-xs font-bold text-slate-700 mb-4">Quick Check-In</h4>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => handleQuickCheckIn('Call')}
                  className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-emerald-50 rounded-xl transition-colors border border-gray-100"
                >
                  <span className="text-lg mb-1">📞</span>
                  <span className="text-xs font-semibold text-gray-700">Call</span>
                </button>
                <button
                  onClick={() => handleQuickCheckIn('Text')}
                  className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-emerald-50 rounded-xl transition-colors border border-gray-100"
                >
                  <span className="text-lg mb-1">💬</span>
                  <span className="text-xs font-semibold text-gray-700">Text</span>
                </button>
                <button
                  onClick={() => handleQuickCheckIn('Video')}
                  className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-emerald-50 rounded-xl transition-colors border border-gray-100"
                >
                  <span className="text-lg mb-1">📹</span>
                  <span className="text-xs font-semibold text-gray-700">Video</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetail;