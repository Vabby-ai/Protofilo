export const personal = {
  name: 'Vaibhav Borse',
  title: 'AI Engineer',
  tagline: 'Building intelligent systems that scale.',
  summary:
    'AI Engineer with 3+ years of experience in Artificial Intelligence, Machine Learning, and Generative AI specializing in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), MLOps, and AWS cloud-native deployments. I build production-ready AI systems: from LLM Engineering and AI Agents to Model Deployment pipelines and scalable API Development.',
  location: 'Pune, Maharashtra',
  email: 'vaibhavborse.p@gmail.com',
  phone: '+91-8767022439',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  yearsOfExperience: '3+',
};

// ─── SKILLS ────────────────────────────────────────────────────────────────
// Ordered by ATS priority. Full-form terms used for maximum keyword matching.

export const skills = {
  // Priority 1 Core AI Identity (highest ATS weight)
  coreAI: [
    'Artificial Intelligence',
    'AI Engineering',
    'Machine Learning',
    'Generative AI',
    'Large Language Models (LLMs)',
    'LLM Engineering',
    'Retrieval-Augmented Generation (RAG)',
    'Prompt Engineering',
    'AI Agents',
    'Agentic AI',
    'Natural Language Processing (NLP)',
    'Deep Learning',
  ],

  // Priority 2 LLM Stack & Frameworks
  llmStack: [
    'LangChain',
    'LangGraph',
    'LlamaIndex',
    'OpenAI API',
    'Hugging Face',
    'Transformers',
    'Semantic Search',
    'Vector Search',
    'Embeddings',
    'Hybrid Search',
    'Fine-tuning',
    'Prompt Tuning',
    'Function Calling',
    'AI Automation',
    'AI Orchestration',
    'Conversational AI',
    'AI Workflow',
  ],

  // Priority 3 Vector Databases (specific, not generic)
  vectorDBs: [
    'FAISS',
    'Pinecone',
    'ChromaDB',
    'Qdrant',
  ],

  // Priority 4 ML Libraries
  mlLibs: [
    'PyTorch',
    'TensorFlow',
    'Scikit-learn',
    'Pandas',
    'NumPy',
  ],

  // Priority 5 MLOps & Deployment
  mlops: [
    'MLOps',
    'LLMOps',
    'MLflow',
    'Model Deployment',
    'Model Serving',
    'Model Monitoring',
    'Experiment Tracking',
    'Model Versioning',
    'CI/CD',
    'GitHub Actions',
    'Jenkins',
    'Docker',
    'Kubernetes',
    'Terraform',
    'Ansible',
  ],

  // Priority 6 Cloud & Infrastructure
  cloud: [
    'Amazon Web Services (AWS)',
    'Amazon EC2',
    'Amazon S3',
    'AWS Lambda',
    'Amazon RDS',
    'AWS EKS',
    'AWS IAM',
    'Amazon Bedrock',
  ],

  // Priority 7 API & Backend
  backend: [
    'FastAPI',
    'Flask',
    'REST API Development',
    'API Development',
    'Microservices',
  ],

  // Priority 8 Languages & Tools
  languages: [
    'Python',
    'SQL',
    'Bash',
    'Linux',
    'Git',
    'GitHub',
  ],

  // Priority 9 Databases
  databases: [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Redis',
    'Elasticsearch',
    'SQL Server',
  ],

  // Priority 10 Monitoring & Observability
  monitoring: [
    'CloudWatch',
    'Prometheus',
    'Grafana',
    'ELK Stack',
  ],

  // Priority 11 Data Engineering
  dataEng: [
    'Data Pipelines',
    'ETL',
    'Apache Airflow',
    'Apache Kafka',
  ],

  // Priority 12 Latest AI Trends (emerging JD keywords)
  aiTrends: [
    'AI Evaluation',
    'Responsible AI',
    'Reranking',
    'Knowledge Graphs',
    'Multimodal AI',
    'Prompt Optimization',
    'MCP (Model Context Protocol)',
  ],
};

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────

