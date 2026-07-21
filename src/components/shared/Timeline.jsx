import React from "react";
import { useTimeline } from "../../context/TimelineContext";

const Timeline = () => {
  const { timeline } = useTimeline();

  const getIcon = (type) => {
    if (type === "Call") return "📞";
    if (type === "Text") return "💬";
    if (type === "Video") return "📹";
    if (type === "Meetup") return "🤝";

    return "📌";
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-10 px-4">

      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Timeline
        </h1>


        {/* Filter */}
        <select
          className="mb-6 border border-gray-200 bg-white rounded-md px-3 py-2 text-sm text-gray-600 outline-none"
        >
          <option>Filter timeline</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
          <option>Meetup</option>
        </select>


        {/* Timeline List */}
        <div className="space-y-3">

          {timeline.map((item) => (

            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-lg px-5 py-3 shadow-sm flex items-center gap-4 hover:shadow-md transition"
            >

              {/* Icon */}
              <div className="text-xl">
                {getIcon(item.type)}
              </div>


              {/* Content */}
              <div>
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">
                    {item.type}
                  </span>

                  <span className="text-gray-500">
                    {" "}with {item.friendName}
                  </span>
                </p>


                <p className="text-xs text-gray-400 mt-1">
                  {item.date}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};


export default Timeline;