import React from 'react';

const DesignerFlow = ({ onBack }) => {
  const steps = [
    { 
      id: 1, title: "Usage History", subtitle: "Snapshot Analysis", 
      stats: "100% Data Integrity", 
      desc: "Baseline Active User Actions globally to provide a foundation for intelligent role engineering.", icon: "📥", isAI: false 
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
    <div style={styles.containerStyle}>
      <div style={styles.headerContainer}>
        <div style={styles.brandBox}>
          <span style={styles.sectionLabel}>Role Management</span>
          <h1 style={styles.titleStyle}>Role <span style={styles.engineText}>Designer</span></h1>
          <div style={styles.liveStatus}>
            <span style={styles.pulseDot}></span> 
            DESIGNER ENGINE ONLINE
          </div>
        </div>
        <button onClick={onBack} style={styles.exitButton}>← Back to Main Menu</button>
      </div>

      <div style={styles.gridWrapper}>
        {steps.map((step) => (
          <div key={step.id} style={{
            ...styles.glassCard,
            borderTop: step.isAI ? '4px solid #10b981' : '4px solid #cbdad2'
          }}>
            <div style={styles.cardHeader}>
              <div style={styles.idCircle}>{step.id}</div>
              {step.isAI && <div style={styles.aiTag}>AI AUGMENTED</div>}
              <div style={styles.iconBox}>{step.icon}</div>
            </div>

            <h3 style={styles.stepTitle}>{step.title}</h3>
            <div style={styles.statChip}>{step.stats}</div>
            <p style={styles.stepDesc}>{step.desc}</p>
            
            <div style={styles.cardFooter}>
               <span style={styles.subLabel}>{step.subtitle}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.infoBar}>
         <div style={styles.infoItem}><strong>GLOBAL KPI:</strong> 85% REDUCTION IN ROLE BUILD TIME</div>
         <div style={styles.infoItem}><strong>PROTOCOL:</strong> S/4HANA COMPLIANT V3.0</div>
      </div>
    </div>
  );
};

// --- UPDATED FOREST & MINT THEME STYLES ---
const styles = {
  containerStyle: { 
    padding: '60px', 
    backgroundColor: '#f9fdfc', 
    minHeight: '100vh', 
    fontFamily: '"Inter", sans-serif', 
    color: '#022c22',
    position: 'relative'
  },
  headerContainer: { 
    maxWidth: '1300px', 
    margin: '0 auto 60px auto', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  brandBox: { display: 'flex', flexDirection: 'column', gap: '2px' },
  sectionLabel: { 
    fontSize: '0.75rem', 
    fontWeight: '900', 
    color: '#059669', 
    textTransform: 'uppercase', 
    letterSpacing: '2px' 
  },
  titleStyle: { fontSize: '2.5rem', fontWeight: '900', margin: 0, letterSpacing: '-1.5px', color: '#022c22' },
  engineText: { color: '#059669' },
  liveStatus: { 
    fontSize: '0.7rem', 
    color: '#64748b', 
    fontWeight: 'bold', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '8px', 
    marginTop: '5px' 
  },
  pulseDot: { 
    width: '8px', 
    height: '8px', 
    backgroundColor: '#10b981', 
    borderRadius: '50%', 
    boxShadow: '0 0 8px rgba(16,185,129,0.5)' 
  },
  exitButton: { 
    padding: '12px 24px', 
    borderRadius: '12px', 
    border: '1px solid #cbdad2', 
    background: '#fff', 
    color: '#022c22', 
    cursor: 'pointer', 
    fontSize: '0.85rem', 
    fontWeight: '700', 
    transition: '0.2s',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
  },
  gridWrapper: { 
    maxWidth: '1300px', 
    margin: '0 auto', 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '20px' 
  },
  glassCard: {
    background: '#fff', 
    borderRadius: '20px', 
    padding: '30px', 
    border: '1px solid #e2e8f0',
    display: 'flex', 
    flexDirection: 'column', 
    gap: '12px',
    boxShadow: '0 10px 15px -3px rgba(2, 44, 34, 0.05)'
  },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  idCircle: { color: '#059669', fontWeight: '900', fontSize: '1.1rem', opacity: 0.2 },
  aiTag: { 
    backgroundColor: '#059669', 
    color: '#fff', 
    fontSize: '0.6rem', 
    fontWeight: '900', 
    padding: '3px 8px', 
    borderRadius: '4px', 
    letterSpacing: '0.5px' 
  },
  iconBox: { fontSize: '2.2rem' },
  stepTitle: { margin: 0, fontSize: '1.25rem', color: '#022c22', fontWeight: '800' },
  statChip: { 
    backgroundColor: '#ecfdf5', 
    color: '#065f46', 
    padding: '4px 10px', 
    borderRadius: '6px', 
    fontSize: '0.8rem', 
    fontWeight: '700', 
    width: 'fit-content' 
  },
  stepDesc: { fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', margin: 0 },
  cardFooter: { marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid #f1fcf8' },
  subLabel: { fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '0.5px' },
  infoBar: { 
    maxWidth: '1300px', 
    margin: '50px auto 0 auto', 
    border: '1px solid #cbdad2', 
    padding: '18px 30px', 
    borderRadius: '16px', 
    display: 'flex', 
    justifyContent: 'space-between', 
    color: '#475569', 
    fontSize: '0.8rem', 
    background: '#fff' 
  },
  infoItem: { display: 'flex', gap: '8px' }
};

export default DesignerFlow;