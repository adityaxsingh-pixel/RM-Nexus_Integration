import React, { useState } from 'react';
import AuditDashboard from './AuditDashboard';
import UserAnalysis from './UserAnalysis';

const MainHub = () => {
  const [view, setView] = useState('MENU');

  if (view === 'ROLE_OPT') return <AuditDashboard onBack={() => setView('MENU')} />;
  if (view === 'USER_ANALYSIS') return <UserAnalysis onBack={() => setView('MENU')} />;

  return (
    <div style={containerStyle}>
      {/* 1. Main Heading on Top */}
      <div style={headerSectionStyle}>
        <h1 style={headingStyle}>Role Management</h1>
        <p style={{ color: '#666', marginTop: '5px' }}>Role & License Optimization Suite</p>
      </div>

      {/* 2. Main Content Area (Matches AuditDashboard Width) */}
      <div style={contentBoxStyle}>
        <div style={gridStyle}>
          
          {/* COLUMN 1: ROLE OPTIMIZATION */}
          <div style={cardStyle}>
            <div style={iconCircleStyle}>🛡️</div>
            <h2 style={cardTitleStyle}>Role Optimization</h2>
            <p style={cardTextStyle}>
              Analyze Role efficiency, FUE waste, and reduce your technical debt.
            </p>
            <button 
              onClick={() => setView('ROLE_OPT')} 
              style={greenButtonStyle}
            >
              Launch Optimizer
            </button>
          </div>

          {/* COLUMN 2: USER ACCESS ANALYSIS */}
          <div style={cardStyle}>
            <div style={iconCircleStyle}>👤</div>
            <h2 style={cardTitleStyle}>User Access Analysis</h2>
            <p style={cardTextStyle}>
              Compare actual user activity logs against assigned authorizations to identify immediate role improvement and cost savings.
            </p>
            <button 
              onClick={() => setView('USER_ANALYSIS')} 
              style={outlineButtonStyle}
            >
              Launch Analysis
            </button>
          </div>

        </div>

        {/* Bottom Status Bar */}
        <div style={footerBarStyle}>
          <span style={{ color: '#27ae60' }}>●</span> System Status: <span style={{fontWeight: 'bold'}}>Connected to SAP S/4HANA</span>
        </div>
      </div>
    </div>
  );
};

// --- STYLES (Green & White Theme) ---

const containerStyle = {
  padding: '40px 20px',
  backgroundColor: '#f9fbf9', // Very light green tint
  minHeight: '100vh',
  fontFamily: 'Segoe UI, Roboto, Arial, sans-serif'
};

const headerSectionStyle = {
  maxWidth: '1300px',
  margin: '0 auto 30px auto',
  textAlign: 'left'
};

const headingStyle = {
  color: '#1b5e20', // Dark Forest Green
  margin: 0,
  fontSize: '2.5rem',
  fontWeight: '700',
  letterSpacing: '-0.5px'
};

const contentBoxStyle = {
  maxWidth: '1300px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  padding: '50px',
  borderRadius: '15px',
  border: '1px solid #e0eadd', // Soft green-grey border
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '40px'
};

const cardStyle = {
  padding: '40px',
  borderRadius: '12px',
  border: '1px solid #f0f0f0',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  backgroundColor: '#fff'
};

const iconCircleStyle = {
  width: '80px',
  height: '80px',
  backgroundColor: '#e8f5e9', // Light green circle
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2.5rem',
  margin: '0 auto 20px auto'
};

const cardTitleStyle = {
  color: '#2e7d32', // Medium Green
  marginBottom: '15px',
  fontSize: '1.5rem'
};

const cardTextStyle = {
  color: '#555',
  lineHeight: '1.6',
  marginBottom: '30px',
  minHeight: '70px'
};

const greenButtonStyle = {
  backgroundColor: '#27ae60', // Pathlock Green
  color: 'white',
  border: 'none',
  padding: '15px 40px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1rem',
  width: '100%',
  boxShadow: '0 4px 10px rgba(39, 174, 96, 0.2)'
};

const outlineButtonStyle = {
  backgroundColor: 'transparent',
  color: '#27ae60',
  border: '2px solid #27ae60',
  padding: '13px 40px', // slightly less padding to account for border
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1rem',
  width: '100%'
};

const footerBarStyle = {
  marginTop: '50px',
  paddingTop: '20px',
  borderTop: '1px solid #eee',
  fontSize: '0.9rem',
  color: '#888'
};

export default MainHub;