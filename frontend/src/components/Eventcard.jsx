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

  //formats date to be shown on card to Sat, Nov 1, 9 AM
  const formatted = new Date(start_time).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: undefined,
    hour12: true,
  });

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* image container */}
        <div>
          <p>image</p>
        </div>
        <div>
          <h2>{short_title}</h2>
          <p>{formatted}</p>
          <p>{venue}</p>
          <p>price</p>
          <p>{status}</p>
        </div>
      </div>
    </>
  );
}
