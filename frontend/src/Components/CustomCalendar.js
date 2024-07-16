
import React, { useEffect } from 'react';
import Calendar from 'color-calendar';
import 'color-calendar/dist/css/theme-basic.css'; // Choose the theme you prefer
import './CustomCalendar.css'; // Import your custom CSS

const CustomCalendar = () => {
  useEffect(() => {
    new Calendar({
      id: "#color-calendar",
      calendarSize: "large", // Choose between "small" and "large"
      theme: "basic", // Choose between "basic" and "glass"
      primaryColor: "#1a237e", // Customize primary color
      headerColor: "#000000", // Customize header color
      headerBackgroundColor: "#ffffff", // Customize header background color
      weekdaysColor: "#333333", // Customize weekdays color
      fontFamilyHeader: 'Open Sans, sans-serif', // Customize font for header
      fontFamilyWeekdays: 'Open Sans, sans-serif', // Customize font for weekdays
      fontFamilyBody: 'Open Sans, sans-serif', // Customize font for body
      dropShadow: '0 7px 30px -10px rgba(150, 170, 180, 0.5)', // Customize drop shadow
      border: '1px solid #dddddd', // Customize border
      borderRadius: '0.5rem', // Customize border radius
      disableMonthYearPickers: false, // Disable month/year pickers if needed
      disableDayClick: false, // Disable day click if needed
      disableMonthArrowClick: false, // Disable month arrow click if needed
      // Add other options here
    });
  }, []);

  return (
    <div className="calendar-container">
      <div id="color-calendar" />
    </div>
  );
};

export default CustomCalendar;