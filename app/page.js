'use client';

import React from 'react';
// import { motion } from 'framer-motion'; // Закомментировано

export default function Home() {
  return (
    // Удалены motion компоненты
    <main className="container mx-auto px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-24 animate-fadeIn">
        <h1 className="text-5xl font-bold text-purple-400 mb-4">Добро пожаловать в Клуб Анонимных Стримеров</h1>
        <p className="text-xl text-gray-300 mb-8">Место, где страсть к стримингу объединяет нас, сохраняя анонимность.</p>
        <button className="bg-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300">Присоединиться</button>
      </section>

      {/* Discover Section */}
      <section className="mb-24 animate-fadeIn animate-delay-100">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Узнайте больше о нас</h2>
        {/* TODO: Добавить контент о клубе */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 animate-slideUp animate-delay-200">
            <h3 className="text-2xl font-semibold text-white mb-4">Наша миссия</h3>
            <p className="text-gray-300">Мы создаем безопасное и поддерживающее пространство для стримеров всех уровней, где можно делиться опытом и развиваться.</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 animate-slideUp animate-delay-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Что мы предлагаем</h3>
            <p className="text-gray-300">Общение, коллаборации, обмен знаниями и ресурсами, а также возможность найти свою аудиторию.</p>
          </div>
        </div>
      </section>

      {/* Popular This Week Section */}
      <section className="mb-24 animate-fadeIn animate-delay-400">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Популярные стримы этой недели</h2>
        {/* TODO: Заменить на реальные карточки стримов с анимацией */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(3).fill(0).map((_, i) => (
            // Удалены motion компоненты
            <div key={i} className={`bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden animate-slideUp animate-delay-${500 + i * 100}`}>
              <div className="w-full h-48 bg-gray-700 animate-pulse"></div> {/* Placeholder изображения */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Название стрима Placeholder</h3>
                <p className="text-gray-400 text-sm mb-4">Автор Placeholder</p>
                <div className="text-gray-400 text-sm">Теги: #placeholder #стрим</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="text-center mb-24 animate-fadeIn animate-delay-800">
        <h2 className="text-4xl font-bold text-white mb-8">Присоединяйтесь к нашему сообществу</h2>
        <p className="text-xl text-gray-300 mb-10">Станьте частью Клуба Анонимных Стримеров и начните свой путь!</p>
        <button className="bg-purple-600 px-10 py-4 rounded-lg text-xl font-semibold hover:bg-purple-700 transition duration-300">Вступить в Клуб</button>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-8 animate-fadeIn animate-delay-900">
        © 2024 Клуб Анонимных Стримеров. Все права защищены.
      </footer>
    </main>
  );
} 