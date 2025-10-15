import { Card, CardContent } from "@/components/ui/card";
import { SkillBadge } from "@/components/SkillBadge";
import { Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const Resume = () => {
  const skills = {
    fullStack: [
      "JavaScript",
      "ReactJS",
      "Redux",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "TypeScript",
      "Docker",
      "WebSocket",
      "Prisma",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Upstash",
      "Postman",
      "Generative AI",
      "RAG",
      "Python"
    ],
    tools: ["Git", "GitHub", "Canva", "VS Code", "Figma", "Vercel"]
  };

  const projects = [
    {
      title: "Chatroom Application",
      subtitle: "A full stack chatroom app (kinda google meet version only for chatting)",
      description: "This is a full stack project built using ReactJS for frontend and Express, NodeJs, NeonDB as database and Prisma as ORM for backend. Also used SocketIo for implementing two side communication. The first go to version is done. The application is still under development for optimization of performance and adding some features.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "WebSocket", "NeonDB", "Prisma"],
      github: "https://github.com/OlibhiaGhosh/Chatroom",
      demo: "https://www.youtube.com/watch?si=NpFmOMx6qmhoqclL&v=LTbuICvgpNA&feature=youtu.be"
    },
    {
      title: "NotebookLM",
      subtitle: "An AI powered RAG chatbot where you can provide PDF, text, websites and youtube videos as context",
      description: "This is an AI powered RAG chatbot built using Langchain that takes pdf, text, websites, youtube videos and creates embeddings using OpenAI's embedding models. Open Source LLMs from Nebius are used for text generation. Also QdrantDB is used as the vector store.",
      tech: ["Next.js", "Langchain", "QdrantDB", "OpenAI", "Nebius", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/OlibhiaGhosh/NotebookLM",
      demo: "https://www.youtube.com/watch?v=-jfrHNcel-M"
    },
    {
      title: "AI Project Guide",
      subtitle: "An AI integrated application built using NEBIUS and Next.js",
      description: "This is an AI integration based project built using Open Source LLMs from Nebius & Next.js deployed on Vercel. Also Rate Limiting is Implemented using Upstash.",
      tech: ["Next.js", "Upstash", "NEBIUS", "Tailwind CSS"],
      github: "https://github.com/OlibhiaGhosh/ai-project-guide"
    },
    {
      title: "Swag Store",
      subtitle: "An e-commerce application built using React and Redux (frontend application)",
      description: "This is solely a frontend project built using React and Redux deployed on Vercel.",
      tech: ["React", "TypeScript", "Redux", "Tailwind CSS"],
      github: "https://github.com/OlibhiaGhosh/Product-store",
      demo: "https://swagstore.vercel.app/"
    },
    {
      title: "Slack Bot",
      subtitle: "A Slack bot using Slack bolt API and Node.js",
      description: "This project showcases the implementation of slack bolt API to create a Slack Bot in NodeJs.",
      tech: ["Node.js", "Slack API", "JavaScript"],
      github: "https://github.com/OlibhiaGhosh/Slack-bot"
    },
    {
      title: "Google Drive API Integration",
      subtitle: "An application using Google Drive API for file uploading",
      description: "This project showcases the implementation of Google Drive API to ease the uploading of files on google drive.",
      tech: ["Node.js", "Google Drive API", "JavaScript"],
      github: "https://github.com/OlibhiaGhosh/Google-Drive-API-App"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl ">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="mb-3 text-5xl font-bold tracking-tight text-foreground">Olibhia Ghosh</h1>
          <p className="mb-4 text-lg text-muted-foreground">
            A Full Stack developer, freelance technical writer and open source contributor
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              <a href="mailto:olibhia0712@gmail.com" className="hover:text-foreground transition-colors">
                olibhia0712@gmail.com
              </a>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span>Link Road, Arambagh, Hooghly, West Bengal</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href="https://github.com/OlibhiaGhosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/olibhiaghosh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/OlibhiaGhosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </header>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Experience</h2>
          <Card className="bg-resume_card">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Pieces For Developers</h3>
                  <p className="text-sm text-muted-foreground">Freelance Technical Writer</p>
                </div>
                <span className="text-sm text-muted-foreground">May 2024 - June 2024</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Wrote a technical article dealing with how one can make the best use of the product (Pieces For Developers) to increase their productivity -{" "}
                <a
                  href="https://dev.to/olibhiaghosh/improving-developer-productivity-with-pieces-if3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline inline-flex items-center gap-1"
                >
                  Blog Link <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Skills</h2>
          <Card className="bg-resume_card">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="mb-3 text-sm font-semibold text-foreground">Full-Stack Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.fullStack.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold text-foreground">Additional Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <SkillBadge key={tool}>{tool}</SkillBadge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-resume_card">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{project.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">{project.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <SkillBadge key={tech}>{tech}</SkillBadge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:underline inline-flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:underline inline-flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Blogs */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Blogs</h2>
          <Card className="bg-resume_card">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div>
                  <a
                    href="https://dev.to/olibhiaghosh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline inline-flex items-center gap-1"
                  >
                    Checkout my blogs on dev.to (with 17K+ views) <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://hashnode.com/@OlibhiaGhosh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline inline-flex items-center gap-1"
                  >
                    Checkout my blogs on Hashnode (with 3K+ views) <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Education</h2>
          <div className="space-y-4">
            <Card className="bg-resume_card">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Maulana Abul Kalam Azad University Of Technology, Haringhata
                    </h3>
                    <p className="text-sm text-muted-foreground">Bachelor of Technology in Computer Science and Engineering</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Sep 2023 - Jul 2027</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently in 2nd year. (1st sem - 9.78 SGPA, 2nd sem - 9.81 SGPA, 3rd sem - 9.65 SGPA)
                </p>
              </CardContent>
            </Card>

            <Card className="bg-resume_card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Arambagh Vivekananda Academy, Arambagh, West Bengal
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Secondary and Senior Secondary Board Examination</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-foreground font-semibold">Examination</th>
                        <th className="text-left py-2 text-foreground font-semibold">Percentage</th>
                        <th className="text-left py-2 text-foreground font-semibold">Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-2 text-muted-foreground">Secondary Board Examination (10th)</td>
                        <td className="py-2 text-muted-foreground">98%</td>
                        <td className="py-2 text-muted-foreground">2020-21</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-muted-foreground">Higher Secondary Board Examination (12th)</td>
                        <td className="py-2 text-muted-foreground">95.8%</td>
                        <td className="py-2 text-muted-foreground">2022-23</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">Languages</h2>
          <Card className="bg-resume_card">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                <SkillBadge>English</SkillBadge>
                <SkillBadge>Hindi</SkillBadge>
                <SkillBadge>Bengali</SkillBadge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Resume;
