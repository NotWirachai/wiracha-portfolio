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
  cplus,
  csharp,
  netcore,
  mcneto,
  sentiment,
  webmcnito,
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
    path: "https://crystal-studio.itch.io/zombie-wave",
  },
  {
    title: "3D Model",
    icon: backend,
    path: "https://www.instagram.com/cs_crystalstudio/",
  },
  {
    title: "Cast Game",
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
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "cplus",
    icon: cplus,
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
    title: "Next.js Developer",
    company_name: "TCRB",
    icon: tcrb,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: ["Thai Credit Online Banking information management website was created using Next.js"],
  },
  {
    title: "Next.js Developer",
    company_name: "Hino",
    icon: hino,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Mar 2022",
    points: ["This website, I'm responsible for creating a driving report on the website that can be exported as a pdf."],
  },
  {
    title: "Gatsby.js Developer",
    company_name: "Cpac UMO",
    icon: umo,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Otc 2022",
    points: ["A vehicle management website was created using Gatsby."],
  },
  {
    title: "C# .net core 7 Developer",
    company_name: "Pirate of the Horizon",
    icon: netcore,
    iconBg: "#E6DEDD",
    date: "Otc 2022 - July 2024",
    points: ["Pirate of the Horizon is an MMORTS(Massive Multiplayer Online Real-Time Strategy) I have been commissioned to do the backend with .net core 7. "],
  },
  {
    title: "Next.js, React.js, Node.js Developer",
    company_name: "Mcneto",
    icon: mcneto,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: ["Is a tool that helps online entrepreneurs to easily create and manage sales pages or single-page websites to increase credibility and automatically close sales."],
  },
  {
    title: "React.js Developer",
    company_name: "Datista",
    icon: sentiment,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: ["Social Dashboard - monitor and analyze data from social media platforms."],
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
  {
    name: "webmcneto",
    points: "Mcneto",
    image: webmcnito,
    icon: mcneto,
  },
];

export { services, technologies, experiences, projects };
