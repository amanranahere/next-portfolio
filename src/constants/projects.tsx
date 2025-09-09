import { ProjectList } from "@/types";
import Image from "next/image";
import MaskingGrid from "@/components/animations/MaskingGrid";
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
} from "react-icons/si";

import VidronHome from "@/assets/images/vidronHome.png";
import VidronVidPage from "@/assets/images/vidronVidPage.png";
import VidronSnap from "@/assets/images/vidronSnap.png";
import VidronAllSnaps from "@/assets/images/vidronAllSnaps.png";
import VidronTweets from "@/assets/images/vidronTweets.png";
import VidronMetrics from "@/assets/images/vidronMetrics.png";
import VidronChannel from "@/assets/images/vidronChannel.png";
import VidronSettings from "@/assets/images/vidronSettings.png";

import CodebitsHero from "@/assets/images/codebitsHero.png";
import CodebitsOverview from "@/assets/images/codebitsOverview.png";
import CodebitsFeatures from "@/assets/images/codebitsFeatures.png";
import CodebitsShowcase from "@/assets/images/codebitsShowcase.png";
import CodebitsFooter from "@/assets/images/cbFooter.png";
import CodebitsHome from "@/assets/images/codebitsHome.png";
import CodebitsDropdown from "@/assets/images/cbdropdown.png";
import CodebitsSearch from "@/assets/images/codebitsSearch.png";

export const projects: ProjectList[] = [
  {
    name: "Vidron",
    slug: "vidron",
    video: "/videos/vidron_vid.mp4",
    link: "https://vidron.vercel.app",
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
    builtWith: [
      {
        name: "React",
        icon: <SiReact className="w-5 h-5 leading-tight" />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-5 h-5" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="w-5 h-5" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-5 h-5" />,
      },
      {
        name: "mongoose",
        icon: <SiMongoose className="w-5 h-5" />,
      },
      {
        name: "Cloudinary",
        icon: <SiCloudinary className="w-5 h-5" />,
      },
      {
        name: "multer",
      },
      {
        name: "Redux",
        icon: <SiRedux className="w-5 h-5" />,
      },
      {
        name: "JWT",
        icon: <SiJsonwebtokens className="w-5 h-5" />,
      },
      {
        name: "tailwindcss",
        icon: <SiTailwindcss className="w-5 h-5" />,
      },
      {
        name: "React Router",
        icon: <SiReactrouter className="w-5 h-5" />,
      },
      {
        name: "Axios",
        icon: <SiAxios className="w-5 h-5" />,
      },
      {
        name: "React Hook Form",
        icon: <SiReacthookform className="w-5 h-5" />,
      },
      {
        name: "React-Toastify",
      },
    ],
    renderImages: () => (
      <div className="gap-4">
        <div className="h-full flex flex-wrap justify-between">
          <div className="md:w-[49.3%] aspect-video mb-5 relative">
            <Image src={VidronHome} alt="Vidron Home" fill />

            <MaskingGrid
              color="#111"
              rowSizes={{ sm: 30, md: 45, lg: 120 }}
              columnSizes={{ sm: 60, md: 90, lg: 120 }}
            />
          </div>

          <div className="md:w-[49.3%] aspect-video mb-5 relative">
            <Image src={VidronVidPage} alt="Vidron Video page" fill />

            <MaskingGrid
              color="#111"
              rowSizes={{ sm: 30, md: 45, lg: 120 }}
              columnSizes={{ sm: 60, md: 90, lg: 120 }}
            />
          </div>

          <div className="md:w-[49.3%] aspect-video mb-5 relative">
            <Image src={VidronAllSnaps} alt="Vidron All Snaps" fill />

            <MaskingGrid
              color="#111"
              rowSizes={{ sm: 30, md: 45, lg: 120 }}
              columnSizes={{ sm: 60, md: 90, lg: 120 }}
            />
          </div>

          <div className="md:w-[49.3%] aspect-video mb-5 relative">
            <Image src={VidronSnap} alt="Vidron Snap" fill />

            <MaskingGrid
              color="#111"
              rowSizes={{ sm: 30, md: 45, lg: 120 }}
              columnSizes={{ sm: 60, md: 90, lg: 120 }}
            />
          </div>

          <div className="md:w-[49.3%] aspect-video mb-5 relative">
            <Image src={VidronTweets} alt="Vidron Tweets" fill />

            <MaskingGrid
              color="#111"
              rowSizes={{ sm: 30, md: 45, lg: 120 }}
              columnSizes={{ sm: 60, md: 90, lg: 120 }}
            />
          </div>

          <div className="md:w-[49.3%] aspect-video mb-5 relative">
            <Image src={VidronChannel} alt="Vidron Channel" fill />

            <MaskingGrid
              color="#111"
              rowSizes={{ sm: 30, md: 45, lg: 120 }}
              columnSizes={{ sm: 60, md: 90, lg: 120 }}
            />
          </div>

          <div className="md:w-[49.3%] aspect-video mb-5 relative">
            <Image src={VidronMetrics} alt="Vidron Metrics" fill />

            <MaskingGrid
              color="#111"
              rowSizes={{ sm: 30, md: 45, lg: 120 }}
              columnSizes={{ sm: 60, md: 90, lg: 120 }}
            />
          </div>

          <div className="md:w-[49.3%] aspect-video mb-5 relative">
            <Image src={VidronSettings} alt="Vidron Settings" fill />

            <MaskingGrid
              color="#111"
              rowSizes={{ sm: 30, md: 45, lg: 120 }}
              columnSizes={{ sm: 60, md: 90, lg: 120 }}
            />
          </div>
        </div>
      </div>
    ),
  },
];

