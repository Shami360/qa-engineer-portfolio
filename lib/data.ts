import {
  Bug,
  CheckCircle2,
  Code2,
  Cpu,
  FileSearch,
  GitBranch,
  Github,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Network,
  Send,
  ShieldCheck,
  Target,
  TestTube2,
  TrendingUp,
  Workflow,
  Zap,
  Rocket,
  Eye,
  Gauge,
  Repeat,
  FileCheck2,
  Sparkles,
  Car,
} from 'lucide-react';

export const PROFILE = {
  name: 'Muhammad Ehtisham',
  firstName: 'Muhammad',
  lastName: 'Ehtisham',
  headline: 'Software Quality Assurance Engineer',
  tagline: 'I break software so users never have to.',
  subtitle: 'Manual Testing | Automation Testing | API Testing',
  about:
    'Software Quality Assurance Engineer with around one year of experience in Manual Testing and Automation Testing. Experienced in Selenium (Python), Postman API Testing, JMeter, Appium basics, bug reporting, regression testing, smoke testing, and functional testing.',
  aboutLong:
    'I\'m a Software Quality Assurance Engineer who treats testing as a craft, not a checklist. Over the past year I\'ve built and executed comprehensive test suites across web and mobile platforms — from manual exploratory testing that catches what automation misses, to Selenium frameworks that run regression overnight. I believe great QA is invisible: users never see the bugs we prevented, and that\'s exactly the point.',
  email: 'ahtisham.shami.7834@gmail.com',
  phone: '+923162441298',
  location: 'Pakistan',
  resumeUrl: '/AS2026-UpdatedCV.pdf',
  availability: 'Open to remote & on-site opportunities',
};

export const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/Shami360', icon: Github },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/muhammad-ehtisham-747b13300',
    icon: Linkedin,
  },
  { name: 'Email', href: 'mailto:ahtisham.shami.7834@gmail.com', icon: Mail },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/923162441298',
    icon: MessageCircle,
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Skills', href: '#skills' },
  { label: 'Process', href: '#process' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Metrics', href: '#metrics' },
  { label: 'Contact', href: '#contact' },
];

export const EXPERTISE = [
  {
    title: 'Manual Testing',
    description:
      'Exploratory, ad-hoc, and systematic manual testing that uncovers edge cases automation can\'t reach. I think like a user — and like an attacker.',
    icon: FileSearch,
    accent: 'from-blue-500/20 to-blue-600/5',
    border: 'group-hover:border-blue-500/40',
  },
  {
    title: 'Automation Testing',
    description:
      'Selenium WebDriver frameworks in Python with Pytest — maintainable, modular, and built to run in CI pipelines without flakiness.',
    icon: Cpu,
    accent: 'from-cyan-500/20 to-cyan-600/5',
    border: 'group-hover:border-cyan-500/40',
  },
  {
    title: 'API Testing',
    description:
      'Postman collections and automated API validation — from happy-path to negative testing, auth flows, schema validation, and chained requests.',
    icon: Network,
    accent: 'from-sky-500/20 to-sky-600/5',
    border: 'group-hover:border-sky-500/40',
  },
  {
    title: 'Performance Testing',
    description:
      'JMeter load and stress tests that reveal bottlenecks before production does — with actionable reports, not just numbers.',
    icon: Gauge,
    accent: 'from-teal-500/20 to-teal-600/5',
    border: 'group-hover:border-teal-500/40',
  },
  {
    title: 'Mobile Testing',
    description:
      'Appium-based mobile test automation for Android and iOS — covering real devices and emulators with reliable locators.',
    icon: MonitorSmartphone,
    accent: 'from-indigo-500/20 to-indigo-600/5',
    border: 'group-hover:border-indigo-500/40',
  },
  {
    title: 'Quality Strategy',
    description:
      'Test planning, risk-based testing, and QA process design that integrates quality into every stage of the SDLC — not just the end.',
    icon: ShieldCheck,
    accent: 'from-blue-500/20 to-cyan-600/5',
    border: 'group-hover:border-blue-500/40',
  },
];

