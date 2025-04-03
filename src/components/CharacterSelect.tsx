
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Bot, BookOpen, ChevronRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CharacterSelect = () => {
  const [activeCharacter, setActiveCharacter] = useState<'chloe' | 'echo' | null>(null);

  const characters = [
    {
      id: 'chloe',
      name: 'Chloe',
      status: 'Protagonist',
      description: 'A young girl with glitch technology integrated into her body. Navigate her journey of self-discovery through the digital frontier.',
      icon: User,
      unlocked: true,
      traits: ['Resilient', 'Observant', 'Analytical']
    },
    {
      id: 'echo',
      name: 'Echo',
      status: 'AI Companion',
      description: 'An evolving AI interface with mysterious connection to Chloe. Help Echo discover her identity and purpose.',
      icon: Bot,
      unlocked: true,
      traits: ['Adaptive', 'Perceptive', 'Empathetic']
    }
  ];

  return (
    <div className="py-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-2">Choose Your Character</h2>
        <p className="text-white/70 max-w-xl mx-auto">
          Select which perspective you'll experience in the Codex School narrative
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {characters.map((character) => (
          <motion.div
            key={character.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCharacter(character.id as 'chloe' | 'echo')}
            className={`relative cursor-pointer overflow-hidden rounded-lg border ${
              activeCharacter === character.id 
                ? 'border-cyberpunk-neon' 
                : 'border-white/10 hover:border-white/30'
            }`}
          >
            <div className="glass-morphism p-6">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                  activeCharacter === character.id
                    ? 'bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-neon animate-pulse-neon'
                    : 'bg-white/10'
                }`}>
                  <character.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{character.name}</h3>
                      <Badge variant="outline" className="bg-black/40 text-white/70 border-none text-xs">
                        {character.status}
                      </Badge>
                    </div>
                    
                    {character.unlocked ? (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-blue flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                        <Lock className="w-4 h-4 text-white/50" />
                      </div>
                    )}
                  </div>
                  
                  <p className="text-white/70 text-sm mt-3 mb-4">{character.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {character.traits.map((trait, index) => (
                      <span key={index} className="text-xs py-1 px-2 rounded-full bg-white/10 text-white/80">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Link to="/realm-hub">
          <Button 
            size="lg"
            className={`bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-neon hover:from-cyberpunk-neon hover:to-cyberpunk-purple text-white gap-2 ${
              !activeCharacter ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={!activeCharacter}
          >
            <BookOpen className="w-4 h-4" />
            Begin Journey
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CharacterSelect;
