import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const pillars = [
  {
    title: 'Core Engineering',
    text: 'Writing clean, scalable code for desktop, web, and mobile. If it ships to production, it needs to be unapologetically stable.',
    note: 'C# - .NET - JavaScript - TypeScript',
  },
  {
    title: 'Product Interfaces',
    text: 'It doesn’t matter how powerful the backend is if the user gets confused. I build fast, intuitive workflows that solve the actual problem.',
    note: 'User flow - Interaction - Design systems',
  },
  {
    title: 'Technical Translation',
    text: 'Bridging the gap between business goals and engineering execution. No unnecessary jargon—just clear plans and transparent progress.',
    note: 'Requirements - Documentation - Stakeholder updates',
  },
]

const flagshipFlow = [
  {
    title: 'The Problem',
    text: 'Traditional, manual selling methods in retail stores cause slow checkouts, billing mistakes, and massive queues during peak hours.',
  },
  {
    title: 'The Solution',
    text: 'Nexill Retail POS transforms paper-based chaos into a lightning-fast digital workflow. It gives cashiers speed and owners complete control.',
  },
  {
    title: 'The Impact',
    text: 'Faster customer processing, zero operational errors, and a rock-solid foundation for real-time inventory and analytics.',
  },
]

const impactItems = [
  { value: '3 Core Roles', label: 'Owner / Manager / Cashier' },
]

const featuredProjects = [
  {
    type: 'Retail Software',
    title: 'Nexill POS Checkout System',
    text: 'Checkout flow redesigned from traditional manual selling to fast POS billing with stronger reliability during rush hours.',
    metric: 'Result: Faster cashier handling with fewer checkout disruptions.',
    href: 'projects.html#performance',
  },
  {
    type: 'Product Interface',
    title: 'Store Management Console',
    text: 'Role-based owner and manager screens built for product updates, permission control, and daily operational clarity.',
    metric: 'Result: Clear actions for owner, manager, and cashier roles.',
    href: 'projects.html#design',
  },
  {
    type: 'Portfolio Engineering',
    title: 'Portfolio Experience Architecture',
    text: 'Multi-page portfolio structure designed to present projects, certifications, and contact flow in a clear sequence.',
    metric: 'Result: Stronger project storytelling and cleaner navigation.',
    href: 'resume.html#specs',
  },
]

const stackGroups = [
  {
    title: 'Core Engineering',
    chips: ['C#', '.NET', 'JavaScript', 'TypeScript', 'React Native'],
  },
  {
    title: 'Product UI',
    chips: ['HTML/CSS', 'Responsive UI', 'Design Systems', 'UX Flows'],
  },
  {
    title: 'Data and Operations',
    chips: ['SQL', 'Role Permissions', 'Tax Logic', 'Receipt Workflows'],
  },
  {
    title: 'Growth and Delivery',
    chips: ['SEO/SEM Basics', 'Git/GitHub', 'Technical Docs', 'Prompt Engineering'],
  },
]

