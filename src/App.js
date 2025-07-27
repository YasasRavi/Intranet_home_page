import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Sidebar from './components/sidebar/sidebar';
import Topbar from './components/topbar/topbar';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
