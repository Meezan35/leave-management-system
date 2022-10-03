import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';

const Calendar = () => {
  const [calData, setCalData] = useState([]);
  const localData = JSON.parse(localStorage.getItem('event')) || [];

  const newLocalData = localData.map((m) => {
    return {
      start: moment(m.startDate).subtract(1, 'days')._d,
      end: m.endDate,
      title: m.reason,
      color:
        m.status === 'pending'
          ? 'yellow'
          : m.status === 'rejected'
          ? 'red'
          : 'green',
    };
  });

  return (
    <div>
      <FullCalendar
        eventAdd={(res) => console.log(res)}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={newLocalData}
      />
    </div>
  );
};

export default Calendar;
