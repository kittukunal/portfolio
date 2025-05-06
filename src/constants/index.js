import cert1 from "../assets/certificates/cert1.png";
import cert2 from "../assets/certificates/cert2.png";
import cert3 from "../assets/certificates/cert3.png";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MongoDB",
    icon: web,
  },
  {
    title: "Express js",
    icon: mobile,
  },
  {
    title: "React js",
    icon: backend,
  },
  {
    title: "Node js",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full-Stack Internship",
    company_name: "Addweb",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2025",
    points: [
      "Developed a real estate property listing full-stack web application using the MERN stack, focused on showcasing residential properties with advanced filtering and search functionality.",
      "Integrated Google Maps API for location-based property search, increasing feature interactivity by 25%.",
      "Implemented secure JWT-based authentication and authorization, reducing unauthorized access attempts by 60%.",
      "Built responsive and modern UI components using React and Tailwind CSS, improving load times by 50%.",
    ],
  },
  {
    title: "Freelancing",
    company_name: "Kohinoor Watches",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: " Jan 2025",
    points: [
      "Developed an animation-rich, responsive e-commerce UI using React.js and Tailwind CSS, resulting in a 40% increase in time-on-page and improved visual retention.",
      "Implemented modern typography and design best practices, enhancing perceived brand value and contributing to a 25% boost in user engagement across devices.",
      
    ],
  },
  {
    title: "Expense Tracker",
    company_name: "Personal Project",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2024",
    points: [
      "Developed a full-stack expense management application using React, Node.js, Express, and MongoDB, enabling real-time income/expense tracking and achieving 100% CRUD coverage across all financial records.",
      "Integrated dynamic charts and visual analytics with user-friendly dashboards, resulting in a 45% improvement in user data comprehension and decision-making speed.",
      "Implemented OTP-based secure authentication and savings insights, increasing security and driving a 30% boost in user engagement across financial planning features.",
      
    ],
  },
  {
    title: "AI-Powered Code Reviewer",
    company_name: "Personal Project",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2024",
    points: [
      "Built an AI-powered code review tool using React.js, Node.js, and Gemini 2.0 API to automate feedback, reducing manual review time by over 60%.",
      "Designed a responsive, animated UI with Tailwind CSS and Framer Motion, improving engagement and contributing to a 35% rise in interaction time.",
      "Deployed on a personal domain using Vercel and Render, ensuring <200ms API response time and seamless cross-platform performance.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Code Reviewer ",
    description:
      "AI Code Reviewer is an intelligent tool that analyzes code for bugs. It provides instant suggestions, formatting tips, and helps improve code quality and readability using AI-driven feedback.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Gemini 2.0",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/kittukunal/AI-Powered-Code-Reviewer",
    live_link: "https://ai-code-reviewer.kunalyadav.site/"
  },
  {
    name: "Freelancing work",
    description:
      "Engineered a sleek, animation-rich e-commerce interface using React.js and Tailwind CSS, leading to a 40% increase in user session duration.Improving mobile usability in cross-device engagement.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/kittukunal",
    live_link: "https://www.kohinoorwatches.com/"
  },
  
  {
    name: "Expense Tracker",
    description:
      "Track your incomes and expenses with ease — complete with authentication,dynamic charts,transaction filtering and smooth UI.Shows proper insights of your expenses,incomes and savings ",


    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
     
      {
        name: "Express",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/kittukunal/expense-tracker",
    live_link: "https://expense-track-frontend-nine.vercel.app/"
  },
];

const certificates = [
  {
    name: "Full Stack Developer Bootcamp",
    description: "Completed intensive training in full-stack development.",
    tags: [
      
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "React JS", color: "pink-text-gradient" },
      { name: "Express", color: "blue-text-gradient" },
      { name: "Node", color: "orange-text-gradient" },
    ],
    image: cert2,
    source_code_link: cert2, // this will open the image in new tab
  },
  {
    name: "AWS Academy Cloud Foundations",
    description: " Certificate of Completion for AWS Cloud Foundations.",
    tags: [
      { name: "AWS", color: "blue-text-gradient" },
      { name: "EC2", color: "green-text-gradient" },
      { name: "S3", color: "pink-text-gradient" },
    ],
    image: cert1,
    source_code_link: cert1,
  },
  {
    name: " Scrum Management",
    description: "Certification of Completion for TCS Scrum Management.",
    tags: [
      { name: "Scrum's Core Concepts", color: "blue-text-gradient" },
      
    ],
    image: cert3,
    source_code_link: cert3,
  },
];


export { services, technologies, experiences, testimonials, projects, certificates };
