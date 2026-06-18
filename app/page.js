import Image from "next/image";
import Reveal from "../components/Reveal";
import logo from "../logo-transparent.png";

const services = [
  {
    title: "AI Solutions",
    eyebrow: "Custom product work",
    description:
      "We build AI capabilities that belong inside real products and real operations, not demos that stall after the pilot.",
    points: [
      "Custom AI features embedded into existing products and internal systems",
      "Fine-tuned and retrieval-backed models shaped around your data, language, and workflows",
      "Decision-support, summarization, classification, and search experiences built for production use"
    ]
  },
  {
    title: "AI Automations",
    eyebrow: "Workflow engineering",
    description:
      "We map the work that slows teams down, then replace manual handoffs with durable automation that people can actually trust.",
    points: [
      "n8n-style pipelines, API orchestration, and process automation across the tools your team already uses",
      "Internal tooling that removes repetitive admin work and creates reliable operational visibility",
      "Human-in-the-loop flows for approvals, exception handling, and traceable outcomes"
    ]
  },
  {
    title: "Web Solutions",
    eyebrow: "Full-stack delivery",
    description:
      "We design and build the customer-facing and internal software that supports growth, operations, and product delivery.",
    points: [
      "Custom marketing sites, web apps, dashboards, and business software",
      "Modern front-end architecture paired with pragmatic backend and deployment decisions",
      "Technical execution from discovery through launch, handoff, and iteration"
    ]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Scope the problem",
    text: "We start with the operational bottleneck, product need, or business objective and turn it into a concrete technical brief."
  },
  {
    number: "02",
    title: "Design the system",
    text: "We define architecture, data flow, integration points, and delivery milestones before code becomes expensive."
  },
  {
    number: "03",
    title: "Build and iterate",
    text: "We ship in working increments, validate against live use cases, and adjust quickly without losing engineering discipline."
  },
  {
    number: "04",
    title: "Deploy with confidence",
    text: "We handle production readiness, rollout, and the operational details that make solutions usable beyond launch day."
  }
];

const differentiators = [
  {
    title: "Technical depth across the stack",
    text: "AI, automations, front-end, backend, and deployment are treated as one delivery problem, not handed off between disconnected specialists."
  },
  {
    title: "Built for business reality",
    text: "We optimize for adoption, maintainability, and measurable operational gains instead of chasing novelty for its own sake."
  },
  {
    title: "Direct communication, low theater",
    text: "You get clear thinking, honest tradeoffs, and a team that can explain why something should or should not be built."
  },
  {
    title: "From prototype to production",
    text: "We can help validate an idea quickly, then harden it into a system your business can rely on."
  }
];

const caseStudies = [
  {
    title: "Operations Automation for a Service Business",
    category: "AI Automations",
    summary:
      "Placeholder for a workflow case study: intake, routing, approvals, and reporting automated across multiple tools with clear human checkpoints.",
    outcome: "Swap in measurable time savings, error reduction, and workflow volume."
  },
  {
    title: "AI-Powered Internal Knowledge Tool",
    category: "AI Solutions",
    summary:
      "Placeholder for a product case study: business documents structured into a searchable assistant with permissions, traceability, and useful responses.",
    outcome: "Swap in adoption metrics, response accuracy, and team productivity impact."
  },
  {
    title: "Custom Web Platform for a Growing Team",
    category: "Web Solutions",
    summary:
      "Placeholder for a software delivery case study: a tailored web application replacing brittle spreadsheets and fragmented manual processes.",
    outcome: "Swap in launch scope, operational improvements, and downstream business value."
  }
];

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

function OrbitDivider() {
  return (
    <div className="orbit-divider" aria-hidden="true">
      <span className="orbit-divider__line" />
      <span className="orbit-divider__ring orbit-divider__ring--outer" />
      <span className="orbit-divider__ring orbit-divider__ring--inner" />
      <span className="orbit-divider__core" />
    </div>
  );
}

const contactMessages = {
  success: "Thanks, your inquiry was sent successfully. We will get back to you soon.",
  invalid: "Please fill in your name, email, and message before sending.",
  error: "Something went wrong while sending your message. Please try again.",
  "config-error": "The contact form is not configured correctly yet. Please email us directly for now."
};

