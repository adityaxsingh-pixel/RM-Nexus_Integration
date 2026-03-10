import React from 'react';

const DesignerFlow = ({ onBack }) => {
  const steps = [
    { 
      id: 1, title: "Data Baseline", subtitle: "Snapshot Analysis", 
      stats: "100% Data Integrity", 
      desc: "Baseline existing authorizations for a 1:1 delta comparison.", icon: "📥", isAI: false 
    },
    { 
      id: 2, title: "Usage Intelligence", subtitle: "AI Segmentation", 
      stats: "Active User Actions analyzed", 
      desc: "Identify 'Highly Used' and 'Display-only' access based on trace data.", icon: "🧠", isAI: true 
    },
    { 
      id: 3, title: "Risk Pruning", subtitle: "Threat Decommissioning", 
      stats: "Avg. 22% SoD Reduction", 
      desc: "Strip unused transactions that carry high SoD or License weight.", icon: "✂️", isAI: true 
    },
    { 
      id: 4, title: "Compliance Shield", subtitle: "ARA Validation", 
      stats: "0 Conflict Tolerance", 
      desc: "Automated check against SoD (ARA) and RISE Licensing metrics.", icon: "🛡️", isAI: false 
    },
    { 
      id: 5, title: "Intelligent Build", subtitle: "Predictive Mapping", 
      stats: "99.4% Build Accuracy", 
      desc: "Trace record mapping suggests missing objects automatically.", icon: "✨", isAI: true 
    },
    { 
      id: 6, title: "Governance Flow", subtitle: "CCM Integration", 
      stats: "Audit-Ready Logs", 
      desc: "Integration with Continuous Control Monitoring for sign-off.", icon: "⚖️", isAI: false 
    },
    { 
      id: 7, title: "One-Click Deploy", subtitle: "Cloud Generation", 
      stats: "Instant DEV Push", 
      desc: "Push to SAP Development environment instantly via RFC.", icon: "⚡", isAI: false 
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={glowBg}></div>
      
      <div style={headerContainer}>
        <div style={brandBox}>
          <h1 style={titleStyle}>Role <span style={engineText}>Designer</span></h1>
          <div style={liveStatus}><span style={pulseDot}></span> ENGINE ACTIVE</div>
        </div>
        <button onClick={onBack} style={exitButton}>← BACK TO MAIN MENU</button>
      </div>

      <div style={gridWrapper}>
        {steps.map((step) => (
          <div key={step.id} style={{
            ...glassCard,
            borderTop: step.isAI ? '4px solid #27ae60' : '4px solid #e0eadd'
          }}>
            <div style={cardHeader}>
              <div style={idCircle}>{step.id}</div>
              {step.isAI && <div style={aiTag}>AI CORE</div>}
              <div style={iconBox}>{step.icon}</div>
            </div>

            <h3 style={stepTitle}>{step.title}</h3>
            <div style={statChip}>{step.stats}</div>
            <p style={stepDesc}>{step.desc}</p>
            
            <div style={cardFooter}>
               <span style={subLabel}>{step.subtitle}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={infoBar}>
         <div style={infoItem}><strong>GLOBAL KPI:</strong> 85% REDUCTION IN ROLE BUILD TIME</div>
         <div style={infoItem}><strong>ENGINE:</strong> SAP S/4HANA COMPLIANT V3.0</div>
      </div>
    </div>
  );
};

// --- CLEAN GREEN & WHITE STYLES ---

const containerStyle = { 
  padding: '60px', 
  backgroundColor: '#f8faf9', 
  minHeight: '100vh', 
  fontFamily: 'Segoe UI, Inter, sans-serif', 
  color: '#333', 
  position: 'relative', 
  overflow: 'hidden' 
};

const glowBg = {
  position: 'absolute', top: '-10%', left: '50%', width: '800px', height: '600px',
  background: 'radial-gradient(circle, rgba(39,174,96,0.08) 0%, transparent 70%)',
  transform: 'translateX(-50%)', zIndex: 0
};

const headerContainer = { maxWidth: '1300px', margin: '0 auto 60px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 };
const brandBox = { display: 'flex', flexDirection: 'column', gap: '5px' };
const titleStyle = { fontSize: '2.5rem', fontWeight: '900', margin: 0, letterSpacing: '-1.5px', color: '#1b5e20' };
const engineText = { color: '#27ae60', marginLeft: '8px' };
const liveStatus = { fontSize: '0.75rem', color: '#27ae60', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '1px' };
const pulseDot = { width: '8px', height: '8px', backgroundColor: '#27ae60', borderRadius: '50%', boxShadow: '0 0 10px rgba(39,174,96,0.5)' };

const exitButton = { padding: '12px 24px', borderRadius: '8px', border: '2px solid #27ae60', background: '#fff', color: '#27ae60', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold', transition: '0.2s' };

const gridWrapper = { 
  maxWidth: '1300px', margin: '0 auto', display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', position: 'relative', zIndex: 1 
};

const glassCard = {
  background: '#fff', 
  borderRadius: '16px', padding: '30px', border: '1px solid #e0eadd',
  display: 'flex', flexDirection: 'column', gap: '15px', transition: '0.3s',
  boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
};

const cardHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' };
const idCircle = { color: '#27ae60', fontWeight: '900', fontSize: '1.2rem', opacity: 0.3 };
const aiTag = { backgroundColor: '#1b5e20', color: '#fff', fontSize: '0.65rem', fontWeight: '900', padding: '4px 10px', borderRadius: '4px', letterSpacing: '1px' };
const iconBox = { fontSize: '2.5rem' };

const stepTitle = { margin: 0, fontSize: '1.4rem', color: '#1b5e20', fontWeight: '700' };
const statChip = { backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '5px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 'bold', width: 'fit-content' };
const stepDesc = { fontSize: '0.95rem', color: '#555', lineHeight: '1.6', margin: 0 };

const cardFooter = { marginTop: 'auto', paddingTop: '15px', borderTop: '1px solid #f0f0f0' };
const subLabel = { fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', fontWeight: 'bold' };

const infoBar = { maxWidth: '1300px', margin: '60px auto 0 auto', border: '1px solid #e0eadd', padding: '20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '0.85rem', background: '#fff' };
const infoItem = { display: 'flex', gap: '10px' };

export default DesignerFlow;