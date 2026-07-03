import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { fadeUp, stagger } from '../../utils/motion';
import {
  FiCpu, FiSearch, FiPackage, FiCloud, FiFileText, FiServer,
} from 'react-icons/fi';

const expertise = [
  {
    icon: <FiCpu size={18} />,
    title: 'LLM Engineering',
    description:
      'Integrating Large Language Models (LLMs) GPT-4, open-source Transformers into enterprise applications. Prompt Engineering, Fine-tuning, Function Calling, and production-grade inference pipelines.',
    tags: ['Large Language Models (LLMs)', 'OpenAI API', 'Hugging Face', 'Transformers', 'Prompt Engineering', 'Fine-tuning'],
    num: '01',
  },
  {
    icon: <FiSearch size={18} />,
    title: 'RAG & Vector Search',
    description:
      'Building Retrieval-Augmented Generation (RAG) systems document ingestion, chunking, Embeddings, Vector Search, Semantic Search, Hybrid Search, and Reranking for enterprise knowledge retrieval.',
    tags: ['Retrieval-Augmented Generation (RAG)', 'FAISS', 'Pinecone', 'Embeddings', 'Semantic Search', 'Hybrid Search'],
    num: '02',
  },
  {
    icon: <FiPackage size={18} />,
    title: 'MLOps & LLMOps',
    description:
      'End-to-end Model Deployment pipelines. Model Versioning and Experiment Tracking with MLflow, Docker containerization, Kubernetes orchestration, and CI/CD automation.',
    tags: ['MLOps', 'LLMOps', 'MLflow', 'Model Deployment', 'Model Monitoring', 'CI/CD', 'GitHub Actions'],
    num: '03',
  },
  {
    icon: <FiCloud size={18} />,
    title: 'Cloud AI on AWS',
    description:
      'Deploying AI workloads on Amazon Web Services (AWS) serverless Model Serving with AWS Lambda, scalable compute on Amazon EC2, storage on Amazon S3, and managed Kubernetes with AWS EKS.',
    tags: ['Amazon Web Services (AWS)', 'AWS Lambda', 'Amazon EC2', 'Amazon S3', 'AWS EKS', 'Amazon Bedrock'],
    num: '04',
  },
  {
    icon: <FiFileText size={18} />,
    title: 'NLP & Document AI',
    description:
      'Building Natural Language Processing (NLP) pipelines for document classification, information extraction, OCR processing, and AI Automation of text summarization at enterprise scale.',
    tags: ['Natural Language Processing (NLP)', 'OCR', 'AI Automation', 'Text Classification', 'Conversational AI'],
    num: '05',
  },
  {
    icon: <FiServer size={18} />,
    title: 'AI Infrastructure',
    description:
      'Designing the infrastructure layer for AI systems Terraform IaC, API Development with FastAPI, Microservices architecture, and AI Orchestration with cost-optimized cloud deployments.',
    tags: ['AI Orchestration', 'API Development', 'Microservices', 'Terraform', 'Prometheus', 'Grafana'],
    num: '06',
  },
];

export function AIExpertise() {
  return (
    <Section id="ai-expertise">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="AI Expertise"
          heading="Deep expertise across the AI stack."
          sub="Not just models the full engineering discipline required to ship AI to production."
        />

        <motion.div
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {expertise.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative p-6 rounded-2xl border border-dim bg-surface hover:border-accent/25 hover:bg-accent-subtle transition-all duration-300 overflow-hidden"
            >
              {/* Background number */}
              <span
                aria-hidden
                className="absolute top-4 right-5 font-mono text-5xl font-bold text-white/[0.03] select-none pointer-events-none leading-none"
              >
                {item.num}
              </span>

              {/* Icon */}
              <div className="mb-4 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/15 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-heading mb-2 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-secondary leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md bg-surface-3 border border-dim text-2xs font-mono text-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
