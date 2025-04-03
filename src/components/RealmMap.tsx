
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Lock, Unlock, Trophy, MapPin } from 'lucide-react';

interface RealmMapProps {
  activeRealmId: string | null;
  setActiveRealmId: (id: string | null) => void;
}

const realms = [
  {
    id: 'skyverse',
    name: 'Skyverse',
    icon: '🌌',
    position: { top: '20%', left: '30%' },
    unlocked: true,
    progress: 65,
    completedChallenges: 8,
    totalChallenges: 12,
  },
  {
    id: 'mirrorfield',
    name: 'Mirrorfield',
    icon: '🔮',
    position: { top: '40%', left: '60%' },
    unlocked: true,
    progress: 25,
    completedChallenges: 3,
    totalChallenges: 12,
  },
  {
    id: 'vortexia',
    name: 'Vortexia',
    icon: '🌀',
    position: { top: '65%', left: '25%' },
    unlocked: false,
    progress: 0,
    completedChallenges: 0,
    totalChallenges: 15,
  },
  {
    id: 'datascape',
    name: 'Datascape',
    icon: '📊',
    position: { top: '75%', left: '70%' },
    unlocked: false,
    progress: 0,
    completedChallenges: 0,
    totalChallenges: 18,
  },
];

const RealmMap = ({ activeRealmId, setActiveRealmId }: RealmMapProps) => {
  return (
    <Card className="p-6 bg-gradient-to-br from-cyberpunk-dark to-cyberpunk-dark/70 border border-white/10 h-[500px] relative overflow-hidden">
      <h2 className="text-xl font-bold mb-4 text-gradient">Realm Map</h2>
      
      {/* Digital noise background */}
      <div className="absolute inset-0 digital-noise opacity-20"></div>
      
      {/* Map grid lines */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {Array.from({ length: 36 }).map((_, i) => (
          <div 
            key={i} 
            className="border-t border-l border-white/5 last:border-r last:border-b"
          ></div>
        ))}
      </div>

      {/* Realms */}
      {realms.map((realm) => (
        <div
          key={realm.id}
          className={`absolute cursor-pointer transition-all duration-300 ${
            activeRealmId === realm.id ? 'z-20 scale-110' : 'z-10 hover:scale-105'
          }`}
          style={{ top: realm.position.top, left: realm.position.left }}
          onClick={() => setActiveRealmId(realm.id)}
        >
          <div 
            className={`flex flex-col items-center group ${
              realm.unlocked 
                ? 'opacity-100' 
                : 'opacity-50 grayscale'
            }`}
          >
            <div 
              className={`relative w-16 h-16 rounded-full flex items-center justify-center ${
                activeRealmId === realm.id
                  ? 'animate-pulse-neon'
                  : ''
              } ${
                realm.unlocked
                  ? 'bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-neon'
                  : 'bg-white/20'
              }`}
            >
              <span className="text-2xl">{realm.icon}</span>
              
              {/* Connection lines to adjacent realms */}
              {realm.id === 'skyverse' && (
                <div className="absolute w-32 h-px bg-gradient-to-r from-transparent via-cyberpunk-neon to-transparent -bottom-4 left-16 rotate-45"></div>
              )}
              {realm.id === 'mirrorfield' && (
                <div className="absolute w-32 h-px bg-gradient-to-r from-transparent via-cyberpunk-neon to-transparent -bottom-12 -left-16 rotate-45"></div>
              )}
              
              {/* Realm status indicator */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-cyberpunk-dark flex items-center justify-center border-2 border-cyberpunk-dark">
                {realm.unlocked 
                  ? <Unlock className="w-3 h-3 text-cyberpunk-neon" /> 
                  : <Lock className="w-3 h-3 text-white/60" />
                }
              </div>
            </div>
            
            <div className={`mt-2 text-center ${activeRealmId === realm.id ? 'block' : 'hidden group-hover:block'}`}>
              <p className="text-sm font-medium text-white">{realm.name}</p>
              <div className="flex items-center justify-center mt-1">
                <Trophy className="w-3 h-3 text-cyberpunk-neon mr-1" />
                <span className="text-xs text-white/70">{realm.completedChallenges}/{realm.totalChallenges}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Current location marker */}
      <div className="absolute top-[20%] left-[30%] animate-ping">
        <div className="w-2 h-2 rounded-full bg-cyberpunk-neon"></div>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-black/30 backdrop-blur-sm rounded-lg p-2 text-xs text-white/70">
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-neon mr-2"></div>
          <span>Unlocked Realm</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-white/20 mr-2"></div>
          <span>Locked Realm</span>
        </div>
      </div>
    </Card>
  );
};

export default RealmMap;
