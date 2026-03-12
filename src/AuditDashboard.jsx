import React, { useRef, useState } from 'react';
import { 
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Label, Radar, RadarChart, PolarGrid, PolarAngleAxis
} from 'recharts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const AuditDashboard = ({ onBack }) => {
  const dashboardRef = useRef();
  const [selectedRole, setSelectedRole] = useState("Z_FI_CONTROLLER_DIR");

  // --- DATA: SYSTEM & SINGLE ROLE METRICS ---
  const usagePieData = [
    { name: 'Used (Display)', value: 16, color: '#10b981' }, 
    { name: 'Unused (Maintain Bloat)', value: 84, color: '#f87171' }, 
  ];

  const complexityRadar = [
    { subject: 'Auth Objects', manual: 180, rm: 45 },
    { subject: 'Org Levels', manual: 25, rm: 4 },
    { subject: 'SoD Conflicts', manual: 16, rm: 0 },
    { subject: 'Maint. Effort', manual: 90, rm: 10 },
    { subject: 'License Cost', manual: 100, rm: 25 },
  ];

  const redesignCostData = [
    { category: 'Labor/Effort', manual: 4500, rm: 450 },
    { category: 'Annual License', manual: 3200, rm: 800 },
  ];

  const downloadPDF = () => {
    const input = dashboardRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, (canvas.height * 210) / canvas.width);
      pdf.save(`Audit-Diagnostic-${selectedRole}.pdf`);
    });
  };

  return (
    <div style={styles.pageContainer}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.brandGroup}>
          <span style={styles.sectionLabel}>Audit & Compliance</span>
          <h1 style={styles.mainTitle}>Financial <span style={{color: '#059669'}}>Impact Analysis</span></h1>
          <div style={styles.statusBadge}>
            <span style={styles.pulse}></span> TARGET ROLE: {selectedRole}
          </div>
        </div>
        <div style={styles.buttonGroup}>
          <button onClick={onBack} style={styles.secondaryButton}>← Back to Main Menu</button>
          <button onClick={downloadPDF} style={styles.exportButton}>📥 DOWNLOAD BUSINESS CASE</button>
        </div>
      </div>

      <div ref={dashboardRef} style={styles.reportSheet}>
        
        {/* ROW 1: ROLE-SPECIFIC KPIs */}
        <div style={styles.kpiRow}>
          <div style={styles.kpiCard}>
            <span style={styles.kpiLabel}>LICENSE UPCHARGE RISK</span>
            <div style={{...styles.kpiValue, color: '#ef4444'}}>$3,200/yr</div>
            <p style={styles.kpiSub}>Triggered by unused 'Maintain' objects</p>
          </div>
          <div style={styles.kpiCard}>
            <span style={styles.kpiLabel}>MAINTENANCE BLOAT</span>
            <div style={{...styles.kpiValue, color: '#f59e0b'}}>+400%</div>
            <p style={styles.kpiSub}>Manual vs RM Derived Effort</p>
          </div>
          <div style={styles.kpiCard}>
            <span style={styles.kpiLabel}>ACTUAL USAGE</span>
            <div style={{...styles.kpiValue, color: '#10b981'}}>16%</div>
            <p style={styles.kpiSub}>User only executes Display tasks</p>
          </div>
          <div style={styles.kpiCard}>
            <span style={styles.kpiLabel}>RM REDESIGN ROI</span>
            <div style={{...styles.kpiValue, color: '#059669'}}>6 WEEKS</div>
            <p style={styles.kpiSub}>Payback period for this role</p>
          </div>
        </div>

        {/* ROW 2: USAGE vs LICENSE */}
        <div style={styles.gridTwo}>
          <div style={styles.chartCard}>
            <h3 style={styles.cardTitle}>Why this role triggers Professional Licensing</h3>
            <div style={{height: '240px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={usagePieData} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} paddingAngle={8} stroke="none">
                    {usagePieData.map((e, i) => <Cell key={i} fill={e.color} />)}
                    <Label value="Transaction Usage" position="center" fill="#022c22" style={{ fontWeight: '900', fontSize: '12px' }} />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={styles.insightBoxRed}>
              <strong>Diagnostic:</strong> User executes <u>Display</u> transactions only, yet the role contains 42 <u>Maintain</u> objects. This "Ghost Access" forces a Professional License cost of <strong>$3,200/yr</strong> instead of <strong>$800/yr</strong>.
            </div>
          </div>

          <div style={styles.chartCard}>
            <h3 style={styles.cardTitle}>Structural Redesign Impact</h3>
            <div style={{height: '300px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={complexityRadar}>
                  <PolarGrid stroke="#cbdad2" />
                  <PolarAngleAxis dataKey="subject" tick={{fill: '#475569', fontSize: 11, fontWeight: 700}} />
                  <Radar name="Current Status" dataKey="manual" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.2} />
                  <Radar name="Redesigned Role" dataKey="rm" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* ROW 3: LABOR EFFORT COMPARISON */}
        <div style={styles.fullWidthHeader}>
          <h2 style={styles.subHeading}>Role Redesign Economics: Manual vs. RM Automation</h2>
        </div>

        <div style={styles.gridTwo}>
          <div style={styles.chartCard}>
            <h3 style={styles.cardTitle}>Cost & Effort Comparison (Per Role)</h3>
            <div style={{height: '250px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={redesignCostData} margin={{top: 20}}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ecfdf5" />
                  <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{fontWeight: 700, fontSize: 11, fill: '#475569'}} />
                  <YAxis hide />
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Legend />
                  <Bar name="Manual Approach" dataKey="manual" fill="#cbdad2" radius={[6, 6, 0, 0]} />
                  <Bar name="RM Automation" dataKey="rm" fill="#059669" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p style={styles.chartNote}>*Manual redesign includes user interviews, SIT/UAT cycles, and manual PFCG builds.</p>
          </div>

          <div style={styles.darkTableCard}>
            <h3 style={{...styles.cardTitle, color: '#10b981', borderLeftColor: '#10b981'}}>ROI Projection for {selectedRole}</h3>
            <div style={styles.tableRow}>
              <span>Annual License Recovery (25 Users)</span>
              <span style={{color: '#10b981', fontWeight: '800'}}>+$30,000</span>
            </div>
            <div style={styles.tableRow}>
              <span>Maintenance Overhead Reduction</span>
              <span style={{color: '#10b981', fontWeight: '800'}}>-88% Effort</span>
            </div>
            <div style={styles.tableRow}>
              <span>SoD Risk Remediation Cost</span>
              <span style={{color: '#10b981', fontWeight: '800'}}>REDUCED TO $0</span>
            </div>
            <div style={styles.totalBanner}>
              POTENTIAL ANNUAL GAIN: $35,000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: { padding: '40px 20px', backgroundColor: '#f9fdfc', minHeight: '100vh', fontFamily: '"Inter", sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1300px', margin: '0 auto 40px auto' },
  brandGroup: { display: 'flex', flexDirection: 'column' },
  sectionLabel: { fontSize: '0.75rem', fontWeight: '900', color: '#059669', textTransform: 'uppercase', letterSpacing: '2px' },
  mainTitle: { color: '#022c22', margin: '5px 0', fontSize: '2.2rem', fontWeight: '900', letterSpacing: '-1.5px' },
  statusBadge: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', fontWeight: '800', color: '#475569', background: '#fff', padding: '6px 12px', borderRadius: '20px', border: '1px solid #cbdad2', width: 'fit-content' },
  pulse: { width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%', display: 'inline-block' },
  buttonGroup: { display: 'flex', gap: '12px' },
  secondaryButton: { background: '#fff', border: '1px solid #cbdad2', padding: '10px 20px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', color: '#022c22' },
  exportButton: { backgroundColor: '#059669', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '10px', cursor: 'pointer', fontWeight: '800' },
  reportSheet: { maxWidth: '1300px', margin: '0 auto' },
  kpiRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '25px' },
  kpiCard: { padding: '20px', background: '#fff', borderRadius: '24px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(2, 44, 34, 0.05)' },
  kpiLabel: { fontSize: '0.65rem', fontWeight: '900', color: '#64748b', textTransform: 'uppercase' },
  kpiValue: { fontSize: '1.4rem', fontWeight: '900', margin: '6px 0' },
  kpiSub: { fontSize: '0.7rem', color: '#94a3b8' },
  gridTwo: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' },
  chartCard: { padding: '30px', backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(2, 44, 34, 0.05)' },
  cardTitle: { color: '#022c22', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '20px', borderLeft: '4px solid #059669', paddingLeft: '12px' },
  insightBoxRed: { background: '#fff1f2', padding: '20px', borderRadius: '16px', fontSize: '0.85rem', color: '#9f1239', lineHeight: '1.5', borderLeft: '5px solid #ef4444' },
  fullWidthHeader: { margin: '40px 0 20px 0', borderTop: '1px solid #cbdad2', paddingTop: '30px' },
  subHeading: { fontSize: '1.2rem', fontWeight: '900', color: '#022c22', letterSpacing: '-0.5px' },
  darkTableCard: { padding: '30px', backgroundColor: '#022c22', borderRadius: '24px', color: '#fff' },
  tableRow: { display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem' },
  totalBanner: { marginTop: '25px', padding: '15px', background: 'linear-gradient(90deg, #10b981, #059669)', borderRadius: '12px', textAlign: 'center', fontWeight: '900', fontSize: '1.1rem' },
  chartNote: { fontSize: '0.7rem', color: '#94a3b8', marginTop: '10px', fontStyle: 'italic' }
};

export default AuditDashboard;