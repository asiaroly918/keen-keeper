import React from 'react';
import Banner from '../../components/shared/Banner';
import Friends from '../../components/shared/Friends';
import TimelinePage from '../../components/shared/Timeline';
import FriendshipAnalytics from "../../components/shared/FriendshipAnalytics";
import friendsData from "../../data/friends.json";


// Create a resolved promise for React 19's use() hook
const friendsPromise = Promise.resolve(friendsData);

const Homepage = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Banner Section */}
      <Banner />
      
      {/* Friends Grid List */}
      <Friends friendsResponse={friendsPromise} /> 
      
      {/* Interaction Timeline Section */}
      <TimelinePage /> 
      
      {/* Friendship Analytics and Charts Section */}
      <FriendshipAnalytics /> 
    </div>        
  );
};

export default Homepage;