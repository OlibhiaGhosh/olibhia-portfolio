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
  avatarUrl: "/me.png",
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
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
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
      ],
      image: "/project-1.png",
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
      description: " An AI integrated application built using NEBIUS, NextJs and Upstash for Rate limiting",
      technologies: [
        "Next.js",
        "Upstash",
        "NEBIUS",
        "TailwindCSS",
      ],
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
      video:"",
    },
    {
      title: "Slack Bot",
      href: "https://github.com/OlibhiaGhosh/Slack-bot",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: "A Slack Bot built with Node.js and the Slack Bolt API to automate tasks and enhance team communication.",
      technologies: [
        "Node.js",
        "Slack API",
        "JavaScript",
        "GitHub",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/OlibhiaGhosh/Slack-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-4.png",
      video:"",
    },
    {
      title: "Google Drive Integration",
      href: "https://github.com/OlibhiaGhosh/Google-Drive-API-App",
      dates: "April 2023 - September 2023",
      active: true,
      description: 
        "Developed a Project using Google drive API to store and retrieve files.",
      technologies: [
        "Node.js",
        "Google Drive API",
        "JavaScript",
        "GitHub",
      ],
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
  hackathons: [
  ],
} as const;
