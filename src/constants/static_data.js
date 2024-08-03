import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import githubImg from '../assets/social/github.svg';
import linkedinImg from '../assets/social/linkedin.svg';

export const HERO_CONTENT = `I am a dedicated full stack developer with a passion for creating efficient and user-friendly web applications. I specialize in front-end technologies React and Next.js and have solid experience with back-end technologies Node.js and MongoDB. I enjoy solving complex problems and continually learning new technologies. My aim is to build innovative solutions that enhance user experiences and contribute to business success.`;

export const ABOUT_TEXT = `I am a passionate full stack developer skilled in crafting effective and intuitive web applications. My experience spans various technologies including React, Next.js, Node.js, Java, and MongoDB. I began my journey in web development with a strong interest in coding, and it has grown into a fulfilling career where I continually learn and take on new challenges. I have built projects like a Chrome extension for student monitoring and a blogging website. I enjoy solving complex problems to deliver high-quality solutions. I am always eager to explore new technologies and contribute to exciting projects.`;

export const EXPERIENCES = [
  // {
  //   year: "2023 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // }
];

export const SOCIAL=[
  {
    name:"GitHub",
    img:githubImg,
    styles:"bg-white rounded p-0.5 ",
    link:"https://github.com/Nikhilesh002"
  },
  {
    name:"LinkedIn",
    img:linkedinImg,
    styles:"bg-white rounded",
    link:"https://www.linkedin.com/in/nikhilesh002/"
  },
]

export const PROJECTS = [
  {
    title: "Invigilator",
    image: project1,
    deployment:"https://github.com/Nikhilesh002/invigilator",
    github:"https://github.com/Nikhilesh002/invigilator",
    description:
      "A Chrome extension for monitoring student activity and preventing malpractices, integrated with a teacher dashboard. Teacher can track every activity of students like switching tabs, browsing unauthorised websites etc.",
    technologies: ["JavaScript", "Tailwind CSS", "ReactJS", "NodeJS", "MongoDB"],
  },
  {
    title: "Get Me A Chai",
    image: project5,
    deployment:"https://get-me-a-chai-nik.vercel.app/",
    github:"https://github.com/Nikhilesh002/get-me-a-chai",
    description:
      "Discover and support your favorite creators on our platform, similar to Patreon. Donate directly to creators and help them thrive. Creators can easily view and receive donations.",
    technologies: ["NextJS","JavaScript", "Tailwind CSS", "MongoDB","NextAuth","Razorpay"],
  },
  {
    title: "BlogWiz",
    image: project2,
    deployment:"https://blogwiz.onrender.com/",
    github:"https://github.com/Nikhilesh002/Blogwiz",
    description:
      "Create and share your stories on our blogging platform, where authors can post, update, view, and delete blogs. Authors can express themselves through their writings, while users enjoy reading diverse content.",
    technologies: ["JavaScript", "Tailwind CSS", "ReactJS", "MongoDB", "NodeJS"],
  },
  {
    title: "Musically",
    image: project3,
    deployment:"https://nikhilesh002.github.io/musically/",
    github:"https://github.com/Nikhilesh002/musically",
    description:
      "A responsive music edtech website showcasing course listings, instructors, and student feedback.",
    technologies: ["ReactJS", "NextJS", "AceternityUI", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Money Tracker App",
    image: project6,
    deployment:"https://money-tracker-nik.vercel.app/",
    github:"https://github.com/Nikhilesh002/money-tracker-app",
    description:
      "Manage your finances effortlessly with our responsive transaction manager. Add, edit, remove, and filter transactions, and visualize your transactions with pie charts. Enjoy a user-friendly experience with both light and dark modes.",
    technologies: ["ReactJS", "JavaScript", "Tailwind CSS","ReduxJS","Chart.js"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    deployment:"https://nikhilesh002-portfolio.vercel.app/",
    github:"https://github.com/Nikhilesh002/portfolio",
    description:
      "A personal portfolio website showcasing my information, projects, and skills. The website features smooth animations powered by Framer Motion and includes a contact form for connecting with me via email.",
    technologies: ["JavaScript", "Tailwind CSS", "ReactJS","Framer Motion","EmailJS"],
  },
  // {
  //   title: "House Rental System",
  //   image: project5,
  //   deployment:"",
  //   github:"",
  //   description:
  //     "A Java app for house management, enabling owners to input and store property information, with search filters for easy retrieval and organization for rent seekers.",
  //   technologies: ["Java", "SQL"],
  // },
];
