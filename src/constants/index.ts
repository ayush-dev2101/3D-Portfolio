import Code from "../assets/images/code.svg"
import Concepts from "../assets/images/concepts.svg"
import Ideas from "../assets/images/ideas.svg"
import Design from "../assets/images/designs.svg"


//Feature Cards
import seo from "../assets/images/seo.svg";
import chat from "../assets/images/chat.svg";
import time from "../assets/images/time.svg";


//Experience Company's 
import Exp1 from "../assets/images/1Stop_logo.webp";
import Exp2 from "../assets/images/stpi-logo.svg";
  

//Experience Company's Logo
import stopLogo from "../assets/images/stop-ai.svg" 
import stpiLogo from "../assets/images/stpi-logo2.svg"

//3d TechStack Models
import reactModel from "../assets/models/react_logo-transformed.glb";
import pythonModel from "../assets/models/python-transformed.glb";
import backendModel from "../assets/models/node-transformed.glb";
import interactiveDevModel from "../assets/models/three.js-transformed.glb";
import gitModel from "../assets/models/git-svg-transformed.glb";

export type NavLink = {
  name: string;
  link: string;
};

export type Word = {
  text: string;
  imgPath: string;
};

export type CounterItem = {
  value: number;
  suffix: string;
  label: string;
};

export type LogoIcon = {
  name: string
  imgPath: string;
};

export type Ability = {
  imgPath: string;
  title: string;
  desc: string;
};

export type TechStackImg = {
  name: string;
  imgPath: string;
};

export type TechStackIcon = {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
};

export type ExpCard = {
  review: string;
  imgPath: string;
  logoPath: string,
  title: string;
  date: string;
  responsibilities: string[];
};

export type ExpLogo = {
  name: string;
  imgPath: string;
};

export type Testimonial = {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
};

export type SocialImg = {
  name: string;
  imgPath: string;
};

export const navLinks: NavLink[] = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

export const words: Word[] = [
  { text: "Code", imgPath: Code },
  { text: "Concepts", imgPath: Concepts },
  { text: "Ideas", imgPath: Ideas },
  { text: "Designs", imgPath: Design },
  { text: "Code", imgPath: Code },
  { text: "Concepts", imgPath: Concepts },
  { text: "Ideas", imgPath: Ideas },
  { text: "Designs", imgPath: Design },
];

export const counterItems: CounterItem[] = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 1, suffix: "+", label: "Satisfied Clients" },
  { value: 9, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];



export const abilities: Ability[] = [
  {
    imgPath: seo,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: chat,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: time,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

//Image for 

export const techStackImgs: TechStackImg[] = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

//3d Model for Tech Stack

export const techStackIcons: TechStackIcon[] = [
  {
    name: "React",
    modelPath: reactModel,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: pythonModel,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend",
    modelPath: backendModel,
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive",
    modelPath: interactiveDevModel,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project",
    modelPath: gitModel,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export const expCards: ExpCard[] = [ 
  {
    review: "Ayush's brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: Exp1,
    logoPath: stopLogo,
    title: "Backend Developer",
    date: "July 2025- August 2025",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Ayush's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: Exp2,
    logoPath: stpiLogo,
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
];

export const expLogos: ExpLogo[] = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

export const testimonials: Testimonial[] = [
  // paste your existing testimonial objects here unchanged
];

export const socialImgs: SocialImg[] = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];