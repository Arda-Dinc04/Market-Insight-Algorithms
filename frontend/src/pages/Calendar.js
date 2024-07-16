import React from 'react';
import CustomCalendar from '../Components/CustomCalendar'; // Adjust the path if necessary
import ReactCalendar from '../Components/ReactCalendar'; // Adjust the path if necessary

const CalendarPage = () => {
  return (
    <div>
      <h1>Calendar Page</h1>
      <CustomCalendar />
      <h1>Just go the the calendar.js and whichever calendar we want we'll just hide the other one for now</h1>
      <ReactCalendar />
    </div>
  );
};

export default CalendarPage;

