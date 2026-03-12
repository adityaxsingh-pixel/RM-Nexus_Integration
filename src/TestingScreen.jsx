import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label
} from 'recharts';

const TestingScreen = ({ onBack }) => {
  // Data: Comparison of Business Downtime (Manual Testing vs RM Shadow Testing)
  const downtimeData = [
    { day: 'Day 1', manual: 8, rm: 0 },
    { day: 'Day 2', manual: 6, rm: 0 },
    { day: 'Day 3', manual: 7, rm: 0 },
    { day: 'Day 4', manual: 5, rm: 0 },
    { day: 'Day 5', manual: 8, rm: 0 },
  ];

  const simulationFeatures = [
    { 
      title: "Shadow Execution", 
      desc: "Users work in their old roles while RM runs the 'New Role' delta in the background—capturing every permission gap in real-time.",
      icon: "👥"
    },
    { 
      title: "Invisible Trace", 
      desc: "Eliminate manual ST01 traces. RM silently monitors backend failures and matches them against missing auth objects.",
      icon: "🔍"
    },
    { 
      title: "Automated Delta Patching", 
      desc: "If a gap is found and approved, RM updates the role definitions automatically. No manual PFCG rework required.",
      icon: "🛠️"
    },
    { 
      title: "Zero Business Impact", 
      desc: "Stop the 'Testing Freeze.' Deployments happen with 100% confidence because the roles were already proven in the shadow run.",
      icon: "🛡️"
    }
  ];

  return (
    <div style={styles.containerStyle}>
      {/* Header */}
      <div style={styles.headerNav}>
        <div style={styles.brandBox}>
          <span style={styles.sectionLabel}>Role Management</span>
          <h1 style={styles.titleStyle}>Testing <span style={styles.accentText}>Simulator</span></h1>
        </div>
        <button onClick={onBack} style={styles.backButton}>← Back to Main Menu</button>
      </div>

      <div style={styles.mainGrid}>
        {/* Left Column: The "No-Manual" Story */}
        <div style={styles.infoCard}>
          <div style={styles.badge}>REPLACING MANUAL UAT</div>
          <h2 style={styles.cardHeading}>Background Delta Analysis</h2>
          <p style={styles.paragraph}>
            RM eliminates the concept of manual testing weeks. By running <strong>Shadow Simulations</strong>, we identify the delta between legacy and newly generated roles while your users remain 100% productive.
          </p>
          
          <div style={styles.featureList}>
            {simulationFeatures.map((feat, i) => (
              <div key={i} style={styles.featureItem}>
                <div style={styles.iconCircle}>{feat.icon}</div>
                <div>
                  <div style={styles.featureTitle}>{feat.title}</div>
                  <div style={styles.featureDesc}>{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Impact Visuals */}
        <div style={styles.chartColumn}>
          <div style={styles.chartCard}>
            <h3 style={styles.chartTitle}>Business Interruption (Hours)</h3>
            <div style={{ height: '220px', width: '100%' }}>
              <ResponsiveContainer>
                <AreaChart data={downtimeData}>
                  <defs>
                    <linearGradient id="colorManual" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="day" tick={{fontSize: 11, fontWeight: 600}} axisLine={false} />
                  <YAxis tick={{fontSize: 11}} axisLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="manual" name="Manual UAT Downtime" stroke="#94a3b8" fill="url(#colorManual)" strokeWidth={2} />
                  <Area type="monotone" dataKey="rm" name="RM Shadow Testing" stroke="#0070f3" fill="none" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p style={styles.chartInsight}>
              <strong>The RM Advantage:</strong> Users continue working. We capture failures, analyze the root cause, and patch roles <strong>silently</strong>.
            </p>
          </div>

          {/* Active Status Box */}
          <div style={styles.statusBox}>
            <div style={styles.pulseContainer}>
              <div style={styles.pulse}></div>
              <span style={styles.statusText}>ACTIVE SHADOW SIMULATION</span>
            </div>
            <div style={styles.statGrid}>
              <div style={styles.statSquare}>
                <div style={styles.statLabel}>Analyzed Traces</div>
                <div style={styles.statNum}>14,202</div>
              </div>
              <div style={styles.statSquare}>
                <div style={styles.statLabel}>Auto-Patched</div>
                <div style={styles.statNum}>84</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// --- UPDATED FOREST & MINT TESTING STYLES ---
const styles = {
  containerStyle: { 
    padding: '60px', 
    backgroundColor: '#f9fdfc', // Very pale mint background
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
    color: '#059669', // Vibrant Green
    textTransform: 'uppercase', 
    letterSpacing: '2px' 
  },
  titleStyle: { 
    fontSize: '2.5rem', 
    fontWeight: '900', 
    color: '#022c22', // Deep Forest Green
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
    gridTemplateColumns: '1.1fr 0.9fr', 
    gap: '30px' 
  },
  infoCard: { 
    background: '#fff', 
    padding: '40px', 
    borderRadius: '24px', 
    border: '1px solid #e2e8f0', 
    boxShadow: '0 10px 15px -3px rgba(2, 44, 34, 0.05)' 
  },
  badge: { 
    display: 'inline-block', 
    backgroundColor: '#ecfdf5', // Soft Mint
    color: '#065f46', // Deep Sage
    fontSize: '0.65rem', 
    fontWeight: '900', 
    padding: '4px 10px', 
    borderRadius: '4px', 
    marginBottom: '15px' 
  },
  cardHeading: { 
    color: '#022c22', 
    fontSize: '1.5rem', 
    fontWeight: '800', 
    marginBottom: '15px' 
  },
  paragraph: { 
    lineHeight: '1.7', 
    color: '#334155', 
    fontSize: '1.05rem', 
    marginBottom: '30px' 
  },
  featureList: { display: 'flex', flexDirection: 'column', gap: '25px' },
  featureItem: { display: 'flex', gap: '20px', alignItems: 'flex-start' },
  iconCircle: { 
    width: '45px', 
    height: '45px', 
    borderRadius: '12px', 
    backgroundColor: '#f1fcf8', 
    border: '1px solid #d1fae5', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontSize: '1.3rem', 
    flexShrink: 0 
  },
  featureTitle: { fontWeight: '800', color: '#064e3b', marginBottom: '4px', fontSize: '1rem' },
  featureDesc: { fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5' },
  chartColumn: { display: 'flex', flexDirection: 'column', gap: '25px' },
  chartCard: { 
    background: '#fff', 
    padding: '30px', 
    borderRadius: '24px', 
    border: '1px solid #e2e8f0' 
  },
  chartTitle: { 
    fontSize: '0.9rem', 
    fontWeight: '800', 
    color: '#022c22', 
    marginBottom: '20px', 
    textTransform: 'uppercase' 
  },
  chartInsight: { 
    marginTop: '20px', 
    padding: '15px', 
    background: '#f1fcf8', 
    borderRadius: '12px', 
    fontSize: '0.85rem', 
    color: '#334155', 
    lineHeight: '1.5' 
  },
  statusBox: { 
    background: '#064e3b', // Deep Spruce Green (Replaces dark navy)
    padding: '30px', 
    borderRadius: '24px', 
    color: '#fff' 
  },
  pulseContainer: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' },
  statusText: { 
    fontSize: '0.75rem', 
    fontWeight: '900', 
    letterSpacing: '1px', 
    color: '#10b981' // Vibrant Green pulse text
  },
  pulse: { 
    width: '10px', 
    height: '10px', 
    borderRadius: '50%', 
    background: '#10b981', 
    boxShadow: '0 0 10px #10b981' 
  },
  statGrid: { display: 'flex', gap: '15px' },
  statSquare: { 
    flex: 1, 
    padding: '15px', 
    background: 'rgba(255,255,255,0.08)', 
    borderRadius: '12px', 
    border: '1px solid rgba(255,255,255,0.15)' 
  },
  statLabel: { 
    fontSize: '0.65rem', 
    color: '#d1fae5', 
    fontWeight: '700', 
    textTransform: 'uppercase', 
    marginBottom: '5px' 
  },
  statNum: { fontSize: '1.4rem', fontWeight: '900', color: '#fff' }
};
export default TestingScreen;