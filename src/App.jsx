import React, { useState } from 'react';
import MainHub from './Mainhub'; // Your default screen
import MaintenanceMode from './MaintenanceMode'; 

function App() {
  // SET TO 'true' TO BLOCK ACCESS
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(true);
  
  // Track which dashboard we are looking at (if not in maintenance)
  const [currentView, setCurrentView] = useState('hub'); 

  // 1. Priority Check: If maintenance is ON, nothing else renders
  if (isMaintenanceMode) {
    return <MaintenanceMode />;
  }

  // 2. Normal App Logic: If maintenance is OFF, show the Hub or Dashboards

    return <MainHub />;

}

export default App;