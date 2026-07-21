// ============================================================
// RISHIT KUMAR — PORTFOLIO CONTENT
// Single source of truth. Do not scatter strings across components.
// ============================================================

export const personal = {
  name: "Rishit Kumar",
  title: "AWS-Focused DevOps Engineer",
  tagline: "Production-grade Kubernetes on EKS. Self-healing CI/CD. Full-stack observability.",
  location: "Jaipur, Rajasthan",
  email: "rishitkumar2004@gmail.com",
  phone: "+91-9102800723",
  linkedin: "https://linkedin.com/in/rishitkumar1",
  github: "https://github.com/rishikkkkkk",
  resumeUrl: "https://drive.google.com/file/d/16Z-yR3tqlwp8g7jAb6OhfRfrhocUgRO9/view?usp=sharing",
};

export const summary =
  "AWS-focused DevOps Engineer with hands-on production experience deploying and operating Kubernetes infrastructure on Amazon EKS. Built dual dev/prod EKS environments with self-healing GitHub Actions CI/CD (automated rollback + Slack alerting) and full-stack observability (Prometheus, Grafana, EFK). AWS Certified Developer – Associate. Focused on infrastructure-as-code, zero-downtime deployments, and cutting manual ops toil.";

// Terminal commands displayed in the hero typing animation
export const terminalCommands = [
  "$ kubectl get pods --namespace production",
  "$ terraform apply -auto-approve",
  "$ aws eks describe-cluster --name prod-eks",
  "$ helm upgrade --install app ./charts/app -f values.prod.yaml",
  "$ kubectl rollout status deployment/fastapi-service",
  "$ aws cloudwatch get-metric-statistics --namespace AWS/EC2",
  "$ docker build -t fastapi-service:latest .",
  "$ kubectl get nodes -o wide",
];

// ============================================================
// EXPERIENCE
// ============================================================
export const experience = [
  {
    company: "Cloudmaven Infotech",
    role: "DevOps Intern",
    period: "Feb 2026 – Jul 2026",
    location: "Remote",
    bullets: [
      "Provisioned multi-cloud infrastructure (AWS + Azure) using modular, reusable Terraform code, eliminating manual environment setup and standardizing infra provisioning across projects.",
      "Deployed containerized microservices to Kubernetes via Helm across dev/prod environments, managing rollouts and rollbacks to keep releases stable and reversible.",
      "Built GitHub Actions CI/CD pipelines automating Docker image builds, Helm deployments, and Slack webhook notifications — replacing manual deploy steps with a single automated workflow.",
      "Authored reusable pipeline templates adopted across internal engineering teams, standardizing CI/CD practices company-wide.",
      "Configured Prometheus + Grafana for cluster monitoring and an EFK stack for centralized log aggregation, giving teams real-time visibility into deployment health.",
    ],
    tags: ["Terraform", "AWS", "Azure", "Kubernetes", "Helm", "GitHub Actions", "Prometheus", "Grafana", "EFK"],
  },
];

// ============================================================
// PROJECTS
// ============================================================
export const projects = [
  {
    id: "eks-pipeline",
    featured: true,
    title: "End-to-End DevOps Pipeline Automation on AWS EKS",
    category: "Infrastructure & CI/CD",
    period: "Apr 2026",
    context: "Personal / Portfolio",
    bullets: [
      "Architected and provisioned production-grade AWS infrastructure via Terraform (VPC, EKS, IAM, security groups) — 28 resources per environment across dual dev/prod EKS clusters.",
      "Engineered a self-healing GitHub Actions CI/CD pipeline with automatic rollback and Slack alerting, deploying a Dockerized FastAPI service via environment-specific Helm chart overrides.",
      "Stood up full-stack observability with Prometheus, Grafana, and an EFK logging stack, delivering real-time cluster health metrics and centralized log search across both environments.",
      "Resolved production-grade infrastructure incidents: purged an accidentally committed multi-GB Terraform provider binary from Git history using git filter-repo, fixed PVC scheduling failures via storage reconfiguration, and repaired a truncated Kubernetes kubeconfig secret.",
    ],
    tags: ["Terraform", "AWS EKS", "Helm", "GitHub Actions", "Prometheus", "Grafana", "EFK", "FastAPI", "Docker"],
    repoUrl: "#",
  },
  {
    id: "aws-dashboard",
    featured: false,
    title: "Real-Time AWS Monitoring Dashboard",
    category: "Observability",
    period: "Dec 2025",
    context: "JECRC University",
    bullets: [
      "Built a real-time AWS cost and performance monitoring dashboard in Python using Boto3, pulling live CloudWatch metrics for EC2 performance, log analytics, and cost insights.",
      "Designed responsive Streamlit + Plotly visualizations with automated data refresh and cost forecasting, turning raw CloudWatch data into an actionable ops view.",
    ],
    tags: ["Python", "Boto3", "CloudWatch", "Streamlit", "Plotly", "AWS"],
    repoUrl: "#",
  },
];

// ============================================================
// SKILLS
// ============================================================
export const skillGroups = [
  {
    category: "Cloud & IaC",
    icon: "☁️",
    skills: ["AWS EKS", "EC2", "IAM", "VPC", "S3", "RDS", "Route 53", "Azure", "Terraform"],
  },
  {
    category: "Containers & Orchestration",
    icon: "🐳",
    skills: ["Docker", "Kubernetes", "Helm"],
  },
  {
    category: "CI/CD",
    icon: "⚙️",
    skills: ["GitHub Actions", "Automated Rollback", "Slack Integration", "Docker Builds"],
  },
  {
    category: "Observability",
    icon: "📊",
    skills: ["Prometheus", "Grafana", "Elasticsearch", "Fluentd", "Kibana", "PromQL"],
  },
  {
    category: "Languages",
    icon: "💻",
    skills: ["Python", "Bash", "YAML", "PromQL"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "AWS CLI", "Azure CLI"],
  },
];

// ============================================================
// CERTIFICATIONS
// ============================================================
export const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "Jun 2025",
    badgeColor: "#FF9900",
    icon: "aws-dev",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jan 2025",
    badgeColor: "#FF9900",
    icon: "aws-ccp",
  },
];

// ============================================================
// EDUCATION
// ============================================================
export const education = [
  {
    degree: "B.Tech, Computer Science Engineering",
    institution: "JECRC University",
    period: "2022 – 2026",
    cgpa: "7.8",
    highlight: true,
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "Bhagwat Vidyapeeth",
    period: "2022",
    score: "70%",
    highlight: false,
  },
  {
    degree: "Secondary (X)",
    institution: "Chapra Central School",
    period: "2020",
    score: "84%",
    highlight: false,
  },
];

// ============================================================
// NAV
// ============================================================
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
