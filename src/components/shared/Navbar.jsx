import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    {
      name: 'Home',
      path: '/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    },
    {
      name: 'Timeline',
      path: '/timeline',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    },
    {
      name: 'Analytics',
      path: '/analytics',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    }
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 sm:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-4 font-sans sticky top-0 z-50 shadow-sm">
      
      <Link to="/" className="text-xl tracking-tight select-none cursor-pointer">
        <span className="font-bold text-slate-900">Keen</span>
        <span className="font-semibold text-[#284a3c]">Keeper</span>
      </Link>

      <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
        <div className="flex items-center gap-1.5 sm:gap-3">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#284a3c] text-white shadow-sm'
                    : 'text-slate-500 hover:text-[#284a3c] hover:bg-slate-50'
                }`
              }
            >
              {item.icon}
              <span className="hidden sm:inline">{item.name}</span>
            </NavLink>
          ))}
        </div>

        <Link 
          to="/add-friend" 
          className="bg-[#284a3c] hover:bg-[#1d352b] text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm flex items-center gap-1.5"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span className="hidden xs:inline">Add Friend</span>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;