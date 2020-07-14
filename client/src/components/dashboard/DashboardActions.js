import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className="dash-buttons my-5">
      <Link to="/edit-profile" className="btn btn-light btn-outline-secondary">
        <i className="fas fa-user-circle text-primary" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light btn-success ml-3">
        <i className="fab fa-black-tie text-primary" /> Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-light btn-primary ml-3">
        <i className="fas fa-graduation-cap text-primary" /> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
