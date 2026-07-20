import type { IconType } from "react-icons";
import {
  SiPhp,
  SiLaravel,
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit,
  SiMysql,
} from "react-icons/si";

export type Technology = {
  name: string;
  Icon: IconType;
  color: string;
};

export const technologies: Technology[] = [
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", Icon: SiPython, color: "#4B8BBE" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

export const profile = {
  name: "Dev Favour",
  title: "Software Engineer",
  tagline:
    "Frontend-leaning software engineer building with React and Laravel, and comfortable across the stack down to the database.",
  location: "Akwa Ibom State, Nigeria",
  email: "Favourbassey999@gmail.com",
  phone: "09079745157",
  github: "https://github.com/Favour919",
  linkedin: "https://www.linkedin.com/in/favour-bassey301119242",
};

export const roles = [
  "Frontend Engineer",
  "React Developer",
  "Full-Stack Engineer",
  "Laravel Developer",
];

export const skillGroups = [
  {
    label: "Languages & Frameworks",
    items: ["PHP", "Laravel", "Python", "JavaScript", "Node.js", "React", "TypeScript"],
  },
  {
    label: "Web & Styling",
    items: ["HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Tools & Data",
    items: ["Git", "MySQL"],
  },
];

export type JourneyItem = {
  id: string;
  kind: "education" | "work";
  title: string;
  org: string;
  period: string;
  location?: string;
  points?: string[];
};

// Ordered chronologically by start date
export const journey: JourneyItem[] = [
  {
    id: "uniuyo",
    kind: "education",
    title: "B.Sc. Computer Science",
    org: "University of Uyo",
    period: "Sep 2018 — Jun 2024",
    location: "Akwa Ibom, Nigeria",
  },
  {
    id: "taquatech",
    kind: "work",
    title: "Intern Software Developer",
    org: "Taquatech Limited",
    period: "Nov 2021 — Nov 2022",
    location: "Akwa Ibom, Nigeria",
    points: [
      "Collaborated with front-end developers to integrate user-facing elements with server-side logic",
      "Contributed to code reviews and team discussions, sharpening core programming skills",
    ],
  },
  {
    id: "starthub",
    kind: "work",
    title: "Intern Software Developer",
    org: "Start Innovation Hub",
    period: "Jan 2023 — Jul 2024",
    points: [
      "Took part in weekly coding challenges and collaborative build projects",
      "Worked alongside other developers in a team environment to ship software",
    ],
  },
  {
    id: "gleams",
    kind: "work",
    title: "Frontend Engineer",
    org: "Gleams Software Solution",
    period: "2024 — Present",
    location: "Uyo, Akwa Ibom",
  },
];

export type Project = {
  name: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Messaging Platform",
    role: "Backend",
    period: "Apr 2024 — Present",
    description:
      "Backend for a messaging platform, handling the server-side logic that powers real-time conversations between users.",
    stack: ["Node.js", "JavaScript", "MySQL"],
  },
  {
    name: "Lunch App",
    role: "API Developer",
    period: "Jan 2024",
    description:
      "Collaborated with another developer to build the API layer powering a mobile lunch-ordering app.",
    stack: ["Node.js", "REST API", "MySQL"],
  },
];

export const certificates = [
  "ALX Software Engineering",
  "Smarthivetech Solutions",
  "Start Innovation Hub",
];
