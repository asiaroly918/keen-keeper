import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';

const Rootlayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30 font-sans">
      
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-[#1e3d30] text-gray-300 py-12 px-6 sm:px-10 mt-auto border-t border-emerald-900/20">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Keen<span className="text-emerald-400">Keeper</span>
            </h2>
            <p className="text-xs text-emerald-100/70 mt-2 max-w-md mx-auto leading-relaxed">
              Your personal circle of meaningful connections. Browse, keep, and nurture the relationships that matter most.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300/60 block">Social Links</span>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-emerald-800/50 hover:bg-emerald-700/50 flex items-center justify-center text-white transition text-sm">🌐</a>
              <a href="#" className="w-8 h-8 rounded-full bg-emerald-800/50 hover:bg-emerald-700/50 flex items-center justify-center text-white transition text-sm">👤</a>
              <a href="#" className="w-8 h-8 rounded-full bg-emerald-800/50 hover:bg-emerald-700/50 flex items-center justify-center text-white transition text-sm">🐦</a>
            </div>
          </div>

          <div className="pt-8 border-t border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-emerald-100/50">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex gap-4 font-medium">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookies</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Rootlayout;