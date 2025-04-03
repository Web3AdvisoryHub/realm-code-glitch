
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Onboarding = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [step, setStep] = useState(0);
  
  if (!showOnboarding) return null;
  
  const steps = [
    {
      title: "Welcome to Codex School",
      description: "Your journey into the world of coding begins here. Meet your guides through this digital adventure.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Meet Chloe",
      description: "Your main character in this journey. She'll guide you through the challenges and help you grow as a coder.",
      characterImage: "/chloe-character.png", // This would be a custom character image you'd need to add
    },
    {
      title: "Meet Echo",
      description: "Your AI companion who will provide hints and guidance when you're stuck. Together with Chloe, you'll conquer every realm.",
      characterImage: "/echo-character.png", // This would be a custom character image you'd need to add
    },
    {
      title: "Unlock Coding Realms",
      description: "Complete coding challenges to unlock new realms. Each realm represents a different area of programming knowledge.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];
  
  const currentStep = steps[step];
  
  const handleSkip = () => {
    setShowOnboarding(false);
  };
  
  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setShowOnboarding(false);
    }
  };
  
  return (
    <AnimatePresence>
      {showOnboarding && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative w-full max-w-lg mx-4"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="glass-morphism rounded-lg overflow-hidden border border-white/20">
              {/* Progress indicator */}
              <div className="flex gap-1 px-4 pt-4">
                {steps.map((_, index) => (
                  <div 
                    key={index} 
                    className={`h-1 rounded-full flex-1 ${index <= step ? 'bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-neon' : 'bg-white/20'}`}
                  />
                ))}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <h2 className="text-2xl font-bold text-gradient mb-4">{currentStep.title}</h2>
                    
                    {currentStep.image && (
                      <div className="w-full h-48 rounded-lg mb-6 overflow-hidden">
                        <img 
                          src={currentStep.image} 
                          alt={currentStep.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    {currentStep.characterImage && (
                      <div className="flex justify-center mb-6">
                        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyberpunk-purple to-cyberpunk-blue p-1">
                          <div className="w-full h-full rounded-full bg-cyberpunk-dark/60 flex items-center justify-center text-2xl font-bold text-gradient">
                            {/* Placeholder if the character image doesn't exist */}
                            {step === 1 ? 'Chloe' : 'Echo'}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <p className="text-white/80 mb-8">{currentStep.description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Echo animation (only on Echo's step) */}
              {step === 2 && (
                <motion.div
                  className="absolute bottom-20 right-0"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyberpunk-blue to-cyberpunk-purple flex items-center justify-center animate-pulse-neon">
                    <span className="text-white font-bold">Echo</span>
                  </div>
                </motion.div>
              )}
              
              {/* Actions */}
              <div className="p-6 pt-0 flex justify-between">
                <Button 
                  variant="ghost" 
                  className="text-white/70 hover:text-white hover:bg-white/10"
                  onClick={handleSkip}
                >
                  Skip
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-neon hover:from-cyberpunk-neon hover:to-cyberpunk-purple text-white group"
                  onClick={handleNext}
                >
                  {step === steps.length - 1 ? 'Get Started' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Onboarding;
