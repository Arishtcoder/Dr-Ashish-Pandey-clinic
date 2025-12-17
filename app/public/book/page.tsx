"use client";

import { useState } from "react";

export default function BookAppointment() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bed, setBed] = useState("");

  const isReady = date && time && bed;

  return (
    <>
      <div className="bed-form">
        <div className="bed-selector">
          {["Bed 1", "Bed 2", "Bed 3", "Bed 4"].map((b, i) => (
            <div key={b}>
              <input
                type="radio"
                id={`bed-${i}`}
                name="bed"
                value={b}
                checked={bed === b}
                onChange={() => setBed(b)}
              />

              <label htmlFor={`bed-${i}`} className="bed">
                <img src="/bedicon.svg" alt={b} />
                <span>{b}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="appointment-form">
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <input type="time" onChange={(e) => setTime(e.target.value)} />
        <button disabled={!isReady}>Book Appointment</button>
      </div>
    </>
  );
}
