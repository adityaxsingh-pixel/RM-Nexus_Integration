import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  ComposedChart, Line, Cell, PieChart, Pie, Legend
} from 'recharts';

const UserAnalysis = ({ onBack }) => {
  // Data: The "Bloat" factor
  const bloatData = [
    { category: 'Actual Needed', unique: 50, overhead: 0 },
    { category: 'Current Assignment', unique: 50, overhead: 50 },
  ];

  // Data: Risk Mitigation Path
  const riskMitigation = [
    { stage: 'Legacy', risk: 100, color: '#f87171' }, // Soft Red
    { stage: 'Optimized', risk: 40, color: '#f59e0b' }, // Amber
    { stage: 'RM Shield', risk: 5, color: '#10b981' }, // Mint Green
  ];

  // Complexity Score
  const complexityData = [
    { name: 'Manual PFCG Roles', value: 400, fill: '#cbdad2' },
    { name: 'RM Optimized Set', value: 45, fill: '#059669' },
  ];

  // Security Debt over time
  const debtData = [
    { month: 'Jan', manualDebt: 20, rmDebt: 10 },
    { month: 'Feb', manualDebt: 35, rmDebt: 12 },
    { month: 'Mar', manualDebt: 55, rmDebt: 11 },
    { month: 'Apr', manualDebt: 85, rmDebt: 8 },
  ];

  return (
    <div style={styles.containerStyle}>
      {/* Header */}
      <div style={styles.headerNavStyle}>
        <div style={styles.brandBox}>
          <span style={styles.sectionLabel}>Impact Diagnostic of User</span>
          <h1 style={styles.headingStyle}>User Analysis: <span style={styles.accentText}>ASINGH</span></h1>
        </div>
        <button onClick={onBack} style={styles.backButtonStyle}>← Back to Main Menu</button>
      </div>

      <div style={styles.reportBoxStyle}>
        
        {/* ROW 1: THE REASONS TO CHANGE (KPIs) */}
        <div style={styles.kpiRowStyle}>
          <div style={styles.kpiCardStyle}>
            <span style={styles.kpiLabel}>License Waste</span>
            <div style={{...styles.kpiValue, color: '#ef4444'}}>$2,400/yr</div>
            <p style={styles.kpiSubText}>Over-privileged (Prof vs Core)</p>
          </div>
          <div style={styles.kpiCardStyle}>
            <span style={styles.kpiLabel}>Audit Exposure</span>
            <div style={{...styles.kpiValue, color: '#dc2626'}}>HIGH</div>
            <p style={styles.kpiSubText}>5 Unmitigated SoD Violations</p>
          </div>
          <div style={styles.kpiCardStyle}>
            <span style={styles.kpiLabel}>Role Proliferation</span>
            <div style={{...styles.kpiValue, color: '#f59e0b'}}>+120%</div>
            <p style={styles.kpiSubText}>Unnecessary Derived Roles</p>
          </div>
          <div style={styles.kpiCardStyle}>
            <span style={styles.kpiLabel}>Maintenance Delta</span>
            <div style={{...styles.kpiValue, color: '#059669'}}>-85%</div>
            <p style={styles.kpiSubText}>Effort saved with RM Engine</p>
          </div>
        </div>

        {/* ROW 2: USER-SPECIFIC DIAGNOSTICS */}
        <div style={styles.chartGridStyle}>
          <div style={styles.cardStyle}>
            <h3 style={styles.cardTitleStyle}>Usage vs. Assignment Bloat</h3>
            <div style={{height: '200px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bloatData} stackOffset="expand">
                  <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#64748b'}} />
                  <Tooltip />
                  <Bar dataKey="unique" stackId="a" fill="#10b981" name="Used T-Codes" />
                  <Bar dataKey="overhead" stackId="a" fill="#cbdad2" name="Ghost Assignments" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={styles.insightBox}>
              <strong>The "Ghost" Problem:</strong> 50% of this user's roles have not been accessed in 12 months. Redesigning to usage-based roles eliminates this attack surface.
            </div>
          </div>

          <div style={styles.cardStyle}>
            <h3 style={styles.cardTitleStyle}>Risk Mitigation Path</h3>
            <div style={{height: '200px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={riskMitigation}>
                  <XAxis dataKey="stage" axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#64748b'}} />
                  <Tooltip />
                  <Bar dataKey="risk" barSize={40}>
                    {riskMitigation.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Bar>
                  <Line type="monotone" dataKey="risk" stroke="#022c22" strokeWidth={2} dot={{fill: '#022c22'}} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div style={styles.insightBox}>
              <strong>Display/Maintain Split:</strong> RM automation can isolate 'Display' traffic, reducing audit conflicts by 95% without impacting productivity.
            </div>
          </div>
        </div>

        {/* ROW 3: SYSTEM SCALABILITY */}
        <div style={styles.chartGridStyle}>
          <div style={styles.cardStyle}>
            <h3 style={styles.cardTitleStyle}>Landscape Complexity Score</h3>
            <div style={{height: '200px', display: 'flex', alignItems: 'center'}}>
               <ResponsiveContainer width="60%" height="100%">
                  <PieChart>
                    <Pie data={complexityData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {complexityData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
               </ResponsiveContainer>
               <div style={{width: '40%', fontSize: '0.8rem', color: '#64748b'}}>
                  <div style={{marginBottom: '10px'}}><span style={{color: '#cbdad2'}}>■</span> 400 Legacy</div>
                  <div><span style={{color: '#059669'}}>■</span> 45 RM Master</div>
                  <p style={{marginTop: '15px', fontWeight: 'bold', color: '#022c22'}}>88% Reduction in Objects</p>
               </div>
            </div>
          </div>

          <div style={styles.cardStyle}>
            <h3 style={styles.cardTitleStyle}>Security Debt Accumulation</h3>
            <div style={{height: '200px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={debtData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ecfdf5" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 11, fill: '#64748b'}} />
                  <Tooltip />
                  <Legend iconType="circle" />
                  <Bar dataKey="manualDebt" name="Manual Debt" fill="#cbdad2" radius={[4,4,0,0]} />
                  <Bar dataKey="rmDebt" name="RM Controlled" fill="#10b981" radius={[4,4,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* FINAL STRATEGY BOX */}
        <div style={styles.strategyBoxStyle}>
          <div style={styles.strategyHeader}>
            <h3 style={{margin: 0, fontSize: '1.2rem', fontWeight: '900'}}>Redesign Implementation Plan</h3>
            <div style={styles.efficiencyBadge}>ROI: 4.2 MONTHS</div>
          </div>
          <div style={styles.benefitGrid}>
            <div style={styles.benefitItem}>
              <div style={styles.benefitIcon}>🧬</div>
              <div style={styles.benefitContent}>
                <h4 style={styles.benefitHeader}>Inheritance Logic</h4>
                <p style={styles.benefitPara}>Replace manual mapping with RM Org Sets. Change a value once; propagate to 500 derived roles instantly.</p>
              </div>
            </div>
            <div style={styles.benefitItem}>
              <div style={styles.benefitIcon}>📉</div>
              <div style={styles.benefitContent}>
                <h4 style={styles.benefitHeader}>License Clawback</h4>
                <p style={styles.benefitPara}>Automated removal of FI_MAINTAIN from 'Display-Only' users pays for the RM implementation in year one.</p>
              </div>
            </div>
            <div style={styles.benefitItem}>
              <div style={styles.benefitIcon}>⚖️</div>
              <div style={styles.benefitContent}>
                <h4 style={styles.benefitHeader}>Zero-Conflict GRC</h4>
                <p style={styles.benefitPara}>Move from reactive "Clean-up" to proactive "Shielding" using the Shadow Simulator's delta check.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  containerStyle: { padding: '60px 20px', backgroundColor: '#f9fdfc', minHeight: '100vh', fontFamily: '"Inter", sans-serif' },
  headerNavStyle: { maxWidth: '1300px', margin: '0 auto 40px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  brandBox: { display: 'flex', flexDirection: 'column' },
  sectionLabel: { fontSize: '0.75rem', fontWeight: '900', color: '#059669', textTransform: 'uppercase', letterSpacing: '2px' },
  headingStyle: { color: '#022c22', margin: '5px 0', fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-1.5px' },
  accentText: { color: '#059669' },
  backButtonStyle: { background: '#fff', border: '1px solid #cbdad2', color: '#022c22', padding: '12px 24px', borderRadius: '12px', cursor: 'pointer', fontWeight: '700', fontSize: '0.8rem' },
  reportBoxStyle: { maxWidth: '1300px', margin: '0 auto' },
  kpiRowStyle: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' },
  kpiCardStyle: { padding: '24px', borderRadius: '24px', backgroundColor: '#fff', border: '1px solid #e5e7eb', textAlign: 'left', boxShadow: '0 10px 15px -3px rgba(2, 44, 34, 0.05)' },
  kpiLabel: { fontSize: '0.7rem', fontWeight: '800', color: '#64748b', letterSpacing: '1px', textTransform: 'uppercase' },
  kpiValue: { fontSize: '1.6rem', fontWeight: '900', margin: '8px 0', letterSpacing: '-0.5px' },
  kpiSubText: { fontSize: '0.8rem', color: '#94a3b8', fontWeight: '600' },
  chartGridStyle: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '25px' },
  cardStyle: { padding: '30px', borderRadius: '28px', border: '1px solid #e5e7eb', backgroundColor: '#fff', boxShadow: '0 4px 6px -1px rgba(2, 44, 34, 0.05)' },
  cardTitleStyle: { color: '#022c22', fontSize: '0.9rem', fontWeight: '800', marginBottom: '20px', textTransform: 'uppercase', borderLeft: '4px solid #059669', paddingLeft: '12px' },
  insightBox: { fontSize: '0.85rem', color: '#334155', marginTop: '15px', backgroundColor: '#f1fcf8', padding: '15px', borderRadius: '12px', borderLeft: '5px solid #10b981' },
  strategyBoxStyle: { padding: '40px', backgroundColor: '#022c22', borderRadius: '32px', color: '#fff', marginTop: '10px' },
  strategyHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' },
  efficiencyBadge: { backgroundColor: '#10b981', color: '#fff', padding: '8px 16px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: '900' },
  benefitGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' },
  benefitItem: { display: 'flex', gap: '15px' },
  benefitIcon: { fontSize: '1.8rem' },
  benefitContent: { display: 'flex', flexDirection: 'column', gap: '4px' },
  benefitHeader: { margin: 0, fontSize: '1rem', fontWeight: '700', color: '#fff' },
  benefitPara: { margin: 0, fontSize: '0.85rem', color: '#d1fae5', lineHeight: '1.5', opacity: 0.8 },
};

export default UserAnalysis;