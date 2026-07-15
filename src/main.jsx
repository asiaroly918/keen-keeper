import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rootlayout from './layout/Rootlayout';
import Homepage from './pages/homepage/Homepage';
import FriendshipAnalytics from './components/shared/Friendship Analytics ';
import Timeline from './components/shared/Timeline';
import Friends from './components/shared/Friends';
import FriendsDetail from './layout/FriendsDetail';
import AddFriend from './components/shared/AddFriend';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },   
      {
        path: "friends",
        element: <Friends />,
        loader: () => fetch('/friends.json').then(res => res.json()),
      },
      { 
        path: "friend/:id",
        element: <FriendsDetail />,
        loader: () => fetch('/friends.json').then(res => res.json()),
      },

      {
        path: "add-friend",
        element: <AddFriend />,
      },

      {
        path: "timeline",
        element: <Timeline />,
      },
      { 
        path: "analytics",
        element: <FriendshipAnalytics />,
      },
      {
        path: "footer",
        element: (
          <footer>
            <h1>Footer</h1>
            <p>This is the footer section.</p>
          </footer>
        ),
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

export default router;