
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Unlock, Code, Server, Database } from 'lucide-react';

const realms = [
  {
    id: 1,
    name: "Logic Nexus",
    description: "Master the fundamentals of programming logic and algorithms.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    difficulty: "Beginner",
    unlocked: true,
    challenges: 12,
    icon: Code
  },
  {
    id: 2,
    name: "Data Matrix",
    description: "Explore data structures and manipulation techniques.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    difficulty: "Intermediate",
    unlocked: true,
    challenges: 15,
    icon: Database
  },
  {
    id: 3,
    name: "Network Void",
    description: "Learn about web technologies and API development.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    difficulty: "Advanced",
    unlocked: false,
    challenges: 18,
    icon: Server
  }
];

const RealmCard = ({ realm, active, onClick }: { realm: any, active: boolean, onClick: () => void }) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${active ? 'ring-2 ring-cyberpunk-neon' : 'hover:scale-105'}`}
      onClick={onClick}
    >
      <div 
        className="h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${realm.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <Badge variant="outline" className="bg-black/60 text-white border-none">
              {realm.difficulty}
            </Badge>
            <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
              {realm.unlocked ? 
                <Unlock className="w-4 h-4 text-cyberpunk-neon" /> : 
                <Lock className="w-4 h-4 text-white/60" />
              }
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{realm.name}</h3>
            <p className="text-white/70 text-sm">{realm.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RealmDetail = ({ realm }: { realm: any }) => {
  return (
    <div className="glass-morphism rounded-lg p-6 border border-white/10">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyberpunk-neon to-cyberpunk-blue flex items-center justify-center mr-4">
          <realm.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gradient">{realm.name}</h3>
          <p className="text-white/70 text-sm">{realm.difficulty} • {realm.challenges} Challenges</p>
        </div>
      </div>
      
      <p className="text-white/80 mb-6">{realm.description}</p>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-white/70">Logic Puzzles</span>
          <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/70">Code Challenges</span>
          <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue" style={{ width: '45%' }}></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/70">Projects</span>
          <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-blue" style={{ width: '25%' }}></div>
          </div>
        </div>
      </div>
      
      <Button 
        className={`w-full ${!realm.unlocked ? 'bg-white/10 text-white/50 cursor-not-allowed' : 'bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-neon hover:from-cyberpunk-neon hover:to-cyberpunk-purple text-white'}`}
        disabled={!realm.unlocked}
      >
        {realm.unlocked ? 'Enter Realm' : 'Unlock Required'}
      </Button>
    </div>
  );
};

const Realms = () => {
  const [activeRealm, setActiveRealm] = useState(realms[0]);
  
  return (
    <section id="realms" className="py-20 bg-cyberpunk-dark/50 digital-noise">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Explore Coding Realms</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Each realm represents a different area of programming knowledge. Master challenges to unlock new realms and progress through your coding journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {realms.map((realm) => (
            <RealmCard 
              key={realm.id} 
              realm={realm}
              active={activeRealm.id === realm.id}
              onClick={() => setActiveRealm(realm)}
            />
          ))}
        </div>
        
        <RealmDetail realm={activeRealm} />
      </div>
    </section>
  );
};

export default Realms;
