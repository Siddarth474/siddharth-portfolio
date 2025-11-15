import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiCplusplus, SiTypescript } from 'react-icons/si';

const iconWrap = (icon, color) => (
  <span className={`p-2 rounded-md ${color}`}>
    {icon}
  </span>
);

export const skillsList = [
  { name: 'HTML', icon: iconWrap(<FaHtml5 size={30}/>, 'text-orange-500') },
  { name: 'CSS', icon: iconWrap(<FaCss3Alt size={30}/>, 'text-blue-500') },
  { name: 'JavaScript', icon: iconWrap(<FaJsSquare size={30}/>, 'text-yellow-400') },
  { name: 'React.js', icon: iconWrap(<FaReact size={30}/>, 'text-cyan-500') },
  { name: 'Next.js', icon: iconWrap(<SiNextdotjs size={30}/>, 'text-white') },
  { name: 'Tailwind', icon: iconWrap(<SiTailwindcss size={30}/>, 'text-teal-400') },
  { name: 'Git', icon: iconWrap(<FaGitAlt size={30}/>, 'text-orange-600') },
  { name: 'Node.js', icon: iconWrap(<FaNodeJs size={30} />, 'text-green-600') },
  { name: 'Express.js', icon: iconWrap(<SiExpress size={30}/>, 'text-yellow-400') },
  { name: 'MongoDB', icon: iconWrap(<SiMongodb size={30}/>, 'text-green-600') },
  { name: 'C++', icon: iconWrap(<SiCplusplus size={30}/>, 'text-blue-600') },
  { name: 'TypeScript', icon: iconWrap(<SiTypescript size={30}/>, 'text-blue-500') },
];

export const workExperiences = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "UptoSkills",
    period: "June 2025 - September 2025, • Remote",
    summary: "Contributed to building and enhancing educational platforms at UptoSkills, focusing on scalable full-stack development and intuitive user experiences",
    details: [
      "Contributed to both frontend (React.js, Tailwind CSS) and backend (Node.js, Express, MongoDB) development.",
      "Engineered RESTful backend APIs for course management and course settings.",
      "Designed and implemented responsive course pages for an intuitive user experience.",
      "Collaborated with a remote team to deliver scalable features for the AI Tutor full-stack application."
    ]
  }
];

export const socialMedia = [
    {name: "Github", icon: <FaGithub className='w-6 h-6'/>, url: "https://github.com/Siddarth474"},
    {name: "Linkedin", icon: <FaLinkedin className='w-6 h-6'/>, url: "https://www.linkedin.com/in/siddharth-prusty-a22756251/"},
    {name: "Twiiter", icon: <FaTwitter className='w-6 h-6'/>, url: "https://x.com/SPrusty4005"}
];

export const projectsDetails = [
  {
    id: 1,
    title: 'Password Vault',
    image: '/images/next-pass.jpeg',
    description:
      'A privacy-focused password manager built with Next.js and React, featuring client-side AES-GCM encryption via Web Crypto API, secure JWT-based authentication, and tools like password generator, clipboard auto-clear, and encrypted import/export.',
    period: 'September 2025 – October 2025',
    tech: [
      'Next.js',
      'React',
      'Web Crypto API',
      'MongoDB'
    ],
    repoLink: 'https://github.com/Siddarth474/next-password-vault.git', 
    liveUrl: 'https://next-password-vault-chi.vercel.app/' 
  },
  {
    id: 2,
    title: 'Expense Tracker Web App',
    image: '/images/ExpenseTracker.jpeg',
    description:
      'A full-stack expense management app with JWT authentication, real-time charts, and auto-generated monthly/yearly reports, offering a modern and responsive UI with dark/light mode support.',
    period: 'August 2025 – September 2025',
    tech: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Recharts'
    ],
    repoLink: 'https://github.com/Siddarth474/MERN-Stack-Expense-Tracker.git',
    liveUrl: 'https://mern-stack-expense-tracker.vercel.app/'
  },
  {
    id: 3,
    title: 'MindMap AI - Smart Visual Note-Taking App',
    image: '/images/mind-map.jpeg',
    description:
      'An interactive visual note-taking app using React Flow and Gemini API for AI-powered idea expansion, enabling users to create and connect ideas dynamically with persistent localStorage state.',
    period: 'June 2025 – July 2025',
    tech: [
      'React.js',
      'React Flow',
      'Gemini API',
      'Tailwind CSS'
    ],
    repoLink: 'https://github.com/Siddarth474/Mind-Map-AI-Notes.git',
    liveUrl: 'https://mind-map-ai-notes.vercel.app/'
  }
];


