
import React from 'react';
import { FaLightbulb, FaHeart, FaCommentDots } from 'react-icons/fa'; 
import './innovationboard.css';

const InnovationBoard = () => {
    const ideas = [
        {
            id: 1,
            author: 'Sarah Chen',
            timeAgo: '2 hours ago',
            title: 'AI-Powered Code Review Assistant',
            description: 'Implement an AI tool that automatically reviews code for best practices and suggests improvements.',
            likes: 24,
            comments: 8,
            tags: ['Trending', 'Development']
        },
        {
            id: 2,
            author: 'Alex Rodriguez',
            timeAgo: '1 day ago',
            title: 'Remote Team VR Collaboration Spaces',
            description: 'Create virtual reality meeting rooms for immersive remote collaboration experiences.',
            likes: 18,
            comments: 12,
            tags: ['Collaboration']
        },
        {
            id: 3,
            author: 'Maya Patel',
            timeAgo: '3 days ago',
            title: 'Employee Skill Matching Platform',
            description: 'Build an internal platform that matches employees with complementary skills for cross-team projects.',
            likes: 31,
            comments: 6,
            tags: ['Trending', 'HR & People']
        },
    ];

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const getTagColorClass = (tag) => {
        switch (tag) {
            case 'Trending':
                return 'tag-trending';
            case 'Development':
                return 'tag-development';
            case 'Collaboration':
                return 'tag-collaboration';
            case 'HR & People':
                return 'tag-hr-people';
            default:
                return '';
        }
    };

    return (
        <div className="innovation-board card p-4 mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">
                    <FaLightbulb className="me-2 text-warning" /> Innovation Board 
                </h5>
                <button className="btn btn-success mt-3 mt-sm-0">
                    <span className="me-2">+</span> Share Idea
                </button>
            </div>

            {ideas.map(idea => (
                <div key={idea.id} className="idea-card border rounded p-3 mb-3">
                    <div className="d-flex align-items-start mb-2">
                        <div className="avatar me-3">
                            <span className="avatar-initials bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                                {getInitials(idea.author)}
                            </span>
                        </div>
                        <div>
                            <h6 className="mb-0">{idea.author}</h6>
                            <small className="text-muted">{idea.timeAgo}</small>
                        </div>
                        <div className="ms-auto d-flex align-items-center">
                            {idea.tags.map(tag => (
                                <span key={tag} className={`badge rounded-pill ms-2 ${getTagColorClass(tag)}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <h5 className="mb-1">{idea.title}</h5>
                    <p className="text-muted mb-3">{idea.description}</p>
                    <div className="d-flex align-items-center">
                        <div className="me-3">
                            <FaHeart className="me-1 text-muted" /> {idea.likes} 
                        </div>
                        <div>
                            <FaCommentDots className="me-1 text-muted" /> {idea.comments} 
                        </div>
                    </div>
                </div>
            ))}

            
                <button className="btn btn-outline-secondary">View All Ideas</button>
            
        </div>
    );
};

export default InnovationBoard;