import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Olibhia Ghosh",
  initials: "OG",
  url: "https://dev.to/olibhiaghosh",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description:
    "Full Stack Developer and Technical Writer. I love building projects and making open source contributions.",
  summary:
    "I started my journey as a developer in 2023. I have a passion for writing and sharing my knowledge with the community. I also love building projects and contributing to open source. I'm currently looking for new opportunities.",
  avatarUrl: "./myself.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "Postgres",
    "NeonDB",
    "Prisma",
    "Postman",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Websockets",
    "Docker",
    "Git",
    "Java",
    "C",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume", icon: Icons.resume, label: "Resume" },
    { href: "https://dev.to/olibhiaghosh", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "olibhia0712@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/OlibhiaGhosh",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/olibhiaghosh/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/OlibhiaGhosh",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "olibhia0712@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Pieces For Developers",
      href: "https://pieces.app/",
      badges: [],
      location: "Remote",
      title: "Freelance Technical Writer",
      logoUrl: "/pieces.png",
      start: "May 2024",
      end: "June 2024",
      description:
        "Wrote an freelance article on how Pieces for Developers can be used to increase developers productivity.",
    },
  ],
  education: [
    {
      school: "Makaut,WB",
      href: "https://buildspace.so",
      degree: "Bachelor of Technology in CSE",
      logoUrl: "/makaut.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Arambagh Vivekanada Acadmey",
      href: "https://uwaterloo.ca",
      degree: "Secondary and Higher Secondary Education",
      logoUrl: "/school.png",
      start: "2020-21",
      end: "2022-23",
    },
  ],
  projects: [
    {
      title: "Chatroom Application",
      href: "https://github.com/OlibhiaGhosh/Chatroom",
      dates: "July 2025",
      active: true,
      description:
        "An full stack chatroom app (kinda google meet version only for chatting)",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Node.js",
        "Express",
        "Websockets",
        "NeonDB",
        "Prisma",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/OlibhiaGhosh/Chatroom",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://youtu.be/LTbuICvgpNA?si=D4KW01_VRrgIC1Co",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-1.png",
      video: "",
    },
    {
      title: "NotebookLM",
      href: "https://github.com/OlibhiaGhosh/NotebookLM",
      dates: "Sep 2025",
      active: true,
      description:
        "A Next.js application that allows users to chat with a large language model (LLM) with context from various sources, including uploaded files, websites, text, and YouTube videos.",
      technologies: [
        "Next.js",
        "Langchain",
        "QdrantDB",
        "OpenAI",
        "Nebius",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/OlibhiaGhosh/NotebookLM",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://youtu.be/-jfrHNcel-M?si=D8DUpZqk-z_j2Jm1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-6.jpg",
      video: "",
    },
    {
      title: "Swag Store",
      href: "https://swagstore.vercel.app/",
      dates: "April 2025 to May 2025",
      active: true,
      description: "Developed a Swag Store using React and Redux.",
      technologies: ["React", "Typescript", "Redux", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://swagstore.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/OlibhiaGhosh/Product-store",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-2.png",
      video: "",
    },
    {
      title: "AI Project Guide",
      href: "https://ai-project-guide-pv6fmz6je-olibhia-ghoshs-projects.vercel.app/",
      dates: "July 2025",
      active: true,
      description:
        " An AI integrated application built using NEBIUS, NextJs and Upstash for Rate limiting",
      technologies: ["Next.js", "Upstash", "NEBIUS", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://ai-project-guide-pv6fmz6je-olibhia-ghoshs-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/OlibhiaGhosh/ai-project-guide",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-3.png",
      video: "",
    },
    {
      title: "Slack Bot",
      href: "https://github.com/OlibhiaGhosh/Slack-bot",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A Slack Bot built with Node.js and the Slack Bolt API to automate tasks and enhance team communication.",
      technologies: ["Node.js", "Slack API", "JavaScript", "GitHub"],
      links: [
        {
          type: "Source",
          href: "https://github.com/OlibhiaGhosh/Slack-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-4.png",
      video: "",
    },
    {
      title: "Google Drive Integration",
      href: "https://github.com/OlibhiaGhosh/Google-Drive-API-App",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed a Project using Google drive API to store and retrieve files.",
      technologies: ["Node.js", "Google Drive API", "JavaScript", "GitHub"],
      links: [
        {
          type: "Source",
          href: "https://github.com/OlibhiaGhosh/Google-Drive-API-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-5.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
