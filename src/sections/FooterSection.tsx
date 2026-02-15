import React from 'react';
import { Code2, Heart, Github, Youtube, MessageCircle, BookOpen } from 'lucide-react';

const tips = [
  { number: '1', text: 'Практикуйся каждый день, даже по 15 минут!' },
  { number: '2', text: 'Не бойся ошибок — это лучший способ учиться.' },
  { number: '3', text: 'Создавай проекты, которые тебе интересны.' },
  { number: '4', text: 'Делись своим кодом и получай обратную связь.' },
  { number: '5', text: 'Изучай чужой код на GitHub.' },
  { number: '6', text: 'Присоединяйся к сообществам программистов.' },
];

const resources = {
  documentation: [
    { name: 'MDN Web Docs', icon: <Code2 className="w-4 h-4" />, url: 'https://developer.mozilla.org' },
    { name: 'W3Schools', icon: <Code2 className="w-4 h-4" />, url: 'https://www.w3schools.com' },
    { name: 'HTML.com', icon: <Code2 className="w-4 h-4" />, url: 'https://html.com' },
  ],
  practice: [
    { name: 'CodePen', icon: <Code2 className="w-4 h-4" />, url: 'https://codepen.io' },
    { name: 'JSFiddle', icon: <Code2 className="w-4 h-4" />, url: 'https://jsfiddle.net' },
    { name: 'StackBlitz', icon: <Code2 className="w-4 h-4" />, url: 'https://stackblitz.com' },
  ],
  learning: [
    { name: 'freeCodeCamp', icon: <Code2 className="w-4 h-4" />, url: 'https://www.freecodecamp.org' },
    { name: 'Codecademy', icon: <Code2 className="w-4 h-4" />, url: 'https://www.codecademy.com' },
    { name: 'HTML Academy', icon: <Code2 className="w-4 h-4" />, url: 'https://htmlacademy.ru' },
  ],
};

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Tips section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-yellow-400">Советы</span> начинающим
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-4 flex items-start gap-3 hover:bg-slate-700 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {tip.number}
                </div>
                <p className="text-gray-300">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-purple-400 font-bold text-lg mb-4">Документация</h4>
            <ul className="space-y-2">
              {resources.documentation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-purple-400 font-bold text-lg mb-4">Практика</h4>
            <ul className="space-y-2">
              {resources.practice.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-purple-400 font-bold text-lg mb-4">Обучение</h4>
            <ul className="space-y-2">
              {resources.learning.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-all"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all"
          >
            <BookOpen className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold">WebCoder Kids</div>
              <div className="text-gray-500 text-sm">Учимся создавать сайты</div>
            </div>
          </div>
          <div className="text-gray-500 text-sm flex items-center gap-1">
            Сделано с <Heart className="w-4 h-4 text-red-500 fill-red-500" /> для юных программистов
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 WebCoder Kids
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
