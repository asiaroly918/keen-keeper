import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AddFriend = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    picture: '',
    goal: '7',
    bio: '',
    tags: ''
  });
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Name and Email are required!");
      return;
    }

    // 1. Create a new friend object
    const newFriend = {
      id: Date.now(), // Unique temporary ID
      name: formData.name,
      email: formData.email,
      picture: formData.picture || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&fit=crop", // Fallback avatar
      status: "On-track",
      days_since_contact: 0,
      goal: parseInt(formData.goal),
      next_due_date: new Date(Date.now() + formData.goal * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : ["Friend"],
      bio: formData.bio || "No bio added yet."
    };

    // 2. Load and update localStorage or state (This is a simplified way for local handling)
    const existingCustomFriends = localStorage.getItem('custom_friends');
    const customFriendsList = existingCustomFriends ? JSON.parse(existingCustomFriends) : [];
    customFriendsList.push(newFriend);
    localStorage.setItem('custom_friends', JSON.stringify(customFriendsList));

    // Show toast
    setToast(`${formData.name} added successfully!`);

    // 3. Redirect back to home after 1.5s
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12 font-sans">
      <Link to="/" className="text-[#284a3c] font-semibold mb-6 inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Home
      </Link>

      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Add a New Friend</h2>
        <p className="text-sm text-gray-500 mb-6">Keep track of your relationship with a new contact.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name *</label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full bg-slate-50 border border-gray-150 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#284a3c]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address *</label>
            <input 
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              className="w-full bg-slate-50 border border-gray-150 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#284a3c]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Profile Image URL (Optional)</label>
            <input 
              type="url" 
              name="picture"
              value={formData.picture}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full bg-slate-50 border border-gray-150 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#284a3c]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Contact Goal (Days) *</label>
            <select 
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-gray-150 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#284a3c] cursor-pointer"
            >
              <option value="7">Every 7 Days (Weekly)</option>
              <option value="14">Every 14 Days (Bi-weekly)</option>
              <option value="30">Every 30 Days (Monthly)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Tags (comma separated)</label>
            <input 
              type="text" 
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="College, Best Friend, Gym"
              className="w-full bg-slate-50 border border-gray-150 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#284a3c]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Brief Bio</label>
            <textarea 
              name="bio"
              rows="3"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Write a brief note about this friend..."
              className="w-full bg-slate-50 border border-gray-150 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#284a3c] resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full py-3.5 bg-[#284a3c] hover:opacity-90 text-white font-bold rounded-xl text-sm shadow-md transition cursor-pointer"
          >
            Save Friend
          </button>
        </form>
      </div>

      {toast && (
        <div className="fixed bottom-8 right-8 bg-slate-900 text-white px-6 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 z-50 transition-all animate-bounce">
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>
          <span className="text-sm font-semibold">{toast}</span>
        </div>
      )}
    </div>
  );
};

export default AddFriend;