export const siteConfig = {
  name: "Rebuild Labs",
  description: "Principal-led AI Consulting & Engineering Studio",
  url: "https://rebuildlabs.in",
  founderPortfolio: "https://about.rebuildlabs.in",
  linkedin: "https://www.linkedin.com/in/adityakadamm/",
  email: "aditya@rebuildlabs.in",
  phone: "+917768084382",
  phoneDisplay: "+91 77680 84382",
  tagline: "Stop experimenting. Start shipping AI that works.",
  subheadline:
    "We design, engineer and deploy AI systems and custom software that solve operational problems, connect enterprise data and move beyond proof of concept.",
  positioning: "Principal-led AI consulting & engineering studio",
};

export const navLinks = [
  { label: "Problems", href: "#problems" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Founder", href: "#about" },
  { label: "Engagement", href: "#engagement" },
  { label: "Contact", href: "#contact" },
];

export const problems = [
  {
    problem: "Your AI proof of concept works in isolated demos, but is not ready for production reliability.",
    outcome:
      "We engineer hardened, grounded architectures with rigorous evaluation harnesses, structured schemas, and fallback routing.",
    tag: "Production Reliability",
  },
  {
    problem: "Your organization has valuable data, but struggles to turn it into actionable, trustworthy intelligence.",
    outcome:
      "We design hybrid retrieval and RAG systems that query internal enterprise knowledge safely, accurately, and with zero training on your data.",
    tag: "Data Intelligence",
  },
  {
    problem: "Your team spends hundreds of skilled hours on repetitive manual workflows and document processing.",
    outcome:
      "We build resilient automation pipelines and agentic workflows that parse unstructured inputs and execute tasks reliably.",
    tag: "Operational Velocity",
  },
  {
    problem: "You need experienced engineering leadership and technical clarity without hiring a full internal AI team or hiring bloated agencies.",
    outcome:
      "You work directly with a senior solutions architect through paid advisory sessions, architecture audits, or embedded execution.",
    tag: "Principal Advisory",
  },
];

export const offerings = {
  advisory: [
    {
      title: "Architecture & Feasibility Audits",
      description:
        "Comprehensive technical reviews of your current AI stack, vendor proposals, data pipelines, and security envelopes before committing engineering capital.",
      deliverable: "Written Architecture Assessment & Risk Roadmap",
    },
    {
      title: "Paid Technical Consultations",
      description:
        "Direct 1-on-1 advisory sessions to resolve architectural bottlenecks, model selection dilemmas, latency optimizations, or GenAI project scoping.",
      deliverable: "1-Hour Deep-Dive Consultation & Action Notes",
    },
    {
      title: "Fractional AI Architecture Leadership",
      description:
        "Ongoing senior engineering oversight and technical guidance embedded alongside your product squad to keep roadmaps realistic and execution grounded.",
      deliverable: "Retainer-Based Advisory & Architecture Sprints",
    },
  ],
  engineering: [
    {
      title: "GenAI & Agentic Systems",
      description:
        "Resilient multi-agent workflows, tool execution loops, stateful orchestrations, and controlled execution pipelines engineered for high-stakes business environments.",
      deliverable: "Production LangGraph & Agent Infrastructure",
    },
    {
      title: "Enterprise Knowledge & RAG Systems",
      description:
        "Hybrid dense/sparse vector search, metadata-filtered ingestion pipelines, and grounded enterprise search with strict multi-tenant access boundaries.",
      deliverable: "Grounded Enterprise Retrieval Engine",
    },
    {
      title: "Custom Software & Cloud Engineering",
      description:
        "High-performance SaaS platforms, FastAPI backends, Next.js web applications, and scalable cloud deployments on AWS, Azure, or GCP.",
      deliverable: "Full-Stack Software Delivered to Your Cloud",
    },
    {
      title: "Intelligent Workflow Automation",
      description:
        "Cognitive document processing, automated verification pipelines, and custom API bridges that connect disparate enterprise systems.",
      deliverable: "Automated System Integration Pipelines",
    },
  ],
};

export const processSteps = [
  {
    step: "01",
    title: "Discover & Scope",
    description:
      "We audit your business problem, data readiness, technical debt, and existing constraints to define a clear problem statement and measurable success criteria.",
    deliverable: "Technical Scope & Feasibility Matrix",
  },
  {
    step: "02",
    title: "Architect & Validate",
    description:
      "We map system topology, select the right model and cloud stack, specify evaluation benchmarks, and structure an agreed implementation roadmap.",
    deliverable: "Architecture Spec & Delivery Plan",
  },
  {
    step: "03",
    title: "Engineer & Harden",
    description:
      "We build iteratively with clean code, programmatic evaluation loops, regular demonstrations, and continuous stakeholder alignment under direct principal oversight.",
    deliverable: "Tested Codebase & Iterative Milestones",
  },
  {
    step: "04",
    title: "Deploy & Optimize",
    description:
      "We deploy directly to your cloud environment, instrument telemetry and observability, and refine performance against agreed operational targets.",
    deliverable: "Production Deployment & Knowledge Transfer",
  },
];

export const techStack = {
  ai: ["OpenAI", "Anthropic", "Gemini", "LangGraph", "RAG", "Vector Search"],
  cloud: ["Azure", "AWS", "GCP"],
  engineering: ["Python", "FastAPI", "React", "Next.js", "PostgreSQL", "REST APIs"],
  data: ["BigQuery", "SQL", "FAISS", "Document Processing", "Enterprise Integrations"],
};

export const engagementModels = [

  {
    track: "Advisory & Consultation",
    badge: "Expert Judgment",
    headline: "For teams that need clarity before they build.",
    description:
      "Get direct architectural guidance, evaluate technical feasibility, or get unstuck on high-stakes AI strategy without long commitments.",
    cta: "Request a Consultation",
    type: "consulting",
    startingFrom: "Single consultation or advisory sprint",
    features: [
      "1-on-1 Paid Technical Consultations ($300 / session)",
      "Architecture & tech stack reviews",
      "Model selection & feasibility assessment",
      "Fractional engineering guidance",
      "No long-term lock-in required",
    ],
  },
  {
    track: "Engineering & Development",
    badge: "Full-Cycle Build",
    headline: "For teams ready to turn ideas into production systems.",
    description:
      "Turn business requirements into hardened, deployed software with transparent milestones, clean code, and contract-governed deliverable rights.",
    cta: "Start an Implementation",
    type: "development",
    startingFrom: "Fixed-scope sprint or contract engagement",
    features: [
      "End-to-end AI & agentic system build",
      "Enterprise RAG & knowledge assistants",
      "Custom SaaS & cloud engineering",
      "Comprehensive evaluation harnesses",
      "Contract-defined deliverable rights & IP clarity",
    ],
  },
];
