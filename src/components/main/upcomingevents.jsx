import React from 'react';
import { BsClockFill, BsGeoAltFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import './upcomingevents.css'; 

const events = [
    {
        title: 'Weekly Team Standup',
        type: 'Meeting',
        time: 'Today • 10:00 AM',
        duration: '30 min',
        location: 'Conference Room A',
        attendees: 8,
        color: 'blue', 
    },
    {
        title: 'Product Demo Session',
        type: 'Presentation',
        time: 'Today • 2:00 PM',
        duration: '1 hour',
        location: 'Virtual',
        attendees: 24,
        color: 'green',
    },
    {
        title: 'Design System Workshop',
        type: 'Workshop',
        time: 'Tomorrow • 9:00 AM',
        duration: '2 hours',
        location: 'Design Studio',
        attendees: 12,
        color: 'purple',
    },
    {
        title: 'Client Feedback Review',
        type: 'Review',
        time: 'Dec 21 • 3:30 PM',
        duration: '45 min',
        location: 'Virtual',
        attendees: 6,
        color: 'orange',
    },
    {
        title: 'Holiday Team Social',
        type: 'Social',
        time: 'Dec 22 • 5:00 PM',
        duration: '2 hours',
        location: 'Main Lounge',
        attendees: 45,
        color: 'pink',
    },
];

const UpcomingEvents = () => {
    return (
        <div className="card shadow-sm"> 
            <div className="d-flex justify-content-between align-items-center mb-3"> 
                <h6 className="upcoming-events-header fw-bold">
                    Upcoming Events
                </h6>
                <button className="btn btn-light btn-sm">View Calendar</button>
            </div>

            {events.map((event, index) => (
                <div key={index} className="event-item">
                    <div className={`event-color-bar bg-${event.color}`}></div>

                    <div className="event-content">
                        <div className="event-main-info">
                            <div className="event-title">
                                {event.title}
                                <span className={`event-type-badge badge-${event.color}`}>{event.type}</span>
                            </div>
                            <div className="event-actions">
                                <div className="event-duration">{event.duration}</div>
                                <button className="btn-join">Join</button>
                            </div>
                        </div>

                        <div className="event-sub-info">
                            <span className="d-flex align-items-center">
                                <BsClockFill className="icon" /> {event.time}
                            </span>
                            <span className="d-flex align-items-center">
                                <BsGeoAltFill className="icon" /> {event.location}
                            </span>
                            <span className="attendees-group">
                                <FaUsers className="icon" /> {event.attendees}
                            </span>
                        </div>
                    </div>
                </div>
            ))}

            <button className="btn btn-schedule-meeting">Schedule Meeting</button>
        </div>
    );
};

export default UpcomingEvents;