// ============================================================
// RESUME DATA — Edit this file to update all portfolio content
// ============================================================

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  accentColor: 'cyan' | 'orange' | 'green' | 'purple'
  metrics?: string[]
  icon: string
  link?: string
  award?: string
}

export interface ExperienceBullet {
  text: string
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  metrics: string[]
  tags: string[]
}

export interface Publication {
  title: string
  conference: string
  location: string
  date: string
  badge: string
  findings: string[]
  tags: string[]
  accentColor: 'cyan' | 'purple'
  link?: string
}

export interface Skill {
  name: string
  level: number
}

export interface SkillGroup {
  category: string
  skills: Skill[]
}

export interface Award {
  title: string
  org: string
  year: string
  description: string
  icon: string
  accentColor: 'cyan' | 'orange' | 'green' | 'purple' | 'gold'
  metric?: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
}

// ============================================================
// PROFILE
// ============================================================

export const profile = {
  name: 'Kittituch Wongwatcharapaiboon',
  nameShort: 'Kittituch',
  nameLast: 'Wongwatcharapaiboon',
  initials: 'KW',
  title: 'Machine Learning Engineer & Data Scientist',
  location: 'Sydney, Australia',
  status: 'Open to Work',
  bio: `Machine Learning Engineer and Data Scientist specialising in deep learning,
time-series forecasting, and production ML systems. Published researcher
at AusDM'25 and ICBDA 2026.`,
  about: `I'm a Machine Learning Engineer and Data Scientist with a strong foundation in
deep learning, transformer architectures, and production ML systems. My research focuses
on applying video transformer models to financial time-series forecasting, achieving
state-of-the-art results over classical multivariate models. I hold a Master of Data Science
from the University of Technology Sydney (GPA 6.78/7.0) and am the recipient of the
prestigious UTS President's Scholarship. I'm passionate about bridging cutting-edge research
with real-world deployable systems.`,
  education: {
    degree: 'Master of Data Science',
    institution: 'University of Technology Sydney (UTS)',
    gpa: '6.78 / 7.0',
    scholarship: "UTS President's Scholarship recipient",
  },
  typewriterPhrases: [
    'ML Systems',
    'Deep Learning Models',
    'Production Pipelines',
    'Transformer Architectures',
    'Financial Forecasting Tools',
  ],
}

// ============================================================
// STATS
// ============================================================

export const stats = [
  { label: 'GPA', value: 6.78, suffix: '/7.0', decimals: 2 },
  { label: 'Publications', value: 2, suffix: '', decimals: 0 },
  { label: 'Projects', value: 5, suffix: '+', decimals: 0 },
  { label: 'Awards', value: 5, suffix: '', decimals: 0 },
]

// ============================================================
// EXPERIENCE
// ============================================================

export const experiences: Experience[] = [
  {
    company: 'University of Technology Sydney',
    role: 'AI Research Assistant',
    period: '2025 – 2026',
    location: 'Sydney, Australia',
    bullets: [
      'Developed transformer-based models for joint financial return and covariance matrix forecasting',
      'Designed pseudo-image encoding pipeline to convert multivariate time-series into visual representations',
      'Benchmarked Video Transformer architectures (TimeSformer, ViViT, VideoMAE, SAM) against classical models',
      'Published findings at AusDM\'25 (Brisbane) and ICBDA 2026 (Waseda University, Tokyo)',
      'Collaborated with faculty on model architecture design and academic paper writing',
    ],
    metrics: [
      '~20% reduction in return error vs VAR',
      '~90% improvement in covariance accuracy vs DCC-GARCH',
    ],
    tags: ['PyTorch', 'Transformers', 'Time-Series', 'Python', 'HuggingFace', 'Financial ML'],
  },
  {
    company: 'Acter Technology Integration Group',
    role: 'Project Engineer',
    period: '2020 – 2022',
    location: 'Bangkok, Thailand',
    bullets: [
      'Led end-to-end deployment of industrial automation and smart building technology projects',
      'Coordinated cross-functional teams across engineering, procurement, and client management',
      'Implemented IoT integration solutions connecting hardware systems to cloud dashboards',
      'Managed project timelines and technical documentation for enterprise clients',
      'Delivered system integration reports and post-deployment support documentation',
    ],
    metrics: [
      'Managed 5+ enterprise deployments',
      'Reduced project delivery time by 15%',
    ],
    tags: ['Project Management', 'IoT', 'System Integration', 'Automation', 'Documentation'],
  },
]

// ============================================================
// PROJECTS
// ============================================================

