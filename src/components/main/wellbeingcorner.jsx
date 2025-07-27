import React from 'react';
import { FaHeart, FaRegSmile, FaRegMeh, FaRegTired, FaRegAngry, FaHeartbeat, FaCoffee } from 'react-icons/fa';
import { BsStars, BsArrowRight } from 'react-icons/bs';
import './wellbeingcorner.css'; 


const ActivityCard = ({ icon, title, tag, description, actionText }) => {
    return (
        <div className="wb-activity-card">
            <div className="wb-card-header">
                <div className="wb-card-icon-wrapper">
                    {icon}
                </div>
                <div className="wb-card-details">
                    <h4 className="wb-card-title">{title}</h4>
                    <span className="wb-card-tag">{tag}</span>
                </div>
            </div>
            <p className="wb-card-description">{description}</p>
            <div className="wb-card-action">
                <span className="wb-action-text">{actionText}</span>
                <BsArrowRight size={20} />
            </div>
        </div>
    );
};

// Main WellBeingCorner Component
const WellBeingCorner = () => {
    return (
    <div className="well-being-corner-container mt-4"> 
        <div className="wb-header">
            <div className="wb-header-left">
                <FaHeart className="wb-header-heart-icon" />
                <h2>Well-being Corner</h2>
            </div>
            <span className="wb-your-health-matters-btn">Your Health Matters</span>
        </div>

        <div className="wb-mood-tracker">
            <h3>How are you feeling today?</h3>
            <div className="wb-mood-options">
                <button className="wb-mood-button">
                    <FaRegSmile size={24} /> Great
                </button>
                <button className="wb-mood-button">
                    <FaRegMeh size={24} /> Okay
                </button>
                <button className="wb-mood-button">
                    <FaRegAngry size={24} /> Stressed
                </button>
                <button className="wb-mood-button">
                    <FaRegTired size={24} /> Tired
                </button>
            </div>
        </div>

        <div className="wb-activity-cards-section">
            <ActivityCard
                icon={<BsStars size={28} color="#8a2be2" />}
                title="5-Minute Breathing Exercise"
                tag="Mindfulness"
                description="Take a quick mental break with guided breathing"
                actionText="Start Now"
            />
            <ActivityCard
                icon={<FaHeartbeat size={28} color="#20b2aa" />}
                title="Desk Yoga Stretches"
                tag="Movement"
                description="Combat sitting fatigue with simple stretches"
                actionText="Watch Video"
            />
            <ActivityCard
                icon={<FaCoffee size={28} color="#ff8c00" />}
                title="Healthy Snack Ideas"
                tag="Nutrition"
                description="Fuel your brain with nutritious options"
                actionText="View Recipe"
            />
        </div>

        <div className="wb-stats-bar">
            <div className="wb-stat-item">
                <span className="wb-stat-value">12</span>
                <span className="wb-stat-label">Days Active</span>
            </div>
            <div className="wb-stat-item">
                <span className="wb-stat-value">45</span>
                <span className="wb-stat-label">Min Mindfulness</span>
            </div>
            <div className="wb-stat-item">
                <span className="wb-stat-value">8.5k</span>
                <span className="wb-stat-label">Steps Today</span>
            </div>
        </div>

        <button className="wb-employee-assistance-btn">
            <FaRegSmile size={20} />
            Access Employee Assistance
        </button>
    </div>
    );
};

export default WellBeingCorner;