import React, { useState } from 'react';
import { FileCode, Type, List, Link, Copy, Play } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';

interface Lesson {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  code: string;
  result: string;
  explanations: { number: string; tag: string; description: string }[];
}

const lessons: Lesson[] = [
  {
    id: 'basics',
    title: 'Основы HTML',
    icon: <FileCode className="w-4 h-4" />,
    description: 'HTML — это язык разметки, который создаёт структуру веб-страницы.',
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Моя первая страница</title>
</head>
<body>
  <h1>Привет, мир!</h1>
  <p>Это мой первый веб-сайт.</p>
</body>
</html>`,
    result: `<h1 style="color: #8b5cf6; font-size: 24px; margin-bottom: 8px;">Привет, мир!</h1>
<p>Это мой первый веб-сайт.</p>`,
    explanations: [
      { number: '1', tag: '<!DOCTYPE html>', description: 'Говорит браузеру, что это HTML5 документ' },
      { number: '2', tag: '<html>', description: 'Корневой элемент всей страницы' },
      { number: '3', tag: '<head>', description: 'Содержит мета-информацию (заголовок, стили)' },
      { number: '4', tag: '<body>', description: 'Всё видимое содержимое страницы' },
      { number: '5', tag: '<h1>', description: 'Заголовок первого уровня (самый большой)' },
      { number: '6', tag: '<p>', description: 'Абзац текста' },
    ],
  },
  {
    id: 'text',
    title: 'Теги текста',
    icon: <Type className="w-4 h-4" />,
    description: 'Теги для форматирования текста: заголовки, параграфы, выделение.',
    code: `<h1>Главный заголовок</h1>
<h2>Подзаголовок</h2>
<p>Обычный текст <strong>жирный</strong> и <em>курсив</em>.</p>
<p>Новая строка<br>переноса текста</p>`,
    result: `<h1 style="color: #333; font-size: 28px; margin-bottom: 8px;">Главный заголовок</h1>
<h2 style="color: #666; font-size: 22px; margin-bottom: 8px;">Подзаголовок</h2>
<p style="margin-bottom: 8px;">Обычный текст <strong>жирный</strong> и <em>курсив</em>.</p>
<p>Новая строка<br>переноса текста</p>`,
    explanations: [
      { number: '1', tag: '<h1> - <h6>', description: 'Заголовки разных уровней' },
      { number: '2', tag: '<strong>', description: 'Важный (жирный) текст' },
      { number: '3', tag: '<em>', description: 'Акцент (курсив)' },
      { number: '4', tag: '<br>', description: 'Перенос строки' },
    ],
  },
  {
    id: 'lists',
    title: 'Списки',
    icon: <List className="w-4 h-4" />,
    description: 'Создавай нумерованные и маркированные списки.',
    code: `<h3>Мои хобби:</h3>
<ul>
  <li>Программирование</li>
  <li>Чтение книг</li>
  <li>Спорт</li>
</ul>

<h3>Топ-3 языка:</h3>
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>`,
    result: `<h3 style="font-size: 18px; margin-bottom: 8px;">Мои хобби:</h3>
<ul style="margin-left: 20px; margin-bottom: 16px;">
  <li>Программирование</li>
  <li>Чтение книг</li>
  <li>Спорт</li>
</ul>
<h3 style="font-size: 18px; margin-bottom: 8px;">Топ-3 языка:</h3>
<ol style="margin-left: 20px;">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>`,
    explanations: [
      { number: '1', tag: '<ul>', description: 'Маркированный список' },
      { number: '2', tag: '<ol>', description: 'Нумерованный список' },
      { number: '3', tag: '<li>', description: 'Элемент списка' },
    ],
  },
  {
    id: 'links',
    title: 'Ссылки и картинки',
    icon: <Link className="w-4 h-4" />,
    description: 'Добавляй ссылки на другие страницы и изображения.',
    code: `<p>Посети <a href="https://example.com">мой сайт</a>!</p>

<img src="https://via.placeholder.com/150" 
     alt="Пример картинки"
     width="150">

<a href="https://example.com">
  <img src="https://via.placeholder.com/100" 
       alt="Кликни меня">
</a>`,
    result: `<p style="margin-bottom: 16px;">Посети <a href="#" style="color: #8b5cf6; text-decoration: underline;">мой сайт</a>!</p>
<img src="https://via.placeholder.com/150" alt="Пример картинки" style="margin-bottom: 16px; border-radius: 8px;">
<br>
<a href="#">
  <img src="https://via.placeholder.com/100" alt="Кликни меня" style="border-radius: 8px;">
</a>`,
    explanations: [
      { number: '1', tag: '<a>', description: 'Ссылка на другую страницу' },
      { number: '2', tag: '<img>', description: 'Изображение' },
      { number: '3', tag: 'href', description: 'Адрес ссылки' },
      { number: '4', tag: 'alt', description: 'Описание картинки' },
    ],
  },
];

const HTMLSection: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState('basics');
  const currentLesson = lessons.find((l) => l.id === activeLesson) || lessons[0];

  return (
    <section id="html" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FileCode className="w-4 h-4" />
            HTML
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Основы <span className="text-orange-500">HTML</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            HTML (HyperText Markup Language) — это скелет веб-страницы. Он создаёт структуру: заголовки, параграфы, списки и многое другое.
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
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                <FileCode className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{currentLesson.title}</span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">{currentLesson.description}</p>
              <CodeBlock code={currentLesson.code} language="html" />
            </div>
          </div>

          {/* Right - Result */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                <Play className="w-5 h-5 text-green-500" />
                <span className="font-medium">Результат</span>
              </div>
              <div className="p-4">
                <div
                  className="border-2 border-dashed border-gray-200 rounded-xl p-6 min-h-[150px]"
                  dangerouslySetInnerHTML={{ __html: currentLesson.result }}
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <span className="font-medium">Что это значит?</span>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {currentLesson.explanations.map((exp, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {exp.number}
                      </div>
                      <div>
                        <code className="text-orange-500 bg-orange-50 px-2 py-1 rounded text-sm">
                          {exp.tag}
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

export default HTMLSection;
