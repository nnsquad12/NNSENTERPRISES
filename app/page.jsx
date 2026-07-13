import Nav from "@/components/Nav";
import Effects from "@/components/Effects";
import ContactForm from "@/components/ContactForm";

const INDUSTRIES = [
  "Sports",
  "Entertainment",
  "Lifestyle",
  "Hospitality",
  "Personal Brands",
  "Emerging Media Ventures",
];

const SERVICES = [
  ["Production", "Content Production", "High-level digital content built for attention and engagement."],
  ["Growth", "Social Media Growth", "Platform-specific audience development strategies."],
  ["Long-Form", "YouTube Development", "Long-form strategy, retention optimization, and channel positioning."],
  ["Short-Form", "Short-Form Systems", "Scalable content built for TikTok, Reels, and Shorts."],
  ["Strategy", "Creative Consulting", "Brand strategy, content planning, and digital growth execution."],
  ["Positioning", "Brand Positioning", "Creative direction that makes brands distinct, memorable, and market-ready."],
];

function Ticker() {
  const items = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <div className="ticker" aria-label="Industries we serve">
      <div className="ticker-track">
        {items.map((name, i) => (
          <span key={i}>
            {name}
            <i>◆</i>
          </span>
        ))}
      </div>
    </div>
  );
}

function GrowthChart() {
  return (
    <figure className="editorial chart-card">
      <svg
        viewBox="0 0 560 340"
        role="img"
        aria-label="Chart showing audience growth compounding over time"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="rgba(10,10,12,.10)" strokeWidth="1">
          <line x1="60" y1="40" x2="60" y2="280" />
          <line x1="60" y1="280" x2="530" y2="280" />
          <line x1="60" y1="220" x2="530" y2="220" strokeDasharray="3 5" />
          <line x1="60" y1="160" x2="530" y2="160" strokeDasharray="3 5" />
          <line x1="60" y1="100" x2="530" y2="100" strokeDasharray="3 5" />
          <line x1="60" y1="40" x2="530" y2="40" strokeDasharray="3 5" />
        </g>
        <g fontSize="11" fill="#6B6B72" letterSpacing="2">
          <text x="60" y="305">MONTH 1</text>
          <text x="255" y="305">MONTH 6</text>
          <text x="455" y="305">MONTH 12</text>
          <text x="60" y="28" fill="#2B47FF" letterSpacing="3">AUDIENCE GROWTH</text>
        </g>
        <path
          className="chart-area"
          d="M60,270 C160,262 230,248 300,210 C370,172 430,120 520,56 L520,280 L60,280 Z"
          fill="url(#growfill)"
        />
        <defs>
          <linearGradient id="growfill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2B47FF" stopOpacity=".22" />
            <stop offset="100%" stopColor="#2B47FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="chart-line"
          d="M60,270 C160,262 230,248 300,210 C370,172 430,120 520,56"
          fill="none"
          stroke="#2B47FF"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <g className="chart-dot">
          <circle cx="520" cy="56" r="6" fill="#2B47FF" />
          <circle cx="520" cy="56" r="12" fill="none" stroke="#2B47FF" strokeWidth="1.5" opacity=".4" />
          <text x="512" y="44" textAnchor="end" fontSize="12" fill="#0A0A0C" fontWeight="600" letterSpacing="1">
            BRAND AT SCALE ↑
          </text>
        </g>
        <g className="chart-dot" fontSize="10" fill="#6B6B72" letterSpacing="1">
          <circle cx="300" cy="210" r="4" fill="#0A0A0C" />
          <text x="300" y="238" textAnchor="middle">GROW YOUR VIEWS</text>
        </g>
      </svg>
      <figcaption>Built to compound — content systems that turn attention into audience</figcaption>
    </figure>
  );
}

