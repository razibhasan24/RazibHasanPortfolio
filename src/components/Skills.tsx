import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: "🌐", level: 95 },
    { name: "CSS", icon: "🎨", level: 90 },
    { name: "Bootstrap", icon: "🅱️", level: 85 },
    { name: "Tailwind CSS", icon: "💨", level: 60 },
    { name: "JavaScript", icon: "⚡", level: 75 },
    { name: "TypeScript", icon: "📘", level: 60 },
    { name: "jQuery", icon: "💡", level: 80 },
    { name: "React", icon: "⚛️", level: 90 },
    { name: "npm", icon: "📦", level: 90 },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "🟢", level: 60 },
    { name: "MySQL", icon: "🛢️", level: 90 },
    { name: "Fetch API", icon: "🌐", level: 95 },
    { name: "REST API", icon: "🔗", level: 80 },
    { name: "phpMyAdmin", icon: "🧰", level: 85 },
    { name: "XAMPP", icon: "🖥️", level: 95 },
    { name: "Composer", icon: "📦", level: 92 },
    { name: "Laravel", icon: "🅻", level: 95 },
    { name: "Vue", icon: "🟩", level: 75 },
  ];

  const SkillCard = ({ skill }: { skill: (typeof frontendSkills)[0] }) => (
    <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50 p-6 text-center group hover:scale-105 transition-all duration-300">
      <CardContent className="p-0">
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>
        <h3 className="font-semibold mb-3 text-foreground">{skill.name}</h3>
        <div className="w-full bg-secondary rounded-full h-2 mb-2">
          <div
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="tech-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-white-600 max-w-2xl mx-auto">
            I have a{" "}
            <span className="text-primary font-semibold">
              {" "}
              strong foundation in full-stack{" "}
            </span>{" "}
            development and system administration, equipped with expertise in
            modern{" "}
            <span className="text-primary font-semibold">
              {" "}
              programming languages and frameworks{" "}
            </span>
            . On the <span className="tech-gradient">front end</span>, I excel
            in{" "}
            <span className="text-primary font-semibold">
              {" "}
              JavaScript, React, and Next.js{" "}
            </span>
            , allowing me to create responsive and engaging user interfaces.{" "}
            <span className="text-primary font-semibold">
              {" "}
              My backend{" "}
            </span>{" "}
            specialization lies in{" "}
            <span className="text-primary font-semibold"> LARAVEL </span>, where
            I have extensive experience designing RESTful APIs, managing
            databases, and structuring relational tables efficiently. Proficient
            in SQL, I ensure optimized{" "}
            <span className="text-primary font-semibold"> data handling </span>{" "}
            , and with Git, I maintain smooth version control for collaborative
            projects. Together, these skills enable me to deliver complete,
            scalable, and high-quality web applications that{" "}
            <span className="text-primary font-semibold"> meet client </span>{" "}
            needs.
          </p>
        </div>

        <div className="space-y-12">
          {/* Frontend Development */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="text-primary">Frontend</span> Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {frontendSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <SkillCard skill={skill} />
                </div>
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="text-primary">Backend</span> Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {backendSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <SkillCard skill={skill} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
