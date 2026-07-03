import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { personal } from '../../data/resume';
import { fadeUp, fadeLeft, stagger } from '../../utils/motion';
import {
  FiCpu, FiCloud, FiGitBranch, FiDatabase,
  FiCode, FiActivity,
} from 'react-icons/fi';

const pillars = [
  {
    icon: <FiCpu size={16} />,
    title: 'LLM Engineering',
    desc: 'Retrieval-Augmented Generation (RAG), Prompt Engineering, LangChain, LangGraph, LlamaIndex, OpenAI API, Hugging Face, Transformers, and AI Agents.',
  },
  {
    icon: <FiCloud size={16} />,
    title: 'Cloud AI on AWS',
    desc: 'Serverless Model Serving with AWS Lambda, Amazon EC2, Amazon S3, AWS EKS, Amazon Bedrock, and CloudWatch monitoring.',
  },
  {
    icon: <FiGitBranch size={16} />,
    title: 'MLOps & LLMOps',
    desc: 'Model Deployment, Model Monitoring, Experiment Tracking, Model Versioning with MLflow, Jenkins, GitHub Actions CI/CD 40% faster releases.',
  },
  {
    icon: <FiDatabase size={16} />,
    title: 'Vector & Semantic Search',
    desc: 'FAISS, Pinecone, ChromaDB, Qdrant vector databases, Embeddings, Semantic Search, Vector Search, and Hybrid Search pipelines.',
  },
  {
    icon: <FiCode size={16} />,
    title: 'API Development',
    desc: 'Production REST API Development and Microservices with FastAPI and Flask, containerized with Docker, deployed on Kubernetes.',
  },
  {
    icon: <FiActivity size={16} />,
    title: 'AI Automation & NLP',
    desc: 'Natural Language Processing (NLP), AI Automation, AI Workflow, Conversational AI, OCR pipelines, and AI Orchestration at enterprise scale.',
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">

          {/* Left */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeader
              label="About"
              heading={<>Engineering AI that<br /><span className="text-gradient-primary">ships to production.</span></>}
            />

            <div className="space-y-4 text-secondary text-[0.95rem] leading-[1.8]">
              <p>
                I'm <span className="text-text font-medium">{personal.name}</span>, an AI Engineer based in {personal.location} with {personal.yearsOfExperience} years building intelligent systems that go beyond prototypes into real infrastructure, real users, and real business impact.
              </p>
              <p>
                My work spans the full AI engineering lifecycle: designing LLM-powered applications, building RAG pipelines, automating ML deployment with MLOps tooling, and optimizing cloud infrastructure on AWS.
              </p>
              <p>
                I care about systems that are not just intelligent, but <span className="text-text font-medium">reliable, observable, and cost-efficient</span> at scale.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: 'Current Role',  value: 'AI Engineer / AWS DevOps' },
                { label: 'Company',       value: 'Codeworld Infotech' },
                { label: 'Experience',    value: '3+ Years' },
                { label: 'Availability',  value: 'Open to Offers' },
              ].map((f) => (
                <div key={f.label} className="p-3.5 rounded-xl bg-surface-2 border border-dim">
                  <div className="text-2xs font-mono text-subtle uppercase tracking-widest mb-1">{f.label}</div>
                  <div className="text-sm font-medium text-text">{f.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right pillars grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="group p-5 rounded-xl bg-surface border border-dim hover:border-accent/25 hover:bg-accent-subtle transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-1.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
                    {p.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-text">{p.title}</h3>
                </div>
                <p className="text-xs text-subtle leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
