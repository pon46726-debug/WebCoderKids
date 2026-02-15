import React, { useState } from 'react';
import { Star, Trophy, FileCode, Copy, Play, Check, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CodeBlock from '@/components/CodeBlock';

interface Task {
  id: string;
  title: string;
  description: string;
  htmlCode: string;
  cssCode?: string;
  result: string;
  hints: string[];
}

interface Level {
  stars: number;
  tasks: Task[];
}

const levels: Level[] = [
  {
    stars: 1,
    tasks: [
      {
        id: 'task1-1',
        title: 'HTML Разметка',
        description: 'Создай красивую визитку с именем и любимым цветом.',
        htmlCode: `<div class="card">
  <h1>Твоё имя</h1>
  <p>Твоя профессия</p>
</div>`,
        cssCode: `.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}`,
        result: `<div style="background: white; padding: 20px; border-radius: 10px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <h1 style="color: #8b5cf6; font-size: 24px; margin-bottom: 8px;">Твоё имя</h1>
  <p style="color: #666;">Твоя профессия</p>
</div>`,
        hints: [
          'Измени текст в тегах <h1> и <p>',
          'Добавь свои данные',
          'Попробуй изменить цвет фона',
        ],
      },
    ],
  },
  {
    stars: 2,
    tasks: [
      {
        id: 'task2-1',
        title: 'Список дел',
        description: 'Создай список из 3-х дел на сегодня.',
        htmlCode: `<h2>Мои дела на сегодня:</h2>
<ul class="todo-list">
  <li>Выучить HTML</li>
  <li>Попрактиковать CSS</li>
  <li>Написать код</li>
</ul>`,
        cssCode: `.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  background: #f3f4f6;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
}`,
        result: `<h2 style="font-size: 20px; margin-bottom: 12px;">Мои дела на сегодня:</h2>
<ul style="list-style: none; padding: 0;">
  <li style="background: #f3f4f6; padding: 10px; margin: 5px 0; border-radius: 5px;">✅ Выучить HTML</li>
  <li style="background: #f3f4f6; padding: 10px; margin: 5px 0; border-radius: 5px;">✅ Попрактиковать CSS</li>
  <li style="background: #f3f4f6; padding: 10px; margin: 5px 0; border-radius: 5px;">⏳ Написать код</li>
</ul>`,
        hints: [
          'Добавь свои дела в список',
          'Попробуй добавить эмодзи',
          'Измени цвет фона пунктов',
        ],
      },
    ],
  },
  {
    stars: 3,
    tasks: [
      {
        id: 'task3-1',
        title: 'Карточка профиля',
        description: 'Создай карточку профиля с аватаркой и кнопкой.',
        htmlCode: `<div class="profile">
  <div class="avatar">👤</div>
  <h2>Имя Фамилия</h2>
  <p>Веб-разработчик</p>
  <button class="btn">Подписаться</button>
</div>`,
        cssCode: `.profile {
  text-align: center;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
}

.avatar {
  font-size: 64px;
  margin-bottom: 10px;
}

.btn {
  background: white;
  color: #764ba2;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
}`,
        result: `<div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 20px; color: white; max-width: 300px;">
  <div style="font-size: 64px; margin-bottom: 10px;">👤</div>
  <h2 style="font-size: 24px; margin-bottom: 8px;">Имя Фамилия</h2>
  <p style="opacity: 0.9; margin-bottom: 16px;">Веб-разработчик</p>
  <button style="background: white; color: #764ba2; border: none; padding: 10px 20px; border-radius: 20px; font-weight: bold; cursor: pointer;">Подписаться</button>
</div>`,
        hints: [
          'Замени эмодзи на свою букву имени',
          'Измени текст профессии',
          'Попробуй другой градиент',
        ],
      },
    ],
  },
];

const PracticeSection: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState(0);
  const [activeTask, setActiveTask] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);

  const currentLevel = levels[activeLevel];
  const currentTask = currentLevel.tasks[activeTask];

  const toggleCompleted = (taskId: string) => {
    if (completed.includes(taskId)) {
      setCompleted(completed.filter((id) => id !== taskId));
    } else {
      setCompleted([...completed, taskId]);
    }
  };

  return (
    <section id="practice" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            Практика
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Задания <span className="text-purple-500">для практики</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Примени свои знания на практике! Выполняй задания разной сложности и становись настоящим веб-разработчиком.
          </p>
        </div>

        {/* Level selector */}
        <div className="flex justify-center gap-4 mb-8">
          {levels.map((level, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveLevel(index);
                setActiveTask(0);
                setShowHints(false);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeLevel === index
                  ? 'bg-purple-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex">
                {[...Array(level.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${activeLevel === index ? 'fill-white' : 'fill-gray-400'}`}
                  />
                ))}
              </div>
              <span>Уровень {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Task content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Code */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">{currentTask.title}</span>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">{currentTask.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">HTML:</p>
                  <CodeBlock code={currentTask.htmlCode} language="html" showCopy={false} />
                </div>
                {currentTask.cssCode && (
                  <div>
                    <p className="text-sm text-gray-500 mb-2">CSS:</p>
                    <CodeBlock code={currentTask.cssCode} language="css" showCopy={false} />
                  </div>
                )}
              </div>
            </div>

            {/* Hints */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => setShowHints(!showHints)}
                className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
              >
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">Подсказки</span>
                <span className="text-gray-400 text-sm ml-2">(нажми, чтобы показать)</span>
              </button>
              {showHints && (
                <div className="px-4 pb-4">
                  <ul className="space-y-2">
                    {currentTask.hints.map((hint, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <span className="text-yellow-500">💡</span>
                        {hint}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right - Result */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Результат</span>
                </div>
                <Button
                  onClick={() => toggleCompleted(currentTask.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    completed.includes(currentTask.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  }`}
                >
                  {completed.includes(currentTask.id) ? (
                    <>
                      <Check className="w-4 h-4" />
                      Выполнено!
                    </>
                  ) : (
                    <>
                      <Trophy className="w-4 h-4" />
                      Я выполнил!
                    </>
                  )}
                </Button>
              </div>
              <div className="p-4">
                <div
                  className="border-2 border-dashed border-gray-200 rounded-xl p-6 min-h-[200px] flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: currentTask.result }}
                />
              </div>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium">Твой прогресс</span>
                <span className="text-purple-600 font-bold">
                  {completed.length} / {levels.reduce((acc, l) => acc + l.tasks.length, 0)} заданий
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-purple-500 h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${(completed.length / levels.reduce((acc, l) => acc + l.tasks.length, 0)) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;
