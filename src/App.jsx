import React, { useState } from 'react';
import MainHub from './Mainhub'; 
import AuditDashboard from './AuditDashboard';
import MaintenanceMode from './MaintenanceMode'; 

function App() {
  // --- MASTER TOGGLE ---
  // true = Maintenance Mode (Public sees "Coming Soon")
  // false = Live Mode (Public sees Mainhub)
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  
  // Navigation state for when the site is LIVE
  const [currentView, setCurrentView] = useState('hub'); 

  // 1. If Maintenance is active, return early so Mainhub never even loads
  if (isMaintenanceMode) {
    return <MaintenanceMode />;
  }

  // 2. If Maintenance is inactive, handle your standard app navigation
  return (
    <div className="App">
      {currentView === 'hub' ? (
        <MainHub onNavigateToAudit={() => setCurrentView('audit')} />
      ) : (
        <AuditDashboard onBack={() => setCurrentView('hub')} />
      )}
    </div>
  );
}

export default App;