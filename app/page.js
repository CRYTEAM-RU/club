'use client';

import React from 'react';
// import { motion } from 'framer-motion'; // Закомментировано

export default function Home() {
  return (
    // Удалены motion компоненты
    <main className="container mx-auto px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-24 animate-fadeIn">
        <h1 className="text-5xl font-bold text-purple-400 mb-4">Добро пожаловать в КАС</h1>
        <p className="text-xl text-gray-300 mb-8">Место, где страсть к стримингу объединяет нас.</p>
        <button className="bg-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300">Присоединиться</button>
      </section>

      {/* Discover Section */}
      <section className="mb-24 animate-fadeIn animate-delay-100">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Узнайте больше о нас</h2>
        {/* TODO: Добавить контент о клубе */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 animate-slideUp animate-delay-200">
            <h3 className="text-2xl font-semibold text-white mb-4">Наша миссия</h3>
            <p className="text-gray-300">Мы создаем безопасное и поддерживающее сообщество для стримеров всех уровней, где можно делиться опытом и развиваться.</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 animate-slideUp animate-delay-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Что мы предлагаем</h3>
            <p className="text-gray-300">Общение, коллаборации, обмен знаниями и ресурсами, а также возможность найти свою аудиторию.</p>
          </div>
        </div>
      </section>

      {/* Discord-style Cards Section */}
      <section className="mb-24 animate-fadeIn animate-delay-400">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Наша команда</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Card 1: Владелец */}
          <div className="bg-gray-800/70 rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs border border-gray-700">
            <div className="relative mb-4">
              <img src="/images/owner-cat.jpg" alt="Владелец" className="w-24 h-24 rounded-full border-4 border-purple-600 object-cover" />
              <span className="absolute bottom-0 right-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs border-2 border-gray-800">★</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">mellonn21</h3>
            <div className="text-gray-400 text-sm mb-2">@topoleg</div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-purple-700 text-white px-2 py-1 rounded text-xs font-semibold">Владелец</span>
              <span className="bg-gray-700 text-purple-300 px-2 py-1 rounded text-xs font-semibold">Twitch</span>
              <span className="bg-gray-700 text-blue-300 px-2 py-1 rounded text-xs font-semibold">Server Booster</span>
              <span className="bg-gray-700 text-red-300 px-2 py-1 rounded text-xs font-semibold">Админ</span>
            </div>
            <div className="text-gray-400 text-xs mb-1">В числе участников с 20 июн. 2017 г.</div>
            <div className="text-gray-400 text-xs mb-4">Подписка до 27 мар. 2025 г.</div>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2m-2-2h.01M7 13h2m10-2h2m-2 2h2m-6 9l-2.939-2.939m0 0L7 14.061m12 2.878l-2.939 2.939m0 0L14.061 17M10 4h4V3a1 1 0 10-2 0v1zm1 15v1a1 1 0 102 0v-1m-1-13a2 2 0 100-4 2 2 0 000 4zm0 16a2 2 100-4 2 2 0 000 4zM8 10h.01M16 10h.01" /></svg></a>
              <a href="#" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-7 7" /></svg></a>
            </div>
          </div>
          {/* Card 2: Место для второго участника */}
          <div className="bg-gray-800/70 rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs border border-gray-700 opacity-60">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-3xl text-gray-500">?</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Участник 2</h3>
            <div className="text-gray-400 text-sm mb-2">@username</div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs font-semibold">Роль</span>
            </div>
            <div className="text-gray-400 text-xs mb-1">В числе участников с ...</div>
            <div className="text-gray-400 text-xs mb-4">Подписка до ...</div>
            <div className="flex gap-3">
              <span className="text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2m-2-2h.01M7 13h2m10-2h2m-2 2h2m-6 9l-2.939-2.939m0 0L7 14.061m12 2.878l-2.939 2.939m0 0L14.061 17M10 4h4V3a1 1 0 10-2 0v1zm1 15v1a1 1 0 102 0v-1m-1-13a2 2 0 100-4 2 2 0 000 4zm0 16a2 2 100-4 2 2 0 000 4zM8 10h.01M16 10h.01" /></svg></span>
              <span className="text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-7 7" /></svg></span>
            </div>
          </div>
          {/* Card 3: Место для третьего участника */}
          <div className="bg-gray-800/70 rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs border border-gray-700 opacity-60">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-3xl text-gray-500">?</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Участник 3</h3>
            <div className="text-gray-400 text-sm mb-2">@username</div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs font-semibold">Роль</span>
            </div>
            <div className="text-gray-400 text-xs mb-1">В числе участников с ...</div>
            <div className="text-gray-400 text-xs mb-4">Подписка до ...</div>
            <div className="flex gap-3">
              <span className="text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2m-2-2h.01M7 13h2m10-2h2m-2 2h2m-6 9l-2.939-2.939m0 0L7 14.061m12 2.878l-2.939 2.939m0 0L14.061 17M10 4h4V3a1 1 0 10-2 0v1zm1 15v1a1 1 0 102 0v-1m-1-13a2 2 0 100-4 2 2 0 000 4zm0 16a2 2 100-4 2 2 0 000 4zM8 10h.01M16 10h.01" /></svg></span>
              <span className="text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-7 7" /></svg></span>
            </div>
          </div>
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