export default function HomePage({ searchParams }) {
  const contactStatus = searchParams?.contact;
  const contactMessage = contactStatus ? contactMessages[contactStatus] : null;

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="Infopyx home">
            <Image
              src={logo}
              alt="Infopyx logo"
              priority
              className="brand-logo"
              sizes="(max-width: 820px) 150px, 180px"
            />
          </a>

          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--primary" href="#contact">
            Book a call
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">AI systems, automations, and software built to be used</p>
            <h1>Infopyx helps businesses turn technical ideas into dependable working systems.</h1>
            <p className="hero-text">
              We design and ship custom AI products, workflow automations, and web software for teams that need clarity, execution, and solutions that hold up in production.
            </p>

            <div className="hero-actions">
              <a className="button button--primary" href="#contact">
                Start a conversation
              </a>
              <a className="button button--secondary" href="#services">
                Explore services
              </a>
            </div>

            <div className="hero-proof">
              <div>
                <span className="hero-proof__label">What we focus on</span>
                <strong>Applied AI, operational automation, and custom software delivery</strong>
              </div>
              <div>
                <span className="hero-proof__label">How we work</span>
                <strong>Directly with business goals, constraints, and production realities</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-board">
              <div className="hero-board__top">
                <div className="hero-board__dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="hero-board__kicker">Delivery snapshot</div>
              </div>

              <div className="hero-board__grid">
                <div className="hero-board__column">
                  <span className="hero-board__column-title">Inputs</span>
                  <p>Business goals</p>
                  <p>Operational friction</p>
                  <p>Product requirements</p>
                  <p>Existing systems</p>
                </div>

                <div className="hero-board__center">
                  <div className="orbit-mark">
                    <span className="orbit-mark__glow" />
                    <span className="orbit-mark__ring orbit-mark__ring--a" />
                    <span className="orbit-mark__ring orbit-mark__ring--b" />
                    <span className="orbit-mark__ring orbit-mark__ring--c" />
                    <span className="orbit-mark__particle orbit-mark__particle--a" />
                    <span className="orbit-mark__particle orbit-mark__particle--b" />
                    <span className="orbit-mark__particle orbit-mark__particle--c" />
                    <span className="orbit-mark__core" />
                  </div>
                  <strong>Engineered delivery</strong>
                  <span>Scoped, built, and deployed with production discipline.</span>
                </div>

                <div className="hero-board__column hero-board__column--right">
                  <span className="hero-board__column-title">Outputs</span>
                  <p>Faster execution</p>
                  <p>Less manual work</p>
                  <p>Clearer decisions</p>
                  <p>Dependable systems</p>
                </div>
              </div>

              <div className="hero-board__footer">
                <div className="hero-board__metric">
                  <span>Delivery model</span>
                  <strong>End-to-end technical execution</strong>
                </div>
                <div className="hero-board__metric">
                  <span>Typical scope</span>
                  <strong>AI, automation, and web systems</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="container">
        <OrbitDivider />
      </div>

      <section className="section" id="services">
        <div className="container">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Services</p>
              <h2>Three service lines, one engineering standard.</h2>
            </div>
            <p className="section-intro">
              We work across AI, automation, and software because business problems rarely stay inside one box. The delivery should feel joined up, not fragmented.
            </p>
          </Reveal>

          <div className="services-list">
            {services.map((service, index) => (
              <Reveal
                as="article"
                className={`service-card ${index % 2 === 1 ? "service-card--offset" : ""}`}
                key={service.title}
                delay={index * 90}
              >
                <div className="service-card__meta">
                  <span>{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                </div>
                <div className="service-card__content">
                  <p>{service.description}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted" id="about">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">How we work</p>
            <h2>A clear path from problem definition to deployed solution.</h2>
          </Reveal>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <Reveal as="article" className="process-card" key={step.number} delay={index * 80}>
                <span className="process-card__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Why Infopyx</p>
              <h2>Built for buyers who care about competence more than noise.</h2>
            </div>
            <p className="section-intro">
              The firms worth hiring are usually the ones that can explain the hard parts simply, make good tradeoffs, and ship work that survives contact with reality.
            </p>
          </Reveal>

          <div className="reason-grid">
            {differentiators.map((item, index) => (
              <Reveal as="article" className="reason-card" key={item.title} delay={index * 85}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" id="work">
        <div className="container">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Structured for real case studies when you are ready to publish them.</h2>
            </div>
            <p className="section-intro">
              This section is designed as a credible placeholder now and an easy swap for real project stories later, without changing the page structure.
            </p>
          </Reveal>

          <div className="case-study-list">
            {caseStudies.map((study, index) => (
              <Reveal as="article" className="case-study-card" key={study.title} delay={index * 90}>
                <div className="case-study-card__top">
                  <span>{study.category}</span>
                  <span>Project placeholder</span>
                </div>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <div className="case-study-card__outcome">
                  <strong>Suggested proof point</strong>
                  <p>{study.outcome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cta" id="contact">
        <div className="container cta-grid">
          <Reveal className="cta-copy">
            <p className="eyebrow">Contact</p>
            <h2>If you have a system to build or a process to fix, we should talk.</h2>
            <p>
              Share the business context, the bottleneck, or the product idea. We can help you shape the right scope and decide what should happen next.
            </p>
            <div className="contact-links">
              <a href="mailto:hello.infopyx@gmail.com">hello.infopyx@gmail.com</a>
              <a href="https://cal.com" target="_blank" rel="noreferrer">
                Book a call
              </a>
            </div>
          </Reveal>

          <Reveal as="form" className="contact-form" delay={100} action="/api/contact" method="post">
            {contactMessage ? (
              <p className={`contact-form__status contact-form__status--${contactStatus === "success" ? "success" : "error"}`}>
                {contactMessage}
              </p>
            ) : null}
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@company.com" required />
            </label>
            <label>
              Company
              <input type="text" name="company" placeholder="Company name" />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us what you are building, where the friction is, or what outcome you need."
                required
              />
            </label>
            <button type="submit" className="button button--primary">
              Send inquiry
            </button>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Image
              src={logo}
              alt="Infopyx logo"
              className="footer-logo"
              sizes="(max-width: 820px) 150px, 170px"
            />
            <p>AI solutions, automations, and software delivery for businesses that need working systems.</p>
          </div>

          <div className="footer-links">
            <div>
              <span>Navigate</span>
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <div>
              <span>Contact</span>
              <a href="mailto:hello.infopyx@gmail.com">hello.infopyx@gmail.com</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://cal.com" target="_blank" rel="noreferrer">
                Book a call
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-base">
          <p>&copy; 2026 Infopyx. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
