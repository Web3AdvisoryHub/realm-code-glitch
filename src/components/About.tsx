
import React from 'react';
import { Code, Globe, Shield } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-cyberpunk-neon/50 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-blue flex items-center justify-center mb-4 group-hover:animate-pulse-neon">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gradient">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 relative digital-noise">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Codex School</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A revolutionary Web3 learning platform where coding mastery and digital exploration converge. Build your skills, customize your digital identity, and unlock new realms as you progress.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutCard 
            icon={Code}
            title="Learn by Doing"
            description="Our immersive challenges put your coding skills to the test in real-world scenarios, providing hands-on experience that traditional tutorials can't match."
          />
          <AboutCard 
            icon={Globe}
            title="Web3 Integration"
            description="Earn tokens, collect NFT badges, and build your on-chain reputation as you complete challenges and contribute to the community."
          />
          <AboutCard 
            icon={Shield}
            title="Skill Verification"
            description="Your achievements are verifiable on-chain, creating a trustless portfolio that showcases your abilities to potential employers."
          />
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-white">Progress Through The Digital Frontier</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue mb-6"></div>
            <p className="text-white/70 mb-4">
              In Codex School, your journey is visualized through realm progression. Each realm represents a set of programming skills and concepts, from the fundamentals of coding logic to advanced blockchain development.
            </p>
            <p className="text-white/70 mb-6">
              As you complete challenges, you'll earn access to new realms, each with unique aesthetics, challenges, and rewards. Your avatar will evolve alongside your skills, reflecting your growth as a developer.
            </p>
            <ul className="space-y-2">
              {["Customizable learning paths", "Real-time progress tracking", "Community collaboration", "Skill-based matchmaking"].map((item, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <span className="w-2 h-2 bg-cyberpunk-purple rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="h-full w-full relative rounded-lg overflow-hidden neon-border">
              <div className="absolute inset-0 glass-morphism"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="text-cyberpunk-neon text-lg mb-2">Educational Metaverse</div>
                  <p className="text-white/70">Visualize concepts in our immersive digital environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
