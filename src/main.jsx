import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Rootlayout from './layout/Rootlayout';
import Home from './pages/homepage/Homepage';
import FriendsDetail from './layout/Friendsdetail';
import AddFriend from './components/shared/AddFriend';
import Timeline from './components/shared/Timeline';
import FriendshipAnalytics from './components/shared/FriendshipAnalytics';

import { TimelineProvider } from './context/TimelineContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <TimelineProvider>

      <HashRouter>
        <Routes>

          <Route path="/" element={<Rootlayout />}>

            <Route index element={<Home />} />

            <Route 
              path="friend/:id" 
              element={<FriendsDetail />} 
            />

            <Route 
              path="add-friend" 
              element={<AddFriend />} 
            />

            <Route 
              path="timeline" 
              element={<Timeline />} 
            />

            <Route 
              path="analytics" 
              element={<FriendshipAnalytics />} 
            />

          </Route>

        </Routes>
      </HashRouter>

    </TimelineProvider>

  </React.StrictMode>
);