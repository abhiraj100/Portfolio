import resumePDF from "../assets/Abhiraj_Resume.pdf";
import HealthHive from "../assets/HealthHive.png";
import QuickCart from "../assets/QuickCart.png";
import SnapStock from "../assets/SnapStock.png";
import TaskFlow from "../assets/TaskFlow.png";
import CountryInfoApp from "../assets/CountryInfoApp.png";
import EventWithYadavs from "../assets/EventWithYadavs.png";

export const personalInfo = {
  name: "Abhiraj Yadav",
  title: "Full Stack Developer",
  subtitle:
    "Frontend Developer | React.js Specialist | MERN Stack Developer | DevOps",
  location: "Noida, Uttar Pradesh, India",
  email: "abhirajyadav303@gmail.com",
  phone: "+91 9113402282",
  linkedin: "https://www.linkedin.com/in/abhiraj-yadav-86a232215/",
  github: "https://github.com/abhiraj100",
  resume: resumePDF,
  profileImage: "src/assets/profile.jpeg",
  bio: "Passionate Full Stack Developer with expertise in modern web technologies. Completed Master's in Computer Applications from Vellore Institute of Technology (Bhopal Campus). Experienced in building scalable web applications using React.js, Node.js, and MongoDB. Strong problem-solving skills with a focus on user experience and performance optimization.",
};

