// Calendar.js

import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function CalendarPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', padding: '20px', boxSizing: 'border-box' }}>
      <h1 style={{ marginBottom: '20px' }}>Calendar Page</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{
            width: '80%',
            height: 'auto',
            maxWidth: '1000px', // Set maximum width for the calendar
            aspectRatio: '1.5', // Maintain aspect ratio
            '& .MuiPickersCalendarHeader-root': {
              fontSize: '2.0rem', // Larger font size for the header
            },
            '& .MuiPickersDay-root': {
              width: '40px', // Adjust width for each day cell
              height: '40px', // Adjust height for each day cell
              fontSize: '1.2rem', // Adjust font size for each day cell
            },
            '& .MuiPickersCalendarHeader-labelContainer': {
              textAlign: 'center', // Center the header text
              display: 'flex',
              justifyContent: 'center',
            },
            '& .MuiPickersCalendarHeader-label': {
              fontSize: '1.5rem', // Larger font size for the month/year label
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default CalendarPage;