export const projects: Project[] = [
  {
    id: 'crypto-forecasting',
    title: 'Crypto Forecasting System',
    description:
      'Production-ready ML forecasting system for T+2 crypto price prediction with walk-forward validation, deployed as a REST API with interactive Streamlit dashboard.',
    tags: ['Python', 'FastAPI', 'Docker', 'Streamlit', 'Render', 'Walk-forward Validation'],
    accentColor: 'orange',
    metrics: ['17% MAE improvement', 'T+2 horizon forecasting'],
    icon: 'TrendingUp',
    link: 'https://github.com/KittituchW',
  },
  {
    id: 'resume-optimizer',
    title: 'Smart Resume Optimizer',
    description:
      'Hybrid NLP pipeline with RAG-powered ATS-optimized resume rewriting using BERT-based NER for skill extraction and LangChain for context-aware generation.',
    tags: ['Django', 'BERT', 'NER', 'RAG', 'LangChain', 'PDF'],
    accentColor: 'cyan',
    icon: 'FileText',
    link: 'https://github.com/KittituchW',
  },
  {
    id: 'fake-news-detection',
    title: 'AI Fake News Detection',
    description:
      'Hybrid NLP classification system combining XGBoost with TF-IDF and engineered linguistic features for high-accuracy fake news detection.',
    tags: ['XGBoost', 'TF-IDF', 'Streamlit', 'NLP', 'Feature Engineering'],
    accentColor: 'green',
    metrics: ['96.13% accuracy'],
    icon: 'Shield',
    link: 'https://github.com/KittituchW',
  },
  {
    id: 'airbnb-pipeline',
    title: 'Airbnb & Census ELT Pipeline',
    description:
      'Cloud ELT pipelines with Airflow orchestration, dbt transformations, SCD2 snapshots, and Gold-tier datamarts on BigQuery using Medallion Architecture.',
    tags: ['Airflow', 'dbt', 'GCP', 'BigQuery', 'SCD2', 'Medallion Architecture'],
    accentColor: 'purple',
    icon: 'Database',
    link: 'https://github.com/KittituchW',
  },
  {
    id: 'mindful-chat',
    title: 'Mindful Chat',
    description:
      'Empathetic mental health chatbot using fine-tuned LLMs with LoRA training, achieving nuanced emotional understanding and supportive conversation flows.',
    tags: ['LLMs', 'LoRA', 'Fine-tuning', 'Streamlit', 'HuggingFace'],
    accentColor: 'orange',
    award: '🏆 Best Project — UTS AI Showcase',
    icon: 'Brain',
    link: 'https://github.com/KittituchW',
  },
]

// ============================================================
// PUBLICATIONS
// ============================================================

export const publications: Publication[] = [
  {
    title: 'Comparative Evaluation of Video Transformer Architectures for Joint Financial Return and Covariance Matrix Forecasting',
    conference: 'ICBDA 2026',
    location: 'Waseda University, Tokyo, Japan',
    date: 'April 11, 2026',
    badge: 'ICBDA 2026',
    findings: [
      '23% RMSE reduction over VARIMA',
      '90%+ covariance geometry improvement vs DCC-GARCH',
      'VideoMAE & SAM identified as strongest architectures',
    ],
    tags: ['TimeSformer', 'ViViT', 'VideoMAE', 'SAM', 'SPD', 'Cholesky'],
    accentColor: 'purple',
    link: 'https://dl.acm.org/doi/10.1145/3717052.3726388',
  },
  {
    title: "Image-Structured Financial Time Series: Time-Space Transformers for Joint Return and Covariance Forecasting",
    conference: "AusDM'25",
    location: 'Brisbane, Australia',
    date: 'November 26, 2025',
    badge: "AusDM'25",
    findings: [
      '20.6% return error reduction vs VAR',
      '~90% covariance error reduction vs VAR & DCC-GARCH',
      'First to show video transformers outperform classical multivariate models',
    ],
    tags: ['Transformer', 'Financial Time Series', 'Pseudo-image', 'Spatial Encoding'],
    accentColor: 'cyan',
    link: 'https://link.springer.com/chapter/10.1007/978-981-96-4289-7_17',
  },
]

// ============================================================
// SKILLS
// ============================================================

