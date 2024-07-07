import React, { useState } from 'react';
import { StaticDatePicker } from '@mui/lab';
import { TextField, Box } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function CalendarPage() {
  const [value, setValue] = useState(new Date());

  return (
   
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1>Calendar Page</h1>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
   
  );
}

export default CalendarPage;
