import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './header.css';
import { FaBolt, FaUsers, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Header = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date()); 
    }, 1000); 

    return () => clearInterval(timerId);
    
  }, []); 

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Get the current hour from the stateful date object
  const currentHour = currentDate.getHours();

  let greeting;
  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = 'Good Afternoon';
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = 'Good Evening';
  } else {
    greeting = 'Good Night';
  }

  return (
    <div className="container">
      <div className="header-card">
        <div className="header-left">
          <h2>
            {greeting}, <span>Yasas!</span> 
          </h2>
          <p>Ready to make today productive? Here's what's happening at axero.</p>
          <div className="header-meta">
            <span><FaCalendarAlt /> {formattedDate}</span>
            <span><FaClock /> {formattedTime}</span>
          </div>
        </div>
        <div className="header-right">
          <div className="header-icon">
              <FaBolt />
              <div className="icon-text-box">
                <span className="icon-num">8</span>
                <span className="icon-text">Active Tasks</span>
              </div>
          </div>
          <div className="header-icon">
              <FaUsers />
              <div className="icon-text-box">
                <span className="icon-num">24</span>
                <span className="icon-text">Team Members</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;