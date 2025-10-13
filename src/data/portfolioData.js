export const personalInfo = {
  name: "Abhiraj Yadav",
  title: "Full Stack Developer",
  subtitle: "Frontend Developer | React.js Specialist | MERN Stack Developer",
  location: "Noida, Uttar Pradesh, India",
  email: "abhirajyadav303@gmail.com",
  phone: "+91 9113402282",
  linkedin: "https://www.linkedin.com/in/abhiraj-yadav-86a232215/",
  github: "https://github.com/abhiraj100",
  resume: "/Abhiraj_Resume.pdf",
  profileImage: "src/assets/profile.jpeg",
  bio: "Passionate Full Stack Developer with expertise in modern web technologies. Currently pursuing Master's in Computer Applications from VIT Bhopal. Experienced in building scalable web applications using React.js, Node.js, and MongoDB. Strong problem-solving skills with a focus on user experience and performance optimization.",
};

export const education = [
  {
    id: 1,
    institution: "Vellore Institute of Technology",
    location: "Bhopal, Madhya Pradesh",
    degree: "Master of Computer Applications",
    duration: "Aug 2023 – May 2025",
    cgpa: "8.5",
    description:
      "Specialized in Advanced Web Technologies, Database Management Systems, and Software Engineering. Active member of coding clubs and technical societies.",
  },
  {
    id: 2,
    institution: "Nilamber Pitamber University",
    location: "Daltonganj, Jharkhand",
    degree: "Bachelor of Computer Applications",
    duration: "Jun 2019 – Jul 2022",
    cgpa: "7.6",
    description:
      "Focused on Programming Fundamentals, Data Structures, Algorithms, and Web Development. Graduated with distinction and participated in various technical competitions.",
  },
];

