import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const FriendshipAnalytics = () => {
  const data = [
    { name: 'Tom', 'Days Since Contact': 3, Goal: 7 },
    { name: 'Sarah', 'Days Since Contact': 12, Goal: 14 },
    { name: 'Marcus', 'Days Since Contact': 35, Goal: 30 },
  ];

  const statusData = [
    { name: 'On-track', value: 1, color: '#284a3c' },
    { name: 'Almost Due', value: 1, color: '#f59e0b' },
    { name: 'Overdue', value: 1, color: '#ef4444' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Friendship Analytics</h2>
      <p className="text-sm text-gray-500 mb-8">Visual insights into your communication patterns and goals.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-md font-bold text-slate-700 mb-4">Contact Gap vs Goal (Days)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip />
                <Bar dataKey="Days Since Contact" fill="#ef4444" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Goal" fill="#284a3c" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <h3 className="text-md font-bold text-slate-700 mb-2">Status Distribution</h3>
          <div className="h-56 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={statusData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-2">
            {statusData.map(status => (
              <div key={status.name} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: status.color }}></span>
                <span className="text-xs font-semibold text-gray-600">{status.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendshipAnalytics;