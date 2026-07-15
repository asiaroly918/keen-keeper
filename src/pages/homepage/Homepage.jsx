import React from 'react';
import Banner from '../../components/shared/Banner';
import Friends from '../../components/shared/Friends';
import TimelinePage from '../../components/shared/Timeline';
import FriendshipAnalytics from '../../components/shared/Friendship Analytics ';

// Fetching local JSON data
const res = fetch('/friends.json').then(res => res.json());

const Homepage = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Banner Section */}
      <Banner />
      
      {/* Friends Grid List (Passing promise to use() hook in Friends component) */}
      <Friends friendsResponse={res} /> 
      
      {/* Interaction Timeline Section */}
      <TimelinePage /> 
      
      {/* Friendship Analytics and Charts Section */}
      <FriendshipAnalytics /> 
    </div>        
  );
};

export default Homepage;