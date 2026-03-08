import React, { useRef } from 'react';
import { 
  PieChart, Pie, Cell, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Label,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const AuditDashboard = ({ onBack }) => {
  const dashboardRef = useRef();

  const efficiencyData = [
    { name: 'Effective Usage (Core)', value: 44, color: '#2ecc71', fue: '0.2 FUE' },
    { name: 'Licensing Waste (Prof)', value: 56, color: '#e74c3c', fue: '1.0 FUE' },
  ];

  const moduleData = [
    { module: 'Sales', total: 30, used: 25 },
    { module: 'Procurement', total: 30, used: 2 },
    { module: 'Finance', total: 10, used: 1 },
    { module: 'Custom', total: 20, used: 12 },
  ];

  const complexityData = [
    { subject: 'Auth Objects', current: 205, optimized: 80 },
    { subject: 'Attack Surface', current: 100, optimized: 30 },
    { subject: 'Maintenance', current: 90, optimized: 20 },
    { subject: 'SoD Risk', current: 14, optimized: 2 },
  ];

  const downloadPDF = () => {
    const input = dashboardRef.current;
    html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Pathlock-Efficiency-Report.pdf');
    });
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#f4f7f9', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1300px', margin: '0 auto 30px auto' }}>
        <div>
          <button onClick={onBack} style={{ color: '#007bff', cursor: 'pointer', border: 'none', background: 'none', fontWeight: 'bold' }}>
  ← Back to Main Menu
</button>
          <h1 style={{ color: '#003366', margin: 0, fontSize: '2rem' }}>PL: Role Management</h1><div style={{ color: '#546e7a', fontWeight: 'bold', marginTop: '8px', fontSize: '1.1rem', letterSpacing: '0.5px' }}>
            Analysis of Role: <span style={{ color: '#d35400' }}>ZPS_SALES_ASST_IND_M</span>
          </div>
          <p style={{ color: '#666', marginTop: '5px' }}>Role Efficiency & License Optimization Analysis</p>
        </div>
        <button onClick={downloadPDF} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          📥 Export PDF Report
        </button>
      </div>

      <div ref={dashboardRef} style={{ maxWidth: '1300px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '15px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
          {/* CHART 1: ROLE EFFICIENCY */}
          <div>
            <h3 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Role Efficiency Analysis</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={efficiencyData} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5}>
                  {efficiencyData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  <Label value="44% Efficient" position="center" fill="#1a3a5f" style={{ fontWeight: 'bold', fontSize: '14px' }} />
                </Pie>
                <Tooltip formatter={(value, name, props) => [`${value}%`, props.payload.name]} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
              <div style={{ border: '1px solid #ffebeb', padding: '10px', borderRadius: '8px', background: '#fffcfc' }}>
                <div style={{ color: '#e74c3c', fontSize: '0.8rem', fontWeight: 'bold' }}>UNUSED (Current)</div>
                <div style={{ color: '#e74c3c', fontWeight: 'bold' }}>Professional: 1.0 FUE</div>
              </div>
              <div style={{ border: '1px solid #e8f5e9', padding: '10px', borderRadius: '8px', background: '#fafffa' }}>
                <div style={{ color: '#2ecc71', fontSize: '0.8rem', fontWeight: 'bold' }}>USED (Actual)</div>
                <div style={{ color: '#2ecc71', fontWeight: 'bold' }}>Core: 0.2 FUE</div>
              </div>
            </div>
          </div>

          {/* CHART 2: TRANSACTION DISTRIBUTION - FIXED WIDTH */}
          <div>
            <h3 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Transaction Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={moduleData} layout="vertical" margin={{ left: 20, right: 30 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" />
                {/* Increased width from 90 to 120 to fix "Procurement" truncation */}
                <YAxis dataKey="module" type="category" width={120} tick={{ fontSize: 13 }} />
                <Tooltip />
                <Bar dataKey="total" fill="#cfd8dc" name="Assigned" />
                <Bar dataKey="used" fill="#007bff" name="Used" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div>
            <h3 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Complexity & Threat Landscape</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={complexityData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis domain={[0, 210]} />
                <Radar name="Professional Status" dataKey="current" stroke="#e74c3c" fill="#e74c3c" fillOpacity={0.4} />
                <Radar name="Core Status (Target)" dataKey="optimized" stroke="#2ecc71" fill="#2ecc71" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h3 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>PL Intelligent Suggestions</h3>
            <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', fontSize: '0.9rem', lineHeight: '1.6' }}>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                <li><strong>FUE Mitigation:</strong> Unused transactions in Procurement and Finance are triggering the 1.0 FUE (Professional) weight. Removal enables 0.2 FUE (Core) classification.</li>
                <li><strong>Risk Reduction:</strong> Eliminating inactive T-Codes reduces Auth Objects from 205 to 80, lowering the attack surface by 61%.</li>
                <li><strong>SoD Remediation:</strong> 12 conflicts are tied to inactive permissions. Automated cleanup resolves these without impacting business operations.</li>
                <li><strong>Maintenance Efficiency:</strong> Reducing role complexity lowers long-term UAR and troubleshooting effort by 77%.</li>
              </ul>
              <div style={{ marginTop: '15px', padding: '10px', borderLeft: '4px solid #007bff', background: '#eef6ff', fontWeight: 'bold' }}>
                Outcome: 80% Cost Saving per user by aligning License to Actual Usage.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditDashboard;