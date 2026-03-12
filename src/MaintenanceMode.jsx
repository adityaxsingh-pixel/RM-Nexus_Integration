import React from 'react';

const MaintenanceMode = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>⚙️</div>
        <h1 style={styles.title}>System Optimization in Progress</h1>
        <p style={styles.text}>
          We are currently updating the <strong>RM Audit & ROI engine</strong>. 
          The dashboard will be live shortly with updated license metrics.
        </p>
        <div style={styles.progressBar}>
          <div style={styles.progressFill}></div>
        </div>
        <p style={styles.status}>ESTIMATED UPTIME: 2 HOURS</p>
      </div>
    </div>
  );
};

const styles = {
  container: { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4f7fa', fontFamily: '"Inter", sans-serif' },
  card: { textAlign: 'center', padding: '50px', backgroundColor: '#fff', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', maxWidth: '500px' },
  icon: { fontSize: '3rem', marginBottom: '20px' },
  title: { color: '#1a2b3b', fontSize: '1.8rem', fontWeight: '900', letterSpacing: '-1px', marginBottom: '15px' },
  text: { color: '#64748b', lineHeight: '1.6', fontSize: '1rem', marginBottom: '30px' },
  progressBar: { width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '10px', overflow: 'hidden', marginBottom: '15px' },
  progressFill: { width: '60%', height: '100%', backgroundColor: '#0070f3', borderRadius: '10px' },
  status: { fontSize: '0.75rem', fontWeight: '800', color: '#0070f3', letterSpacing: '1px' }
};

export default MaintenanceMode;