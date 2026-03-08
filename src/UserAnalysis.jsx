// src/UserAnalysis.jsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label, Tooltip } from 'recharts';

const UserAnalysis = ({ onBack }) => {
  const data = [
    { name: 'Used Permissions', value: 15, color: '#2ecc71' },
    { name: 'Unused Assigned Access', value: 85, color: '#e74c3c' }
  ];

  return (
    <div style={{ padding: '30px', backgroundColor: '#f4f7f9', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <button onClick={onBack} style={{ color: '#007bff', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold', marginBottom: '20px' }}>
        ← Back to Main Menu
      </button>
      
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '15px', maxWidth: '1200px', margin: '0 auto', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        <h1 style={{ color: '#003366', margin: 0 }}>User Access Analysis - IN PROGRESS</h1>
        <div style={{ color: '#546e7a', fontWeight: 'bold', marginTop: '10px', fontSize: '1.2rem' }}>
          Target User: <span style={{ color: '#d35400' }}>JSMITH_FIN01</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '30px' }}>
          <div style={{ height: '300px' }}>
            <h3 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>License Utilization Ratio</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} innerRadius={70} outerRadius={90} dataKey="value" paddingAngle={5}>
                  {data.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                  <Label value="15% Active" position="center" fill="#1a3a5f" style={{ fontWeight: 'bold' }} />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ background: '#eef6ff', padding: '25px', borderRadius: '12px', borderLeft: '6px solid #007bff' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#003366' }}>PL Intelligent Insight</h4>
              <p style={{ lineHeight: '1.6', color: '#444' }}>
                User is currently assigned a <strong>Professional License</strong>. 
                Analysis of ST03N logs shows <strong>85% of assigned T-Codes</strong> have not been executed.
              </p>
              <div style={{ marginTop: '10px', fontWeight: 'bold', color: '#273c75' }}>
                Recommended Action: Downgrade to "Core" License.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this at the very end of UserAnalysis.jsx
export default UserAnalysis;