import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="tech-gradient">About Me</span>
            {/* <div className="w-24 h-1 bg-primary mx-auto mb-6"></div> */}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Hello!
                </h3>
                <p className="text-white-600 leading-relaxed mb-4">
                  I am a passionate{" "}
                  <span className="text-primary font-semibold">
                    {" "}
                    Full-Stack Developer{" "}
                  </span>{" "}
                  with{" "}
                  <span className="tech-gradient">
                    expertise in JavaScript
                  </span>{" "}
                  and modern libraries/frameworks such as{" "}
                  <span className="text-primary font-semibold">
                    React.js (Advanced), Vue.js, and jQuery for building dynamic
                  </span>{" "}
                  and responsive user interfaces. On the backend, I have
                  <span className="tech-gradient">
                    hands-on experience
                  </span>{" "}
                  with <span className="tech-gradient">PHP and Laravel</span>,
                  along with a strong foundation in
                  <span className="text-primary font-semibold">MySQL</span> for
                  efficient database
                  <span className="tech-gradient"> design and management</span>.
                </p>
                <p className="text-white-600 leading-relaxed mb-4">
                  As an{" "}
                  <span className="text-primary font-semibold">
                    {" "}
                    IsDB Scholar{" "}
                  </span>{" "}
                  , I specialize in developing intuitive user interfaces,
                  integrating{" "}
                  <span className="text-primary font-semibold">
                    {" "}
                    backend APIs{" "}
                  </span>
                  , and designing scalable and optimized database structures
                  that support complex business workflows.
                </p>
                <p className="text-white-600 leading-relaxed">
                  My role encompasses full-cycle development — from database
                  architecture to user interface{" "}
                  <span className="text-primary font-semibold">
                    {" "}
                    design and API{" "}
                  </span>{" "}
                  integration — ensuring a seamless user experience and robust
                  performance.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50 p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </Card>

            <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50 p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </Card>

            <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50 p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </Card>

            <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/50 p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
