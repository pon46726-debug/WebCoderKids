import React, { useState } from 'react';
import { Palette, Type, BoxSelect, Layout, Copy, Sparkles } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';

interface Lesson {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  htmlCode: string;
  cssCode: string;
  result: string;
  explanations: { number: string; property: string; description: string }[];
}

const lessons: Lesson[] = [
  {
    id: 'colors',
    title: 'Цвета и фон',
    icon: <Palette className="w-4 h-4" />,
    description: 'CSS делает страницу красивой! Добавляй цвета и фоны.',
    htmlCode: `<div class="box">
  Привет, мир!
</div>`,
    cssCode: `.box {
  background-color: #8b5cf6;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 24px;
}`,
    result: `<div style="background-color: #8b5cf6; color: white; padding: 20px; border-radius: 10px; text-align: center; font-size: 24px;">Привет, мир!</div>`,
    explanations: [
      { number: '1', property: 'background-color: #8b5cf6', description: 'Цвет фона элемента' },
      { number: '2', property: 'color: white', description: 'Цвет текста' },
      { number: '3', property: 'padding: 20px', description: 'Внутренний отступ' },
      { number: '4', property: 'border-radius: 10px', description: 'Скругление углов' },
      { number: '5', property: 'text-align: center', description: 'Выравнивание текста' },
      { number: '6', property: 'font-size: 24px', description: 'Размер шрифта' },
    ],
  },
  {
    id: 'text-styles',
    title: 'Стили текста',
    icon: <Type className="w-4 h-4" />,
    description: 'Настраивай шрифты, размеры и оформление текста.',
    htmlCode: `<h1 class="title">Заголовок</h1>
<p class="text">Обычный текст</p>
<a class="link" href="#">Ссылка</a>`,
    cssCode: `.title {
  font-family: 'Arial', sans-serif;
  font-size: 32px;
  font-weight: bold;
  text-decoration: underline;
}

.text {
  line-height: 1.6;
  letter-spacing: 1px;
}

.link {
  color: #3b82f6;
  text-decoration: none;
}

.link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}`,
    result: `<h1 style="font-family: Arial, sans-serif; font-size: 32px; font-weight: bold; text-decoration: underline; margin-bottom: 8px;">Заголовок</h1>
<p style="line-height: 1.6; letter-spacing: 1px; margin-bottom: 8px;">Обычный текст</p>
<a href="#" style="color: #3b82f6; text-decoration: none;">Ссылка</a>`,
    explanations: [
      { number: '1', property: 'font-family', description: 'Шрифт текста' },
      { number: '2', property: 'font-weight', description: 'Толщина шрифта' },
      { number: '3', property: 'line-height', description: 'Межстрочный интервал' },
      { number: '4', property: ':hover', description: 'Стиль при наведении' },
    ],
  },
  {
    id: 'box-model',
    title: 'Блочная модель',
    icon: <BoxSelect className="w-4 h-4" />,
    description: 'Управляй размерами, отступами и границами элементов.',
    htmlCode: `<div class="outer">
  <div class="inner">
    Контент
  </div>
</div>`,
    cssCode: `.outer {
  background: #e0e7ff;
  padding: 30px;
  border: 3px solid #6366f1;
  margin: 20px;
}

.inner {
  background: #8b5cf6;
  color: white;
  padding: 20px;
  width: 200px;
  height: 100px;
}`,
    result: `<div style="background: #e0e7ff; padding: 30px; border: 3px solid #6366f1; margin: 20px;">
  <div style="background: #8b5cf6; color: white; padding: 20px; width: 200px; height: 100px; display: flex; align-items: center; justify-content: center;">
    Контент
  </div>
</div>`,
    explanations: [
      { number: '1', property: 'margin', description: 'Внешний отступ (снаружи)' },
      { number: '2', property: 'border', description: 'Граница элемента' },
      { number: '3', property: 'padding', description: 'Внутренний отступ (внутри)' },
      { number: '4', property: 'width/height', description: 'Ширина и высота' },
    ],
  },
  {
    id: 'flexbox',
    title: 'Flexbox',
    icon: <Layout className="w-4 h-4" />,
    description: 'Располагай элементы гибко и удобно.',
    htmlCode: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,
    cssCode: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background: #f3f4f6;
  padding: 20px;
}

.item {
  background: #ec4899;
  color: white;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`,
    result: `<div style="display: flex; justify-content: space-between; align-items: center; gap: 10px; background: #f3f4f6; padding: 20px;">
  <div style="background: #ec4899; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-weight: bold;">1</div>
  <div style="background: #ec4899; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-weight: bold;">2</div>
  <div style="background: #ec4899; color: white; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-weight: bold;">3</div>
</div>`,
    explanations: [
      { number: '1', property: 'display: flex', description: 'Включает Flexbox' },
      { number: '2', property: 'justify-content', description: 'Выравнивание по горизонтали' },
      { number: '3', property: 'align-items', description: 'Выравнивание по вертикали' },
      { number: '4', property: 'gap', description: 'Расстояние между элементами' },
    ],
  },
];

const CSSSection: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState('colors');
  const currentLesson = lessons.find((l) => l.id === activeLesson) || lessons[0];

  return (
    <section id="css" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Palette className="w-4 h-4" />
            CSS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Стили <span className="text-pink-500">CSS</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            CSS (Cascading Style Sheets) отвечает за внешний вид. С его помощью можно менять цвета, шрифты, расположение элементов и создавать анимации!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setActiveLesson(lesson.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeLesson === lesson.id
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {lesson.icon}
              {lesson.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Code */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-pink-500" />
                <span className="font-medium">{currentLesson.title}</span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">{currentLesson.description}</p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">HTML:</p>
                <CodeBlock code={currentLesson.htmlCode} language="html" showCopy={false} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">CSS:</p>
                <CodeBlock code={currentLesson.cssCode} language="css" showCopy={false} />
              </div>
            </div>
          </div>

          {/* Right - Result */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">Результат</span>
              </div>
              <div className="p-4">
                <div
                  className="border-2 border-dashed border-gray-200 rounded-xl p-6 min-h-[150px] flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: currentLesson.result }}
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <span className="font-medium">Свойства CSS</span>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {currentLesson.explanations.map((exp, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {exp.number}
                      </div>
                      <div>
                        <code className="text-pink-500 bg-pink-50 px-2 py-1 rounded text-sm">
                          {exp.property}
                        </code>
                        <p className="text-gray-600 text-sm mt-1">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSSSection;
