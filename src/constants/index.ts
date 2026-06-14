import Code from "../assets/images/code.svg"
import Concepts from "../assets/images/concepts.svg"
import Ideas from "../assets/images/ideas.svg"
import Design from "../assets/images/designs.svg"

//Company's Logo
import Logo1 from "../assets/images/logos/company-logo-1.png";
import Logo2 from "../assets/images/logos/company-logo-2.png";
import Logo3 from "../assets/images/logos/company-logo-3.png";
import Logo4 from "../assets/images/logos/company-logo-4.png";
import Logo5 from "../assets/images/logos/company-logo-5.png";
import Logo6 from "../assets/images/logos/company-logo-6.png";
import Logo7 from "../assets/images/logos/company-logo-7.png";
import Logo8 from "../assets/images/logos/company-logo-8.png";
import Logo9 from "../assets/images/logos/company-logo-9.png";
import Logo10 from "../assets/images/logos/company-logo-10.png";
import Logo11 from "../assets/images/logos/company-logo-11.png";


type NavLink = {
  name: string;
  link: string;
};

type Word = {
  text: string;
  imgPath: string;
};

type CounterItem = {
  value: number;
  suffix: string;
  label: string;
};

type LogoIcon = {
  name: string
  imgPath: string;
};

type Ability = {
  imgPath: string;
  title: string;
  desc: string;
};

type TechStackImg = {
  name: string;
  imgPath: string;
};

type TechStackIcon = {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
};

type ExpCard = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};

type ExpLogo = {
  name: string;
  imgPath: string;
};

type Testimonial = {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
};

type SocialImg = {
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

export const logoIconsList: LogoIcon[] = [
  { name: "Docker",
    imgPath: Logo1 },
  { name: "Adidas",
    imgPath: Logo2 },
  { name: "Kubernetes",
    imgPath: Logo3 },
  { name: "TCS",
    imgPath: Logo4 },

  { name:"Infosys",imgPath: Logo5 },
  { name:"HCL",imgPath: Logo6 },
  { name:"ChatGPT",imgPath: Logo7 },
  { name: "Claude",
    imgPath: Logo8 },
  { name:"Google",imgPath: Logo9 },
  { name:"Microsoft",imgPath: Logo10 },
  { name:"EY",imgPath: Logo11 },
];

export const abilities: Ability[] = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

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

export const techStackIcons: TechStackIcon[] = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export const expCards: ExpCard[] = [
  // paste your existing objects here unchanged
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