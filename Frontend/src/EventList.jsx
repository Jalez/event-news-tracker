/** @format */

import { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the events from the backend
    axios
      .get('http://localhost:8080/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