const CREW = [
  {
    title: "Production Crew",
    text: "Cinematographers, photographers, and on-set producers capturing premium footage in the field.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="14" width="28" height="22" rx="3" />
        <path d="M32 22l12-6v16l-12-6" />
        <circle cx="18" cy="25" r="6" />
      </svg>
    ),
  },
  {
    title: "Post-Production",
    text: "Editors, motion designers, and colorists turning raw footage into content built to hold attention.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="8" width="40" height="26" rx="3" />
        <path d="M4 20h40M14 8v12M30 20v14M22 27h16" />
        <path d="M14 41h20" />
      </svg>
    ),
  },
  {
    title: "Growth & Strategy",
    text: "Platform strategists and analysts engineering distribution, retention, and audience development.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 40h36" />
        <path d="M8 34l10-9 8 5 14-16" />
        <path d="M32 14h8v8" />
      </svg>
    ),
  },
  {
    title: "Creative & Design",
    text: "Brand designers and art direction shaping how every NNS project looks, feels, and gets remembered.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M34 6l8 8-24 24-11 3 3-11z" />
        <path d="M28 12l8 8" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Effects />
      <Nav />

      {/* ============ HERO ============ */}
      <header className="hero" id="home">
        <div className="hero-lines" />
        <img src="/mark-black.png" alt="" aria-hidden="true" className="hero-mark" id="heroMark" />
        <div className="wrap">
          <p className="eyebrow">NNS Enterprises LLC</p>
          <h1>
            <span className="line"><span>Modern Media.</span></span>
            <span className="line"><span>Strategic Growth.</span></span>
            <span className="line"><span>Premium Storytelling.</span></span>
          </h1>
          <p className="hero-sub">
            Built at the intersection of sports, entertainment, digital media, and audience growth.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-solid magnetic"><i>Contact Us</i></a>
            <a href="#founder" className="btn btn-line magnetic"><i>Meet the Founder</i></a>
          </div>
        </div>
        <div className="hero-foot">
          <div className="wrap">
            <span>Media <b>/</b> Marketing <b>/</b> Production</span>
            <span>Houston, TX <b>—</b> Worldwide</span>
          </div>
        </div>
      </header>

      <Ticker />

      {/* ============ WHAT WE DO ============ */}
      <section id="what-we-do">
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <p className="eyebrow">What We Do</p>
              <h2>Content is infrastructure <em>for growth.</em></h2>
              <GrowthChart />
            </div>
            <div className="reveal">
              <p className="lede">
                NNS Enterprises LLC is a modern media, marketing, and production company focused on
                helping brands, personalities, and businesses grow through strategic content, audience
                development, and premium digital execution.
              </p>
              <p className="body-copy">
                Founded by Noah Neumann, NNS pairs real-world creator experience and audience psychology
                with a hand-picked crew of producers, editors, and strategists — building content systems
                designed for long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PHILOSOPHY (full-width dark band) ============ */}
      <section className="dark philosophy-band">
        <div className="wrap reveal">
          <p className="eyebrow">Philosophy</p>
          <p className="big">
            Attention at scale. <em>Real business value</em> behind the scenes.
          </p>
          <p className="small">
            NNS focuses on building sustainable audience ecosystems that translate into visibility,
            monetization, and measurable growth.
          </p>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Services</p>
            <h2>Strategic Growth <em>Services</em></h2>
          </div>
          <div className="svc-grid">
            {SERVICES.map(([label, title, text]) => (
              <div className="svc reveal" key={title}>
                <span className="label">{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about">
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <p className="eyebrow">About NNS</p>
              <h2>Who <em>We Are</em></h2>
              <p className="lede">
                NNS Enterprises LLC is a modern media, marketing, and production company built at the
                intersection of entertainment, storytelling, sports, and digital strategy.
              </p>
              <p className="body-copy">
                NNS is an emerging force in the digital media space, built through strategic
                partnerships, premium creative execution, and growth-focused marketing systems.
              </p>
              <p className="body-copy">
                At NNS, content is more than entertainment — it&apos;s infrastructure for growth. Rather
                than simply chasing views, we build scalable content systems designed to create:
              </p>
            </div>
            <div className="reveal">
              <p className="eyebrow" style={{ marginBottom: 6 }}>What We Believe</p>
              <ul className="beliefs">
                <li>Brand Awareness</li>
                <li>Audience Growth</li>
                <li>Long-Term Monetization</li>
                <li>Strategic Market Positioning</li>
                <li>Measurable ROI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOUNDER (dark band) ============ */}
      <section id="founder" className="dark">
        <div className="wrap">
          <div className="founder-grid">
            <div className="founder-photo reveal">
              <img src="/founder.webp" alt="Noah Neumann, founder of NNS Enterprises LLC" className="founder-img" />
            </div>
            <div className="reveal">
              <p className="eyebrow">Founder</p>
              <h2>Meet <em>Noah Neumann</em></h2>
              <p className="founder-roles">Athlete&nbsp;&nbsp;/&nbsp;&nbsp;Creator&nbsp;&nbsp;/&nbsp;&nbsp;Entrepreneur</p>
              <p className="lede">
                As both a professional basketball player and full-time digital entrepreneur, Noah brings
                a unique perspective to modern media.
              </p>
              <p className="body-copy">
                While competing internationally, Noah simultaneously built one of the strongest
                independent digital audiences in sports and lifestyle media — generating millions of
                views through high-energy storytelling, premium production, and culturally relevant
                content.
              </p>
              <p className="body-copy">That experience became the foundation for NNS Enterprises LLC.</p>
              <blockquote className="quote">
                &quot;The goal isn&apos;t just to create content people watch. It&apos;s to build brands
                people remember.&quot;
                <cite>— Noah Neumann, Founder</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE CREW ============ */}
      <section id="team" className="dark" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">The Team</p>
            <h2>One vision. <em>A full crew</em> behind it.</h2>
            <p className="body-copy" style={{ maxWidth: 660 }}>
              Behind every NNS production is a network of specialists — producers, cinematographers,
              editors, designers, and growth strategists assembled per project to execute at a premium
              level. Lean by design. Built to scale.
            </p>
          </div>
          <div className="crew-grid">
            {CREW.map(({ title, text, icon }) => (
              <div className="crew reveal" key={title}>
                {icon}
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY (dark cont.) ============ */}
      <section id="gallery" className="dark">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Behind the Brand</p>
            <h2>Where the content <em>comes from.</em></h2>
          </div>
          <div className="collage">
            <figure className="feat reveal">
              <img src="/gal-a.jpg" alt="Noah Neumann entering the arena through the crowd" loading="lazy" />
              <figcaption>Game Day</figcaption>
            </figure>
            <div className="stack">
              <figure className="reveal">
                <img src="/gal-b.jpg" alt="Noah Neumann with fans at an outdoor event" loading="lazy" />
                <figcaption>With the Fans</figcaption>
              </figure>
              <figure className="reveal">
                <img src="/gal-c.jpg" alt="Noah Neumann at a fan event" loading="lazy" />
                <figcaption>In the Crowd</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal">
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s build something that <em>gets attention.</em></h2>
              <p className="body-copy">
                For partnerships, consulting, production, or media opportunities, contact NNS
                Enterprises LLC.
              </p>
              <div className="direct">
                <b>Direct Inquiry</b>
                <br />
                Business inquiries through the website contact form.
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <div className="cta-band">
        <h2 className="reveal">Build a brand people remember.</h2>
        <a href="#contact" className="btn magnetic reveal"><i>Start a Project</i></a>
      </div>

      <footer>
        <div className="wrap foot">
          <a href="#home" aria-label="NNS Enterprises home">
            <img src="/lockup-white.png" alt="NNS Enterprises LLC" />
          </a>
          <p>© 2026 NNS Enterprises LLC — All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
