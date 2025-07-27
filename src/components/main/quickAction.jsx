import React, { useState } from 'react';
import { FaPlus, FaComments, FaCalendarAlt, FaFileAlt, FaLightbulb, FaUsers } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';
import './quickAction.css';

const quickActions = [
    {
        icon: <FaPlus />,
        title: 'New Project',
        subtitle: 'Start a new project',
        bgColor: 'bg-primary',
        description: 'Define project name, type, and track your progress seamlessly.',
    },
    {
        icon: <FaComments />,
        title: 'Team Chat',
        subtitle: 'Join conversations',
        bgColor: 'bg-success',
        description: 'Collaborate and discuss tasks in real-time with your team.',
    },
    {
        icon: <FaCalendarAlt />,
        title: 'Schedule Meeting',
        subtitle: 'Book time with colleagues',
        bgColor: 'bg-warning',
        description: 'Find a time and set up a team meeting easily.',
    },
    {
        icon: <FaFileAlt />,
        title: 'Create Document',
        subtitle: 'Draft a new document',
        bgColor: 'bg-dark',
        description: 'Start creating structured and collaborative documents.',
    },
    {
        icon: <FaLightbulb />,
        title: 'Share Idea',
        subtitle: 'Post to innovation board',
        bgColor: 'bg-success',
        description: 'Post your new ideas and spark innovation in your team.',
    },
    {
        icon: <FaUsers />,
        title: 'Find Experts',
        subtitle: 'Connect with specialists',
        bgColor: 'bg-primary',
        description: 'Locate and collaborate with experts across your organization.',
    },
];

const QuickActions = () => {
    const [selectedAction, setSelectedAction] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleShow = (action) => {
        setSelectedAction(action);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedAction(null);
    };

    return (
        <div className="quickaction">
            <h6 className="fw-bold  mb-4">Quick Actions</h6>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 text-center">
                {quickActions.map((action, index) => (
                    <div className="col" key={index}>
                        <div
                            className="text-decoration-none text-dark"
                            role="button"
                            onClick={() => handleShow(action)}
                        >
                            <div className="d-flex flex-column align-items-center quick-card">
                                <div
                                    className={`rounded-3 d-flex align-items-center justify-content-center bounce-box ${action.bgColor}`}
                                    style={{ width: 48, height: 48 }}
                                >
                                    <span className="text-white fs-5 icon">{action.icon}</span>
                                </div>
                                <div className="mt-2 fw-semibold card-title">{action.title}</div>
                                <div className="text-muted small">{action.subtitle}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className="me-2 text-primary fs-4">{selectedAction?.icon}</span>
                        {selectedAction?.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{selectedAction?.description}</p>
                    
                    {selectedAction?.title === 'New Project' && (
                        <div>
                            <label className="form-label mt-3">Project Name</label>
                            <input type="text" className="form-control" placeholder="Enter project name..." />
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => alert('Action confirmed!')}>
                        Continue
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default QuickActions;
