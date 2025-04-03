
import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Define realm data
const realms = [
  {
    id: "logic-nexus",
    title: "Logic Nexus",
    description: "Master programming fundamentals",
    position: { x: 20, y: 25 },
    unlocked: true,
    completionPercent: 75,
    challenges: 12,
    completedChallenges: 9
  },
  {
    id: "data-matrix",
    title: "Data Matrix",
    description: "Explore data structures",
    position: { x: 60, y: 15 },
    unlocked: true,
    completionPercent: 40,
    challenges: 15,
    completedChallenges: 6
  },
  {
    id: "network-void",
    title: "Network Void",
    description: "Discover web technologies",
    position: { x: 75, y: 60 },
    unlocked: false,
    completionPercent: 0,
    challenges: 18,
    completedChallenges: 0
  },
  {
    id: "quantum-forge",
    title: "Quantum Forge",
    description: "Build advanced applications",
    position: { x: 30, y: 70 },
    unlocked: false,
    completionPercent: 0,
    challenges: 20,
    completedChallenges: 0
  },
  {
    id: "ai-sanctuary",
    title: "AI Sanctuary",
    description: "Learn machine learning",
    position: { x: 50, y: 45 },
    unlocked: false,
    completionPercent: 0,
    challenges: 15,
    completedChallenges: 0
  }
];

interface RealmMapProps {
  activeRealmId: string | null;
  setActiveRealmId: (id: string | null) => void;
}

const RealmMap = ({ activeRealmId, setActiveRealmId }: RealmMapProps) => {
  return (
    <div className="glass-morphism relative rounded-lg p-4 aspect-[4/3] overflow-hidden border border-white/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 digital-noise opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyberpunk-purple/20 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cyberpunk-blue/20 rounded-full blur-[100px]"></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-white/5"></div>
        ))}
      </div>
      
      {/* Realm nodes */}
      {realms.map((realm) => (
        <motion.div
          key={realm.id}
          className={`absolute cursor-pointer z-10 ${activeRealmId === realm.id ? 'z-20' : ''}`}
          style={{ 
            left: `${realm.position.x}%`, 
            top: `${realm.position.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0.9, opacity: 0.8 }}
          animate={{ 
            scale: activeRealmId === realm.id ? 1.1 : 1,
            opacity: activeRealmId === realm.id ? 1 : 0.9
          }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          onClick={() => setActiveRealmId(realm.id)}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center
                  ${realm.unlocked 
                    ? 'bg-gradient-to-br from-cyberpunk-purple/80 to-cyberpunk-blue/80' 
                    : 'bg-white/10 backdrop-blur-sm'
                  }
                  ${activeRealmId === realm.id ? 'ring-2 ring-white/50 shadow-lg shadow-cyberpunk-neon/20' : ''}
                  transition-all duration-300
                `}>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-2xl font-bold text-white">
                      {realm.unlocked ? (
                        <Unlock className="w-6 h-6 text-white" />
                      ) : (
                        <Lock className="w-6 h-6 text-white/60" />
                      )}
                    </div>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-cyberpunk-dark/90 border border-white/20 backdrop-blur-lg">
                <p className="font-bold">{realm.title}</p>
                <p className="text-xs text-white/70">{realm.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Realm name label */}
          <div className={`
            absolute top-full left-1/2 -translate-x-1/2 mt-2 text-center
            ${activeRealmId === realm.id ? 'text-white' : 'text-white/70'}
            transition-colors duration-300
          `}>
            <p className="text-sm font-bold whitespace-nowrap">{realm.title}</p>
          </div>
          
          {/* Connection lines between realms */}
          {realm.unlocked && (
            <motion.div 
              className="absolute z-0" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.8 }}
            >
              {realms
                .filter(r => r.unlocked && r.id !== realm.id)
                .map(connectedRealm => {
                  // Calculate line coordinates
                  const targetX = (connectedRealm.position.x - realm.position.x) * 1;
                  const targetY = (connectedRealm.position.y - realm.position.y) * 1;
                  const distance = Math.sqrt(targetX * targetX + targetY * targetY);
                  const angle = Math.atan2(targetY, targetX) * (180 / Math.PI);
                  
                  return (
                    <div 
                      key={`${realm.id}-${connectedRealm.id}`}
                      className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-cyberpunk-purple/30 to-transparent"
                      style={{ 
                        width: `${distance}%`,
                        transform: `rotate(${angle}deg)`,
                        transformOrigin: 'left center'
                      }}
                    />
                  );
                })}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default RealmMap;
