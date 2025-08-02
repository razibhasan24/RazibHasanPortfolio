import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, MapPin, Mail, Phone, Calendar } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Junior Web Developer.",
      company: "Intellect Software Limited",
      period: "2024 - Present.",
      description:
        "Developed and maintained scalable web applications on PHP language using Laravel, MySQL, and Vue.js. Built responsive front-end interfaces with HTML, CSS, Bootstrap, Tailwind, and JavaScript. Successfully contributed to projects like Money Exchange Management, Manufacture Management, and POS Software, collaborating with cross-functional teams to deliver new features.",
    },
  ];

  const education = [
    {
      degree:
        "Web-Application Development with Laravel React Vuejs and WordPress (WDPF): Islamic Development Bank Bangladesh-Islamic Solidarity Education Wakf (IDB-BISEW) IT Scholarship Project.",
      institution: "IsDB-BISHEW",
      period: "Oct.-2025",
      description: "Focused on software developing and web technologies.",
    },
    {
      degree: "Master of Business Administration (MBA).",
      institution: "National University.",
      period: "2020 - 2021",
      description:
        "MBA in Management focuses on leadership, strategic planning, organizational behavior, decision-making, operations, and effective resource management for business growth.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tech-gradient">Resume</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-white-600 max-w-2xl mx-auto mb-8">
            Motivated{" "}
            <span className="text-primary font-semibold"> full-stack </span> Web
            Developer with{" "}
            <span className="text-primary font-semibold">
              1 year of experience at Intellect Software Limited{" "}
            </span>
            . Proficient in building responsive web applications using modern
            technologies. Strong team player with proven project leadership and
            deadline management skills. Passionate about leveraging technology
            to{" "}
            <span className="text-primary font-semibold">
              {" "}
              solve real-world problems{" "}
            </span>{" "}
            and create positive social impact.
          </p>
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm">razibhasan2403@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm">+8801912549957</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Dhanmondi, Dhaka-1209</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 mt-6">
              <CardHeader>
                <CardTitle className="text-xl">Skills Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-white-400 font-size: var(--text-xs);">
                  {[
                    "HTML",
                    "CSS",
                    "Tailwind CSS",
                    "Bootstrap",
                    "JavaScript",
                    "React",
                    "TypeScript",
                    "Node.js",
                    "MySql",
                    "PHP",
                    "Laravel",
                    "Vue",
                    "Git",
                    "npm",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm">{skill}</span>
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-border/50"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <p className="text-primary font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-border/50"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-primary font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
