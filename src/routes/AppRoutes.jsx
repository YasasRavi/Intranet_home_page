import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/dashboard';



const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} /> */}
    </Routes>
);

export default AppRoutes;
