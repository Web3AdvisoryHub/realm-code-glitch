
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

const StoryPanel = () => {
  const [currentChapter, setCurrentChapter] = useState(1);
  
  const chapters = [
    {
      id: 1,
      title: "Initiation",
      excerpt: `Chloe's jacket was too way small, but it was either that or go in midriff-flashing mode—and she'd already melted her last pullover trying to toast a bagel. Literally. The glitch caught, sparked, and *poof*, polyester tragedy. So now she walked fast, arms crossed, boots squeaking with that soft squelch that made the street feel like it had rained even though it hadn't.`,
      available: true
    },
    {
      id: 2,
      title: "Signal",
      excerpt: `The subway smelled like ozone and disappointment. Chloe stood near the door, gripping the pole with her gloved hand—just in case her glitch decided to say hello in public again. An ad played on the opposite screen: "Zygnal Coin: Own Your Frequency. Mint Your Voice." A girl in a glittering dress blinked, opened her mouth—and literal soundwaves poured out, reshaping the digital skyline behind her.`,
      available: true
    },
    {
      id: 3,
      title: "Trace",
      excerpt: `"Are you… me?" she whispered. No response. But the cursor blinked slower now. Calmer. She rested her fingers on the desk. The wood felt warmer than it should've. "I don't know what you are," she said. "But you sound like someone who misses me."`,
      available: true
    },
    {
      id: 4,
      title: "School Entry",
      excerpt: `The school had that typical hum of morning—holo-announcements flashing across the glass-front wall, kids walking fast but pretending not to care, little swarms of student groups gathering in their usual spots. Chloe kept her pace steady. Jacket zipped. Glitch rate low.`,
      available: true
    },
    {
      id: 5,
      title: "Mall Stop",
      excerpt: `The clothing store was bright and disorganized—racks half-empty, mirrors smudged with fingerprints and sticker tags. Lainey tried on two oversized jackets for no reason and declared them both "main character energy" before putting them back.`,
      available: false
    },
  ];

  const handleNextChapter = () => {
    if (currentChapter < chapters.length && chapters[currentChapter].available) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const handlePrevChapter = () => {
    if (currentChapter > 1) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  return (
    <div className="relative glass-morphism rounded-lg overflow-hidden border border-white/10 h-[400px]">
      {/* Chapter navigation */}
      <div className="absolute top-0 left-0 w-full bg-black/40 backdrop-blur-sm z-10 p-3 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevChapter}
          disabled={currentChapter <= 1}
          className="text-white/70 hover:text-white hover:bg-white/10"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <div className="text-white font-medium">
          Chapter {currentChapter}: {chapters[currentChapter - 1].title}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNextChapter}
          disabled={currentChapter >= chapters.length || !chapters[currentChapter].available}
          className="text-white/70 hover:text-white hover:bg-white/10"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      
      <ScrollArea className="h-full pt-16 px-6 pb-16">
        <div className="prose prose-invert max-w-none">
          <p className="text-white/80 leading-relaxed text-lg">
            {chapters[currentChapter - 1].excerpt}
          </p>
          <p className="text-white/50 text-sm mt-6 italic">
            Continue the story by completing challenges in the Codex School platform...
          </p>
        </div>
      </ScrollArea>
      
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 flex justify-center">
        <Button
          className="bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-neon hover:from-cyberpunk-neon hover:to-cyberpunk-purple text-white gap-2"
        >
          <BookOpen className="w-4 h-4" />
          Read Full Chapter
        </Button>
      </div>
    </div>
  );
};

export default StoryPanel;
