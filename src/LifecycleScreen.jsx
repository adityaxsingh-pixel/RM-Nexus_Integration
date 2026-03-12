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
          <span style={styles.sectionLabel}>Role Management</span>
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
                      {/* Updated Gradient to Green */}
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ecfdf5" />
                  <XAxis dataKey="month" tick={{fontSize: 10, fill: '#64748b'}} axisLine={false} />
                  <YAxis tick={{fontSize: 10, fill: '#64748b'}} axisLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="manual" stroke="#94a3b8" fill="#f1f5f9" name="Traditional SAP" />
                  <Area type="monotone" dataKey="nexus" stroke="#10b981" fill="url(#colorNexus)" name="RM Operator" />
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

// --- UPDATED GREEN & WHITE STYLES ---
const styles = {
  containerStyle: { 
    padding: '60px', 
    backgroundColor: '#f9fdfc', 
    minHeight: '100vh', 
    fontFamily: '"Inter", sans-serif' 
  },
  headerNav: { 
    maxWidth: '1300px', 
    margin: '0 auto 40px auto', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  brandBox: { display: 'flex', flexDirection: 'column' },
  sectionLabel: { 
    fontSize: '0.75rem', 
    fontWeight: '900', 
    color: '#059669', 
    textTransform: 'uppercase', 
    letterSpacing: '2px' 
  },
  titleStyle: { 
    fontSize: '2.5rem', 
    fontWeight: '900', 
    color: '#022c22', 
    margin: 0, 
    letterSpacing: '-1.5px' 
  },
  accentText: { color: '#059669' },
  backButton: { 
    padding: '12px 24px', 
    borderRadius: '12px', 
    border: '1px solid #cbdad2', 
    background: '#fff', 
    color: '#022c22', 
    cursor: 'pointer', 
    fontWeight: '700' 
  },
  mainGrid: { 
    maxWidth: '1300px', 
    margin: '0 auto', 
    display: 'grid', 
    gridTemplateColumns: '1.2fr 0.8fr', 
    gap: '30px' 
  },
  infoCard: { 
    background: '#fff', 
    padding: '40px', 
    borderRadius: '24px', 
    border: '1px solid #e5e7eb', 
    boxShadow: '0 10px 15px -3px rgba(2, 44, 34, 0.05)' 
  },
  cardHeading: { 
    color: '#022c22', 
    fontSize: '1.4rem', 
    fontWeight: '800', 
    marginBottom: '15px' 
  },
  paragraph: { 
    lineHeight: '1.7', 
    color: '#334155', 
    fontSize: '1.05rem', 
    marginBottom: '30px' 
  },
  featureGrid: { 
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    gap: '20px' 
  },
  featureItem: { 
    padding: '20px', 
    borderRadius: '16px', 
    background: '#f1fcf8', 
    border: '1px solid #d1fae5' 
  },
  featureHeader: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: '12px' 
  },
  featureIcon: { fontSize: '1.5rem' },
  featureTag: { 
    fontSize: '0.6rem', 
    fontWeight: '900', 
    backgroundColor: '#d1fae5', 
    color: '#065f46', 
    padding: '3px 8px', 
    borderRadius: '4px' 
  },
  featureTitle: { fontWeight: '800', color: '#064e3b', marginBottom: '8px' },
  featureDesc: { fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5' },
  chartColumn: { display: 'flex', flexDirection: 'column', gap: '25px' },
  chartCard: { 
    background: '#fff', 
    padding: '30px', 
    borderRadius: '24px', 
    border: '1px solid #e5e7eb' 
  },
  chartTitle: { 
    fontSize: '0.9rem', 
    fontWeight: '800', 
    color: '#022c22', 
    marginBottom: '20px', 
    textTransform: 'uppercase', 
    letterSpacing: '0.5px' 
  },
  chartInsight: { 
    marginTop: '20px', 
    padding: '15px', 
    background: '#ecfdf5', 
    borderRadius: '12px', 
    fontSize: '0.85rem', 
    color: '#065f46' 
  },
  statsBox: { 
    background: '#064e3b', 
    padding: '30px', 
    borderRadius: '24px', 
    color: '#fff' 
  },
  statLine: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    padding: '10px 0', 
    borderBottom: '1px solid rgba(255,255,255,0.1)' 
  },
  statLabel: { color: '#d1fae5', fontSize: '0.85rem', fontWeight: '600' },
  statValue: { color: '#fff', fontWeight: '900', fontSize: '0.9rem' }
};

export default LifecycleScreen;