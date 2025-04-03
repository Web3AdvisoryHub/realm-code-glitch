
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Trophy, Star, Clock, Lock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RealmJournalProps {
  activeRealmId: string | null;
}

const realms = {
  skyverse: {
    id: 'skyverse',
    name: 'Skyverse',
    icon: '🌌',
    description: 'Master the fundamental principles of Web3 development in this ethereal realm of blockchain knowledge.',
    unlocked: true,
    progress: 65,
    badges: [
      { name: 'First Steps', icon: '🎯', description: 'Completed your first challenge' },
      { name: 'Quick Learner', icon: '⚡', description: 'Solved a challenge in under 5 minutes' },
      { name: 'Code Explorer', icon: '🔍', description: 'Discovered hidden code pattern' },
    ],
    challenges: [
      { id: 1, name: 'Hello Web3', completed: true, difficulty: 'Easy' },
      { id: 2, name: 'Digital Identity', completed: true, difficulty: 'Easy' },
      { id: 3, name: 'Blockchain Basics', completed: true, difficulty: 'Medium' },
      { id: 4, name: 'Smart Contract Intro', completed: false, difficulty: 'Medium' },
    ],
  },
  mirrorfield: {
    id: 'mirrorfield',
    name: 'Mirrorfield',
    icon: '🔮',
    description: 'Explore the reflective patterns of advanced data structures and algorithms in this mirrored landscape.',
    unlocked: true,
    progress: 25,
    badges: [
      { name: 'Pattern Matcher', icon: '🧩', description: 'Identified complex pattern' },
    ],
    challenges: [
      { id: 1, name: 'Mirror Arrays', completed: true, difficulty: 'Medium' },
      { id: 2, name: 'Reflection Recursion', completed: false, difficulty: 'Hard' },
      { id: 3, name: 'Symmetric Trees', completed: false, difficulty: 'Hard' },
      { id: 4, name: 'Glass Algorithm', completed: false, difficulty: 'Expert' },
    ],
  },
  vortexia: {
    id: 'vortexia',
    name: 'Vortexia',
    icon: '🌀',
    description: 'Dive into the swirling vortex of asynchronous programming and state management.',
    unlocked: false,
    progress: 0,
    badges: [],
    challenges: [],
  },
  datascape: {
    id: 'datascape',
    name: 'Datascape',
    icon: '📊',
    description: 'Navigate the vast landscape of data visualization and manipulation techniques.',
    unlocked: false,
    progress: 0,
    badges: [],
    challenges: [],
  },
};

const RealmJournal = ({ activeRealmId }: RealmJournalProps) => {
  const activeRealm = activeRealmId ? realms[activeRealmId as keyof typeof realms] : null;
  
  if (!activeRealm) {
    return (
      <Card className="bg-gradient-to-br from-cyberpunk-dark to-cyberpunk-dark/70 border border-white/10 h-[500px] flex items-center justify-center">
        <div className="text-center p-8">
          <MapPin className="w-12 h-12 mx-auto mb-4 text-white/30" />
          <h3 className="text-xl font-bold text-white/70 mb-2">Select a Realm</h3>
          <p className="text-white/50 text-sm max-w-xs">
            Click on a realm from the map to view details and track your progress
          </p>
        </div>
      </Card>
    );
  }
  
  return (
    <Card className="bg-gradient-to-br from-cyberpunk-dark to-cyberpunk-dark/70 border border-white/10 h-[500px] overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-neon flex items-center justify-center">
            <span className="text-xl">{activeRealm.icon}</span>
          </div>
          <div>
            <CardTitle className="text-gradient">{activeRealm.name}</CardTitle>
            <div className="flex items-center mt-1">
              <Progress 
                value={activeRealm.progress} 
                className="h-2 w-24" 
              />
              <span className="text-xs text-white/70 ml-2">{activeRealm.progress}%</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <ScrollArea className="h-[380px]">
        <CardContent className="pt-0">
          <p className="text-white/80 text-sm mb-6">
            {activeRealm.description}
          </p>
          
          {activeRealm.unlocked ? (
            <>
              {/* Badges section */}
              {activeRealm.badges.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-white/70 mb-3 flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-cyberpunk-neon" />
                    Earned Badges
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeRealm.badges.map((badge, index) => (
                      <div 
                        key={index}
                        className="group relative"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyberpunk-purple/20 to-cyberpunk-neon/20 flex items-center justify-center border border-white/10">
                          <span className="text-xl">{badge.icon}</span>
                        </div>
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-32 bg-black/80 backdrop-blur-sm text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                          <p className="font-medium mb-1">{badge.name}</p>
                          <p className="text-white/70 text-[10px]">{badge.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Challenges section */}
              <div>
                <h3 className="text-sm font-medium text-white/70 mb-3 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-cyberpunk-neon" />
                  Challenges
                </h3>
                <div className="space-y-3">
                  {activeRealm.challenges.map((challenge) => (
                    <div 
                      key={challenge.id}
                      className="p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium text-white flex items-center">
                            {challenge.completed && (
                              <span className="text-cyberpunk-neon mr-2">✓</span>
                            )}
                            {challenge.name}
                          </h4>
                          <div className="flex items-center mt-1">
                            <Badge 
                              variant="outline" 
                              className="text-[10px] h-4 bg-white/10 hover:bg-white/20"
                            >
                              {challenge.difficulty}
                            </Badge>
                            <span className="text-xs text-white/50 ml-2 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              ~15 min
                            </span>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <ArrowRight className="h-4 w-4 text-white" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-white/50" />
              </div>
              <h3 className="text-lg font-bold text-white/70 mb-2">Realm Locked</h3>
              <p className="text-white/50 text-sm text-center max-w-xs mb-6">
                Complete previous challenges to unlock this mysterious realm
              </p>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
              >
                View Requirements
              </Button>
            </div>
          )}
        </CardContent>
      </ScrollArea>
      
      {activeRealm.unlocked && (
        <CardFooter className="border-t border-white/10 pt-3 bg-black/20">
          <Button 
            className="w-full bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-neon hover:from-cyberpunk-neon hover:to-cyberpunk-purple text-white group"
          >
            Enter Realm
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default RealmJournal;
