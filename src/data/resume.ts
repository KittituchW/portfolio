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
  about: `I'm a Machine Learning Engineer and Data Scientist specialising in deep learning, transformer architectures, and production ML systems. My research focuses on applying video transformer models to financial time-series forecasting, achieving state-of-the-art results over classical multivariate models. I hold a Master of Data Science and Innovation from the University of Technology Sydney (GPA 6.78/7.0) and am the recipient of the prestigious UTS President's Scholarship and International Research Scholarship. I'm passionate about bridging cutting-edge research with real-world deployable systems — from data engineering to cloud deployment using PyTorch, FastAPI, Docker, and GCP.`,
  education: {
    degree: 'Master of Data Science and Innovation',
    institution: 'University of Technology Sydney (UTS)',
    gpa: '6.78 / 7.0',
    scholarship: "UTS President's Scholarship & International Research Scholarship recipient",
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
  { label: 'Publications', value: 3, suffix: '', decimals: 0 },
  { label: 'Projects', value: 5, suffix: '+', decimals: 0 },
  { label: 'Awards', value: 6, suffix: '', decimals: 0 },
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
      'Architected transformer-based deep learning systems for joint multi-asset return and covariance forecasting, leveraging image-structured financial tensors and GPU-accelerated PyTorch pipelines.',
      'Engineered mathematically stable risk prediction via SPD-constrained covariance modelling and custom geometric loss functions.',
      'Delivered ~20%+ reduction in return error and ~90% improvement in covariance structure accuracy over VAR and GARCH benchmarks under identical validation settings.',
      'Built fully reproducible research pipelines spanning data engineering, walk-forward validation, model optimisation, and quantitative evaluation for peer-reviewed publications.',
    ],
    metrics: [
      '~20% reduction in return error vs VAR',
      '~90% improvement in covariance accuracy vs DCC-GARCH',
    ],
    tags: ['PyTorch', 'Transformers', 'Time-Series', 'Python', 'HuggingFace', 'Financial ML'],
  },
  {
    company: 'Acter Technology Integration Group Co Ltd',
    role: 'Project Engineer',
    period: '2020 – 2022',
    location: 'Bangkok, Thailand',
    bullets: [
      'Analysed 3+ years of historical project data to improve cost estimation accuracy and reduce budget variance.',
      'Delivered data-driven progress reports and project risk assessments.',
      'Coordinated engineering teams and vendors to ensure smooth delivery.',
      'Applied analytical problem solving and root-cause analysis to improve reliability.',
    ],
    metrics: [
      '3+ years of project data analysed',
      'Improved cost estimation accuracy',
    ],
    tags: ['Project Management', 'Data Analysis', 'Risk Assessment', 'Coordination', 'Documentation'],
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
      'Production-ready ML forecasting system predicting T+2 high prices for four cryptocurrencies. Implemented walk-forward validation, Bayesian hyperparameter optimisation, and containerised FastAPI microservices on Render with a real-time Streamlit dashboard.',
    tags: ['Python', 'FastAPI', 'Docker', 'Streamlit', 'Render', 'Bayesian Optimisation'],
    accentColor: 'orange',
    metrics: ['17% MAE improvement over baseline', 'T+2 horizon forecasting', '4 cryptocurrencies'],
    icon: 'TrendingUp',
    link: 'https://github.com/KittituchW',
  },
  {
    id: 'resume-optimizer',
    title: 'Smart Resume Optimizer',
    description:
      'Hybrid NLP pipeline using BERT-based NER, fuzzy matching, and rule-based parsing to extract structured data from PDF resumes. RAG-powered rewriting injects ATS keyword patterns and role-specific skill clusters into the LLM for standards-aligned optimisation.',
    tags: ['Django', 'BERT', 'NER', 'RAG', 'LangChain', 'PDF'],
    accentColor: 'cyan',
    icon: 'FileText',
    link: 'https://github.com/KittituchW',
  },
  {
    id: 'fake-news-detection',
    title: 'AI Fake News Detection',
    description:
      'Hybrid NLP classification combining TF-IDF, sentiment polarity, lexical diversity, and stylistic ratios with XGBoost for high-accuracy misinformation detection. Deployed as a lightweight Streamlit inference system.',
    tags: ['XGBoost', 'TF-IDF', 'Streamlit', 'NLP', 'Feature Engineering'],
    accentColor: 'green',
    metrics: ['96.13% classification accuracy'],
    icon: 'Shield',
    link: 'https://github.com/KittituchW',
  },
  {
    id: 'airbnb-pipeline',
    title: 'Airbnb & Census ELT Pipeline',
    description:
      'Cloud ELT pipelines using Airflow orchestration, dbt snapshots (SCD2), and Medallion Architecture on GCP. Delivered Gold-tier datamarts on BigQuery with fully documented modelling decisions.',
    tags: ['Airflow', 'dbt', 'GCP', 'BigQuery', 'SCD2', 'Medallion Architecture'],
    accentColor: 'purple',
    icon: 'Database',
    link: 'https://github.com/KittituchW',
  },
  {
    id: 'mindful-chat',
    title: 'Mindful Chat',
    description:
      'Empathetic mental health chatbot using fine-tuned LLMs with LoRA training. Evaluated via blind human evaluation and deployed on Streamlit. Winner of the UTS AI Showcase Tech Festival.',
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
    title: 'Transforming Image-Structured Financial Time Series for the Joint Model of Return and Covariance',
    conference: 'IEEE Transactions on Artificial Intelligence',
    location: 'Under Review',
    date: '2026',
    badge: 'IEEE TAI — Under Review',
    findings: [
      'Novel covariance-as-image augmentation encoding cross-asset correlations as pixel-level spatial features for TimeSformer',
      'Learnable asset and positional embeddings preserving asset-specific identity across spatial dimensions',
      '~28% return RMSE reduction vs VARIMA and ~99.4% covariance error reduction vs DCC-GARCH (Frobenius norm) across 10 assets under 2025 Trump Tariff stress regime',
    ],
    tags: ['TimeSformer', 'Covariance-as-Image', 'Positional Embeddings', 'SPD', 'Financial ML'],
    accentColor: 'purple',
  },
  {
    title: 'Comparative Evaluation of Video Transformer Architectures for Joint Financial Return and Covariance Matrix Forecasting',
    conference: 'ICBDA 2026 — 11th International Conference on Big Data Analytics',
    location: 'Waseda University, Tokyo, Japan',
    date: 'April 11, 2026',
    badge: 'ICBDA 2026',
    findings: [
      'Benchmarked TimeSformer, ViViT, VideoMAE, and SAM in a unified Two-Head transformer',
      '~23% RMSE reduction over VARIMA; covariance geometry improved by 90%+ vs DCC-GARCH',
      'VideoMAE and SAM identified as strongest architectures for cross-asset co-movement modelling',
    ],
    tags: ['TimeSformer', 'ViViT', 'VideoMAE', 'SAM', 'SPD', 'Cholesky'],
    accentColor: 'purple',
    link: 'https://dl.acm.org/doi/10.1145/3717052.3726388',
  },
  {
    title: 'Modelling Financial Time Series of Returns and Covariance Matrices Using Time-Space Transformers',
    conference: "AusDM'25 — 23rd Australasian Data Science and Machine Learning Conference",
    location: 'Brisbane, Australia',
    date: 'November 26, 2025',
    badge: "AusDM'25",
    findings: [
      '20.6% return error reduction vs VAR; ~90% covariance error reduction vs VAR & DCC-GARCH',
      'Among the first studies showing video transformers outperform classical multivariate forecasting models',
      'Proposed image-structured representation of multi-asset financial time series for transformer-based forecasting',
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
  { subject: 'NLP', score: 85 },
  { subject: 'MLOps', score: 87 },
  { subject: 'Data Engineering', score: 82 },
  { subject: 'Time Series', score: 90 },
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
      { name: 'TensorFlow/Keras', level: 80 },
      { name: 'HuggingFace', level: 88 },
      { name: 'GPU Training', level: 85 },
      { name: 'Model Fine-tuning', level: 83 },
    ],
  },
  {
    category: 'NLP',
    skills: [
      { name: 'BERT/LLMs', level: 88 },
      { name: 'spaCy', level: 80 },
      { name: 'TF-IDF', level: 90 },
      { name: 'RAG', level: 82 },
      { name: 'Vector Databases', level: 78 },
    ],
  },
  {
    category: 'Time Series',
    skills: [
      { name: 'TimeSformer', level: 92 },
      { name: 'VAR/ARIMA', level: 88 },
      { name: 'GARCH/DCC-GARCH', level: 85 },
      { name: 'SPD Matrices', level: 82 },
      { name: 'Cholesky Decomposition', level: 80 },
    ],
  },
  {
    category: 'MLOps',
    skills: [
      { name: 'Docker', level: 88 },
      { name: 'FastAPI', level: 90 },
      { name: 'Git/CI-CD', level: 85 },
      { name: 'MLflow / W&B', level: 80 },
      { name: 'LangChain / N8N', level: 80 },
    ],
  },
  {
    category: 'Data Eng',
    skills: [
      { name: 'Airflow', level: 82 },
      { name: 'dbt (SCD2)', level: 80 },
      { name: 'BigQuery / GCP', level: 85 },
      { name: 'PySpark', level: 75 },
      { name: 'ETL/ELT Pipelines', level: 83 },
    ],
  },
]

