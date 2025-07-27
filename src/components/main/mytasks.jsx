import React, { useState } from 'react';
import './mytasks.css';
import { BsCircle, BsCheckCircleFill, BsInfoCircle, BsClockFill, BsCheckCircle } from 'react-icons/bs';

const initialTasks = [
    {
        id: 1,
        title: 'Review UX designs for mobile app',
        category: 'Mobile App Redesign',
        priority: 'High',
        due: 'Today',
        completed: false,
        isProcessing: false, 
    },
    {
        id: 2,
        title: 'Prepare quarterly presentation',
        category: 'Q4 Review',
        priority: 'Medium',
        due: 'Tomorrow',
        completed: false,
        isProcessing: false,
    },
    {
        id: 3,
        title: 'Team retrospective meeting',
        category: 'Team Development',
        priority: 'Low',
        due: 'Dec 22',
        completed: false,
        isProcessing: false,
    },
    {
        id: 4,
        title: 'Update documentation',
        category: 'Knowledge Base',
        priority: 'Medium',
        due: 'Dec 25',
        completed: false,
        isProcessing: false,
    },
    {
        id: 5,
        title: 'Code review for authentication module',
        category: 'Security Update',
        completed: true, 
        isProcessing: false,
    },
];

const MyTasks = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const handleToggleComplete = (id) => {
        
        const taskToUpdate = tasks.find(task => task.id === id);

        if (!taskToUpdate) return; 

        if (taskToUpdate.completed) {
            
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.id === id ? { ...task, completed: false, isProcessing: false } : task
                )
            );
        } else {
            
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task.id === id ? { ...task, isProcessing: true } : task
                )
            );

            // Set a timeout to actually mark as completed and move after a delay
            setTimeout(() => {
                setTasks(prevTasks =>
                    prevTasks.map(task =>
                        task.id === id ? { ...task, completed: true, isProcessing: false } : task
                    )
                );
            }, 500); // 500ms delay (0.5 seconds), adjust as needed
        }
    };

    const pendingTasks = tasks.filter((t) => !t.completed || t.isProcessing); // Keep processing tasks in pending view temporarily
    const completedTasks = tasks.filter((t) => t.completed && !t.isProcessing); // Only truly completed tasks

    return (
        <div className="card shadow-sm p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">My Tasks</h6>
                <span className="badge bg-light text-dark">
                    {tasks.filter(t => !t.completed).length} pending 
                </span>
            </div>

            {pendingTasks.map((task) => (
                <div key={task.id} className="task-item" onClick={() => handleToggleComplete(task.id)}>
                    <div className="d-flex align-items-center w-100">
                    
                        {task.isProcessing || task.completed ? (
                            <BsCheckCircleFill className="task-completion-icon checked" />
                        ) : (
                            <BsCircle className="task-completion-icon" />
                        )}
                        <div className="flex-grow-1">
                            <div className="medium-bold d-flex align-items-center">
                                {task.title}
                                {task.priority === 'High' && (
                                    <BsInfoCircle className="info-icon ms-2" />
                                )}
                            </div>
                            <div className="text-muted small d-flex align-items-center flex-wrap">
                                <span>{task.category}</span>
                                {task.priority && (
                                    <>
                                        <span className="mx-1">•</span>
                                        <span className={`badge priority-${task.priority.toLowerCase()}`}>
                                            {task.priority}
                                        </span>
                                    </>
                                )}
                                {task.due && (
                                    <>
                                        <span className="mx-1">•</span>
                                        <BsClockFill className="clock-icon" />
                                        <span>{task.due}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <hr className="my-3" />
            <div className="text-muted small mb-2 fw-semibold">Completed</div>
            {completedTasks.map((task) => (
                <div key={task.id} className="completed-task" onClick={() => handleToggleComplete(task.id)}>
                    <span className="text-success me-2">
                        <BsCheckCircle />
                    </span>
                    <s>{task.title}</s>
                </div>
            ))}

            <button className="btn btn-light mt-4 w-100">
                View All Tasks
            </button>
        </div>
    );
};

export default MyTasks;