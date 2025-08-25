import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Skillsync AI</h1>
      <p>Your personalized skill assessment tool.</p>
      <Link to="/assessment"><button>Start Assessment</button></Link>
    </div>
  );
}

export default LandingPage;
