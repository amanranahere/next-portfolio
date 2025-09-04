import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiCloudinary,
  SiRedux,
  SiJsonwebtokens,
  SiTailwindcss,
  SiReactrouter,
  SiAxios,
  SiReacthookform,
  SiFramer,
  SiDotenv,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiVite,
  SiAppwrite,
  SiPostman,
  SiNextdotjs,
  SiGreensock,
  SiTypescript,
  SiThreedotjs,
  SiVercel,
} from "react-icons/si";

export const techStack = [
  {
    name: "Next JS",
    label: "Full-Stack Framework",
    logo: <SiNextdotjs className="w-14 h-14" />,
    description:
      "Next.js is a React-based framework that enables server-side rendering, static site generation, and API routes for building optimized web apps.",
    category: "Frontend",
  },
  {
    name: "React JS",
    label: "Framework",
    logo: <SiReact className="w-14 h-14" />,
    description:
      "React is a JavaScript library for building fast, dynamic, and reusable UI components. It follows a component-based architecture for efficient rendering.",
    category: "Frontend",
  },
  {
    name: "Node JS",
    label: "Runtime Environment",
    logo: <SiNodedotjs className="w-14 h-14" />,
    description:
      "Node.js is a JavaScript runtime that enables server-side scripting, allowing JavaScript to run outside the browser.",
    category: "Backend",
  },
  {
    name: "Express JS",
    label: "Web Framework",
    logo: <SiExpress className="w-14 h-14" />,
    description:
      "Express.js is a lightweight and fast Node.js framework used for building APIs and backend applications with minimal boilerplate.",
    category: "Backend",
  },
  {
    name: "MongoDB",
    label: "Database",
    logo: <SiMongodb className="w-14 h-14" />,
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it scalable for modern applications.",
    category: "Backend",
  },
  {
    name: "Javascript",
    label: "Language",
    logo: <SiJavascript className="w-14 h-14" />,
    description:
      "JavaScript is a versatile programming language used for building interactive web applications. It runs in the browser and on the server with Node.js.",
    category: "Languages",
  },
  {
    name: "TypeScript",
    label: "Language",
    logo: <SiTypescript className="w-14 h-14" />,
    description:
      "TypeScript is a statically typed superset of JavaScript that helps catch errors early through type checking, enhancing developer productivity and code maintainability.",
    category: "Languages",
  },
  {
    name: "Redux",
    label: "State Management",
    logo: <SiRedux className="w-14 h-14" />,
    description:
      "Redux is a predictable state container for JavaScript applications, helping manage global state efficiently across components.",
    category: "Frontend",
  },
  {
    name: "Zustand",
    label: "State Management",
    description:
      "Zustand is a lightweight and scalable state management library for React. It simplifies global state without boilerplate or context providers.",
    category: "Frontend",
  },
  {
    name: "React Router",
    label: "Routing",
    logo: <SiReactrouter className="w-14 h-14" />,
    description:
      "React Router enables dynamic, client-side routing in React applications, allowing seamless navigation without full page reloads.",
    category: "Frontend",
  },
  {
    name: "JWT",
    label: "Authentication",
    logo: <SiJsonwebtokens className="w-14 h-14" />,
    description:
      "JSON Web Tokens (JWT) are used for securely transmitting data between parties, commonly used for user authentication and authorization.",
    category: "Backend",
  },
  {
    name: "Mongoose",
    label: "ODM",
    logo: <SiMongoose className="w-14 h-14" />,
    description:
      "Mongoose is an ODM (Object Data Modeling) library that provides a structured schema for MongoDB, making database interactions easier in Node.js applications.",
    category: "Backend",
  },
  {
    name: "Tailwind CSS",
    label: "Styling",
    logo: <SiTailwindcss className="w-14 h-14" />,
    description:
      "Tailwind CSS is a utility-first CSS framework that helps build modern, responsive designs quickly without writing custom CSS.",
    category: "Frontend",
  },
  {
    name: "Framer Motion",
    label: "Animation",
    logo: <SiFramer className="w-14 h-14" />,
    description:
      "Framer Motion is a powerful animation library for React, allowing developers to create smooth and interactive animations with ease.",
    category: "Frontend",
  },
  {
    name: "Axios",
    label: "HTTP Client",
    logo: <SiAxios className="w-14 h-14" />,
    description:
      "Axios is a promise-based HTTP client for making API requests in JavaScript applications, handling requests and responses efficiently.",
    category: "Tools & Services",
  },
  {
    name: "React Hook Form",
    label: "Form Handling",
    logo: <SiReacthookform className="w-14 h-14" />,
    description:
      "React Hook Form is a lightweight form validation library for React, designed to improve performance and simplify form management.",
    category: "Frontend",
  },
  {
    name: "Cloudinary",
    label: "Media Storage",
    logo: <SiCloudinary className="w-14 h-14" />,
    description:
      "Cloudinary is a cloud-based media management service used for storing, optimizing, and delivering images and videos efficiently.",
    category: "Backend",
  },
  {
    name: "Multer",
    label: "File uploads",
    description:
      "Multer is a middleware for handling file uploads in Node.js applications, commonly used with Express.js.",
    category: "Backend",
  },
  {
    name: "Bcrypt JS",
    label: "Security",
    description:
      "bcrypt.js is a library used for hashing passwords, adding an extra layer of security to authentication systems.",
    category: "Backend",
  },
  {
    name: "Dotenv",
    label: "Environment Management",
    logo: <SiDotenv className="w-14 h-14" />,
    description:
      "dotenv is a package that loads environment variables from a .env file, keeping sensitive information like API keys and database credentials secure.",
    category: "Backend",
  },
  {
    name: "C++",
    label: "Language",
    logo: <SiCplusplus className="w-14 h-14" />,
    description:
      "C++ is a high-performance programming language widely used in system programming, game development, and competitive programming.",
    category: "Languages",
  },
  {
    name: "C",
    label: "Language",
    logo: <SiC className="w-14 h-14" />,
    description:
      "C is a powerful low-level programming language known for its efficiency, often used in system programming, embedded systems, and OS development.",
    category: "Languages",
  },
  {
    name: "Vite",
    label: "Build Tool",
    logo: <SiVite className="w-14 h-14" />,
    description:
      "Vite is a fast build tool and development server that improves the performance of modern JavaScript applications.",
    category: "Tools & Services",
  },
  {
    name: "Appwrite",
    label: "Backend-as-a-Service",
    logo: <SiAppwrite className="w-14 h-14" />,
    description:
      "Appwrite is a self-hosted backend solution that provides authentication, databases, storage, and more for modern web applications.",
    category: "Tools & Services",
  },
  {
    name: "Postman",
    label: "API Testing",
    logo: <SiPostman className="w-14 h-14" />,
    description:
      "Postman is a tool for testing APIs, allowing developers to send requests, inspect responses, and automate testing workflows.",
    category: "Tools & Services",
  },
  {
    name: "Vercel",
    label: "Deployment Platform",
    logo: <SiVercel className="w-14 h-14" />,
    description:
      "Vercel is a cloud platform for frontend frameworks and static sites, enabling developers to deploy web apps quickly with global CDN support and seamless CI/CD integration.",
    category: "Tools & Services",
  },
  {
    name: "React Toastify",
    label: "Notifications",
    description:
      "React-Toastify is a library for adding customizable and easy-to-use toast notifications in React applications.",
    category: "Tools & Services",
  },
  {
    name: "Tiny MCE",
    label: "Text Editor",
    description:
      "TinyMCE is a flexible WYSIWYG editor that allows users to create and edit rich text content in web applications.",
    category: "Frontend",
  },
  {
    name: "GSAP",
    label: "Animation",
    logo: <SiGreensock className="w-14 h-14" />,
    description:
      "GSAP (GreenSock Animation Platform) is a powerful JavaScript animation library used to create high-performance, smooth animations in web applications.",
    category: "Exploring / Learning",
  },
  {
    name: "Three.js",
    label: "3D Library",
    logo: <SiThreedotjs className="w-14 h-14" />,
    description:
      "Three.js is a JavaScript library used to create and display animated 3D graphics in the browser using WebGL.",
    category: "Exploring / Learning",
  },
];