export const experience = [
  {
    id: 1,
    company: "Stocai",
    position: "Frontend Developer",
    location: "Remote, Pune",
    duration: "Mar 2025 – Present",
    type: "Full-time",
    description:
      "Leading frontend development initiatives for a dynamic tech startup focused on innovative web solutions.",
    achievements: [
      "Crafted and optimized web interfaces, reducing page load time by 30% and delivering a smoother user experience",
      "Coordinated with senior designers and management to refine visual elements based on feedback, resulting in a 20% improvement in UI consistency with brand standards",
      "Implemented responsive design principles ensuring seamless experience across all devices",
      "Collaborated with cross-functional teams to deliver high-quality products on tight deadlines",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "Webpack",
    ],
  },
  {
    id: 2,
    company: "Codes For Tomorrow",
    position: "React.js Developer Intern",
    location: "Indore, Madhya Pradesh",
    duration: "Sep 2024 – Nov 2024",
    type: "Internship",
    description:
      "Contributed to educational technology platform development with focus on interactive learning experiences.",
    achievements: [
      "Optimized API integration processes, enhancing data retrieval speed and improving overall app performance by 35%",
      "Collaborated with the product team to design new features and streamline code, cutting bug reports by 25%",
      "Implemented real-time features using WebSocket for enhanced user interaction",
      "Participated in code reviews and maintained high code quality standards",
    ],
    technologies: ["React.js", "Redux", "Axios", "Material-UI", "Jest", "Git"],
  },
  {
    id: 3,
    company: "Physics Wallah Classes",
    position: "Full Stack Developer Intern",
    location: "Remote",
    duration: "Mar 2024 – Jul 2024",
    type: "Internship",
    description:
      "Developed scalable web applications for India's leading EdTech platform serving millions of students.",
    achievements: [
      "Architected dynamic, responsive components using React to enhance user experience, increasing session duration by 40%",
      "Revamped backend architecture through Node.js and MongoDB integration, decreasing data retrieval time by 50%",
      "Built RESTful APIs serving over 10,000+ concurrent users",
      "Implemented caching strategies that improved application performance significantly",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AWS",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "QuickCart E-Commerce Application",
    description:
      "A comprehensive e-commerce platform with modern design and seamless user experience. Features include product catalog, shopping cart, user authentication, payment integration, and admin dashboard.",
    longDescription:
      "QuickCart is a full-featured e-commerce application built with the MERN stack. It provides a seamless shopping experience with features like product search and filtering, user reviews and ratings, secure payment processing, order tracking, and inventory management. The application is optimized for performance and scalability.",
    duration: "Jun 2025 - Jul 2025",
    image: "/projects/quickcart.jpg",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "JWT",
      "TailwindCSS",
    ],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Order management system",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
      "Real-time order tracking",
    ],
    achievements: [
      "Achieved significant improvement in user satisfaction as reported by user feedback surveys",
      "Implemented MongoDB for seamless database operations, reducing data retrieval time",
      "Improved backend processes, leading to a 25% boost in page load speeds across all devices",
    ],
    github: "https://github.com/abhiraj100/quickcart",
    demo: "https://quickcart-demo.vercel.app",
    status: "Completed",
  },
  {
    id: 2,
    title: "HealthHive - Doctor Appointment Platform",
    description:
      "A comprehensive healthcare platform connecting patients with doctors. Features include appointment booking, virtual consultations, medical records management, and prescription tracking.",
    longDescription:
      "HealthHive is a full-stack healthcare platform that revolutionizes the way patients connect with healthcare providers. The platform offers seamless appointment booking, secure patient data management, telemedicine capabilities, and integrated communication tools between patients and doctors.",
    duration: "Feb 2025 - May 2025",
    image: "/projects/healthhive.jpg",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Stripe",
    ],
    features: [
      "Patient and doctor registration/authentication",
      "Appointment booking and scheduling",
      "Virtual consultation with video calling",
      "Medical records and prescription management",
      "Payment processing for consultations",
      "Real-time notifications and reminders",
      "Doctor availability management",
      "Patient review and rating system",
    ],
    achievements: [
      "Engineered a full-stack doctor appointment booking platform using MERN stack to facilitate seamless patient-doctor interaction",
      "Prototyped and iterated key features in weekly sprints, reducing delivery cycle time by 20%",
      "Spearheaded collaboration with designers to refine UI components, raising stakeholder approval scores by 30%",
    ],
    github: "https://github.com/abhiraj100/healthhive",
    demo: "https://healthhive-demo.vercel.app",
    status: "Completed",
  },
  {
    id: 3,
    title: "Snap Stock - Stock Photography Platform",
    description:
      "A modern stock photography platform with intuitive search, trending collections, and high-quality image gallery. Built for photographers and content creators to showcase and discover amazing visuals.",
    longDescription:
      "Snap Stock is a comprehensive stock photography platform that provides photographers with a platform to showcase their work and users with access to high-quality images. The platform features advanced search capabilities, trending collections, user profiles, and licensing management.",
    duration: "Aug 2024",
    image: "/projects/snapstock.jpg",
    technologies: [
      "React.js",
      "TailwindCSS",
      "Axios",
      "React Router",
      "Framer Motion",
    ],
    features: [
      "High-performance image gallery with lazy loading",
      "Advanced search with filters and categories",
      "Trending collections and featured content",
      "Photographer profiles and portfolios",
      "Image licensing and download system",
      "Responsive masonry layout",
      "Dark/Light theme toggle",
      "Social sharing capabilities",
    ],
    achievements: [
      "Designed an intuitive, visually engaging homepage layout that increased daily active users",
      "Integrated a high-performance search bar and trending collections feature, improving engagement",
      "Enhanced content display, raising click-through rates by 25% on trending stock items",
    ],
    github: "https://github.com/abhiraj100/snapstock",
    demo: "https://snapstock-demo.vercel.app",
    status: "Completed",
  },
  {
    id: 4,
    title: "TaskFlow - Project Management Tool",
    description:
      "A collaborative project management application with kanban boards, team collaboration, task tracking, and real-time updates. Perfect for agile teams and project coordination.",
    longDescription:
      "TaskFlow is a comprehensive project management solution designed for modern teams. It combines intuitive design with powerful features like kanban boards, sprint planning, time tracking, and team collaboration tools to streamline project workflows.",
    duration: "Dec 2024 - Jan 2025",
    image: "/projects/taskflow.jpg",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.io",
      "Redis",
    ],
    features: [
      "Kanban board with drag-and-drop functionality",
      "Team collaboration and real-time updates",
      "Sprint planning and backlog management",
      "Time tracking and reporting",
      "File attachments and comments",
      "Project analytics and insights",
      "Role-based access control",
      "Integration with popular tools",
    ],
    achievements: [
      "Built a scalable project management platform serving 500+ active users",
      "Implemented real-time collaboration features using WebSocket technology",
      "Achieved 99.9% uptime with optimized database queries and caching strategies",
    ],
    github: "https://github.com/abhiraj100/taskflow",
    demo: "https://taskflow-demo.vercel.app",
    status: "In Development",
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 90, icon: "SiJavascript" },
    { name: "Java", level: 85, icon: "SiJava" },
    { name: "TypeScript", level: 80, icon: "SiTypescript" },
    { name: "Python", level: 75, icon: "SiPython" },
    { name: "HTML5", level: 95, icon: "SiHtml5" },
    { name: "CSS3", level: 90, icon: "SiCss3" },
  ],
  frameworks: [
    { name: "React.js", level: 95, icon: "SiReact" },
    { name: "Next.js", level: 90, icon: "SiNextdotjs" },
    { name: "Node.js", level: 85, icon: "SiNodedotjs" },
    { name: "Express.js", level: 85, icon: "SiExpress" },
    { name: "TailwindCSS", level: 90, icon: "SiTailwindcss" },
    { name: "Redux", level: 80, icon: "SiRedux" },
  ],
  databases: [
    { name: "MongoDB", level: 85, icon: "SiMongodb" },
    { name: "PostgreSQL", level: 80, icon: "SiPostgresql" },
    { name: "MySQL", level: 75, icon: "SiMysql" },
    { name: "Redis", level: 70, icon: "SiRedis" },
  ],
  tools: [
    { name: "Git", level: 90, icon: "SiGit" },
    { name: "GitHub", level: 90, icon: "SiGithub" },
    { name: "VS Code", level: 95, icon: "SiVisualstudiocode" },
    { name: "Postman", level: 85, icon: "SiPostman" },
    { name: "Docker", level: 75, icon: "SiDocker" },
    { name: "AWS", level: 70, icon: "SiAmazonaws" },
  ],
};

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-CCP-2024",
    image: "/certifications/aws-ccp.png",
    skills: ["Cloud Computing", "AWS Services", "Security", "Pricing"],
  },
  {
    id: 2,
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2024",
    credentialId: "META-REACT-2024",
    image: "/certifications/meta-react.png",
    skills: ["React.js", "JSX", "Hooks", "State Management"],
  },
  {
    id: 3,
    name: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-FSWD-2023",
    image: "/certifications/freecodecamp.png",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    position: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    content:
      "Abhiraj is an exceptional developer with a keen eye for detail. His ability to translate complex requirements into elegant, user-friendly interfaces is remarkable. He consistently delivers high-quality code and is always eager to learn new technologies.",
    rating: 5,
    image: "/testimonials/priya.jpg",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    position: "Project Manager",
    company: "Digital Innovations",
    content:
      "Working with Abhiraj has been a pleasure. He demonstrates strong problem-solving skills and can handle complex projects independently. His communication skills and team collaboration make him a valuable asset to any development team.",
    rating: 5,
    image: "/testimonials/rajesh.jpg",
  },
  {
    id: 3,
    name: "Anita Patel",
    position: "UI/UX Designer",
    company: "Creative Studios",
    content:
      "Abhiraj has an excellent understanding of modern web technologies and design principles. He successfully implemented our designs with pixel-perfect accuracy and suggested valuable improvements that enhanced the user experience.",
    rating: 5,
    image: "/testimonials/anita.jpg",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abhiraj-yadav-86a232215/",
    icon: "SiLinkedin",
    color: "#0077b5",
  },
  {
    name: "GitHub",
    url: "https://github.com/abhiraj100",
    icon: "SiGithub",
    color: "#333",
  },
  {
    name: "Email",
    url: "mailto:abhirajyadav303@gmail.com",
    icon: "SiGmail",
    color: "#ea4335",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/abhirajyadav",
    icon: "SiTwitter",
    color: "#1da1f2",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/abhirajyadav",
    icon: "SiInstagram",
    color: "#e4405f",
  },
];

export const stats = [
  {
    id: 1,
    label: "Projects Completed",
    value: "15+",
    icon: "FiCode",
  },
  {
    id: 2,
    label: "Years of Experience",
    value: "1+",
    icon: "FiCalendar",
  },
  {
    id: 3,
    label: "Technologies Mastered",
    value: "20+",
    icon: "FiTool",
  },
  {
    id: 4,
    label: "Client Satisfaction",
    value: "100%",
    icon: "FiHeart",
  },
];
