import React from "react";
import { sampleEvents } from "./data/sampleEvents.js";

export default function Eventcard({ event }) {
  //function receives event object, stores it in a variable named event

  const {
    short_title,
    long_title,
    event_image,
    start_time,
    end_time,
    venue,
    tiers,
    status,
  } = event;

  return (
    <div>
      <p>{short_title}</p>
      <p>{long_title}</p>
    </div>
  );
}
