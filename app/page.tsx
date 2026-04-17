"use client";

import { useState } from "react";

export default function ProspexLanding() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeExample, setActiveExample] = useState(0);

  const examples = [
    {
      company: "Sweaty Betty",
      contact: "Mark Davies, Head of CRM",
      industry: "Premium Activewear",
      research: `Premium women's activewear brand selling leggings, sports bras and outerwear. Strong DTC focus with own retail stores. Post-Wolverine Worldwide acquisition creating pressure to scale CRM fast. Competing aggressively with Lululemon requires strong personalisation. Retention, loyalty optimisation and cross-channel data unification are the key opportunity angles.`,
      email: `Subject: Quick thought on Sweaty Betty's repeat customer velocity

Hi Mark,

I've been following Sweaty Betty's growth — particularly how you're balancing DTC momentum with physical retail. That's a tough unification problem, especially at your price point where repeat customers really matter.

We work with premium retail brands to close the gap between what they know about customers in-store versus online. Most see a 15–20% lift in repeat purchase rates once they can actually act on unified customer data.

Worth a 15-min conversation to see if there's overlap with what you're working on?

Cheers`,
    },
    {
      company: "Jigsaw Fashion",
      contact: "Sarah Johnson, Marketing Director",
      industry: "Mid-Market Fashion Retail",
      research: `Mid-market UK womenswear brand with ~40 stores and growing e-commerce. Known for quality fabrics and timeless design. Loyalty-driven customer base of professional women 30-55. Key challenges: connecting in-store behaviour with online profiles, ageing customer base, competing with Reiss and Whistles. Strong prospect for CRM, personalisation and loyalty platforms.`,
      email: `Subject: Quick thought on Jigsaw's loyalty potential

Hi Sarah,

I work with mid-market fashion retailers on customer marketing — specifically helping them turn loyalty data into smarter, more personal campaigns.

Jigsaw's got something most high-street brands don't: a genuinely loyal customer base. But I suspect there's a gap between what you know about them in-store versus online, and what you're able to act on quickly.

We help brands like yours close that gap using AI to automate segmentation and personalisation — without needing a huge marketing ops team.

Worth a quick conversation?`,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/prospex-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Form submission failed', err);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --black: #060810;
          --blue: #2563EB;
          --blue-bright: #3B82F6;
          --blue-glow: rgba(37, 99, 235, 0.15);
          --blue-border: rgba(37, 99, 235, 0.3);
          --white: #ffffff;
          --grey: #94a3b8;
          --grey-dark: #1e2433;
          --grey-mid: #0f1320;
          --border: rgba(255,255,255,0.08);
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--black);
          color: var(--white);
          overflow-x: hidden;
        }

        /* GRID BACKGROUND */
        body::before {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
          pointer-events: none;
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(6,8,16,0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 0 48px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--white);
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        .nav-logo span {
          color: var(--blue-bright);
        }

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--grey);
          font-size: 0.875rem;
          font-weight: 400;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: var(--white); }

        .nav-cta {
          background: var(--blue) !important;
          color: var(--white) !important;
          padding: 8px 20px !important;
          border-radius: 4px !important;
          font-weight: 500 !important;
          font-size: 0.875rem !important;
          transition: background 0.2s !important;
        }

        .nav-cta:hover { background: var(--blue-bright) !important; color: var(--white) !important; }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 48px 80px;
          position: relative;
          z-index: 1;
        }

        .hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--blue-glow);
          border: 1px solid var(--blue-border);
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--blue-bright);
          margin-bottom: 36px;
        }

        .hero-label::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--blue-bright);
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3.5rem, 7vw, 7rem);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin-bottom: 16px;
        }

        .hero h1 .blue { color: var(--blue-bright); }

        .hero-sub {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          font-weight: 500;
          color: var(--grey);
          margin-bottom: 32px;
          letter-spacing: -0.01em;
        }

        .hero-sub span { color: var(--white); }

        .hero-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--grey);
          max-width: 600px;
          margin-bottom: 48px;
          font-weight: 300;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 80px;
        }

        .btn-primary {
          background: var(--blue);
          color: var(--white);
          padding: 14px 32px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: all 0.2s;
          border: 1px solid var(--blue);
          cursor: pointer;
          display: inline-block;
          font-family: 'Inter', sans-serif;
        }

        .btn-primary:hover { background: var(--blue-bright); border-color: var(--blue-bright); }

        .btn-outline {
          background: transparent;
          color: var(--white);
          padding: 14px 32px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s;
          border: 1px solid var(--border);
          cursor: pointer;
          display: inline-block;
          font-family: 'Inter', sans-serif;
        }

        .btn-outline:hover { border-color: var(--blue-border); color: var(--blue-bright); }

        /* STATS BAR */
        .stats-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
          max-width: 700px;
        }

        .stat {
          background: var(--grey-mid);
          padding: 24px 32px;
          text-align: center;
        }

        .stat-number {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--blue-bright);
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--grey);
          font-weight: 300;
        }

        /* HOW IT WORKS */
        .how {
          padding: 100px 48px;
          position: relative;
          z-index: 1;
        }

        .how-inner { max-width: 1100px; margin: 0 auto; }

        .section-label {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--blue-bright);
          margin-bottom: 16px;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 64px;
          line-height: 1.05;
        }

        .section-title span { color: var(--blue-bright); }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
        }

        .step {
          background: var(--grey-mid);
          padding: 48px 40px;
          position: relative;
          transition: background 0.2s;
        }

        .step:hover { background: var(--grey-dark); }

        .step-number {
          font-family: 'Syne', sans-serif;
          font-size: 4rem;
          font-weight: 800;
          color: var(--blue-glow);
          line-height: 1;
          margin-bottom: 24px;
          -webkit-text-stroke: 1px var(--blue-border);
        }

        .step h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--white);
        }

        .step p {
          font-size: 0.875rem;
          color: var(--grey);
          line-height: 1.6;
          font-weight: 300;
        }

        .step-arrow {
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--blue-bright);
          font-size: 1.5rem;
          z-index: 2;
        }

        /* DEMO SECTION */
        .demo {
          padding: 100px 48px;
          background: var(--grey-mid);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          position: relative;
          z-index: 1;
        }

        .demo-inner { max-width: 1100px; margin: 0 auto; }

        .demo-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 32px;
        }

        .demo-tab {
          padding: 10px 20px;
          border-radius: 4px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--grey);
          font-family: 'Inter', sans-serif;
        }

        .demo-tab.active {
          background: var(--blue);
          border-color: var(--blue);
          color: var(--white);
        }

        .demo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .demo-card {
          background: var(--black);
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
        }

        .demo-card-header {
          padding: 16px 20px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .demo-card-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
        }

        .demo-card-header span {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--grey);
        }

        .demo-card-body {
          padding: 24px;
          font-size: 0.85rem;
          line-height: 1.7;
          color: var(--grey);
          font-weight: 300;
          white-space: pre-wrap;
          min-height: 280px;
        }

        .demo-card-body strong {
          color: var(--white);
          font-weight: 500;
        }

        .demo-meta {
          padding: 12px 20px;
          border-top: 1px solid var(--border);
          font-size: 0.75rem;
          color: var(--grey);
          display: flex;
          gap: 16px;
        }

        .demo-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .demo-meta span::before {
          content: '●';
          color: var(--blue-bright);
          font-size: 0.5rem;
        }

        /* WHO */
        .who {
          padding: 100px 48px;
          position: relative;
          z-index: 1;
        }

        .who-inner { max-width: 1100px; margin: 0 auto; }

        .who-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 64px;
        }

        .who-card {
          background: var(--grey-mid);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 40px 32px;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }

        .who-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--blue);
          transform: scaleX(0);
          transition: transform 0.3s;
        }

        .who-card:hover::before { transform: scaleX(1); }
        .who-card:hover { border-color: var(--blue-border); }

        .who-icon {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .who-card h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .who-card p {
          font-size: 0.875rem;
          color: var(--grey);
          line-height: 1.6;
          font-weight: 300;
        }

        .who-list {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .who-list-item {
          font-size: 0.8rem;
          color: var(--grey);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .who-list-item::before {
          content: '→';
          color: var(--blue-bright);
          font-size: 0.75rem;
        }

        /* CONTACT */
        .contact {
          padding: 100px 48px;
          background: var(--grey-mid);
          border-top: 1px solid var(--border);
          position: relative;
          z-index: 1;
        }

        .contact-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .contact h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
          line-height: 1.05;
        }

        .contact h2 span { color: var(--blue-bright); }

        .contact-desc {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--grey);
          font-weight: 300;
          margin-bottom: 36px;
        }

        .contact-points {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-point {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.875rem;
          color: var(--grey);
          font-weight: 300;
        }

        .contact-point::before {
          content: '✓';
          color: var(--blue-bright);
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* FORM */
        .demo-form {
          background: var(--black);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 40px;
        }

        .form-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 28px;
          letter-spacing: -0.01em;
        }

        .form-group { margin-bottom: 18px; }

        .form-group label {
          display: block;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--grey);
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 11px 14px;
          border: 1px solid var(--border);
          border-radius: 4px;
          font-size: 0.875rem;
          font-family: 'Inter', sans-serif;
          color: var(--white);
          background: var(--grey-mid);
          transition: border-color 0.2s;
          outline: none;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          border-color: var(--blue);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #4b5563;
        }

        .form-group textarea { resize: vertical; min-height: 90px; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        .form-submit {
          width: 100%;
          padding: 13px;
          background: var(--blue);
          color: var(--white);
          border: none;
          border-radius: 4px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          font-family: 'Inter', sans-serif;
          margin-top: 8px;
          letter-spacing: 0.02em;
        }

        .form-submit:hover { background: var(--blue-bright); }

        .success-message { text-align: center; padding: 40px 20px; }
        .success-message h3 { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; }
        .success-message p { color: var(--grey); font-size: 0.9rem; line-height: 1.6; }

        /* FOOTER */
        footer {
          padding: 32px 48px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.02em;
        }

        .footer-logo span { color: var(--blue-bright); }
        .footer-text { font-size: 0.8rem; color: var(--grey); font-weight: 300; }

        @media (max-width: 900px) {
          nav { padding: 0 24px; }
          .nav-links { display: none; }
          .hero, .how, .demo, .who, .contact { padding: 60px 24px; }
          .steps, .who-grid { grid-template-columns: 1fr; }
          .demo-grid { grid-template-columns: 1fr; }
          .contact-inner { grid-template-columns: 1fr; gap: 40px; }
          .stats-bar { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          footer { flex-direction: column; gap: 12px; text-align: center; padding: 24px; }
          .step-arrow { display: none; }
        }
      `}</style>

      <nav>
        <a href="#" className="nav-logo">Prosp<span>ex</span></a>
        <div className="nav-links">
          <a href="#how">How It Works</a>
          <a href="#demo">See Results</a>
          <a href="#who">Who It's For</a>
          <a href="#contact" className="nav-cta">Request a Demo</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-label">AI-Powered Outreach Intelligence</div>
          <h1>Cold outreach.<br /><span className="blue">Finally done right.</span></h1>
          <p className="hero-sub">Researched. Personalised. <span>Sent. At scale.</span></p>
          <p className="hero-desc">
            Prospex reads your prospect list, researches every company using AI, and writes a personalised cold email for each one — in seconds. No templates. No generic copy. Just emails that land.
          </p>
          <div className="hero-actions">
            <a href="#demo" className="btn-primary">See Real Examples</a>
            <a href="#contact" className="btn-outline">Request a Demo</a>
          </div>
          <div className="stats-bar">
            <div className="stat">
              <div className="stat-number">10x</div>
              <div className="stat-label">faster than manual research</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">personalised per prospect</div>
            </div>
            <div className="stat">
              <div className="stat-number">0</div>
              <div className="stat-label">generic templates used</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="how-inner">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">Three steps from list<br />to <span>personalised pipeline.</span></h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Upload your prospect list</h3>
              <p>Add your companies to a Google Sheet — name, website, contact name, email, industry. That's all Prospex needs to get started.</p>
              <div className="step-arrow">→</div>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Prospex researches each company</h3>
              <p>AI reads each company, understands what they do, identifies their likely pain points, and builds a research profile tailored to your offering.</p>
              <div className="step-arrow">→</div>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Personalised emails written and logged</h3>
              <p>A unique, intelligent cold email is written for every prospect and written back to your sheet — ready to send, no editing required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="demo" id="demo">
        <div className="demo-inner">
          <p className="section-label">Real Output</p>
          <h2 className="section-title">This is what Prospex<br /><span>actually produces.</span></h2>

          <div className="demo-tabs">
            {examples.map((ex, i) => (
              <button
                key={i}
                className={`demo-tab ${activeExample === i ? "active" : ""}`}
                onClick={() => setActiveExample(i)}
              >
                {ex.company}
              </button>
            ))}
          </div>

          <div className="demo-grid">
            <div className="demo-card">
              <div className="demo-card-header">
                <div className="demo-card-dot" style={{ background: '#3B82F6' }} />
                <span>Company Research</span>
              </div>
              <div className="demo-card-body">
                <strong>{examples[activeExample].company}</strong>{"\n"}{examples[activeExample].research}
              </div>
              <div className="demo-meta">
                <span>{examples[activeExample].industry}</span>
                <span>AI Generated</span>
              </div>
            </div>

            <div className="demo-card">
              <div className="demo-card-header">
                <div className="demo-card-dot" style={{ background: '#22c55e' }} />
                <span>Personalised Cold Email</span>
              </div>
              <div className="demo-card-body">
                <strong>To: {examples[activeExample].contact}</strong>{"\n\n"}{examples[activeExample].email}
              </div>
              <div className="demo-meta">
                <span>Ready to send</span>
                <span>No editing needed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="who" id="who">
        <div className="who-inner">
          <p className="section-label">Who It's For</p>
          <h2 className="section-title">Built for teams that<br /><span>sell seriously.</span></h2>
          <div className="who-grid">
            <div className="who-card">
              <div className="who-icon">🎯</div>
              <h3>Sales Teams</h3>
              <p>Stop spending hours researching prospects. Let Prospex do the work so your team can focus on conversations, not prep.</p>
              <div className="who-list">
                <div className="who-list-item">B2B sales teams of any size</div>
                <div className="who-list-item">SDRs and BDRs with large prospect lists</div>
                <div className="who-list-item">Account executives targeting enterprise</div>
              </div>
            </div>
            <div className="who-card">
              <div className="who-icon">🏢</div>
              <h3>Agencies</h3>
              <p>Pitch new business with emails that show you've actually done your homework. Stand out from the agencies sending generic decks.</p>
              <div className="who-list">
                <div className="who-list-item">Marketing and creative agencies</div>
                <div className="who-list-item">PR and communications firms</div>
                <div className="who-list-item">Consultancies pitching new clients</div>
              </div>
            </div>
            <div className="who-card">
              <div className="who-icon">🔍</div>
              <h3>Recruiters</h3>
              <p>Reach candidates and hiring managers with outreach that references their actual business — not a copy-paste template everyone ignores.</p>
              <div className="who-list">
                <div className="who-list-item">Executive search and headhunters</div>
                <div className="who-list-item">In-house talent teams</div>
                <div className="who-list-item">Recruitment agencies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div>
            <p className="section-label">Get Started</p>
            <h2>Ready to see Prospex<br />work on <span>your list?</span></h2>
            <p className="contact-desc">
              Send us your prospect list and we'll show you exactly what Prospex produces — researched profiles and personalised emails for your specific targets and your specific offering.
            </p>
            <div className="contact-points">
              <div className="contact-point">Works with any industry or target market</div>
              <div className="contact-point">Tailored to your product or service</div>
              <div className="contact-point">Results delivered to your Google Sheet</div>
              <div className="contact-point">No technical setup required on your side</div>
              <div className="contact-point">First run demo — no commitment</div>
            </div>
          </div>

          <div className="demo-form">
            {submitted ? (
              <div className="success-message">
                <h3>You're on the list.</h3>
                <p>We'll be in touch within one business day to set up your Prospex demo run.</p>
              </div>
            ) : (
              <>
                <p className="form-title">Request a Demo</p>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="James Wilson" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Company</label>
                    <input type="text" placeholder="Acme Agency" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="james@acme.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Your Role</label>
                    <input type="text" placeholder="Head of Sales" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} />
                  </div>
                </div>
                <div className="form-group">
                  <label>What are you selling and who to?</label>
                  <textarea placeholder="e.g. We sell CRM software to retail brands, targeting heads of marketing at mid-market fashion companies..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <button className="form-submit" onClick={(e) => handleSubmit(e as any)}>Request Demo Run</button>
              </>
            )}
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo">Prosp<span>ex</span></div>
        <p className="footer-text">AI-powered outreach intelligence. Built for teams that sell seriously.</p>
      </footer>
    </>
  );
}