export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return false
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <>
      <header id="topbar">
        <div className="topbar__content">
          <div className="topbar__left">
            <div>
              <div className="brand-name">Abdelrahman Maghrbi</div>
              <div className="brand-sub">Software Engineer</div>
            </div>
          </div>
          <div className="topbar__right">
            <a className="tb-link active" href="/#overview">Home</a>
            <a className="tb-link" href="resume.html">Resume</a>
            <a className="tb-link" href="projects.html">Projects</a>
            <ThemeToggle dark={dark} onToggle={() => setDark(d => !d)} />
          </div>
        </div>
      </header>

      <main>
        <section id="overview" className="section section--hero">
          <div className="hero-media hero-media--full" aria-label="Hero media">
            <div className="hero-media__bg" aria-hidden="true" />
            <div className="hero-media__img" aria-hidden="true" />
            <div className="hero-banner__inner">
              <div className="hero-copy hero-copy--overlay">
                <h2 className="headline">Software Engineer</h2>
                <p className="subhead">
                  Specialized in desktop, web, and mobile application development with a strong focus on reliability,
                  maintainability, and high-performance user experiences. Combines engineering discipline with
                  product thinking to translate complex business requirements into practical, scalable software
                  solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="wrap hero-relocated">
            <div className="hero-cta">
              <button className="btn btn--primary" type="button" onClick={() => (window.location.href = 'projects.html')}>
                Projects
              </button>
              <button className="btn" type="button" onClick={() => (window.location.href = 'resume.html')}>
                Resume
              </button>
              <a className="btn" href="mailto:abdu.maghrbi@gmail.com">
                Email
              </a>
            </div>
          </div>
        </section>


        <section id="pillars" className="section section--tight">
          <div className="wrap">
            <div className="section-head">
              <p className="section-kicker">Expertise Areas</p>
              <h3 className="section-title">Engineering and product delivery expertise</h3>
            </div>
            <div className="pillars-grid row g-3">
              {pillars.map((pillar) => (
                <div className="col-12 col-lg-4" key={pillar.title}>
                  <article className="pillar-card">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.text}</p>
                    <div className="pillar-note">{pillar.note}</div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="flagship" className="section section--tight">
          <div className="wrap">
            <div className="section-head">
              <p className="section-kicker">Flagship Case Study</p>
              <h3 className="section-title">Nexill Retail POS</h3>
            </div>
            <div className="flagship-grid row g-3">
              <div className="col-12 col-xl-7">
                <article className="flagship-card">
                  <div className="flagship-flow">
                    {flagshipFlow.map((step) => (
                      <div className="flagship-step" key={step.title}>
                        <h4>{step.title}</h4>
                        <p>{step.text}</p>
                      </div>
                    ))}
                  </div>
                  <ul className="impact-inline" aria-label="Flagship metrics">
                    {impactItems.map((item) => (
                      <li key={item.label}>
                        <span className="impact-inline__value">{item.value}</span>
                        <span className="impact-inline__label">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
              <div className="col-12 col-xl-5">
                <aside className="flagship-card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <p className="section-kicker kicker-reset">Core modules</p>
                  <ul className="list list-tight">
                    <li>Checkout flow, taxes, receipts, and cashier-ready shortcuts</li>
                    <li>Product management with role and permission controls</li>
                    <li>Roadmap extension toward inventory and practical analytics</li>
                  </ul>
                  <div className="hero-cta cta-tight" style={{ marginTop: 'auto', justifyContent: 'flex-end' }}>
                    <button className="btn btn--primary" type="button" onClick={() => window.open('https://www.nexillretail.store/', '_blank')}>
                      View product
                    </button>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section id="featured" className="section section--tight">
          <div className="wrap">
            <div className="section-head">
              <p className="section-kicker">Featured Projects</p>
              <h3 className="section-title">Selected projects and delivery outcomes</h3>
            </div>
            <div className="project-grid row g-3">
              {featuredProjects.map((project) => (
                <div className="col-12 col-lg-4" key={project.title}>
                  <article className="project-card">
                    <div className="project-meta">{project.type}</div>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    <div className="project-metric">{project.metric}</div>
                    <a className="project-link" href={project.href}>
                      Open case details -&gt;
                    </a>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section section--tight">
          <div className="wrap">
            <div className="section-head">
              <p className="section-kicker">Tech Stack</p>
              <h3 className="section-title">Tools grouped by delivery function</h3>
            </div>
            <div className="stack-groups row g-3">
              {stackGroups.map((group) => (
                <div className="col-12 col-md-6 col-xl-3" key={group.title}>
                  <article className="stack-card">
                    <h3>{group.title}</h3>
                    <div className="chips">
                      {group.chips.map((chip) => (
                        <span className="chip" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="contact" className="section section--tight">
          <div className="wrap">
            <div className="contact-banner">
              <div>
                <h3>Let's build something reliable.</h3>
                <p>I am open to Software Engineering opportunities focused on practical architecture, robust product delivery, and measurable business value.</p>
              </div>
              <div className="contact-actions">
                <button className="btn btn--primary" type="button" onClick={() => (window.location.href = 'mailto:abdu.maghrbi@gmail.com')}>
                  Email
                </button>
                <button
                  className="btn"
                  type="button"
                  onClick={() => window.open('https://www.linkedin.com/in/abdelrahman-maghrbi/', '_blank')}
                >
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="support">
        <div className="wrap footer-inner">
          <div className="footer-left">
            <div className="footer-title">Portfolio</div>
            <div className="footer-desc">Reliable product execution, practical architecture, clear communication.</div>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a className="tb-link" href="#overview">Home</a>
            <a className="tb-link" href="resume.html">Resume</a>
            <a className="tb-link" href="projects.html">Projects</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
