import React, { useState } from 'react';
import AuditDashboard from './AuditDashboard';
import UserAnalysis from './UserAnalysis';
import DesignerFlow from './DesignerFlow';

const MainHub = () => {
  const [view, setView] = useState('MENU');
  const [hoveredModule, setHoveredModule] = useState(null);

  const modules = [
    { id: 'Designer', icon: '🎨', title: 'Designer', text: 'Automate role engineering using historical utilization data. Enable granular Display/Maintain segregation.', clickable: true },
    { id: 'Lifecycle', icon: '♻️', title: 'Lifecycle', text: 'Governance for role maintenance. Manage transaction delta and technical catalogs.' },
    { id: 'Migration', icon: '🚀', title: 'Migration', text: 'ECC to S4HANA migration path with alternate T-Code and Fiori app mapping suggestions.' },
    { id: 'Fiori', icon: '📱', title: 'Fiori', text: 'Construct Fiori architecture—Catalogs, Spaces, and Pages—aligned with user patterns.' },
    { id: 'Testing', icon: '🧪', title: 'Testing', text: 'Validate role integrity via Reference User simulations to ensure zero business disruption.' },
    { id: 'Deriver', icon: '🌿', title: 'Deriver', text: 'Automated derivation engine for organizational child roles via predefined mapping logic.' },
  ];

  if (view === 'ROLE_OPT') return <AuditDashboard onBack={() => setView('MENU')} />;
  if (view === 'USER_ANALYSIS') return <UserAnalysis onBack={() => setView('MENU')} />;
  if (view === 'DESIGNER') return <DesignerFlow onBack={() => setView('MENU')} />;

  return (
    <div style={containerStyle}>
      {/* Background Decoration */}
      <div style={bgBlob1}></div>
      <div style={bgBlob2}></div>

      {/* 1. Header Section */}
      <div style={headerSectionStyle}>
        <h1 style={headingStyle}>Role Management <span style={proBadge}>v2026-Q3</span></h1>
        <p style={{ color: '#444', marginTop: '8px', fontSize: '1.1rem' }}>Enterprise Security & Compliance Orchestrator</p>
      </div>

      {/* 2. Module Ribbon (Horizontal Navigation Style) */}
      <div style={ribbonStyle}>
        {modules.map((mod) => (
          <div 
            key={mod.id} 
            style={{
                ...iconWrapperStyle, 
                backgroundColor: hoveredModule === mod.id ? '#f0f9f1' : 'transparent',
                borderBottom: hoveredModule === mod.id ? '3px solid #27ae60' : '3px solid transparent'
            }}
            onMouseEnter={() => setHoveredModule(mod.id)}
            onMouseLeave={() => setHoveredModule(null)}
            onClick={() => mod.id === 'Designer' && setView('DESIGNER')}
          >
            <div style={moduleIconStyle}>{mod.icon}</div>
            <span style={moduleLabelStyle}>{mod.id}</span>
            
            {hoveredModule === mod.id && (
              <div style={{
                ...tooltipStyle,
                left: mod.id === 'Designer' ? '0' : mod.id === 'Deriver' ? 'auto' : '50%',
                right: mod.id === 'Deriver' ? '0' : 'auto',
                transform: (mod.id === 'Designer' || mod.id === 'Deriver') ? 'none' : 'translateX(-50%)',
              }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#1b5e20' }}>{mod.title}</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4', color: '#555' }}>{mod.text}</p>
                {mod.clickable && <div style={clickPrompt}>CLICK TO LAUNCH ENGINE →</div>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 3. Main Launch Cards (Wider Layout) */}
      <div style={contentBoxStyle}>
        <div style={gridStyle}>
          
          <div style={cardStyle}>
            <div style={iconCircleStyle}>🛡️</div>
            <h2 style={cardTitleStyle}>Role Optimization</h2>
            <p style={cardTextStyle}>
              Comprehensive analysis of role efficiency and FUE waste. Reduce technical debt by de-authorizing unused objects automatically.
            </p>
            <button onClick={() => setView('ROLE_OPT')} style={greenButtonStyle}>
              Launch Optimizer
            </button>
          </div>

          <div style={cardStyle}>
            <div style={iconCircleStyle}>👤</div>
            <h2 style={cardTitleStyle}>User Access Analysis</h2>
            <p style={cardTextStyle}>
              Audit live user activity against assigned authorizations. Identify immediate license optimization and security hardening opportunities.
            </p>
            <button onClick={() => setView('USER_ANALYSIS')} style={outlineButtonStyle}>
              Launch Analysis
            </button>
          </div>

        </div>

        {/* System Status Footer */}
        <div style={footerBarStyle}>
          <div style={statusPulse}></div>
          <span>System Status: <strong style={{color: '#1b5e20'}}>Connected to SAP S/4HANA (Production)</strong></span>
          <span style={{marginLeft: 'auto'}}>Last Sync: Just Now</span>
        </div>
      </div>
    </div>
  );
};

// --- STYLES (Graphic Overhaul) ---

const containerStyle = { 
  padding: '60px 20px', 
  background: 'linear-gradient(135deg, #f0f7f1 0%, #ffffff 100%)', 
  minHeight: '100vh', 
  fontFamily: 'Segoe UI, Roboto, sans-serif',
  position: 'relative',
  overflow: 'hidden'
};

const bgBlob1 = { position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: '#e8f5e9', borderRadius: '50%', zIndex: 0, opacity: 0.6 };
const bgBlob2 = { position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', background: '#f1f8e9', borderRadius: '50%', zIndex: 0, opacity: 0.5 };

const headerSectionStyle = { maxWidth: '1300px', margin: '0 auto 50px auto', textAlign: 'left', position: 'relative', zIndex: 1 };
const headingStyle = { color: '#1b5e20', margin: 0, fontSize: '3rem', fontWeight: '800', letterSpacing: '-1px' };
const proBadge = { fontSize: '0.9rem', verticalAlign: 'middle', backgroundColor: '#27ae60', color: 'white', padding: '4px 12px', borderRadius: '20px', marginLeft: '15px' };

const ribbonStyle = { 
  maxWidth: '1300px', 
  margin: '0 auto 40px auto', 
  display: 'flex', 
  justifyContent: 'space-between', 
  backgroundColor: 'rgba(255,255,255,0.8)', 
  padding: '10px 30px', 
  borderRadius: '15px', 
  boxShadow: '0 8px 32px rgba(0,0,0,0.05)', 
  backdropFilter: 'blur(8px)', 
  border: '1px solid rgba(255,255,255,0.3)', 
  position: 'relative', 
  zIndex: 1000, // Elevated to stay above cards
};

const iconWrapperStyle = { position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', padding: '15px 20px', borderRadius: '12px', transition: 'all 0.3s ease' };
const moduleIconStyle = { fontSize: '2rem', marginBottom: '8px' };
const moduleLabelStyle = { fontSize: '0.8rem', fontWeight: '700', color: '#2e7d32', textTransform: 'uppercase', letterSpacing: '0.5px' };

const tooltipStyle = { 
  position: 'absolute', 
  top: '95px', 
  width: '260px', 
  backgroundColor: '#fff', 
  padding: '20px', 
  borderRadius: '12px', 
  boxShadow: '0 15px 40px rgba(0,0,0,0.15)', 
  border: '1px solid #e0eadd', 
  zIndex: 9999, // Force to the absolute front
  textAlign: 'left' 
};
const clickPrompt = { color: '#27ae60', fontWeight: 'bold', marginTop: '12px', fontSize: '0.75rem', borderTop: '1px solid #eee', paddingTop: '10px' };

const contentBoxStyle = { maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 };
const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' };

const cardStyle = { 
  padding: '60px 40px', borderRadius: '24px', backgroundColor: 'rgba(255,255,255,0.9)', 
  border: '1px solid #e0eadd', textAlign: 'center', transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  boxShadow: '0 10px 40px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center'
};

const iconCircleStyle = { width: '100px', height: '100px', backgroundColor: '#e8f5e9', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', marginBottom: '30px', transform: 'rotate(-10deg)' };
const cardTitleStyle = { color: '#1b5e20', marginBottom: '20px', fontSize: '1.8rem', fontWeight: '700' };
const cardTextStyle = { color: '#666', lineHeight: '1.8', marginBottom: '40px', fontSize: '1.05rem' };

const greenButtonStyle = { backgroundColor: '#27ae60', color: 'white', border: 'none', padding: '18px 0', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', width: '100%', boxShadow: '0 10px 20px rgba(39,174,96,0.2)' };
const outlineButtonStyle = { backgroundColor: 'transparent', color: '#27ae60', border: '2.5px solid #27ae60', padding: '16px 0', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', width: '100%' };

const footerBarStyle = { marginTop: '50px', padding: '20px 30px', backgroundColor: '#fff', borderRadius: '15px', display: 'flex', alignItems: 'center', fontSize: '0.9rem', color: '#666', border: '1px solid #eee' };
const statusPulse = { width: '10px', height: '10px', backgroundColor: '#27ae60', borderRadius: '50%', marginRight: '12px', boxShadow: '0 0 8px #27ae60' };

export default MainHub;