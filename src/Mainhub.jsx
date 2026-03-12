import React, { useState } from 'react';
import AuditDashboard from './AuditDashboard';
import UserAnalysis from './UserAnalysis';
import DesignerFlow from './DesignerFlow';
import MigrationScreen from './MigrationScreen';
import LifecycleScreen from './LifecycleScreen';
import FioriScreen from './FioriScreen';
import TestingScreen from './TestingScreen';
import DeriverScreen from './DeriverScreen';

const MainHub = () => {
  const [view, setView] = useState('MENU');

  const engines = [
    { id: 'DESIGNER', icon: '💎', title: 'Designer', desc: 'Precision role engineering.' },
    { id: 'MIGRATION', icon: '✈️', title: 'Migration', desc: 'S/4HANA transition rules.' },
    { id: 'LIFECYCLE', icon: '🔄', title: 'Lifecycle', desc: 'Role maintenance.' },
    { id: 'FIORI', icon: '🌐', title: 'Fiori', desc: 'Modern UX architecture.' },
    { id: 'TESTING', icon: '🛡️', title: 'Testing', desc: 'Zero-risk validation.' },
    { id: 'DERIVER', icon: '🌳', title: 'Deriver', desc: 'Org-level automation.' }
  ];

  const renderMainMenu = () => (
    <div style={styles.pageBg}>
      <div style={styles.contentWrapper}>
        
        {/* Header */}
        <div style={styles.header}>
          <div>
            <h1 style={styles.mainTitle}>Role Management <span style={styles.versionTag}>v2026Q3</span></h1>
            <p style={styles.subHeadingText}>Advanced Authorization & Migration Intelligence</p>
          </div>
          <div style={styles.statusBadge}>
             <div style={styles.onlineDot}></div>
             SYSTEM ACTIVE
          </div>
        </div>

        {/* Phase 1: Diagnostics */}
        <div style={styles.heroSection}>
          <div style={styles.heroText}>
            <h2 style={styles.sectionLabel}>Phase 1: The Diagnostic Core</h2>
            <h3 style={styles.heroHeading}>Quantify Risk. <br/><span style={{color: '#10b981'}}>Eliminate Excess.</span></h3>
            <p style={styles.heroSub}>
              Modern SAP landscapes suffer from "Role Bloat." Our diagnostic tools analyze real-time 
              user telemetry to identify exactly where authorizations exceed needs.
            </p>
          </div>
          
          <div style={styles.diagnosticGrid}>
            <div style={styles.diagCard} onClick={() => setView('USER_ANALYSIS')}>
              <div style={styles.diagIcon}>👤</div>
              <div style={{flex: 1}}>
                <h4 style={styles.diagTitle}>User Analysis</h4>
                <p style={styles.diagDesc}>Bridge the gap between assigned access and real-world usage.</p>
                <div style={styles.launchLink}>Initialize Diagnostics →</div>
              </div>
            </div>

            <div style={styles.diagCard} onClick={() => setView('ROLE_OPT')}>
              <div style={styles.diagIcon}>⚡</div>
              <div style={{flex: 1}}>
                <h4 style={styles.diagTitle}>Role Optimization</h4>
                <p style={styles.diagDesc}>Automate technical debt removal and T-Code decommissioning.</p>
                <div style={styles.launchLink}>Optimize Infrastructure →</div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2: Execution */}
        <div style={styles.solutionSection}>
          <h2 style={styles.sectionLabel}>Phase 2: Execution Modules</h2>
          <div style={styles.engineGrid}>
            {engines.map((eng) => (
              <div key={eng.id} style={styles.engineTile} onClick={() => setView(eng.id)}>
                <div style={styles.tileIcon}>{eng.icon}</div>
                <div style={styles.tileContent}>
                  <div style={styles.tileTitle}>{eng.title}</div>
                  <div style={styles.tileDesc}>{eng.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Router
  switch (view) {
    case 'ROLE_OPT': return <AuditDashboard onBack={() => setView('MENU')} />;
    case 'USER_ANALYSIS': return <UserAnalysis onBack={() => setView('MENU')} />;
    case 'DESIGNER': return <DesignerFlow onBack={() => setView('MENU')} />;
    case 'MIGRATION': return <MigrationScreen onBack={() => setView('MENU')} />;
    case 'LIFECYCLE': return <LifecycleScreen onBack={() => setView('MENU')} />;
    case 'FIORI': return <FioriScreen onBack={() => setView('MENU')} />;
    case 'TESTING': return <TestingScreen onBack={() => setView('MENU')} />;
    case 'DERIVER': return <DeriverScreen onBack={() => setView('MENU')} />;
    default: return renderMainMenu();
  }
};
// --- UPDATED "FOREST & MINT" THEME ---
const styles = {
  // Page background is now a very pale mint to reduce eye strain
  pageBg: { backgroundColor: '#f9fdfc', minHeight: '100vh', fontFamily: 'sans-serif', padding: '60px 20px' },
  contentWrapper: { maxWidth: '1100px', margin: '0 auto' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px' },
  
  // Deep charcoal-green for titles
  mainTitle: { margin: 0, fontSize: '2.4rem', fontWeight: '800', color: '#022c22' },
  versionTag: { fontSize: '0.75rem', backgroundColor: '#022c22', color: '#d1fae5', padding: '4px 12px', borderRadius: '6px', marginLeft: '10px', verticalAlign: 'middle' },
  subHeadingText: { color: '#475569', fontSize: '1rem', marginTop: '4px' },
  
  // Clean white badge with a sage border
  statusBadge: { display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#fff', padding: '8px 16px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 'bold', border: '1px solid #cbdad2', color: '#065f46' },
  onlineDot: { width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', boxShadow: '0 0 8px #10b981' },
  
  heroSection: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '80px' },
  
  // Using a vibrant Mint for accents
  sectionLabel: { fontSize: '0.7rem', fontWeight: '900', color: '#059669', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '15px' },
  heroHeading: { fontSize: '3rem', color: '#022c22', margin: 0, lineHeight: '1.1', fontWeight: '800' },
  heroSub: { color: '#334155', fontSize: '1.1rem', lineHeight: '1.6', marginTop: '20px' },
  
  diagnosticGrid: { display: 'flex', flexDirection: 'column', gap: '15px' },
  
  // Card looks "Floating" with a subtle sage shadow
  diagCard: { display: 'flex', gap: '20px', padding: '25px', backgroundColor: '#ffffff', borderRadius: '12px', cursor: 'pointer', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(2, 44, 34, 0.05)' },
  
  // Soft green icon backgrounds
  diagIcon: { fontSize: '1.8rem', width: '60px', height: '60px', backgroundColor: '#ecfdf5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #d1fae5' },
  diagTitle: { margin: '0 0 5px 0', fontSize: '1.2rem', fontWeight: '700', color: '#064e3b' },
  diagDesc: { margin: '0 0 12px 0', fontSize: '0.9rem', color: '#64748b' },
  launchLink: { fontSize: '0.8rem', fontWeight: '800', color: '#059669', textDecoration: 'underline', textUnderlineOffset: '4px' },
  
  solutionSection: { borderTop: '2px solid #ecfdf5', paddingTop: '50px' },
  engineGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '20px' },
  
  // Tiles have a slight green tint on the left border
  engineTile: { backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px', border: '1px solid #e2e8f0', borderLeft: '4px solid #10b981', cursor: 'pointer' },
  tileIcon: { fontSize: '1.5rem' },
  tileContent: { display: 'flex', flexDirection: 'column' },
  tileTitle: { fontWeight: '700', color: '#064e3b', fontSize: '1rem' },
  tileDesc: { fontSize: '0.8rem', color: '#64748b' }
};

export default MainHub;