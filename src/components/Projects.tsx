import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Clock } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "What does it take to become a web developer?",
      category: "Web Development",
      description:
        "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet. It involves various specialized fields, each with its own set of skills and techniques.",
      author: "Sinan",
      date: "16.05.2023",
      readTime: "3 Min",
      image: "/lovable-uploads/fcb4fb7d-fe51-40cb-805a-b9b8ac90ff95.png",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Frontend Development Journey",
      category: "Frontend",
      description:
        "Frontend development focuses on the user-facing aspects of a website. It involves creating the visual elements that users interact with directly. Frontend developers use a combination of languages such as HTML, CSS, and JavaScript.",
      author: "Sinan",
      date: "10.05.2023",
      readTime: "5 Min",
      image: "/lovable-uploads/fcb4fb7d-fe51-40cb-805a-b9b8ac90ff95.png",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend Development Essentials",
      category: "Backend",
      description:
        "Backend development involves the behind-the-scenes functionality of a website. It includes server-side scripting, databases, and the logic that operates the frontend works smoothly.",
      author: "Sinan",
      date: "05.05.2023",
      readTime: "4 Min",
      image: "/lovable-uploads/fcb4fb7d-fe51-40cb-805a-b9b8ac90ff95.png",
      tags: ["Node.js", "MongoDB", "Express"],
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="tech-gradient">Latest Blogs</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-white-600 max-w-2xl mx-auto mb-8">
            I write blogs on web development, sharing insights on front-end and
            back-end technologies like{" "}
            <span className="text-primary font-semibold">
              PHP, React, Laravel, and API integration
            </span>
            . My content focuses on real-world solutions, clean code practices,
            and developer tips. These blogs aim to help aspiring developers
            learn efficiently and stay updated with modern web trends and tools.
          </p>
          <Button variant="tech" className="mb-8">
            Subscribe My Blogs
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="card-glow bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="text-primary">{project.category}</span>
                  <span>Text: {project.author}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Read: {project.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read More
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
