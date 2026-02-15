import React, { useState } from 'react';
import { Zap, Calculator, Play, MousePointer, Code, Copy, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/CodeBlock';

interface Lesson {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  code: string;
  tryItCode: string;
  concepts: { icon: string; title: string; description: string }[];
}

const lessons: Lesson[] = [
  {
    id: 'variables',
    title: 'Переменные',
    icon: <Calculator className="w-4 h-4" />,
    description: 'Переменные хранят данные: числа, текст и многое другое.',
    code: `// Создаём переменные
let name = "Алиса";
let age = 12;
let isStudent = true;

// Выводим в консоль
console.log("Привет, " + name);
console.log("Тебе " + age + " лет");

// Меняем значение
age = 13;
console.log("Теперь тебе " + age);`,
    tryItCode: `let name = "Твое имя";
let age = 12;

// Нажми "Запустить"!`,
    concepts: [
      { icon: '📦', title: 'let', description: 'Создаёт переменную' },
      { icon: '🔤', title: 'Строка', description: 'Текст в кавычках' },
      { icon: '🔢', title: 'Число', description: 'Целое или дробное' },
      { icon: '✅', title: 'Boolean', description: 'true или false' },
    ],
  },
  {
    id: 'functions',
    title: 'Функции',
    icon: <Play className="w-4 h-4" />,
    description: 'Функции — это блоки кода, которые можно вызывать многократно.',
    code: `// Создаём функцию
function greet(name) {
  return "Привет, " + name + "!";
}

// Вызываем функцию
let message1 = greet("Алиса");
let message2 = greet("Боб");

console.log(message1); // Привет, Алиса!
console.log(message2); // Привет, Боб!

// Функция с вычислением
function sum(a, b) {
  return a + b;
}

console.log(sum(5, 3)); // 8`,
    tryItCode: `function greet(name) {
  return "Привет, " + name;
}

// Попробуй вызвать функцию!`,
    concepts: [
      { icon: '⚙️', title: 'function', description: 'Объявляет функцию' },
      { icon: '📥', title: 'Параметры', description: 'Данные для функции' },
      { icon: '📤', title: 'return', description: 'Возвращает результат' },
      { icon: '🎯', title: 'Вызов', description: 'Запускает функцию' },
    ],
  },
  {
    id: 'events',
    title: 'События',
    icon: <MousePointer className="w-4 h-4" />,
    description: 'JavaScript реагирует на действия пользователя: клики, наведение, ввод.',
    code: `// Находим кнопку
let button = document.querySelector('#myButton');

// Добавляем обработчик клика
button.addEventListener('click', function() {
  alert('Кнопка нажата!');
});

// Изменяем текст при наведении
let box = document.querySelector('.box');

box.addEventListener('mouseenter', function() {
  box.style.backgroundColor = 'blue';
});

box.addEventListener('mouseleave', function() {
  box.style.backgroundColor = 'gray';
});`,
    tryItCode: `// Найди элемент и добавь событие
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  alert('Привет!');
});`,
    concepts: [
      { icon: '🖱️', title: 'click', description: 'Клик мышью' },
      { icon: '👆', title: 'mouseenter', description: 'Наведение мыши' },
      { icon: '⌨️', title: 'keydown', description: 'Нажатие клавиши' },
      { icon: '📝', title: 'input', description: 'Ввод текста' },
    ],
  },
  {
    id: 'dom',
    title: 'Изменение HTML',
    icon: <Code className="w-4 h-4" />,
    description: 'JavaScript может изменять HTML и CSS на лету!',
    code: `// Находим элемент
let title = document.querySelector('h1');

// Меняем текст
title.textContent = 'Новый заголовок!';

// Меняем стиль
title.style.color = 'red';
title.style.fontSize = '32px';

// Добавляем класс
title.classList.add('highlight');

// Создаём новый элемент
let newDiv = document.createElement('div');
newDiv.textContent = 'Я новый элемент!';
document.body.appendChild(newDiv);`,
    tryItCode: `// Найди элемент и измени его
let elem = document.querySelector('#text');

elem.textContent = 'Новый текст!';
elem.style.color = 'purple';`,
    concepts: [
      { icon: '🔍', title: 'querySelector', description: 'Находит элемент' },
      { icon: '✏️', title: 'textContent', description: 'Меняет текст' },
      { icon: '🎨', title: 'style', description: 'Меняет стили' },
      { icon: '➕', title: 'createElement', description: 'Создаёт элемент' },
    ],
  },
];

const JavaScriptSection: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState('variables');
  const [output, setOutput] = useState<string[]>([]);
  const currentLesson = lessons.find((l) => l.id === activeLesson) || lessons[0];

  const runCode = () => {
    const logs: string[] = [];
    const mockConsole = {
      log: (...args: any[]) => {
        logs.push(args.join(' '));
      },
    };

    try {
      // eslint-disable-next-line no-new-func
      const func = new Function('console', currentLesson.tryItCode);
      func(mockConsole);
      if (logs.length === 0) {
        logs.push('Код выполнен! (нет вывода в консоль)');
      }
    } catch (error) {
      logs.push('Ошибка: ' + (error as Error).message);
    }

    setOutput(logs);
  };

  return (
    <section id="javascript" className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            JavaScript
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Интерактив с <span className="text-yellow-500">JavaScript</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            JavaScript добавляет магию на сайт! Он делает страницы интерактивными: реагирует на клики, анимирует элементы и может менять всё в реальном времени.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => {
                setActiveLesson(lesson.id);
                setOutput([]);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeLesson === lesson.id
                  ? 'bg-yellow-500 text-white'
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
                <Calculator className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">{currentLesson.title}</span>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">{currentLesson.description}</p>
              <CodeBlock code={currentLesson.code} language="javascript" />
            </div>
          </div>

          {/* Right - Try it */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                <Play className="w-5 h-5 text-green-500" />
                <span className="font-medium">Попробуй сам!</span>
              </div>
              <div className="p-4">
                <CodeBlock code={currentLesson.tryItCode} language="javascript" showCopy={false} />
                <Button
                  onClick={runCode}
                  className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Запустить код
                </Button>
                {output.length > 0 && (
                  <div className="mt-4 bg-gray-900 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <Terminal className="w-4 h-4" />
                      Консоль:
                    </div>
                    {output.map((line, i) => (
                      <div key={i} className="text-green-400 font-mono text-sm">
                        {`> ${line}`}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <span className="font-medium">Ключевые понятия</span>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  {currentLesson.concepts.map((concept, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="text-2xl">{concept.icon}</div>
                      <div>
                        <div className="font-medium text-gray-900">{concept.title}</div>
                        <div className="text-gray-600 text-sm">{concept.description}</div>
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

export default JavaScriptSection;
