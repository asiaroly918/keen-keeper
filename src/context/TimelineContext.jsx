import React, { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {

  const [timeline, setTimeline] = useState([
    {
      id: 1,
      type: "Meetup",
      friendName: "Tom Baker",
      date: "March 28, 2026",
    },
    {
      id: 2,
      type: "Text",
      friendName: "Sarah Chen",
      date: "March 28, 2026",
    },
    {
      id: 3,
      type: "Meetup",
      friendName: "Olivia Martinez",
      date: "March 26, 2026",
    },
    {
      id: 4,
      type: "Video",
      friendName: "Aisha Patel",
      date: "March 23, 2026",
    },
    {
      id: 5,
      type: "Meetup",
      friendName: "Sarah Chen",
      date: "March 22, 2026",
    },
    {
      id: 6,
      type: "Call",
      friendName: "Marcus Johnson",
      date: "March 19, 2026",
    },
    {
      id: 7,
      type: "Meetup",
      friendName: "Aisha Patel",
      date: "March 17, 2026",
    },
    {
      id: 8,
      type: "Text",
      friendName: "Olivia Martinez",
      date: "March 15, 2026",
    },
    {
      id: 9,
      type: "Call",
      friendName: "Alex Johnson",
      date: "March 12, 2026",
    },
    {
      id: 10,
      type: "Call",
      friendName: "Sarah Chen",
      date: "March 10, 2026",
    },
    {
      id: 11,
      type: "Video",
      friendName: "Marcus Johnson",
      date: "March 6, 2026",
    },
    {
      id: 12,
      type: "Video",
      friendName: "Ryan O'Brien",
      date: "February 24, 2026",
    },
  ]);


  const addTimelineEntry = (type, friendName) => {

    const today = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });


    const newEntry = {
      id: Date.now(),
      type,
      friendName,
      date: today,
    };


    setTimeline((prev) => [
      newEntry,
      ...prev
    ]);

  };


  return (
    <TimelineContext.Provider
      value={{
        timeline,
        addTimelineEntry,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );

};


export const useTimeline = () => {
  return useContext(TimelineContext);
};