export const SKILLS = [
  { name: 'Manual Testing', level: 92, category: 'Testing' },
  { name: 'Functional Testing', level: 90, category: 'Testing' },
  { name: 'Regression Testing', level: 88, category: 'Testing' },
  { name: 'Smoke Testing', level: 90, category: 'Testing' },
  { name: 'API Testing', level: 85, category: 'Testing' },
  { name: 'Selenium', level: 82, category: 'Automation' },
  { name: 'Python', level: 80, category: 'Automation' },
  { name: 'Pytest', level: 78, category: 'Automation' },
  { name: 'Postman', level: 88, category: 'Tools' },
  { name: 'JMeter', level: 75, category: 'Tools' },
  { name: 'Appium', level: 65, category: 'Tools' },
  { name: 'Git', level: 82, category: 'Tools' },
  { name: 'GitHub', level: 80, category: 'Tools' },
  { name: 'Agile Scrum', level: 85, category: 'Methodology' },
];

export const SKILL_CATEGORIES = ['Testing', 'Automation', 'Tools', 'Methodology'];

export const TECH_STACK = [
  { name: 'Selenium', icon: Cpu, category: 'Automation' },
  { name: 'Python', icon: Code2, category: 'Automation' },
  { name: 'Pytest', icon: TestTube2, category: 'Automation' },
  { name: 'Postman', icon: Send, category: 'API' },
  { name: 'JMeter', icon: Gauge, category: 'Performance' },
  { name: 'Appium', icon: MonitorSmartphone, category: 'Mobile' },
  { name: 'Git', icon: GitBranch, category: 'Version Control' },
  { name: 'GitHub', icon: Github, category: 'Version Control' },
  { name: 'Jira', icon: Layers, category: 'Project Management' },
  { name: 'Agile', icon: Workflow, category: 'Methodology' },
];

export const QA_PROCESS = [
  {
    step: '01',
    title: 'Analyze & Plan',
    description:
      'Review requirements, identify testable surfaces, and build a risk-based test plan that prioritizes what matters most.',
    icon: FileSearch,
  },
  {
    step: '02',
    title: 'Design Test Cases',
    description:
      'Write clear, reusable test cases covering positive, negative, and edge-case scenarios — mapped to requirements.',
    icon: FileCheck2,
  },
  {
    step: '03',
    title: 'Execute & Automate',
    description:
      'Run manual exploratory sessions while building automation in parallel — Selenium for UI, Postman for API, JMeter for load.',
    icon: Zap,
  },
  {
    step: '04',
    title: 'Report & Track',
    description:
      'File detailed bug reports with reproduction steps, logs, and severity — then track them to resolution with developers.',
    icon: Bug,
  },
  {
    step: '05',
    title: 'Verify & Close',
    description:
      'Regression-test fixes, confirm closure, and update test suites. Quality is a loop, not a line.',
    icon: CheckCircle2,
  },
];

export const EXPERIENCE = [
  {
    role: 'QA Intern',
    company: '360 Xpert Solutions',
    period: '2025',
    description:
      'Gained hands-on experience in software quality assurance by performing manual and automated testing on web and mobile applications. Wrote and executed test cases, reported bugs, and collaborated with the development team to ensure product quality.',
    highlights: [
      'Performed manual testing on web applications',
      'Wrote and executed detailed test cases',
      'Reported and tracked bugs using issue tracking tools',
      'Collaborated with developers in an Agile Scrum environment',
      'Conducted regression and smoke testing',
    ],
    icon: TestTube2,
  },
];

