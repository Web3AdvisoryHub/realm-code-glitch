
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Lock, Unlock, ArrowRight } from 'lucide-react';

// Define realm data (ideally this would be in a shared file/context)
const realms = [
  {
    id: "logic-nexus",
    title: "Logic Nexus",
    description: "Master the fundamentals of programming logic and algorithms. Begin your journey through the core principles that power all software.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    unlocked: true,
    completionPercent: 75,
    challenges: 12,
    completedChallenges: 9
  },
  {
    id: "data-matrix",
    title: "Data Matrix",
    description: "Explore data structures and manipulation techniques. Learn how to organize and efficiently work with information.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    unlocked: true,
    completionPercent: 40,
    challenges: 15, 
    completedChallenges: 6
  },
  {
    id: "network-void",
    title: "Network Void",
    description: "Discover the fundamentals of web technologies and API development. Connect your applications to the wider digital universe.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    unlocked: false,
    completionPercent: 0,
    challenges: 18,
    completedChallenges: 0
  },
  {
    id: "quantum-forge",
    title: "Quantum Forge",
    description: "Build advanced applications using cutting-edge frameworks and tools. Create complex software architectures.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    unlocked: false,
    completionPercent: 0,
    challenges: 20,
    completedChallenges: 0
  },
  {
    id: "ai-sanctuary",
    title: "AI Sanctuary",
    description: "Explore the world of artificial intelligence and machine learning. Train models to solve complex problems.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    unlocked: false,
    completionPercent: 0,
    challenges: 15,
    completedChallenges: 0
  }
];

interface RealmJournalProps {
  activeRealmId: string | null;
}

const RealmJournal = ({ activeRealmId }: RealmJournalProps) => {
  const activeRealm = realms.find(realm => realm.id === activeRealmId) || realms[0];
  
  return (
    <div className="h-full">
      {activeRealmId ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="bg-cyberpunk-dark border border-white/10">
            <div className="h-40 relative overflow-hidden rounded-t-lg">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${activeRealm.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-dark via-transparent to-transparent" />
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-black/60 text-white border-none">
                  {activeRealm.unlocked ? 'Unlocked' : 'Locked'}
                </Badge>
              </div>
            </div>
            
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl md:text-2xl text-gradient">{activeRealm.title}</CardTitle>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                  {activeRealm.unlocked ? (
                    <Unlock className="w-4 h-4 text-cyberpunk-neon" />
                  ) : (
                    <Lock className="w-4 h-4 text-white/60" />
                  )}
                </div>
              </div>
              <CardDescription className="text-white/70">
                {activeRealm.completedChallenges} of {activeRealm.challenges} challenges completed
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-white/80">{activeRealm.description}</p>
              
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Progress</span>
                  <span>{activeRealm.completionPercent}%</span>
                </div>
                <Progress 
                  value={activeRealm.completionPercent} 
                  className="h-2 bg-white/10" 
                />
              </div>
              
              <div className="pt-2 grid grid-cols-2 gap-2">
                <div className="glass-morphism rounded p-2 text-center">
                  <div className="text-lg font-bold text-gradient">{activeRealm.challenges}</div>
                  <div className="text-xs text-white/70">Total Challenges</div>
                </div>
                <div className="glass-morphism rounded p-2 text-center">
                  <div className="text-lg font-bold text-gradient">{activeRealm.completedChallenges}</div>
                  <div className="text-xs text-white/70">Completed</div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                className={`w-full ${
                  activeRealm.unlocked 
                    ? 'bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-neon hover:from-cyberpunk-neon hover:to-cyberpunk-purple text-white' 
                    : 'bg-white/10 text-white/50 cursor-not-allowed'
                } group`}
                disabled={!activeRealm.unlocked}
              >
                {activeRealm.unlocked ? 'Enter Realm' : 'Unlock Required'}
                {activeRealm.unlocked && (
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                )}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ) : (
        <Card className="bg-cyberpunk-dark/60 border border-white/10 h-full flex items-center justify-center p-6 text-center">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-2">Select a Realm</h3>
            <p className="text-white/70">Click on a realm on the map to view details and begin your journey</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default RealmJournal;
