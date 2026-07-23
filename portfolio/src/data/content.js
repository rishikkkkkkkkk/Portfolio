// ============================================================
// RISHIT KUMAR — PORTFOLIO CONTENT
// Single source of truth for portfolio details
// ============================================================

export const personal = {
  name: "Rishit Kumar",
  logoText: "rishitkumar",
  heroHeading1: "Hello I'am",
  heroName: "Rishit Kumar",
  heroLine2: "AWS-Focused",
  heroLine2Outline: "DevOps Engineer",
  heroLine3: "& Kubernetes",
  heroLine3Outline: "Enthusiast",
  location: "Jaipur, Rajasthan",
  email: "rishitkumar2004@gmail.com",
  phone: "+91-9102800723",
  linkedin: "https://linkedin.com/in/rishitkumar1",
  github: "https://github.com/rishikkkkkk",
  twitter: "https://twitter.com/rishitkumar_dev",
  instagram: "https://instagram.com/rishitkumar_dev",
  whatsapp: "https://wa.me/919102800723?text=Hey%20Rishit%20%F0%9F%98%8E%2C%20let's%20connect%21",
  resumeUrl: "https://drive.google.com/file/d/16Z-yR3tqlwp8g7jAb6OhfRfrhocUgRO9/view?usp=sharing",
  bio: "I specialize in architecting, automating, and operating production-grade Kubernetes infrastructure on AWS EKS. Experienced in Terraform IaC, self-healing CI/CD pipelines, and full-stack observability with Prometheus, Grafana, and EFK."
};

export const aboutParagraphs = [
  "My name is Rishit Kumar and I live in Jaipur, Rajasthan, India. I am passionate about the world of DevOps and Cloud Infrastructure and am proficient in building production-ready Kubernetes environments and self-healing CI/CD pipelines.",
  "I have hands-on experience provisioning multi-cloud infrastructure (AWS & Azure) using Terraform, orchestrating microservices on AWS EKS using Helm, and building automated GitHub Actions workflows with automatic rollbacks and Slack alerts.",
  "Certified as an AWS Certified Developer – Associate, I focus on eliminating operational toil, maximizing uptime, and bringing full observability into microservice architectures with Prometheus, Grafana, and EFK logging."
];

// ============================================================
// SKILLS (Matches Muhsin Ali grid layout)
// ============================================================
export const skillsList = [
  { name: "AWS EKS", icon: "aws" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Docker", icon: "docker" },
  { name: "Terraform", icon: "terraform" },
  { name: "GitHub Actions", icon: "github" },
  { name: "Prometheus", icon: "prometheus" },
  { name: "Grafana", icon: "grafana" },
  { name: "Linux", icon: "linux" },
  { name: "Python", icon: "python" },
  { name: "Bash", icon: "bash" },
  { name: "Helm", icon: "helm" },
  { name: "Elasticsearch", icon: "elasticsearch" },
  { name: "Git", icon: "git" },
  { name: "AWS Cloud", icon: "aws" },
  { name: "Azure", icon: "azure" }
];

// ============================================================
// EXPERIENCE
// ============================================================
export const experience = [
  {
    role: "DevOps Intern",
    company: "Cloudmaven Infotech",
    period: "Feb 2026 – Jul 2026",
    location: "Remote / Jaipur, India",
    bullets: [
      "Provisioned multi-cloud infrastructure (AWS + Azure) using modular, reusable Terraform code, eliminating manual environment setup and standardizing infra provisioning across projects.",
      "Deployed containerized microservices to Kubernetes via Helm across dev/prod environments, managing rollouts and rollbacks to keep releases stable and reversible.",
      "Built GitHub Actions CI/CD pipelines automating Docker image builds, Helm deployments, and Slack webhook notifications — replacing manual deploy steps with a single automated workflow.",
      "Configured Prometheus + Grafana for cluster monitoring and an EFK stack for centralized log aggregation, giving teams real-time visibility into deployment health."
    ],
    tags: ["Terraform", "AWS", "Azure", "Kubernetes", "Helm", "GitHub Actions", "Prometheus", "Grafana", "EFK"]
  }
];

// ============================================================
// PROJECTS
// ============================================================
export const projects = [
  {
    number: "01",
    title: "End-to-End DevOps Pipeline Automation on AWS EKS",
    description: "Architected and provisioned production-grade AWS infrastructure via Terraform (VPC, EKS, IAM, security groups) — 28 resources per environment across dual dev/prod EKS clusters. Engineered a self-healing GitHub Actions CI/CD pipeline with automatic rollback and Slack alerting, deploying a Dockerized FastAPI service via environment-specific Helm chart overrides.",
    techStacks: ["AWS EKS", "Terraform", "Docker", "Kubernetes", "Helm", "GitHub Actions", "Prometheus", "Grafana", "EFK"],
    repoUrl: "https://github.com/rishikkkkkk/Cloud-Native-Application",
    liveUrl: "https://github.com/rishikkkkkk/Cloud-Native-Application"
  },
  {
    number: "02",
    title: "Real-Time AWS Monitoring & Cost Dashboard",
    description: "Built a real-time AWS cost and performance monitoring dashboard in Python using Boto3, pulling live CloudWatch metrics for EC2 performance, log analytics, and cost insights. Designed responsive Streamlit + Plotly visualizations with automated data refresh and cost forecasting.",
    techStacks: ["Python", "AWS", "Boto3", "CloudWatch", "Docker", "Linux"],
    repoUrl: "https://github.com/rishikkkkkk/Real-Time-AWS-Monitoring-Dashboard",
    liveUrl: "https://github.com/rishikkkkkk/Real-Time-AWS-Monitoring-Dashboard"
  }
];

// ============================================================
// NAV LINKS
// ============================================================
export const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" }
];