export const education = [
  {
    id: 1,
    institution: "Vellore Institute of Technology",
    location: "Bhopal, Madhya Pradesh",
    degree: "Master of Computer Applications",
    duration: "Aug 2023 – May 2025",
    cgpa: "8.6",
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
  {
    id: 3,
    institution: "Gobind Singh Public School",
    location: "Daltonganj, Jharkhand",
    degree: "Higher Secondary Education (Class XII)",
    duration: "Jun 2017 – May 2019",
    cgpa: "7.23",
    description:
      "Specialized in the Science stream with a strong focus on Computer Science. Gained foundational knowledge in programming, logic building, and problem-solving. Actively participated in coding events and developed early interest in web technologies and software development.",
  },
  {
    id: 4,
    institution: "Elite Public School",
    location: "Daltonganj, Jharkhand",
    degree: "Secondary Education (Class X)",
    duration: "April 2016 – May 2017",
    cgpa: "10",
    description:
      "Completed Secondary Education with a strong academic record, developing a solid foundation in mathematics, science, and computer fundamentals",
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
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Git & GitHub",
      "ESLint",
      "Prettier",
      "Webpack",
      "RESTful APIs",
      "JWT Authentication",
    ],
  },
  {
    id: 2,
    company: "Affy Cloud Solution",
    position: "Software Developer Intern",
    location: "Bhopal, Madhya Pradesh (Remote)",
    duration: "Nov 2024 – Jan 2025",
    type: "Internship",
    description:
      "Assisted in developing and optimizing an EdTech platform focused on delivering interactive and scalable learning experiences.",
    achievements: [
      "Developed and integrated responsive front-end components using React.js and Material-UI, improving user engagement by 30%",
      "Enhanced REST API integration and data handling using Axios, reducing data load times by 35%",
      "Implemented real-time communication features with WebSockets, increasing platform interactivity and collaboration",
      "Collaborated with cross-functional teams to refine product design and resolve key performance bottlenecks",
      "Conducted code reviews and implemented best practices with Git and Jest, improving maintainability and reducing bugs by 25%",
    ],
    technologies: [
      "React.js",
      "Redux",
      "Axios",
      "Material-UI",
      "WebSocket",
      "Jest",
      "Git",
    ],
  },
  {
    id: 3,
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
    id: 4,
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
  {
    id: 5,
    company: "Briztech Infosystems Pvt. Ltd.",
    position: "Web Designing (PHP) Intern",
    location: "Remote",
    duration: "Jan 2023 – Jan 2023",
    type: "Internship",
    description:
      "Contributed to the development and design of responsive web pages using PHP and modern front-end technologies, improving user interface consistency and site performance.",
    achievements: [
      "Designed and developed interactive web pages using HTML, CSS, JavaScript, and PHP, ensuring mobile responsiveness and cross-browser compatibility",
      "Optimized website layouts and visual elements to enhance user experience and reduce bounce rates by 25%",
      "Integrated dynamic content using PHP and MySQL, enabling smoother data flow and content updates",
      "Collaborated with senior developers to debug and maintain web modules, improving overall site stability",
      "Implemented SEO-friendly design practices, improving site visibility and load speed by 20%",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Bootstrap",
      "VS Code",
      "Git",
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
    image: QuickCart,
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
    github:
      "https://github.com/abhiraj100/QuickCart-E-Commerce-App-using-Next.js",
    demo: "https://quick-cart-e-commerce-app-using-nex.vercel.app/",
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
    image: HealthHive,
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
    github:
      "https://github.com/abhiraj100/HealthHive-Connecting-Care-Empowering-Health",
    demo: "https://health-hive-connecting-care-empowering-health-client.vercel.app/",
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
    image: SnapStock,
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
    github: "https://github.com/abhiraj100/Snap-Stock",
    demo: "https://snap-stock-ten.vercel.app/",
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
    image: TaskFlow,
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
    github: "https://github.com/abhiraj100/Task-Management-Focus-Flow",
    demo: "https://taskflow-demo.vercel.app",
    status: "In Development",
  },
  {
    id: 5,
    title: "Country Info App",
    description:
      "An interactive web application that provides detailed information about countries worldwide, including population, region, capital, and flags. Users can easily search and explore countries with an intuitive interface.",
    longDescription:
      "Country Info App is a responsive web application built using React and REST APIs. It allows users to search for any country and view comprehensive information such as population, region, capital, subregion, native name, and flag. The app also supports dark and light mode themes for a better user experience. Data is fetched dynamically from the REST Countries API to ensure accuracy and up-to-date information.",
    duration: "Apr 2025 - May 2025",
    image: CountryInfoApp,
    technologies: [
      "React.js",
      "REST Countries API",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Vercel",
    ],
    features: [
      "Search functionality to find countries by name",
      "Detailed information for each country",
      "Dark and light theme toggle",
      "Responsive design for all devices",
      "Dynamic data fetching using REST API",
      "Smooth UI and animations",
    ],
    achievements: [
      "Built a clean and responsive UI for global users",
      "Optimized API integration for fast and efficient data retrieval",
      "Enhanced accessibility with light/dark theme support",
    ],
    github: "https://github.com/abhiraj100/Country-Info-App",
    demo: "https://country-info-app-mu.vercel.app/",
    status: "Completed",
  },
  {
    id: 6,
    title: "Event With Yadav's",
    description:
      "A modern event planning web application designed to help users create, organize, and manage events seamlessly. Includes features for guest management, event scheduling, and responsive design for smooth user experience.",
    longDescription:
      "Event With Yadav's is a full-stack web application that simplifies event management. Built using React and modern web technologies, it allows users to create and customize events, manage guest lists, and track event details in real-time. The platform focuses on usability, offering an attractive interface with responsive design for desktop and mobile users. It ensures smooth navigation and dynamic interactions throughout the event planning process.",
    duration: "Aug 2025 - Sep 2025",
    image: EventWithYadavs,
    technologies: ["React.js", "JavaScript", "CSS3", "HTML5", "Vercel"],
    features: [
      "Create and manage events easily",
      "Guest list and event details management",
      "Dynamic event scheduling system",
      "Responsive and user-friendly design",
      "Smooth animations and modern UI components",
    ],
    achievements: [
      "Developed an intuitive event management interface improving user engagement",
      "Enhanced performance and accessibility across devices",
      "Successfully deployed on Vercel ensuring high availability and speed",
    ],
    github: "https://github.com/abhiraj100/EVENT-PLANNING",
    demo: "https://event-planning-eight.vercel.app/",
    status: "Completed",
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

// export const certifications = [
//   {
//     id: 1,
//     name: "AWS Certified Cloud Practitioner",
//     issuer: "Amazon Web Services",
//     date: "2024",
//     credentialId: "AWS-CCP-2024",
//     image: aws,
//     skills: ["Cloud Computing", "AWS Services", "Security", "Pricing"],
//   },
//   {
//     id: 2,
//     name: "React Developer Certification",
//     issuer: "Meta",
//     date: "2024",
//     credentialId: "META-REACT-2024",
//     image: "/certifications/meta-react.png",
//     skills: ["React.js", "JSX", "Hooks", "State Management"],
//   },
//   {
//     id: 3,
//     name: "Full Stack Web Development",
//     issuer: "freeCodeCamp",
//     date: "2023",
//     credentialId: "FCC-FSWD-2023",
//     image: "/certifications/freecodecamp.png",
//     skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
//   },
// ];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-CCP-2024",
    image: "../../public/certifications/aws.png",
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
  {
    id: 4,
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Dec 2024",
    credentialId: "A173646C3743",
    image: "../../public/certifications/sqlB.png",
    skills: ["SQL", "Database Queries", "Data Retrieval", "Joins"],
  },
  {
    id: 5,
    name: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "Dec 2024",
    credentialId: "47D1DD0D6C57",
    image: "../../public/certifications/javascriptB.png",
    skills: ["JavaScript", "ES6+", "DOM Manipulation", "Functions"],
  },
  {
    id: 6,
    name: "Java (Basic)",
    issuer: "HackerRank",
    date: "Dec 2024",
    credentialId: "66C52D3B14303",
    image: "../../public/certifications/javaB.png",
    skills: ["Java", "OOP", "Control Structures", "Data Types"],
  },
    {
    id: 7,
    name: "Intro to SQL",
    issuer: "Kaggle",
    date: "Nov 2023",
    credentialId: "",
    image: "../../public/certifications/SQLK.png",
    skills: ["SQL", "Database Queries", "Data Retrieval", "Joins"],
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
    value: "0.5",
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
