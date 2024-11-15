import React from "react";
import { events } from "../../utils/events";
import { FaJava } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();

  const handleNavigation = (id: number) => {
    navigate(`/events/${id}`);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold font-body p-1">Events</h1>
      <div className="grid grid-cols-1 gap-4 sm:gap-2 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4 mx-2">
        {events.map((event) => (
          <div
            className="p-2 cursor-pointer hover:scale-95 ease-in duration-300 transition-all hover:shadow-lg rounded-md"
            onClick={() => handleNavigation(event.id)}
          >
            <img
              src={event.image}
              className="w-full h-[250px] sm:h-[200px] object-fill rounded-md"
            />
            <div className="">
              <div className="h-[150px]">
                <p className="text-gray-400 font-body text-sm mt-1">
                  {event.level}
                </p>
                <h1 className="font-body font-extrabold my-1 text-lg">
                  {event.title}
                </h1>
                <p className="font-body w-[95%] text-gray-600">
                  {event.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 mx-2">
                <div className="flex items-center gap-2">
                  <FaJava size={24} />
                  <p className="text-gray-500 font-body text-sm">
                    {event.moderator}
                  </p>
                </div>
                <p className="text-gray-500 font-body text-sm">
                  {event.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
