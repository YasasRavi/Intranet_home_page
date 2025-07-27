import React from 'react';
import './teamactivity.css';

const activities = [
    {
        id: 1,
        userInitials: 'AR',
        userName: 'Alex Rodriguez',
        action: 'commented on',
        target: 'Mobile App Wireframes',
        category: 'Design System',
        timeAgo: '2 minutes ago',
        avatarColor: 'blue', 
        
    },
    {
        id: 2,
        userInitials: 'MP',
        userName: 'Maya Patel',
        action: 'uploaded',
        target: 'Q4 Financial Report.pdf',
        category: 'Finance',
        timeAgo: '15 minutes ago',
        avatarColor: 'green',
    },
    {
        id: 3,
        userInitials: 'JC',
        userName: 'James Chen',
        action: 'merged pull request',
        target: 'Authentication improvements',
        category: 'Backend API',
        timeAgo: '1 hour ago',
        avatarColor: 'purple',
    },
    {
        id: 4,
        userInitials: 'LT',
        userName: 'Lisa Thompson',
        action: 'created team',
        target: 'Marketing Campaign 2024',
        category: 'Marketing',
        timeAgo: '2 hours ago',
        avatarColor: 'orange',
    },
    {
        id: 5,
        userInitials: 'DK',
        userName: 'David Kim',
        action: 'shared document',
        target: 'Product Roadmap 2024',
        category: 'Product',
        timeAgo: '3 hours ago',
        avatarColor: 'green', 
    },
];

const TeamActivity = () => {
    return (
        <div className="card shadow-sm p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Team Activity</h6>
                <span className="badge bg-light text-dark activity-live-badge">Live</span>
            </div>

            {activities.map((activity) => (
                <div key={activity.id} className="activity-item">
                    <div className={`activity-avatar bg-${activity.avatarColor}`}>
                        {activity.icon ? activity.icon : activity.userInitials}
                    </div>
                    <div className="activity-content">
                        <div className="activity-text">
                            <span className="fw-semibold">{activity.userName}</span> {activity.action}{' '}
                            <span className="fw-semibold">{activity.target}</span>
                        </div>
                        <div className="activity-meta text-muted small">
                            <span className={`badge activity-category-badge badge-${activity.avatarColor}`}>
                                {activity.category}
                            </span>
                            <span className="mx-1">•</span>
                            <span>{activity.timeAgo}</span>
                        </div>
                    </div>
                </div>
            ))}

            <button className="btn btn-link mt-3 view-all-activity-btn">
                View All Activity
            </button>
        </div>
    );
};

export default TeamActivity;
