import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    category: 'Languages',
    skills: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    id: 'frontend',
    category: 'Frontend',
    skills: ['React.js', 'HTML', 'CSS'],
  },
  {
    id: 'backend',
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    id: 'databases',
    category: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    id: 'testing',
    category: 'Testing & QA',
    skills: [
      'Playwright',
      'Selenium WebDriver',
      'Cucumber',
      'TestNG',
      'JMeter',
      'Postman',
      'API/DB validation',
    ],
  },
  {
    id: 'devops',
    category: 'DevOps & Cloud',
    skills: [
      'Docker',
      'Jenkins',
      'GitHub Actions',
      'CI/CD',
      'AWS (EC2, S3)',
      'Kafka',
      'Nginx',
      'Redis',
      'RabbitMQ',
    ],
  },
  {
    id: 'ai-ml',
    category: 'AI/ML Tooling',
    skills: [
      'GPT-3.5 Turbo integration',
      'SHAP',
      'XGBoost',
      'Generative AI–assisted testing',
    ],
  },
];