export const radarData = [
  { subject: 'Machine Learning', score: 92 },
  { subject: 'Deep Learning', score: 90 },
  { subject: 'NLP', score: 82 },
  { subject: 'MLOps', score: 85 },
  { subject: 'Data Engineering', score: 80 },
  { subject: 'Cloud/Infra', score: 75 },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'ML',
    skills: [
      { name: 'scikit-learn', level: 95 },
      { name: 'XGBoost', level: 93 },
      { name: 'LightGBM', level: 88 },
      { name: 'CatBoost', level: 85 },
      { name: 'Feature Engineering', level: 90 },
    ],
  },
  {
    category: 'Deep Learning',
    skills: [
      { name: 'PyTorch', level: 92 },
      { name: 'TensorFlow', level: 80 },
      { name: 'HuggingFace', level: 88 },
      { name: 'GPU Training', level: 85 },
      { name: 'Fine-tuning', level: 83 },
    ],
  },
  {
    category: 'NLP',
    skills: [
      { name: 'BERT/LLMs', level: 88 },
      { name: 'spaCy', level: 80 },
      { name: 'TF-IDF', level: 90 },
      { name: 'Text Classification', level: 87 },
      { name: 'RAG', level: 82 },
    ],
  },
  {
    category: 'MLOps',
    skills: [
      { name: 'Docker', level: 88 },
      { name: 'FastAPI', level: 90 },
      { name: 'Git/CI-CD', level: 85 },
      { name: 'Streamlit', level: 92 },
      { name: 'LangChain', level: 80 },
    ],
  },
  {
    category: 'Data Eng',
    skills: [
      { name: 'Airflow', level: 82 },
      { name: 'dbt', level: 80 },
      { name: 'BigQuery', level: 85 },
      { name: 'PySpark', level: 75 },
      { name: 'GCP', level: 82 },
    ],
  },
  {
    category: 'Cloud',
    skills: [
      { name: 'GCP', level: 82 },
      { name: 'AWS', level: 65 },
      { name: 'Snowflake', level: 70 },
      { name: 'Vercel', level: 85 },
      { name: 'Render', level: 83 },
    ],
  },
]

export const allTechTags = [
  // Languages
  'Python', 'TypeScript', 'SQL',
  // ML/DL
  'PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost',
  'HuggingFace', 'LoRA', 'Fine-tuning', 'BERT', 'Transformers', 'RAG',
  // NLP
  'spaCy', 'TF-IDF', 'NER', 'LangChain',
  // MLOps
  'Docker', 'FastAPI', 'Streamlit', 'Git', 'CI/CD',
  // Data Engineering
  'Airflow', 'dbt', 'BigQuery', 'PySpark', 'SCD2',
  // Cloud
  'GCP', 'AWS', 'Snowflake', 'Vercel', 'Render',
  // Tools
  'Jupyter', 'Pandas', 'NumPy', 'Matplotlib', 'Django',
]

// ============================================================
// AWARDS
// ============================================================

export const awards: Award[] = [
  {
    title: "UTS President's Scholarship (UTSP)",
    org: 'University of Technology Sydney',
    year: '2026',
    description:
      'Fully funded research scholarship awarded on a competitive merit basis to outstanding HDR candidates.',
    icon: 'Trophy',
    accentColor: 'gold',
    metric: 'AUD $39,000 p.a. (tax-free)',
  },
  {
    title: 'International Research Scholarship (IRS)',
    org: 'University of Technology Sydney',
    year: '2026',
    description:
      'Full tuition scholarship for outstanding international HDR candidates demonstrating research excellence.',
    icon: 'Award',
    accentColor: 'cyan',
  },
  {
    title: 'TD School Merit Award',
    org: 'University of Technology Sydney',
    year: '2025',
    description:
      'Awarded to top 10% of graduating students with WAM ≥ 85, formally recorded on AHEGS.',
    icon: 'Medal',
    accentColor: 'purple',
  },
  {
    title: 'Best Project Award — UTS AI Showcase',
    org: 'University of Technology Sydney',
    year: '2025',
    description:
      'Winner for Mindful Chat — an empathetic mental health chatbot using fine-tuned LLMs with LoRA training.',
    icon: 'Star',
    accentColor: 'orange',
  },
  {
    title: 'Kaggle ML Competition — 1st Rank in Cohort',
    org: 'University of Technology Sydney',
    year: '2025',
    description:
      'Top score in entire cohort using an optimised XGBoost model with engineered features.',
    icon: 'Zap',
    accentColor: 'green',
    metric: 'AUROC 0.9997',
  },
  {
    title: '3rd Place Best Presentation (Cohort Voted)',
    org: 'University of Technology Sydney',
    year: '2025',
    description:
      'Recognised for exceptional data storytelling in the Sydney Airbnb Market Dashboard project.',
    icon: 'BarChart2',
    accentColor: 'cyan',
  },
]

// ============================================================
// CONTACT
// ============================================================

export const contact: ContactInfo = {
  email: 'wong.kittituch@gmail.com',
  phone: '0422 593 774',
  location: 'Sydney, Australia — Open to Relocation',
  linkedin: 'linkedin.com/in/kittituchw/',
  github: 'github.com/KittituchW',
}
