import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';

const LifecycleScreen = ({ onBack }) => {
  // Data: Benefit of "Single Place Maintenance" vs Traditional (Manual)
  const maintenanceTrend = [
    { month: 'Week 1', manual: 100, nexus: 20 },
    { month: 'Week 2', manual: 120, nexus: 25 },
    { month: 'Week 3', manual: 150, nexus: 22 },
    { month: 'Week 4', manual: 180, nexus: 28 },
  ];

  const features = [
    { 
      title: "Composite Architect", 
      desc: "Create new composite roles and mass-assign single roles with inheritance mapping.", 
      icon: "🏗️", 
      tag: "Structure" 
    },
    { 
      title: "Object Injection", 
      desc: "Add Catalogs or T-Codes to existing roles. Automatic delta sync across all derived roles.", 
      icon: "💉", 
      tag: "Maintenance" 
    },
    { 
      title: "CCM Workflow", 
      desc: "Integrated Continuous Control Monitoring for audit-ready sign-offs on all changes.", 
      icon: "🔄", 
      tag: "Governance" 
    },
    { 
      title: "ARA Validation", 
      desc: "Real-time SoD scanning before a role is ever transported to Production.", 
      icon: "🛡️", 
      tag: "Compliance" 
    }
  ];

  return (
    <div style={styles.containerStyle}>
      {/* Header */}
      <div style={styles.headerNav}>
        <div style={styles.brandBox}>
          <span style={styles.sectionLabel}>Role Mangement</span>
          <h1 style={styles.titleStyle}>Role <span style={styles.accentText}>Lifecycle</span></h1>
        </div>
        <button onClick={onBack} style={styles.backButton}>← Back to Main Menu</button>
      </div>

      <div style={styles.mainGrid}>
        {/* Left Column: Management Capabilities */}
        <div style={styles.infoCard}>
          <h2 style={styles.cardHeading}>360° Role Maintenance</h2>
          <p style={styles.paragraph}>
            RM Lifecycle eliminates the need for multiple SAP screens (PFCG, GRAC, etc.). 
            Manage structures, content, and compliance from a single source of truth.
          </p>
          
          <div style={styles.featureGrid}>
            {features.map((f, i) => (
              <div key={i} style={styles.featureItem}>
                <div style={styles.featureHeader}>
                  <span style={styles.featureIcon}>{f.icon}</span>
                  <span style={styles.featureTag}>{f.tag}</span>
                </div>
                <div style={styles.featureTitle}>{f.title}</div>
                <div style={styles.featureDesc}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Analytics & Impact */}
        <div style={styles.chartColumn}>
          <div style={styles.chartCard}>
            <h3 style={styles.chartTitle}>Maintenance Effort (Man-Hours)</h3>
            <div style={{ height: '200px', width: '100%' }}>
              <ResponsiveContainer>
                <AreaChart data={maintenanceTrend}>
                  <defs>
                    <linearGradient id="colorNexus" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0070f3" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0070f3" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{fontSize: 10}} axisLine={false} />
                  <YAxis tick={{fontSize: 10}} axisLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="manual" stroke="#94a3b8" fill="#e2e8f0" name="Traditional SAP" />
                  <Area type="monotone" dataKey="nexus" stroke="#0070f3" fill="url(#colorNexus)" name="Nexus Orchestrator" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div style={styles.chartInsight}>
              <strong>Impact:</strong> Single-pane management reduces maintenance overhead by <strong>84%</strong>.
            </div>
          </div>

          <div style={styles.statsBox}>
             <div style={styles.statLine}>
                <span style={styles.statLabel}>Audit Readiness</span>
                <span style={styles.statValue}>100%</span>
             </div>
             <div style={styles.statLine}>
                <span style={styles.statLabel}>Sync Latency</span>
                <span style={styles.statValue}>Real-time</span>
             </div>
             <div style={styles.statLine}>
                <span style={styles.statLabel}>Workflow Engine</span>
                <span style={styles.statValue}>CCM</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  containerStyle: { padding: '60px', backgroundColor: '#f4f7fa', minHeight: '100vh', fontFamily: '"Inter", sans-serif' },
  headerNav: { maxWidth: '1300px', margin: '0 auto 40px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  brandBox: { display: 'flex', flexDirection: 'column' },
  sectionLabel: { fontSize: '0.75rem', fontWeight: '800', color: '#0070f3', textTransform: 'uppercase', letterSpacing: '1.5px' },
  titleStyle: { fontSize: '2.5rem', fontWeight: '900', color: '#1a2b3b', margin: 0, letterSpacing: '-1.5px' },
  accentText: { color: '#0070f3' },
  backButton: { padding: '12px 24px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#1a2b3b', cursor: 'pointer', fontWeight: '700' },
  mainGrid: { maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' },
  infoCard: { background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' },
  cardHeading: { color: '#1a2b3b', fontSize: '1.4rem', fontWeight: '800', marginBottom: '15px' },
  paragraph: { lineHeight: '1.7', color: '#475569', fontSize: '1.05rem', marginBottom: '30px' },
  featureGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  featureItem: { padding: '20px', borderRadius: '16px', background: '#f8fafc', border: '1px solid #f1f5f9' },
  featureHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' },
  featureIcon: { fontSize: '1.5rem' },
  featureTag: { fontSize: '0.6rem', fontWeight: '900', backgroundColor: '#e2e8f0', color: '#64748b', padding: '3px 8px', borderRadius: '4px' },
  featureTitle: { fontWeight: '800', color: '#1e293b', marginBottom: '8px' },
  featureDesc: { fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5' },
  chartColumn: { display: 'flex', flexDirection: 'column', gap: '25px' },
  chartCard: { background: '#fff', padding: '30px', borderRadius: '24px', border: '1px solid #e2e8f0' },
  chartTitle: { fontSize: '0.9rem', fontWeight: '800', color: '#1e293b', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' },
  chartInsight: { marginTop: '20px', padding: '15px', background: '#f0f7ff', borderRadius: '12px', fontSize: '0.85rem', color: '#0070f3' },
  statsBox: { background: '#0f172a', padding: '30px', borderRadius: '24px', color: '#fff' },
  statLine: { display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  statLabel: { color: '#94a3b8', fontSize: '0.85rem', fontWeight: '600' },
  statValue: { color: '#fff', fontWeight: '900', fontSize: '0.9rem' }
};

export default LifecycleScreen;