export const experience = [
  {
    company: 'Codeworld Infotech Private Limited',
    role: 'AI Engineer / AWS DevOps Engineer',
    period: 'January 2023 – Present',
    duration: '2+ years',
    highlights: [
      'Engineered LLM-powered applications using Large Language Models (LLMs), LangChain, and OpenAI API for enterprise document processing, summarization, and Conversational AI automation.',
      'Built end-to-end Retrieval-Augmented Generation (RAG) pipelines with Semantic Search, Vector Search, FAISS vector store, and Embeddings for intelligent knowledge retrieval.',
      'Designed and deployed REST API Development and Microservices using FastAPI for AI model inference and business application integration.',
      'Implemented MLOps and Model Deployment pipelines using Docker, Kubernetes, Jenkins, and Terraform reducing CI/CD release cycles.',
      'Automated Model Versioning, Experiment Tracking, and Model Monitoring using MLflow for continuous AI model deployment.',
      'Optimized Amazon Web Services (AWS) infrastructure across Amazon EC2, Amazon S3, AWS Lambda, and AWS EKS reducing operational costs.',
      'Containerized AI applications using Docker and orchestrated deployments on Kubernetes (AWS EKS) with GitHub Actions and Jenkins CI/CD.',
      'Monitored AI workloads and Model Serving performance using CloudWatch, Prometheus, Grafana, and ELK Stack.',
    ],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'enterprise-ai-assistant',
    title: 'Enterprise AI Knowledge Assistant',
    domain: 'Artificial Intelligence',
    tagline: 'RAG-powered Conversational AI chatbot for intelligent enterprise document search.',
    problem:
      'Enterprise teams struggled to extract insights from thousands of internal documents. Traditional keyword search failed to understand context, causing slow decision-making and information silos.',
    solution:
      'Built a production-grade AI Assistant using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) that understands natural language queries and retrieves semantically relevant answers from enterprise knowledge bases using Vector Search and Semantic Search.',
    architecture:
      'FastAPI backend → LangChain orchestration → OpenAI embeddings → FAISS vector store → GPT-4 response generation → Docker containers on AWS EKS.',
    implementation: [
      'Designed RAG pipeline with LangChain and LlamaIndex for document ingestion, chunking, and Embeddings generation.',
      'Integrated FAISS vector store for sub-second Semantic Search and Vector Search similarity retrieval.',
      'Applied Prompt Engineering and Prompt Tuning to improve LLM response accuracy and reduce hallucinations.',
      'Built REST API Development layer with FastAPI for AI model inference and client integration.',
      'Containerized with Docker and deployed on AWS EKS via Jenkins CI/CD and GitHub Actions.',
    ],
    challenges:
      'Balancing retrieval precision with response latency at scale. Solved by optimizing chunk sizes, Embeddings strategies, Hybrid Search, and implementing async inference with Model Serving best practices.',
    results: [
      'Delivered production-ready Conversational AI system with automated CI/CD deployment.',
      'Improved answer accuracy through structured Prompt Engineering and Reranking strategies.',
      'Achieved scalable Model Serving on Kubernetes with real-time Model Monitoring.',
    ],
    tech: ['Python', 'LangChain', 'LlamaIndex', 'OpenAI API', 'FAISS', 'FastAPI', 'Docker', 'Kubernetes', 'AWS', 'MLflow'],
    category: 'AI / LLM',
  },
  {
    id: 'document-processing-platform',
    title: 'Intelligent Document Processing Platform',
    domain: 'AI Automation',
    tagline: 'Automated extraction and classification of business documents using NLP and MLOps.',
    problem:
      'Manual processing of invoices and business documents was slow, error-prone, and costly. Teams spent hours on data entry that could be automated with AI Automation.',
    solution:
      'Built an end-to-end AI Workflow combining OCR, Natural Language Processing (NLP), and Machine Learning classification to automatically extract structured data from unstructured business documents with high accuracy.',
    architecture:
      'AWS Lambda triggers → OCR extraction → NLP classification pipeline → MLflow model registry → Amazon S3 storage → Model Monitoring dashboards.',
    implementation: [
      'Built serverless AI Workflow using AWS Lambda for event-driven document processing and Data Pipelines.',
      'Automated document classification using Machine Learning models and Natural Language Processing (NLP) techniques.',
      'Implemented MLOps and LLMOps pipelines with MLflow for Experiment Tracking, Model Versioning, and continuous Model Deployment.',
      'Integrated Amazon S3 for scalable cloud storage and ETL data management.',
      'Designed Model Monitoring dashboards using Grafana and Prometheus for real-time AI performance tracking.',
    ],
    challenges:
      'Handling diverse document formats with consistent accuracy. Solved by training domain-specific models, implementing confidence-based fallback logic, and applying Responsible AI evaluation practices.',
    results: [
      'Automated document processing pipeline with MLOps-driven continuous Model Deployment.',
      'Scalable serverless architecture on AWS Lambda handling variable document volumes.',
      'Real-time Model Monitoring and Experiment Tracking via MLflow and Grafana dashboards.',
    ],
    tech: ['Python', 'NLP', 'OCR', 'AWS Lambda', 'Amazon S3', 'Docker', 'Kubernetes', 'MLflow', 'Jenkins', 'Prometheus', 'Grafana'],
    category: 'MLOps / Automation',
  },
];

// ─── EDUCATION ───────────────────────────────────────────────────────────────

export const education = [
  {
    degree: 'Bachelor of Engineering (B.E.) – Computer Science',
    institution: 'Pune University',
    year: '2023',
  },
];

// ─── ACHIEVEMENTS ────────────────────────────────────────────────────────────

export const achievements = [
  { metric: '40%', label: 'Reduction in CI/CD release cycles' },
  { metric: '20%', label: 'Reduction in AWS operational costs' },
  { metric: '3+',  label: 'Years of production AI experience' },
  { metric: '2',   label: 'Enterprise AI systems deployed' },
];

// ─── TOP 30 SKILLS (ordered for hero/about display) ──────────────────────────

export const top30Skills = [
  'Artificial Intelligence',
  'AI Engineering',
  'Machine Learning',
  'Generative AI',
  'Large Language Models (LLMs)',
  'Python',
  'Retrieval-Augmented Generation (RAG)',
  'LangChain',
  'LangGraph',
  'OpenAI API',
  'Hugging Face',
  'Transformers',
  'Prompt Engineering',
  'AI Agents',
  'Agentic AI',
  'FastAPI',
  'MLOps',
  'Amazon Web Services (AWS)',
  'Docker',
  'Kubernetes',
  'PyTorch',
  'Scikit-learn',
  'MLflow',
  'Semantic Search',
  'Vector Search',
  'FAISS',
  'Pinecone',
  'PostgreSQL',
  'SQL',
  'Git',
];
