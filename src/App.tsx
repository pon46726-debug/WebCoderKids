import type { FC } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/sections/HeroSection';
import HTMLSection from '@/sections/HTMLSection';
import CSSSection from '@/sections/CSSSection';
import JavaScriptSection from '@/sections/JavaScriptSection';
import PracticeSection from '@/sections/PracticeSection';
import FooterSection from '@/sections/FooterSection';

const App: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <HTMLSection />
        <CSSSection />
        <JavaScriptSection />
        <PracticeSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