// codebits
// <div className="gap-4">
//   <div className="h-full flex flex-wrap justify-between">
//     <div className="md:w-[49.3%] mb-5 relative">
//       <Image src={CodebitsHero} alt="Codebits Hero" fill />

//       <MaskingGrid
//         color="#111"
//         rowSizes={{ sm: 30, md: 45, lg: 120 }}
//         columnSizes={{ sm: 60, md: 90, lg: 120 }}
//       />
//     </div>

//     <div className="md:w-[49.3%] mb-5 relative">
//       <Image src={CodebitsOverview} alt="CodeBits Overview" fill />

//       <MaskingGrid
//         color="#111"
//         rowSizes={{ sm: 30, md: 45, lg: 120 }}
//         columnSizes={{ sm: 60, md: 90, lg: 120 }}
//       />
//     </div>

//     <div className="md:w-[49.3%] mb-5 relative">
//       <Image src={CodebitsFeatures} alt="Codebits Features" fill />

//       <MaskingGrid
//         color="#111"
//         rowSizes={{ sm: 30, md: 45, lg: 120 }}
//         columnSizes={{ sm: 60, md: 90, lg: 120 }}
//       />
//     </div>

//     <div className="md:w-[49.3%] mb-5 relative">
//       <Image src={CodebitsShowcase} alt="Codebits Showcase" fill />

//       <MaskingGrid
//         color="#111"
//         rowSizes={{ sm: 30, md: 45, lg: 120 }}
//         columnSizes={{ sm: 60, md: 90, lg: 120 }}
//       />
//     </div>

//     <div className="md:w-[49.3%] mb-5 relative">
//       <Image src={CodebitsFooter} alt="Codebits Footer" fill />

//       <MaskingGrid
//         color="#111"
//         rowSizes={{ sm: 30, md: 45, lg: 120 }}
//         columnSizes={{ sm: 60, md: 90, lg: 120 }}
//       />
//     </div>

//     <div className="md:w-[49.3%] mb-5 relative">
//       <Image src={CodebitsHome} alt="Codebits Home" fill />

//       <MaskingGrid
//         color="#111"
//         rowSizes={{ sm: 30, md: 45, lg: 120 }}
//         columnSizes={{ sm: 60, md: 90, lg: 120 }}
//       />
//     </div>

//     <div className="md:w-[49.3%] mb-5 relative">
//       <Image src={CodebitsDropdown} alt="Codebits Dropdown" fill />

//       <MaskingGrid
//         color="#111"
//         rowSizes={{ sm: 30, md: 45, lg: 120 }}
//         columnSizes={{ sm: 60, md: 90, lg: 120 }}
//       />
//     </div>

//     <div className="md:w-[49.3%] mb-5 relative">
//       <Image src={CodebitsSearch} alt="Codebits Search" fill />

//       <MaskingGrid
//         color="#111"
//         rowSizes={{ sm: 30, md: 45, lg: 120 }}
//         columnSizes={{ sm: 60, md: 90, lg: 120 }}
//       />
//     </div>
//   </div>
// </div>
