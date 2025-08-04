import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left slide-in-left">
            <div className="mb-6">
              <h2 className="text-lg text-primary mb-2">RAZIB HASAN</h2>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="tech-gradient">Web Developer</span>
              </h1>
              <h3 className="text-2x lg:text-3xl  text-green-400 mb-6">
                Full-Stack Developer
              </h3>
            </div>
            <p className="text-lg text-white-600 mb-8 max-w-2xl">
              I <span className="tech-gradient">love to work</span> with web
              development. It includes everything from designing user interfaces{" "}
              <span className="tech-gradient">
                to building backend systems and managing databases
              </span>
              . Web development is not just about writing code — it's about
              turning ideas into real, interactive websites that help people and
              businesses. I work with both{" "}
              <span className="tech-gradient">front-end</span> tools like{" "}
              <span className="tech-gradient">
                HTML, CSS, JavaScript, and React,
              </span>
              and <span className="tech-gradient">back-end</span> technologies{" "}
              <span className="tech-gradient">like PHP,Laravel, and MySQL</span>
              . As a full-stack developer,{" "}
              <span className="tech-gradient">
                I enjoy solving problems and creating smooth, fast, and useful
                web applications
              </span>
              . In today’s digital world, a good website is essential — and I’m
              passionate about building them with care and purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="tech" size="lg" className="group">
                <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                <a href="/public/Razib Hasan CV.pdf"> Download CV</a>
              </Button>
              <Button variant="tech" size="lg">
                Let's Talk
              </Button>
            </div>

            {/* Social Links */}

            <div className="flex gap-4">
              <a
                href="https://github.com/RazibHasan24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white hover:text-blue-500 w-6 h-6" />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white hover:text-blue-500 w-6 h-6" />
              </a>

              <a href="mailto:razibhasan2403@gmail.com">
                <FaEnvelope className="text-white hover:text-blue-500 w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end fade-in-up">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 floating-animation">
                <img
                  src="/lovable-uploads/76dba6d2-be7e-43dd-b366-539e84ca6b38.png"
                  alt="Developer Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