export const PROJECTS = [
  {
    name: 'Conclavity',
    description:
      'A comprehensive platform tested through a full QA lifecycle including manual testing, regression testing, smoke testing, and Selenium automation. Ensured robust functionality and a seamless user experience.',
    tags: ['Manual Testing', 'Regression Testing', 'Smoke Testing', 'Selenium Automation', 'Bug Reporting'],
    gradient: 'from-blue-500 to-cyan-400',
    icon: Code2,
    logo: 'https://images.pexels.com/photos/31738798/pexels-photo-31738798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metrics: { coverage: '85%', bugs: '60+', cases: '80+' },
  },
  {
    name: 'SochAI',
    description:
      'An AI-powered application validated through functional testing, automation testing, and API testing. Verified API endpoints, automated critical flows, and ensured system reliability.',
    tags: ['Functional Testing', 'Automation Testing', 'API Testing'],
    gradient: 'from-cyan-500 to-blue-500',
    icon: Zap,
    logo: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metrics: { coverage: '80%', bugs: '45+', cases: '50+' },
  },
  {
    name: 'Attendance Management System',
    description:
      'A management system validated through thorough manual testing. Designed and executed test cases, reported bugs, and verified fixes to ensure accurate attendance tracking.',
    tags: ['Manual Testing', 'Test Cases', 'Bug Reporting'],
    gradient: 'from-sky-500 to-teal-400',
    icon: CheckCircle2,
    logo: 'https://images.pexels.com/photos/37538043/pexels-photo-37538043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metrics: { coverage: '90%', bugs: '30+', cases: '40+' },
  },
  {
    name: 'BIKEA Carpool',
    description:
      'A carpool and ride-sharing platform validated through end-to-end QA. Tested user matching, ride scheduling, real-time location tracking, and payment flows across web and mobile.',
    tags: ['Manual Testing', 'API Testing', 'Mobile Testing', 'Regression Testing', 'Bug Reporting'],
    gradient: 'from-emerald-500 to-green-400',
    icon: Car,
    logo: 'https://images.pexels.com/photos/34239/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    metrics: { coverage: '88%', bugs: '50+', cases: '65+' },
  },
];

export const METRICS = [
  { label: 'Projects Tested', value: 4, icon: Code2, suffix: '+' },
  { label: 'Test Cases Written', value: 150, icon: CheckCircle2, suffix: '+' },
  { label: 'Bugs Reported', value: 200, icon: Bug, suffix: '+' },
  { label: 'Automation Scripts', value: 50, icon: Zap, suffix: '+' },
];

export const CERTIFICATES = [
  {
    title: 'Software Testing Fundamentals',
    issuer: 'Online Certification',
    year: '2026',
    description: 'Comprehensive training in software testing principles and practices.',
  },
  {
    title: 'Selenium Automation with Python',
    issuer: 'Online Certification',
    year: '2025',
    description: 'Hands-on automation testing using Selenium WebDriver and Python.',
  },
  {
    title: 'API Testing with Postman',
    issuer: 'Online Certification',
    year: '2025',
    description: 'Mastering API testing techniques and Postman tool proficiency.',
  },
  {
    title: 'Agile & Scrum Fundamentals',
    issuer: 'Online Certification',
    year: '2024',
    description: 'Understanding Agile methodologies and Scrum framework practices.',
  },
];

export const CONTACT_METHODS = [
  {
    name: 'GitHub',
    href: 'https://github.com/Shami360',
    icon: Github,
    label: '@Shami360',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-ehtisham-747b13300/',
    icon: Linkedin,
    label: 'Muhammad Ehtisham',
  },
  {
    name: 'Email',
    href: 'mailto:ahtisham.shami.7834@gmail.com',
    icon: Mail,
    label: 'shamiahtisham108@gmail.com',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/923162441298',
    icon: MessageCircle,
    label: '+92 316 2441298',
  },
];

export const RESUME_INFO = {
  name: 'Muhammad Ehtisham',
  title: 'Software Quality Assurance Engineer',
  icon: Send,
};

export const STATS_BAR = [
  { label: 'Experience', value: '~1 Year' },
  { label: 'Projects', value: '4+' },
  { label: 'Bug Reports', value: '200+' },
  { label: 'Location', value: 'Remote / Pakistan' },
];

export const TESTIMONIALS = [
  {
    quote:
      'Muhammad brought a level of rigor to our QA process that we didn\'t expect from an intern. His bug reports were so detailed that our developers could reproduce issues on the first try.',
    author: 'Development Team',
    role: '360 Xpert Solutions',
  },
];

export const SECTION_ICONS = {
  expertise: Target,
  process: Workflow,
  metrics: TrendingUp,
  rocket: Rocket,
  eye: Eye,
  repeat: Repeat,
  sparkles: Sparkles,
};
