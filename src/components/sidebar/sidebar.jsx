import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';
import { sidebarLinks } from '../../utils/sidebarLinks';
import logo from '../../assets/images/axero-solutions-logo.webp';
import { FaTachometerAlt, FaUsers, FaFolderOpen, FaBook, FaTimes, FaBars } from 'react-icons/fa';

const getIcon = (label) => {
    switch (label.toLowerCase()) {
        case 'dashboard':
            return <FaTachometerAlt />;
        case 'teams':
            return <FaUsers />;
        case 'projects':
            return <FaFolderOpen />;
        case 'resources':
            return <FaBook />;
        default:
            return null;
    }
};

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const closeSidebar = () => {
        setIsOpen(false);
    };
    // Detect clicks outside sidebar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                closeSidebar();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <div className="hamburger" onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
                <img src={logo} className="sidebar-logo" alt="Logo" />
                <ul className="menu-list">
                    {sidebarLinks.map((link) => (
                        <li
                            className={`list-item ${location.pathname === link.path ? 'active' : ''}`}
                            key={link.path}
                            onClick={closeSidebar}>
                            <Link to={link.path}>
                                <span className="icon">{getIcon(link.label)}</span>
                                <span className="label">{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;