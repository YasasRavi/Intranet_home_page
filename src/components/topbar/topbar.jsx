import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaBell, FaUser, FaCog, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import './topbar.css';

const Topbar = () => {
    const [notifications] = useState([
        { id: 1, text: "New message from admin", time: "5 mins ago" },
        { id: 2, text: "Project deadline updated", time: "20 mins ago" },
        { id: 3, text: "Weekly report generated", time: "1 hour ago" },
    ]);

    const fullName = "Yasas Ravihara";
    const getInitials = (name) => {
        const names = name.trim().split(" ");
        const firstInitial = names[0]?.[0] || "";
        const lastInitial = names[1]?.[0] || "";
        return `${firstInitial}${lastInitial}`.toUpperCase();
    };
    const initials = getInitials(fullName);

    return (
        <div className="px-3 py-2 bg-white border-bottom shadow-sm topbar">
            {/* Search Bar */}
            <div className="search-bar me-3 position-relative">
                <FaSearch
                    className="position-absolute top-50 start-0 translate-middle-y text-muted ms-3"
                    style={{ pointerEvents: 'none' }}
                />
                <input
                    type="text"
                    className="form-control ps-5"
                    placeholder="Search people, projects, documents..."
                />
            </div>

            <div className="d-flex align-items-center gap-3">
                {/* Notification Dropdown */}
                <Dropdown align="end">
                    <Dropdown.Toggle
                        as="div"
                        className="position-relative me-3"
                        style={{ cursor: 'pointer' }}
                    >
                        <FaBell size={26} className="text-secondary" />
                        {notifications.length > 0 && (
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                style={{ fontSize: '0.6rem' }}
                            >
                                {notifications.length}
                            </span>
                        )}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="shadow border-0 p-0 mt-2" style={{ width: '300px' }}>
                        <div className="px-3 py-2 border-bottom fw-bold">Notifications</div>
                        {notifications.length === 0 ? (
                            <div className="px-3 py-2 text-muted">No new notifications</div>
                        ) : (
                            notifications.map((note) => (
                                <div key={note.id} className="px-3 py-2 border-bottom">
                                    <div className="small">{note.text}</div>
                                    <div className="text-muted small">{note.time}</div>
                                </div>
                            ))
                        )}
                        <div className="px-3 py-2 text-center">
                            <button className="btn btn-sm btn-outline-primary w-100">
                                View All
                            </button>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>

                {/* Profile Dropdown */}
                <Dropdown align="end">
                    <Dropdown.Toggle
                        as="div"
                        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                        style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                    >
                        {initials}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="shadow border-0 mt-2">
                        <div className="px-3 py-2 border-bottom">
                            <div className="fw-bold">{fullName}</div>
                            <div className="text-muted small">Software Engineer</div>
                        </div>

                        <Dropdown.Item>
                            <FaUser className="me-2" /> Profile
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <FaCog className="me-2" /> Settings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="text-danger">
                            <FaSignOutAlt className="me-2" /> Log out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
            </div>
        </div>
    );
};

export default Topbar;