export const allTechTags = [
  // Languages
  'Python', 'SQL', 'R', 'Bash',
  // ML/DL
  'PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost',
  'HuggingFace', 'LoRA', 'Fine-tuning', 'BERT', 'Transformers', 'RAG',
  // NLP
  'spaCy', 'TF-IDF', 'NER', 'LangChain',
  // Time Series
  'TimeSformer', 'VAR/ARIMA', 'GARCH', 'SPD Matrices', 'Cholesky',
  // MLOps
  'Docker', 'FastAPI', 'Streamlit', 'Git', 'CI/CD', 'MLflow', 'W&B', 'N8N',
  // Data Engineering
  'Airflow', 'dbt', 'BigQuery', 'PySpark', 'SCD2',
  // Cloud
  'GCP', 'AWS', 'Snowflake', 'Render',
  // Tools
  'Jupyter', 'Pandas', 'NumPy', 'Tableau', 'Django', 'OpenCV',
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
      'Fully funded research scholarship valued at AUD $39,000 per annum (tax-free). Awarded competitively based on academic merit, research experience, and publication record.',
    icon: 'Trophy',
    accentColor: 'gold',
    metric: 'AUD $39,000 p.a. (tax-free)',
  },
  {
    title: 'International Research Scholarship (IRS)',
    org: 'University of Technology Sydney',
    year: '2026',
    description:
      'Full tuition fee scholarship awarded to outstanding international Higher Degree by Research candidates in recognition of exceptional research potential.',
    icon: 'Award',
    accentColor: 'cyan',
  },
  {
    title: 'TD School Merit Award for Outstanding Academic Achievement',
    org: 'University of Technology Sydney',
    year: '2025',
    description:
      'Awarded to top 10% of graduating students with WAM ≥ 85. Officially recorded on Australian Higher Education Graduation Statement (AHEGS).',
    icon: 'Medal',
    accentColor: 'purple',
  },
  {
    title: 'Best Project Award — UTS AI Showcase Tech Festival',
    org: 'University of Technology Sydney',
    year: '2025',
    description:
      'Winner for Mindful Chat — an empathetic mental health chatbot using fine-tuned LLMs with LoRA training, blind human evaluation, and Streamlit deployment.',
    icon: 'Star',
    accentColor: 'orange',
  },
  {
    title: 'Kaggle ML Competition — 1st Rank in Cohort',
    org: 'University of Technology Sydney',
    year: '2025',
    description:
      'Top score in entire cohort. Demonstrated that a well-optimised XGBoost model with advanced feature engineering can outperform complex neural network and ensemble models.',
    icon: 'Zap',
    accentColor: 'green',
    metric: 'AUROC 0.9997',
  },
  {
    title: '3rd Place Best Presentation (Cohort Voted)',
    org: 'UTS Data Visualisation and Narratives',
    year: '2025',
    description:
      'Recognised for exceptional data storytelling in the project: Unlocking Airbnb Success in Sydney (Sydney Airbnb Market Dashboard).',
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
