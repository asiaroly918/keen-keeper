import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Rootlayout from './layout/Rootlayout';
import Home from './components/shared/Home'; // (তোমার হোম কম্পোনেন্টের পাথ দিন)
import FriendsDetail from './layout/FriendsDetail';
import AddFriend from './components/shared/AddFriend';
import Timeline from './components/shared/Timeline';
import FriendshipAnalytics from './components/shared/Friendship Analytics ';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path="friend/:id" element={<FriendsDetail />} />
          <Route path="add-friend" element={<AddFriend />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="analytics" element={<FriendshipAnalytics />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);