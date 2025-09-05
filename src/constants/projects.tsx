import { ProjectList } from "@/types";
import Image from "next/image";
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
  SiDotenv,
} from "react-icons/si";
import vidronHome from "@/assets/images/vidronHome.png";

export const projects: ProjectList[] = [
  {
    name: "Vidron",
    slug: "vidron",
    videoSrc: "/videos/vidron.mp4",
    liveLink: "https://vidron.vercel.app",
    tagline:
      "A video streaming platform offering a diverse range of content, including engaging full-length videos and short-form snaps.",
    year: "2025",
    overview:
      "Vidron is a dynamic video streaming platform designed to deliver an engaging viewing experience. Users can explore a diverse collection of content, including full-length videos and short-form snaps. The platform allows seamless video playback, intuitive navigation, and a user-friendly interface for managing channels and content. Built with scalability in mind, Vidron offers smooth performance while handling media uploads and streaming efficiently.",
    making01:
      "Building Vidron was an exciting and challenging experience, especially because it was my first project where I designed the backend from the ground up. I had worked with backend-as-a-service platforms before, but this time, I wanted to take full control over how data flowed between the server and the client. Setting up authentication, managing media storage, and optimizing API performance were all new but rewarding challenges.",
    making02:
      "One of the most frustrating yet interesting parts was integrating the backend with the frontend. There were multiple instances where data didn't appear as expected, and I had to carefully inspect and adjust how responses were structured. Debugging these issues helped me gain a much deeper understanding of how the frontend processes and displays data.",
    making03:
      "Vidron was more than just a coding project, it was a deep dive into the complexities of backend development. Seeing everything come together, from database design to frontend integration, was incredibly satisfying.",
    codeLink: "https://github.com/amanranahere/Vidron",
    builtWith: [{ name: "React", icon: <SiReact /> }],
    renderImages: () => (
      <div>
        <Image src={vidronHome} alt="Vidron Home" />
      </div>
    ),
  },
];
