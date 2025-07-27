import React from 'react';
import Header from './main/header';
import QuickActions from './main/quickAction';
import MyTasks from './main/mytasks';
import UpcomingEvents from './main/upcomingevents';
import TeamActivity from './main/teamactivity';
import WellBeingCorner from './main/wellbeingcorner';
import InnovationBoard from './main/innovationboard';


const Dashboard = () => {
    return (
        <div className="dashboard mt-4">
            <Header />
            <QuickActions />

            <div className="row mt-4 g-4">
                <div className="col-md-7">
                    <MyTasks />
                    <TeamActivity />
                </div>
                <div className="col-md-5">
                    <UpcomingEvents/>
                    <WellBeingCorner/>
                </div>
                <div className="col-12">
                    <InnovationBoard />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
