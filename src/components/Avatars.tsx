
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, User, Award, Code, Lock } from 'lucide-react';

const AvatarCustomization = () => {
  const [activeTab, setActiveTab] = useState("appearance");
  
  return (
    <section id="avatars" className="py-20 relative digital-noise">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Customize Your Digital Identity</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Your avatar is your digital representation in the Codex School metaverse. Customize it to reflect your personality and showcase your achievements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="order-2 md:order-1">
            <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-6 bg-black/20 p-1 rounded-lg">
                <TabsTrigger 
                  value="appearance" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyberpunk-purple data-[state=active]:to-cyberpunk-neon data-[state=active]:text-white"
                >
                  Appearance
                </TabsTrigger>
                <TabsTrigger 
                  value="badges" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyberpunk-purple data-[state=active]:to-cyberpunk-neon data-[state=active]:text-white"
                >
                  Badges
                </TabsTrigger>
                <TabsTrigger 
                  value="skills" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyberpunk-purple data-[state=active]:to-cyberpunk-neon data-[state=active]:text-white"
                >
                  Skills
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="appearance" className="glass-morphism rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Personalize Your Look</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/70 mb-2">Hairstyle</label>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-black/30 h-12 rounded-md border border-white/10 hover:border-cyberpunk-neon cursor-pointer"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/70 mb-2">Outfit</label>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-black/30 h-12 rounded-md border border-white/10 hover:border-cyberpunk-neon cursor-pointer"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/70 mb-2">Accessories</label>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-black/30 h-12 rounded-md border border-white/10 hover:border-cyberpunk-neon cursor-pointer"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="badges" className="glass-morphism rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Achievement Badges</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "First Challenge", unlocked: true },
                    { name: "Javascript Master", unlocked: true },
                    { name: "Algorithm Wizard", unlocked: false },
                    { name: "Data Structures", unlocked: false },
                    { name: "Web3 Pioneer", unlocked: false },
                    { name: "Community Helper", unlocked: true }
                  ].map((badge, i) => (
                    <div key={i} className={`bg-black/30 p-4 rounded-md border ${badge.unlocked ? 'border-cyberpunk-neon/50' : 'border-white/10'} text-center`}>
                      <div className={`w-12 h-12 mx-auto rounded-full mb-2 flex items-center justify-center ${badge.unlocked ? 'bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-blue' : 'bg-white/10'}`}>
                        {badge.unlocked ? <Award className="w-6 h-6 text-white" /> : <Lock className="w-5 h-5 text-white/50" />}
                      </div>
                      <div className={badge.unlocked ? 'text-white' : 'text-white/50'}>
                        {badge.name}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="skills" className="glass-morphism rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Skill Progression</h3>
                <div className="space-y-4">
                  {[
                    { name: "JavaScript", level: 85 },
                    { name: "HTML/CSS", level: 70 },
                    { name: "Data Structures", level: 60 },
                    { name: "Algorithms", level: 45 },
                    { name: "Web3", level: 20 }
                  ].map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-white/70">Level {Math.floor(skill.level/10)}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-80 rounded-lg neon-border overflow-hidden animate-float">
              <div className="absolute inset-0 glass-morphism"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyberpunk-neon to-cyberpunk-blue mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div className="text-white font-semibold mb-1">CyberCoder</div>
                <div className="text-white/70 text-sm mb-4">Level 12 Developer</div>
                <div className="flex space-x-2 mb-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-cyberpunk-purple/30 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-cyberpunk-neon" />
                    </div>
                  ))}
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue" style={{ width: '65%' }}></div>
                </div>
                <div className="text-white/50 text-xs mt-1">450 XP to Next Level</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Your avatar evolves as you complete challenges and unlock achievements. Each success is reflected in your digital identity.
          </p>
          <Button className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-neon hover:from-cyberpunk-neon hover:to-cyberpunk-purple text-white px-8 py-6 rounded-md text-lg">
            Create Your Avatar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AvatarCustomization;
