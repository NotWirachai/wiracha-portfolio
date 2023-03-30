import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  acfslogo,
  hino,
  tcrb,
  umo,
  webtcrb,
  webcpac,
  webhino,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    path: "projects",
  },
  {
    title: "Game Developer",
    icon: mobile,
    path: "https://play.google.com/store/apps/developer?id=Crystal+Game",
  },
  {
    title: "3D Model",
    icon: backend,
    path: "https://www.instagram.com/cs_crystalstudio/",
  },
  {
    title: "Content Creator",
    icon: creator,
    path: "https://www.youtube.com/@NottyStory/",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
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
    title: "React.js Developer",
    company_name: "ACFS",
    icon: acfslogo,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: ["The laboratory registration website of National Bureau of Agricultural Commodity and Food Standards was created using React."],
  },
  {
    title: "React Native Developer",
    company_name: "TCRB",
    icon: tcrb,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: ["Thai Credit Online Banking information management website was created using Next.js"],
  },
  {
    title: "Web Developer",
    company_name: "Hino",
    icon: hino,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: ["This website, I'm responsible for creating a driving report on the website that can be exported as a pdf."],
  },
  {
    title: "Full stack Developer",
    company_name: "Cpac UMO",
    icon: umo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: ["A vehicle management website was created using Gatsby."],
  },
];

const projects = [
  {
    name: "webtcrb",
    points: "TCRBank",
    image: webtcrb,
    icon: tcrb,
  },
  {
    name: "webcpac",
    points: "Cpac UMO",
    image: webcpac,
    icon: umo,
  },
  {
    name: "webhino",
    points: "HINO",
    image: webhino,
    icon: hino,
  },
];

export { services, technologies, experiences, projects };
