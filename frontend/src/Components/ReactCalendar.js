import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState([]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    axios.post('http://localhost:5000/get_data', { date: date.toISOString().split('T')[0] })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <Calendar onClickDay={handleDateClick} value={selectedDate} />
      <div>
        <h2>Data for {selectedDate.toDateString()}:</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Execution Date</th>
              <th>Split From</th>
              <th>Split To</th>
              <th>Ticker</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.execution_date}</td>
                <td>{row.split_from}</td>
                <td>{row.split_to}</td>
                <td>{row.ticker}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomCalendar;
