import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie
} from 'recharts';

const DeriverScreen = ({ onBack }) => {
  // Data: Scaling impact of RM vs Manual creation
  const scaleData = [
    { name: '1 Org Unit', manual: 1, rm: 1 },
    { name: '10 Org Units', manual: 10, rm: 1 },
    { name: '50 Org Units', manual: 50, rm: 1 },
    { name: '100 Org Units', manual: 100, rm: 1 },
  ];

  const derivationSteps = [
    { 
      title: "Org Set Definition", 
      desc: "Define global Business Units, Company Levels, and Org Areas once. Reuse these sets across any functional parent role.", 
      icon: "🏢" 
    },
    { 
      title: "Smart Naming Patterns", 
      desc: "Define dynamic naming conventions using variables like [Parent_Role]_[Company]_[Region]. RM enforces consistency automatically.", 
      icon: "🏷️" 
    },
    { 
      title: "Mass Propagation", 
      desc: "Inject Org Set data into parent roles to generate hundreds of derived roles in a single execution cycle.", 
      icon: "🚀" 
    },
    { 
      title: "Inheritance Lock", 
      desc: "Changes to the Parent Role are instantly pushed to all derived instances while maintaining unique Org Level values.", 
      icon: "🔒" 
    }
  ];

  return (
    <div style={styles.containerStyle}>
      {/* Header */}
      <div style={styles.headerNav}>
        <div style={styles.brandBox}>
          <span style={styles.sectionLabel}>Role Management</span>
          <h1 style={styles.titleStyle}>Role <span style={styles.accentText}>Deriver</span></h1>
        </div>
        <button onClick={onBack} style={styles.backButton}>← Back to Main menu</button>
      </div>

      <div style={styles.mainGrid}>
        {/* Left Column: The Strategy */}
        <div style={styles.infoCard}>
          <div style={styles.badge}>REPLACING MANUAL PFCG DERIVATION</div>
          <h2 style={styles.cardHeading}>Hierarchical Org Mapping</h2>
          <p style={styles.paragraph}>
            RM transforms role derivation from a repetitive manual task into a <strong>scalable policy</strong>. 
            Define your Business Units once and let the engine handle the heavy lifting of role generation.
          </p>
          
          <div style={styles.stepGrid}>
            {derivationSteps.map((step, i) => (
              <div key={i} style={styles.stepCard}>
                <div style={styles.stepHeader}>
                  <span style={styles.stepIcon}>{step.icon}</span>
                  <span style={styles.stepNumber}>0{i+1}</span>
                </div>
                <div style={styles.stepTitle}>{step.title}</div>
                <div style={styles.stepDesc}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visualization of Effort */}
        <div style={styles.chartColumn}>
          <div style={styles.chartCard}>
            <h3 style={styles.chartTitle}>Maintenance Effort Scaling</h3>
            <div style={{ height: '250px', width: '100%' }}>
              <ResponsiveContainer>
                <BarChart data={scaleData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{fontSize: 11, fontWeight: 600}} axisLine={false} />
                  <YAxis tick={{fontSize: 11}} axisLine={false} />
                  <Tooltip cursor={{fill: '#f8fafc'}} />
                  <Bar dataKey="manual" name="Manual Maintenance" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={25} />
                  <Bar dataKey="rm" name="RM One-Go Derivation" fill="#0070f3" radius={[4, 4, 0, 0]} barSize={25} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p style={styles.chartInsight}>
              With RM, the effort to maintain 100 derived roles is identical to maintaining 1.
            </p>
          </div>

          {/* Derived Naming Logic Box */}
          <div style={styles.namingBox}>
             <h4 style={styles.namingTitle}>Dynamic Naming Logic</h4>
             <div style={styles.namingVisual}>
                <span style={styles.token}>PARENT_FIN_MGR</span>
                <span style={styles.plus}>+</span>
                <span style={styles.tokenOrg}>ORG_US_1000</span>
                <span style={styles.equal}>=</span>
                <span style={styles.tokenResult}>Z_FIN_MGR_US_1000</span>
             </div>
             <p style={styles.namingDesc}>
                Define prefixes, suffixes, and Org Set tokens to ensure 100% compliant naming across the landscape.
             </p>
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
  stepGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  stepCard: { padding: '20px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9' },
  stepHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '12px' },
  stepIcon: { fontSize: '1.5rem' },
  stepNumber: { color: '#e2e8f0', fontWeight: '900', fontSize: '1.2rem' },
  stepTitle: { fontWeight: '800', color: '#1e293b', marginBottom: '8px' },
  stepDesc: { fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5' },
  chartColumn: { display: 'flex', flexDirection: 'column', gap: '25px' },
  chartCard: { background: '#fff', padding: '30px', borderRadius: '24px', border: '1px solid #e2e8f0' },
  chartTitle: { fontSize: '0.9rem', fontWeight: '800', color: '#1e293b', marginBottom: '20px', textTransform: 'uppercase' },
  chartInsight: { marginTop: '15px', padding: '12px', background: '#eff6ff', borderRadius: '8px', fontSize: '0.8rem', color: '#0070f3', fontWeight: '600', textAlign: 'center' },
  namingBox: { background: '#0f172a', padding: '30px', borderRadius: '24px', color: '#fff' },
  namingTitle: { margin: '0 0 20px 0', fontSize: '0.9rem', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase' },
  namingVisual: { display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' },
  token: { padding: '6px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700' },
  tokenOrg: { padding: '6px 12px', background: '#0070f3', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700' },
  tokenResult: { padding: '6px 12px', background: '#10b981', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700' },
  plus: { fontWeight: 'bold', color: '#94a3b8' },
  equal: { fontWeight: 'bold', color: '#94a3b8' },
  namingDesc: { fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.5' }
};

export default DeriverScreen;