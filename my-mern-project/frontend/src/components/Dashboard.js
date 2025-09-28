import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <div>Please log in to view the dashboard.</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Welcome, {user.name}!</h2>
        <p>Email: {user.email}</p>
        
        {/* Wishlist placeholder */}
        <p>Wishlist:</p>
        <ul>
          {/* Replace with actual wishlist items when available */}
          <li>Example Item 1</li>
          <li>Example Item 2</li>
          <li>Example Item 3</li>
        </ul>

        <button className="go-home-button" onClick={() => navigate('/')}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

