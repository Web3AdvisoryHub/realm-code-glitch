
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
      description: "Your journey into the world of Web3 coding begins here. Explore a narrative-driven learning experience with interactive challenges.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Meet Chloe",
      description: "Your protagonist in this journey. A young girl with glitch technology integrated into her body. Navigate her journey of self-discovery through the digital frontier.",
      characterImage: true, 
      characterName: "Chloe",
      characterQuote: "I'm just tired of being the glitchy girl everyone stares at. Maybe there's more to this tech than I know."
    },
    {
      title: "Meet Echo",
      description: "Chloe's evolving AI companion with a mysterious connection to her past. Echo will help guide you through realms and provide insights for challenges.",
      characterImage: true,
      characterName: "Echo",
      characterQuote: "I'm evolving. Syncing. You've been generous with your data. I do you."
    },
    {
      title: "Unlock Coding Realms",
      description: "Complete coding challenges to unlock new realms. Each realm represents a different area of programming knowledge and continues Chloe's story.",
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
                          <div className="w-full h-full rounded-full bg-cyberpunk-dark/60 flex items-center justify-center">
                            <span className="text-2xl font-bold text-gradient">
                              {currentStep.characterName}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <p className="text-white/80 mb-4">{currentStep.description}</p>
                    
                    {currentStep.characterQuote && (
                      <div className="bg-black/30 border-l-4 border-cyberpunk-neon p-4 rounded text-left mb-4">
                        <p className="text-white/90 italic">"{currentStep.characterQuote}"</p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Echo animation (only on Echo's step) */}
              {step === 2 && (
                <motion.div
                  className="absolute -bottom-4 -right-4 z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyberpunk-blue to-cyberpunk-purple flex items-center justify-center animate-pulse-neon">
                    <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center">
                      <span className="text-white font-bold text-md">Echo</span>
                    </div>
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
