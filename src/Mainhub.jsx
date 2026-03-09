import React, { useState } from 'react';
import AuditDashboard from './AuditDashboard';
import UserAnalysis from './UserAnalysis';

const MainHub = () => {
  const [view, setView] = useState('MENU');
  const [hoveredModule, setHoveredModule] = useState(null);

  const modules = [
    { id: 'Designer', icon: '🎨', title: 'Designer', text: 'Automate role engineering using historical utilization data. Enable granular Display/Maintain segregation and legacy role decommissioning.' },
    { id: 'Lifecycle', icon: '♻️', title: 'Lifecycle', text: 'Centralized governance for role maintenance. Manage transaction delta, technical catalogs, and security object mapping.' },
    { id: 'Fiori', icon: '📱', title: 'Fiori', text: 'Construct Fiori architecture with Catalogs, Spaces, and Pages that are aligned with actual user navigation patterns and access requirements.' },
    { id: 'Testing', icon: '🧪', title: 'Testing', text: 'Validate role integrity via Reference User simulations. Ensure zero business disruption by auditing new roles against live production access.' },
    { id: 'Licensing', icon: '⚖️', title: 'Licensing', text: 'Optimize RISE with SAP compliance. Classify roles by FUE impact and re-engineer access to minimize licensing overhead.' },
    { id: 'Deriver', icon: '🌿', title: 'Deriver', text: 'Automated derivation engine. Generate organizational child roles through predefined Business Unit and Company Code mapping logic.' },
  ];

  if (view === 'ROLE_OPT') return <AuditDashboard onBack={() => setView('MENU')} />;
  if (view === 'USER_ANALYSIS') return <UserAnalysis onBack={() => setView('MENU')} />;

  return (
    <div style={containerStyle}>
      {/* 1. Header */}
      <div style={headerSectionStyle}>
        <h1 style={headingStyle}>Role Management</h1>
        <p style={{ color: '#666', marginTop: '5px' }}>Next-Gen Security & Compliance Suite</p>
      </div>

      {/* 2. Module Icons Row */}
      <div style={moduleContainerStyle}>
        {modules.map((mod) => (
          <div 
            key={mod.id} 
            style={iconWrapperStyle}
            onMouseEnter={() => setHoveredModule(mod.id)}
            onMouseLeave={() => setHoveredModule(null)}
          >
            <div style={moduleIconStyle}>{mod.icon}</div>
            <span style={moduleLabelStyle}>{mod.id}</span>
            
            {/* Hover Window (Tooltip) */}
            {hoveredModule === mod.id && (
              <div style={{
    ...tooltipStyle,
    // Dynamic alignment logic
    left: mod.id === 'Designer' ? '0' : mod.id === 'Deriver' ? 'auto' : '50%',
    right: mod.id === 'Deriver' ? '0' : 'auto',
    transform: (mod.id === 'Designer' || mod.id === 'Deriver') ? 'none' : 'translateX(-50%)',
  }}>
    <h4 style={{ margin: '0 0 5px 0', color: '#27ae60' }}>{mod.title}</h4>
    <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4', color: '#444' }}>{mod.text}</p>
  </div>
            )}
          </div>
        ))}
      </div>

      {/* 3. Main Launch Cards */}
      <div style={contentBoxStyle}>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <div style={iconCircleStyle}>🛡️</div>
            <h2 style={cardTitleStyle}>Role Optimization</h2>
            <p style={cardTextStyle}>
              Comprehensive analysis of role efficiency and FUE waste to reduce technical debt.
            </p>
            <button onClick={() => setView('ROLE_OPT')} style={greenButtonStyle}>Launch Optimizer</button>
          </div>

          <div style={cardStyle}>
            <div style={iconCircleStyle}>👤</div>
            <h2 style={cardTitleStyle}>User Access Analysis</h2>
            <p style={cardTextStyle}>
              Audit user activity against assigned authorizations to identify immediate optimization and cost savings.
            </p>
            <button onClick={() => setView('USER_ANALYSIS')} style={outlineButtonStyle}>Launch Analysis</button>
          </div>
        </div>

        <div style={footerBarStyle}>
          <span style={{ color: '#27ae60' }}>●</span> System Status: <span style={{fontWeight: 'bold'}}>Connected to SAP S/4HANA</span>
        </div>
      </div>
    </div>
  );
};

// --- STYLES ---

const containerStyle = { padding: '40px 20px', backgroundColor: '#f9fbf9', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' };
const headerSectionStyle = { maxWidth: '1300px', margin: '0 auto 40px auto' };
const headingStyle = { color: '#1b5e20', margin: 0, fontSize: '2.5rem', fontWeight: '700' };

const moduleContainerStyle = { 
  maxWidth: '1300px', 
  margin: '0 auto 40px auto', 
  display: 'flex', 
  justifyContent: 'space-between', 
  padding: '0 50px' 
};

const iconWrapperStyle = { 
  position: 'relative', 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  cursor: 'pointer' 
};

const moduleIconStyle = {
  width: '60px', height: '60px', backgroundColor: '#fff', border: '2px solid #e0eadd',
  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: '1.8rem', transition: 'all 0.3s ease', boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
};

const moduleLabelStyle = { marginTop: '10px', fontSize: '0.85rem', fontWeight: 'bold', color: '#2e7d32' };

const tooltipStyle = {
  position: 'absolute', top: '80px', left: '50%', transform: 'translateX(-50%)',
  width: '220px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.15)', border: '1px solid #e0eadd', zIndex: 10,
  textAlign: 'left'
};

const contentBoxStyle = { maxWidth: '1300px', margin: '0 auto', backgroundColor: '#fff', padding: '50px', borderRadius: '15px', border: '1px solid #e0eadd', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' };
const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' };
const cardStyle = { padding: '40px', borderRadius: '12px', border: '1px solid #f0f0f0', textAlign: 'center', backgroundColor: '#fff' };
const iconCircleStyle = { width: '80px', height: '80px', backgroundColor: '#e8f5e9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 20px auto' };
const cardTitleStyle = { color: '#2e7d32', marginBottom: '15px', fontSize: '1.5rem' };
const cardTextStyle = { color: '#555', lineHeight: '1.6', marginBottom: '30px', minHeight: '70px' };
const greenButtonStyle = { backgroundColor: '#27ae60', color: 'white', border: 'none', padding: '15px 40px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', width: '100%' };
const outlineButtonStyle = { backgroundColor: 'transparent', color: '#27ae60', border: '2px solid #27ae60', padding: '13px 40px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', width: '100%' };
const footerBarStyle = { marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #eee', fontSize: '0.9rem', color: '#888' };

export default MainHub;