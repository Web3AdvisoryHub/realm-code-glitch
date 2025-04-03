
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import RealmMap from '@/components/RealmMap';
import RealmJournal from '@/components/RealmJournal';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RealmHub = () => {
  const [activeRealmId, setActiveRealmId] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" className="text-white mr-4 hover:bg-white/10">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gradient">Realm Hub</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RealmMap activeRealmId={activeRealmId} setActiveRealmId={setActiveRealmId} />
          </div>
          <div>
            <RealmJournal activeRealmId={activeRealmId} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RealmHub;
