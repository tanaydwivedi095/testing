import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  git,
  mysql,
  python,
  java,
  spring,
  android,
  unity,
  taskhive,
  deliverydriver,
  workinprogress,
  techmahindra,
  accenture,
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
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
  {
    title: "Problem Solver",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
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
    name: "git",
    icon: git,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "android",
    icon: android,
  },
  {
    name: "unity",
    icon: unity,
  },


  
];

const experiences = [
  {
    title: "Full Stack Web Developer Intern",
    company_name: "Tech Mahindra",
    icon: techmahindra,
    iconBg: "#ffffff",
    date: "July 2023 - August 2023",
    points: [
      "Developed and maintained features for a COE Learning Management System.",
      "Worked with Angular and Spring to implement CRUD operations and other functionalities.",
      "Collaborated with the team to build a scalable and efficient web application.",
      "Ensured smooth user experience through thorough testing and debugging.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#ffffff",
    date: "September 2024 - Present",
    points: [
      "Learning and working with Java core and Spring frameworks.",
      "Contributing to the development of software solutions for clients.",
      "Collaborating with senior engineers to build and maintain enterprise applications.",
      "Participating in code reviews and improving coding practices within the team.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const hobbies = [
  {
    hobby: "Playing the Guitar",
    description:
      "Playing the guitar allows me to express my creativity and unwind. I enjoy exploring different genres and creating my own music.",
  },
  {
    hobby: "Calisthenics",
    description:
      "Calisthenics is my go-to workout routine. I love pushing my limits and achieving new strength milestones with bodyweight exercises.",
  },
  {
    hobby: "Gaming",
    description:
      "Gaming is one of my favorite pastimes. I spend time exploring new worlds on Steam, and it's a fun way to challenge myself and relax. Steam ID: yoloirl",
  },
];



const projects = [
  {
    name: "TaskHive",
    description:
      "A React-based web app that allows users to manage their notes with full CRUD functionality. Easily add, remove, and modify notes in a user-friendly interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: taskhive,
    source_code_link: "https://github.com/Maddy1327/taskHive",
  },
  {
    name: "Delivery Driver",
    description:
      "A time-based Unity game where players collect packages and deliver them while navigating through obstacles. The game features power-ups that enhance car speed and change its color, adding a dynamic and engaging element to the gameplay",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
    ],
    image: deliverydriver,
    source_code_link: "https://github.com/Maddy1327/Delivery-Driver",
  },
  {
    name: "Simple Blog Platform",
    description:
      "A basic blog platform where users can create, edit, and delete blog posts. Users can view posts, search for specific content, and leave comments. The platform allows for user authentication, so only registered users can create and manage their own posts.This is current work in progress",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: workinprogress,
    source_code_link: "https://github.com/maddy1327",
  },
];

// export { services, technologies, experiences, testimonials, projects };
export { services, technologies, experiences, hobbies, projects };
