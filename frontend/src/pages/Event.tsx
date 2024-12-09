import React from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { events } from "../../utils/events";
import { FaJava } from "react-icons/fa";
import Footer from "../components/Footer";

function Event() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleNavigation = (id: number) => {
    navigate(`/events/${id}`);
  };
  const event = events.filter((event) => event.id === Number(id));
  const remainingEvents = events.filter((event) => event.id !== Number(id));
  return (
    <div>
      <Navbar isHome={false} />
      <div className="flex flex-col md:flex-row px-2 my-2 md:gap-2">
        <img
          src={event[0].image}
          className="h-[350px] md:w-1/2 w-full md:h-[500px] object-fill rounded-md"
        />
        <div className="">
          <div className="flex items-center justify-between mt-4 mx-2">
            <div className="flex flex-col">
              <p className="text-gray-500 font-body text-xs bg-slate-200 dark:bg-slate-500 dark:text-green-300 text-center rounded-md w-[105px]">
                {event[0].level}
              </p>
              <h1 className="font-body font-extrabold my-1 text-2xl dark:text-gray-300">
                {event[0].title}
              </h1>
            </div>
            <p className="text-gray-500 font-body text-sm">
              {event[0].duration}
            </p>
          </div>
          <div className="flex items-center justify-between mx-2 mt-1">
            <div className="">
              <h1 className="font-body text-lg font-bold dark:text-gray-300">
                Host
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <FaJava size={24} />
                <p className="text-gray-500 font-body text-sm pt-1">
                  {event[0].moderator}
                </p>
              </div>
            </div>
          </div>
          <div className="mx-2 mt-1">
            <h1 className="font-body text-lg mt-4 font-bold dark:text-gray-300">
              Co-Hosts
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <FaJava size={24} />
              <p className="text-gray-500 font-body text-sm pt-1">
                {event[0].cohost1}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaJava size={24} />
              <p className="text-gray-500 font-body text-sm pt-1">
                {event[0].cohost2}
              </p>
            </div>
          </div>
          <div className="mx-3 mt-4">
            <h1 className="font-body text-lg font-bold dark:text-gray-300">
              Attendees
            </h1>
            <p className="text-gray-500 font-body text-sm">
              {event[0].attendees}
            </p>
          </div>
          <div className="mx-3 mt-4">
            <h1 className="font-body text-lg font-bold dark:text-gray-300">
              Topics
            </h1>
            <div className="flex gap-2 items-center flex-wrap">
              {event[0].topics.map((topic, index) => (
                <p
                  key={index}
                  className="text-gray-500 bg-gray-200 dark:bg-gray-600 dark:text-gray-200 p-2 rounded-md shadow-sm font-body text-sm mt-2"
                >
                  {topic}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-6 mx-2">
            <button className="bg-black text-white border-black border-[1px] hover:bg-white dark:hover:bg-gray-700 dark:border-none dark:hover:text-gray-200 hover:text-black transition-all duration-150 ease-in px-8 py-2 gap-2 rounded-md text-lg flex items-center justify-center">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="mx-2">
        <h1 className="font-body text-xl font-bold mt-4 mx-2">Description</h1>
        <p className="font-body text-gray-600 mx-2 py-1 dark:text-gray-400">
          {event[0].description}
        </p>
      </div>
      <div className="mx-2">
        <h1 className="font-body text-xl font-bold mt-4 mx-2">
          Similar Events
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:gap-2 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4 mx-2">
          {remainingEvents.map((event) => (
            <div
              className="p-2 cursor-pointer hover:scale-95 ease-in duration-300 transition-all hover:shadow-lg rounded-md"
              onClick={() => handleNavigation(event.id)}
            >
              <img
                src={event.image}
                className="w-full h-[250px] sm:h-[200px] md:h-[300px] object-fill rounded-md"
              />
              <div className="">
                <div className="h-[150px]">
                  <p className="text-gray-400 font-body text-sm mt-1">
                    {event.level}
                  </p>
                  <h1 className="font-body font-extrabold my-1 text-lg">
                    {event.title}
                  </h1>
                  <p className="font-body w-[95%] text-gray-600 dark:text-gray-400">
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
      <Footer />
    </div>
  );
}

export default Event;
