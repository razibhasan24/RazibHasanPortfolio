import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import pos from "../assets/pos Project.png";
import Laravel from "../assets/Laravel.png";
import Vue from "../assets/Laravel_vue.png";

const Works = () => {
  const works = [
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern animations",
      image: "/lovable-uploads/fcb4fb7d-fe51-40cb-805a-b9b8ac90ff95.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
    },

    {
      title: "Retail Pos software",
      description:
        "Full-stack shop management solution with Core_PHP,JavaScript,MySql",
      image: pos,
      technologies: ["Core_PHP", "JavaScript", "MySql"],
      liveLink: "http://razib.intelsofts.com/projects/core/",
    },

    {
      title: "Money Exchange Software",
      description: "money transfer and  with real-time updates",
      image: Laravel,
      technologies: ["laravel framework", "MySql", "JavaScript"],
      liveLink:
        "http://razib.intelsofts.com/projects/laravel/update_mex/public/login",
      githubLink:
        "https://github.com/razibhasan24/MoneyExchange_Soft_Latest1.0",
    },
    {
      title: "Laravel and Vue",
      description: "laravel backend and vue front end",
      image: Vue,
      technologies: ["Vue.js", "Fetch API", "TypeScripts.js"],
      liveLink: "http://razib.intelsofts.com/projects/laravel-vue/",
      githubLink: "https://github.com/razibhasan24/Laravel_Vue",
    },
    {
      title: "Weather Dashboard",
      description: "Weather application with location-based forecasts",
      image: "/lovable-uploads/fcb4fb7d-fe51-40cb-805a-b9b8ac90ff95.png",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Weather application with location-based forecasts",
      image: "/lovable-uploads/fcb4fb7d-fe51-40cb-805a-b9b8ac90ff95.png",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tech-gradient">My Works</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-white-600 max-w-2xl mx-auto">
            As a web developer, I specialize in creating responsive and dynamic
            websites using modern technologies like{" "}
            <span className="text-primary font-semibold">
              {" "}
              PHP, React, Laravel, and MySQL{" "}
            </span>
            . My work includes{" "}
            <span className="text-primary font-semibold">
              {" "}
              full-stack{" "}
            </span>{" "}
            applications,
            <span className="text-primary font-semibold">
              {" "}
              API integrations,{" "}
            </span>{" "}
            and custom dashboard solutions focused on performance, usability,
            and clean design — helping businesses turn ideas into scalable
            digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{work.title}</CardTitle>
                <CardDescription>{work.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <a href={work.liveLink}> Live Demo</a>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    <a href={work.githubLink}>Code</a>
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

export default Works;
