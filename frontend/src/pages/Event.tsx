import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { events } from "../../utils/events";

function Event() {
  const { id } = useParams();
  const event = events.filter((event) => event.id === Number(id));
  return (
    <div>
      <Navbar isHome={false} />
      <p>Event id - </p>
    </div>
  );
}

export default Event;
