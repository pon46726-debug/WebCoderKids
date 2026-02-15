import React from 'react';
import { Code2, Sparkles, Rocket, Star, Infinity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-gradient min-h-screen relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-white/20 animate-float">
          <Code2 className="w-12 h-12" />
        </div>
        <div className="absolute top-40 left-1/4 text-white/10 animate-float-delayed">
          <Star className="w-8 h-8" />
        </div>
        <div className="absolute top-32 right-20 text-white/20 animate-float">
          <Sparkles className="w-10 h-10" />
        </div>
        <div className="absolute bottom-40 right-10 text-white/10 animate-float-delayed">
          <Rocket className="w-14 h-14" />
        </div>
        <div className="absolute bottom-60 left-20 text-white/10 animate-float">
          <Infinity className="w-10 h-10" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Бесплатное обучение для школьников</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
            Создавай свои
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400">
            веб-сайты!
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-center text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Учись программировать на HTML, CSS и JavaScript
          <br />
          легко и весело! <Rocket className="inline w-5 h-5 ml-1" />
        </p>

        {/* Code preview */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="bg-gray-900 rounded-xl p-4 shadow-2xl">
            <code className="text-pink-400">&lt;h1&gt;</code>
            <span className="text-white">Привет, будущий программист!</span>
            <code className="text-pink-400">&lt;/h1&gt;</code>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            onClick={() => scrollToSection('html')}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-6 text-lg rounded-full flex items-center gap-2"
          >
            <Code2 className="w-5 h-5" />
            Начать учиться
          </Button>
          <Button
            onClick={() => scrollToSection('practice')}
            variant="outline"
            className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-6 text-lg rounded-full border-0"
          >
            <Rocket className="w-5 h-5" />
            Практика
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-1">3</div>
            <div className="text-white/80 text-sm md:text-base">Языка</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-1">50+</div>
            <div className="text-white/80 text-sm md:text-base">Уроков</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-1">∞</div>
            <div className="text-white/80 text-sm md:text-base">Возможностей</div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
