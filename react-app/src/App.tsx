import React from 'react';
import Router from './routes/Router';
import './assets/css/tailwind.css';
import JobProvider from './context/job/JobProvider';

function App() {
  return (
    <JobProvider>
      <Router />
    </JobProvider>
  );
}

export default App;
