import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, Label
} from 'recharts';

const styles = {
  kpiValue: { 
    fontSize: '1.8rem', 
    fontWeight: '800', 
    margin: '10px 0' 
  },
  // ... other styles
};

const UserAnalysis = ({ onBack }) => {
  // Data for Transaction Bloat (Unique vs Total)
  const bloatData = [
    { name: 'Unique T-Codes', count: 50, fill: '#27ae60' },
    { name: 'Total Assignments', count: 100, fill: '#e67e22' },
  ];

  // Data for SoD Reduction (Before vs Proposed)
  const sodData = [
    { name: 'Current Roles', count: 5 },
    { name: 'Post-Optimization', count: 2 },
    { name: 'RM Display/Maintain', count: 0 },
  ];

  return (
    <div style={containerStyle}>
      {/* Navigation Header */}
      <div style={headerNavStyle}>
        <button onClick={onBack} style={backButtonStyle}>← Back to Hub</button>
        <h1 style={headingStyle}>User Insights: <span style={{color: '#27ae60'}}>ASINGH</span></h1>
      </div>

      <div style={reportBoxStyle}>
        
        {/* TOP ROW: KPI SUMMARY */}
        <div style={kpiRowStyle}>
          <div style={kpiCardStyle}>
            <span style={kpiLabel}>ROLE USAGE</span>
            <div style={{...kpiValue, color: '#e74c3c'}}>50%</div>
            <p style={kpiSubText}>5 of 10 roles never used</p>
          </div>
          <div style={kpiCardStyle}>
            <span style={kpiLabel}>MAINTENANCE BLOAT</span>
            <div style={{...kpiValue, color: '#e67e22'}}>2.0x</div>
            <p style={kpiSubText}>High overlap in T-Codes</p>
          </div>
          <div style={kpiCardStyle}>
            <span style={kpiLabel}>SOD STATUS</span>
            <div style={{...kpiValue, color: '#c0392b'}}>CRITICAL</div>
            <p style={kpiSubText}>5 Conflicts Detected</p>
          </div>
          <div style={kpiCardStyle}>
            <span style={kpiLabel}>LICENSE PATH</span>
           <div style={{...styles.kpiValue, color: '#27ae60'}}>PRO → CORE</div>
            <p style={kpiSubText}>Display/Maintain Split</p>
          </div>
        </div>

        {/* MIDDLE ROW: CHARTS */}
        <div style={chartGridStyle}>
          
          {/* Chart 1: The Bloat Story */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Maintenance & Overlap Analysis</h3>
            <div style={{height: '250px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bloatData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={120} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="count" radius={[0, 5, 5, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p style={insightStyle}>
              Maintenance effort is <strong>doubled</strong> because 50 transactions are repeated across multiple roles.
            </p>
          </div>

          {/* Chart 2: The Risk Story */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>SoD Conflict Mitigation Path</h3>
            <div style={{height: '250px'}}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sodData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#c0392b" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p style={insightStyle}>
              Moving to <strong>Display/Maintain</strong> split eliminates the remaining 2 conflicts entirely.
            </p>
          </div>

        </div>

        {/* BOTTOM SECTION: THE RM STRATEGY */}
        <div style={strategyBoxStyle}>
          <h3 style={{color: '#1b5e20', marginTop: 0}}>Role Management (RM) Strategic Impact</h3>
          <div style={strategyGridStyle}>
            <div style={strategyItemStyle}>
              <h4>🔍 Transaction Usage</h4>
              <p>User only uses <strong>FI View</strong> transactions. Currently assigned <strong>FI Maintain</strong> roles are inflating SoD risks and License FUE.</p>
            </div>
            <div style={strategyItemStyle}>
              <h4>📉 License Optimization</h4>
              <p>By splitting Display/Maintain roles, <strong>ASINGH</strong> can be reclassified from a Professional to a Core/Self-Service license.</p>
            </div>
            <div style={strategyItemStyle}>
              <h4>🛡️ Clean SoD</h4>
              <p>Removing the 'Maintenance' capability from users who only 'Display' creates a <strong>zero-conflict</strong> environment for this profile.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- STYLES ---
const containerStyle = { padding: '40px 20px', backgroundColor: '#f9fbf9', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' };
const headerNavStyle = { maxWidth: '1300px', margin: '0 auto 20px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const backButtonStyle = { background: 'none', border: '2px solid #27ae60', color: '#27ae60', padding: '8px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' };
const headingStyle = { color: '#1b5e20', margin: 0 };
const reportBoxStyle = { maxWidth: '1300px', margin: '0 auto', backgroundColor: '#fff', padding: '40px', borderRadius: '15px', border: '1px solid #e0eadd', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' };

const kpiRowStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' };
const kpiCardStyle = { padding: '20px', borderRadius: '10px', backgroundColor: '#fff', border: '1px solid #eee', textAlign: 'center' };
const kpiLabel = { fontSize: '0.75rem', fontWeight: 'bold', color: '#888', letterSpacing: '1px' };
const kpiValue = { fontSize: '1.8rem', fontWeight: '800', margin: '10px 0' };
const kpiSubText = { fontSize: '0.8rem', color: '#666' };

const chartGridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' };
const cardStyle = { padding: '25px', borderRadius: '12px', border: '1px solid #f0f0f0', backgroundColor: '#fff' };
const cardTitleStyle = { color: '#2e7d32', fontSize: '1.1rem', marginBottom: '20px', textAlign: 'center' };
const insightStyle = { fontSize: '0.9rem', color: '#444', marginTop: '20px', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', lineHeight: '1.5' };

const strategyBoxStyle = { padding: '30px', backgroundColor: '#e8f5e9', borderRadius: '12px', border: '1px solid #c8e6c9' };
const strategyGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginTop: '20px' };
const strategyItemStyle = { backgroundColor: '#fff', padding: '20px', borderRadius: '8px' };

export default UserAnalysis;