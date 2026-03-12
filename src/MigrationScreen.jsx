import React from 'react';

const MigrationScreen = ({ onBack }) => {
  const metrics = [
    { label: "ECC T-Codes mapped", value: "2,400+", icon: "🔄" },
    { label: "Fiori Replacements", value: "850+", icon: "📱" },
    { label: "Time Reduction", value: "65%", icon: "⏱️" },
    { label: "Mapping Accuracy", value: "99.8%", icon: "🎯" }
  ];

  return (
    <div style={styles.containerStyle}>
      <div style={styles.headerNav}>
        <div style={styles.brandBox}>
          <span style={styles.sectionLabel}>Role Management</span>
          <h1 style={styles.titleStyle}>S/4HANA <span style={styles.accentText}>Migration</span></h1>
        </div>
        <button onClick={onBack} style={styles.backButton}>← Back to Main Menu</button>
      </div>

      <div style={styles.mainGrid}>
        {/* Left Column: The Narrative & Rules */}
        <div style={styles.infoCard}>
          <h2 style={styles.cardHeading}>Established Migration Rules</h2>
          <p style={styles.paragraph}>
            We have established rules for the determination of replacement tcodes and fiori apps for 
            <strong> ECC to S4HANA Migration</strong>. We not only propose transaction replacements 
            but also Fiori app replacements for transactions and Fiori app replacements for 
            obsolete apps as well.
          </p>
          <div style={styles.divider}></div>
          <p style={styles.paragraph}>
            This defined set of rules helps in <strong>significant reduction</strong> of time taken 
            during analysis. For S/4HANA role designing, we take into account the 
            user's full current access to design a <strong>complete and seamless role</strong>.
          </p>
          
          <div style={styles.statsRow}>
            {metrics.map((m, i) => (
              <div key={i} style={styles.miniStat}>
                <span style={{fontSize: '1.5rem'}}>{m.icon}</span>
                <div>
                  <div style={styles.statVal}>{m.value}</div>
                  <div style={styles.statLab}>{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visualizations */}
        <div style={styles.chartCard}>
          <div style={styles.easeBadge}>✨ UPGRADE MADE EASY</div>
          <h3 style={styles.cardHeading}>Automation Impact</h3>
          
          {/* Velocity Comparison */}
          <div style={styles.chartPlaceholder}>
            <div style={styles.barLabel}>Manual Mapping (Weeks)</div>
            <div style={{...styles.barBase, width: '100%', backgroundColor: '#e2e8f0'}}></div>
            <div style={styles.barLabel}>Nexus Engine (Hours)</div>
            <div style={{...styles.barBase, width: '35%', backgroundColor: '#0070f3', boxShadow: '0 0 10px rgba(0,112,243,0.3)'}}></div>
          </div>

          <div style={{marginTop: '40px'}}>
            <h3 style={styles.cardHeading}>Replacement Logic</h3>
            <div style={styles.donutFlex}>
              <div style={styles.donutMock}>
                <div style={styles.donutInner}>99%</div>
              </div>
              <ul style={styles.legend}>
                <li style={styles.legendItem}><span style={{...styles.dot, background: '#0070f3'}}></span> T-Code to Fiori</li>
                <li style={styles.legendItem}><span style={{...styles.dot, background: '#1e293b'}}></span> T-Code to T-Code</li>
                <li style={styles.legendItem}><span style={{...styles.dot, background: '#94a3b8'}}></span> App to App</li>
              </ul>
            </div>
          </div>

          <div style={styles.aiAlert}>
            <strong>AI Note:</strong> Rule-set updated for S/4HANA 2023 FPS02 simplifies 14% of Finance role conversions automatically.
          </div>
        </div>
      </div>
    </div>
  );
};

// --- NEXUS STRATEGIC BLUE STYLES ---
const styles = {
  containerStyle: { padding: '60px', backgroundColor: '#f4f7fa', minHeight: '100vh', fontFamily: '"Inter", sans-serif' },
  headerNav: { maxWidth: '1300px', margin: '0 auto 40px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  brandBox: { display: 'flex', flexDirection: 'column' },
  sectionLabel: { fontSize: '0.75rem', fontWeight: '800', color: '#0070f3', textTransform: 'uppercase', letterSpacing: '1.5px' },
  titleStyle: { fontSize: '2.5rem', fontWeight: '900', color: '#1a2b3b', margin: 0, letterSpacing: '-1.5px' },
  accentText: { color: '#0070f3' },
  backButton: { padding: '12px 24px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#1a2b3b', cursor: 'pointer', fontWeight: 'bold', transition: '0.2s' },
  mainGrid: { maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '30px' },
  infoCard: { background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' },
  chartCard: { background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', position: 'relative' },
  easeBadge: { position: 'absolute', top: '20px', right: '20px', backgroundColor: '#f0f7ff', color: '#0070f3', padding: '6px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 'bold' },
  cardHeading: { color: '#1a2b3b', fontSize: '1.4rem', fontWeight: '800', marginBottom: '20px' },
  paragraph: { lineHeight: '1.7', color: '#475569', fontSize: '1.05rem', marginBottom: '20px' },
  divider: { height: '1px', background: '#f1f5f9', margin: '20px 0' },
  statsRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' },
  miniStat: { display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9' },
  statVal: { fontWeight: '900', fontSize: '1.3rem', color: '#1e293b' },
  statLab: { fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: '700' },
  chartPlaceholder: { marginTop: '20px' },
  barBase: { height: '10px', borderRadius: '5px', margin: '8px 0 20px 0' },
  barLabel: { fontSize: '0.85rem', fontWeight: '700', color: '#64748b' },
  donutFlex: { display: 'flex', alignItems: 'center', gap: '40px', marginTop: '20px' },
  donutMock: { width: '100px', height: '100px', borderRadius: '50%', border: '12px solid #0070f3', borderLeftColor: '#1e293b', borderTopColor: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  donutInner: { fontWeight: '900', color: '#1a2b3b', fontSize: '1.1rem' },
  legend: { listStyle: 'none', padding: 0, margin: 0 },
  legendItem: { display: 'flex', alignItems: 'center', marginBottom: '8px', fontSize: '0.9rem', color: '#475569', fontWeight: '500' },
  dot: { display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', marginRight: '10px' },
  aiAlert: { marginTop: '30px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #0070f3', fontSize: '0.85rem', color: '#475569', lineHeight: '1.4' }
};

export default MigrationScreen;