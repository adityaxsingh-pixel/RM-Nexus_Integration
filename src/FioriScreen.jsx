import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const FioriScreen = ({ onBack }) => {
  // Data: Comparison of manual SAP utility steps vs. RM Automation
  const efficiencyData = [
    { task: 'Catalog Creation', manual: 15, rm: 2 },
    { task: 'Space/Page Modeling', manual: 25, rm: 3 },
    { task: 'Role Mapping', manual: 12, rm: 1 },
    { task: 'Transport Prep', manual: 10, rm: 1 },
  ];

  const valueProps = [
    { 
      title: "Intelligent TM Modeling", 
      desc: "Automated Target Mapping based on actual transaction history, eliminating technical guesswork in Fiori Tile assignments.",
      icon: "🎯"
    },
    { 
      title: "Bulk Role Designer", 
      desc: "Mass-assign Catalogs to Front-End (FEB) roles with automated validation against Back-End authorization objects.",
      icon: "📦"
    },
    { 
      title: "History-Driven UX", 
      desc: "Model your Fiori Launchpad based on real 'Change History' and 'Usage History' to maintain a lean, performance-optimized UX.",
      icon: "📜"
    }
  ];

  return (
    <div style={styles.containerStyle}>
      {/* Header */}
      <div style={styles.headerNav}>
        <div style={styles.brandBox}>
          <span style={styles.sectionLabel}>Role Management</span>
          <h1 style={styles.titleStyle}>Fiori <span style={styles.accentText}>Architect</span></h1>
        </div>
        <button onClick={onBack} style={styles.backButton}>← Back to Main Menu</button>
      </div>

      <div style={styles.mainGrid}>
        {/* Left Column: The Transformation Story */}
        <div style={styles.infoCard}>
          <div style={styles.badge}>REPLACING MANUAL UTILITIES</div>
          <h2 style={styles.cardHeading}>Automated UX Engineering</h2>
          <p style={styles.paragraph}>
            The <strong>RM Engine</strong> consolidates 20+ manual SAP utilities—including Modeling, Matrix, and Buffer Jobs—into a single, integrated architect module.
          </p>
          
          <div style={styles.valueGrid}>
            {valueProps.map((prop, i) => (
              <div key={i} style={styles.valueItem}>
                <div style={styles.valueIcon}>{prop.icon}</div>
                <div>
                  <div style={styles.valueTitle}>{prop.title}</div>
                  <div style={styles.valueDesc}>{prop.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Speed Analytics */}
        <div style={styles.chartColumn}>
          <div style={styles.chartCard}>
            <h3 style={styles.chartTitle}>Process Velocity (Steps per Task)</h3>
            <div style={{ height: '280px', width: '100%' }}>
              <ResponsiveContainer>
                <BarChart data={efficiencyData} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="task" type="category" tick={{fontSize: 11, fontWeight: 700, fill: '#64748b'}} axisLine={false} width={130} />
                  <Tooltip cursor={{fill: '#f8fafc'}} />
                  <Bar dataKey="manual" name="Manual SAP Tooling" fill="#cbd5e1" radius={[0, 4, 4, 0]} barSize={12} />
                  <Bar dataKey="rm" name="RM Automation" fill="#0070f3" radius={[0, 4, 4, 0]} barSize={12} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={styles.chartLegend}>
              <div style={styles.legendItem}><span style={styles.manualDot}></span> Manual SAP Steps</div>
              <div style={styles.legendItem}><span style={styles.rmDot}></span> RM Optimization</div>
            </div>
          </div>

          <div style={styles.darkNote}>
            <strong>Architect Intelligence:</strong> RM analysis of Launchpad history can reduce tile redundancy by up to 40% while ensuring 100% functional coverage.
          </div>
        </div>
      </div>
    </div>
  );
};

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
  badge: { display: 'inline-block', backgroundColor: '#f0f7ff', color: '#0070f3', fontSize: '0.65rem', fontWeight: '900', padding: '4px 10px', borderRadius: '4px', marginBottom: '15px' },
  cardHeading: { color: '#1a2b3b', fontSize: '1.5rem', fontWeight: '800', marginBottom: '15px' },
  paragraph: { lineHeight: '1.7', color: '#475569', fontSize: '1.05rem', marginBottom: '30px' },
  valueGrid: { display: 'flex', flexDirection: 'column', gap: '20px' },
  valueItem: { display: 'flex', gap: '20px', padding: '15px', borderRadius: '16px', background: '#f8fafc', border: '1px solid #f1f5f9' },
  valueIcon: { fontSize: '1.5rem' },
  valueTitle: { fontWeight: '800', color: '#1e293b', marginBottom: '4px' },
  valueDesc: { fontSize: '0.85rem', color: '#64748b', lineHeight: '1.4' },
  chartColumn: { display: 'flex', flexDirection: 'column', gap: '25px' },
  chartCard: { background: '#fff', padding: '30px', borderRadius: '24px', border: '1px solid #e2e8f0' },
  chartTitle: { fontSize: '0.9rem', fontWeight: '800', color: '#1e293b', marginBottom: '20px', textTransform: 'uppercase' },
  chartLegend: { display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' },
  legendItem: { fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '5px' },
  manualDot: { width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' },
  rmDot: { width: '8px', height: '8px', borderRadius: '50%', background: '#0070f3' },
  darkNote: { background: '#0f172a', padding: '25px', borderRadius: '24px', color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6', borderLeft: '4px solid #0070f3' }
};

export default FioriScreen;