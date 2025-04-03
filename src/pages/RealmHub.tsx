
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RealmMap from '@/components/RealmMap';
import RealmJournal from '@/components/RealmJournal';
import CharacterSelect from '@/components/CharacterSelect';
import StoryPanel from '@/components/StoryPanel';

const RealmHub = () => {
  const [activeRealmId, setActiveRealmId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("map");
  
  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white digital-noise">
      <Navbar />
      
      <main className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Realm Hub</h1>
            <p className="text-white/70 max-w-2xl">
              Explore your learning journey through digital realms. Complete challenges, earn badges, and unlock new content.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 w-full mb-6 bg-black/20 p-1 rounded-lg">
                <TabsTrigger 
                  value="map" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyberpunk-purple data-[state=active]:to-cyberpunk-neon data-[state=active]:text-white"
                >
                  Realm Map
                </TabsTrigger>
                <TabsTrigger 
                  value="story" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyberpunk-purple data-[state=active]:to-cyberpunk-neon data-[state=active]:text-white"
                >
                  Story Codex
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="map" className="space-y-8">
                <RealmMap 
                  activeRealmId={activeRealmId} 
                  setActiveRealmId={setActiveRealmId} 
                />
                <CharacterSelect />
              </TabsContent>
              
              <TabsContent value="story">
                <StoryPanel />
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <RealmJournal activeRealmId={activeRealmId} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RealmHub;
