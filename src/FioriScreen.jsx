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
      title: "Intelligent Tile Modeling", 
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
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ecfdf5" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="task" type="category" tick={{fontSize: 11, fontWeight: 700, fill: '#64748b'}} axisLine={false} width={130} />
                  <Tooltip cursor={{fill: '#f1fcf8'}} />
                  <Bar dataKey="manual" name="Manual SAP Tooling" fill="#cbdad2" radius={[0, 4, 4, 0]} barSize={12} />
                  <Bar dataKey="rm" name="RM Automation" fill="#10b981" radius={[0, 4, 4, 0]} barSize={12} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={styles.chartLegend}>
              <div style={styles.legendItem}><span style={styles.manualDot}></span> Manual SAP Steps</div>
              <div style={styles.legendItem}><span style={styles.rmDot}></span> RM Optimization</div>
            </div>
          </div>

          <div style={styles.darkNote}>
            <strong style={{color: '#fff'}}>Architect Intelligence:</strong> RM analysis of Launchpad history can reduce tile redundancy by up to 40% while ensuring 100% functional coverage.
          </div>
        </div>
      </div>
    </div>
  );
};

// --- UPDATED GREEN & WHITE STYLES ---
const styles = {
  containerStyle: { padding: '60px', backgroundColor: '#f9fdfc', minHeight: '100vh', fontFamily: '"Inter", sans-serif' },
  headerNav: { maxWidth: '1300px', margin: '0 auto 40px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  brandBox: { display: 'flex', flexDirection: 'column' },
  sectionLabel: { fontSize: '0.75rem', fontWeight: '900', color: '#059669', textTransform: 'uppercase', letterSpacing: '2px' },
  titleStyle: { fontSize: '2.5rem', fontWeight: '900', color: '#022c22', margin: 0, letterSpacing: '-1.5px' },
  accentText: { color: '#059669' },
  backButton: { padding: '12px 24px', borderRadius: '12px', border: '1px solid #cbdad2', background: '#fff', color: '#022c22', cursor: 'pointer', fontWeight: '700' },
  mainGrid: { maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' },
  infoCard: { background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #e5e7eb', boxShadow: '0 10px 15px -3px rgba(2, 44, 34, 0.05)' },
  badge: { display: 'inline-block', backgroundColor: '#ecfdf5', color: '#065f46', fontSize: '0.65rem', fontWeight: '900', padding: '4px 10px', borderRadius: '4px', marginBottom: '15px' },
  cardHeading: { color: '#022c22', fontSize: '1.5rem', fontWeight: '800', marginBottom: '15px' },
  paragraph: { lineHeight: '1.7', color: '#334155', fontSize: '1.05rem', marginBottom: '30px' },
  valueGrid: { display: 'flex', flexDirection: 'column', gap: '20px' },
  valueItem: { display: 'flex', gap: '20px', padding: '15px', borderRadius: '16px', background: '#f1fcf8', border: '1px solid #d1fae5' },
  valueIcon: { fontSize: '1.5rem' },
  valueTitle: { fontWeight: '800', color: '#064e3b', marginBottom: '4px' },
  valueDesc: { fontSize: '0.85rem', color: '#64748b', lineHeight: '1.4' },
  chartColumn: { display: 'flex', flexDirection: 'column', gap: '25px' },
  chartCard: { background: '#fff', padding: '30px', borderRadius: '24px', border: '1px solid #e5e7eb' },
  chartTitle: { fontSize: '0.9rem', fontWeight: '800', color: '#022c22', marginBottom: '20px', textTransform: 'uppercase' },
  chartLegend: { display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' },
  legendItem: { fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '5px' },
  manualDot: { width: '8px', height: '8px', borderRadius: '50%', background: '#cbdad2' },
  rmDot: { width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' },
  darkNote: { background: '#064e3b', padding: '25px', borderRadius: '24px', color: '#d1fae5', fontSize: '0.85rem', lineHeight: '1.6', borderLeft: '4px solid #10b981' }
};

export default FioriScreen;