'use client';

import React from 'react';
// import { motion } from 'framer-motion'; // Закомментировано

export default function Streamers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-blue-950 text-white overflow-hidden pt-20">
      {/* TODO: Интегрировать шапку и футер через Layout или компоненты */}
      
      <section className="container mx-auto px-8 py-16 animate-fadeIn">
        <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-center">Активные стримеры и персонал</h1>
        
        {/* TODO: Реализовать фильтрацию/поиск */}
        <div className="mb-10 flex justify-center space-x-4 animate-slideUp animate-delay-100">
            <button className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300 font-semibold">Все</button>
            <button className="border border-purple-600 text-purple-400 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 font-semibold">Стримеры</button>
            <button className="border border-purple-600 text-purple-400 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 font-semibold">Персонал</button>
        </div>

        {/* Сетка карточек участников */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Пример карточки участника */}
          {[...Array(8)].map((_, index) => (
            // Удалены motion компоненты
            <div
              key={index}
              // initial={{ opacity: 0, y: 50 }} // Закомментировано
              // animate={{ opacity: 1, y: 0 }} // Закомментировано
              // transition={{ duration: 0.5, delay: index * 0.1 }} // Закомментировано
              className={`bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-lg border border-gray-700 animate-slideUp animate-delay-${200 + index * 50}`}
            >
              {/* TODO: Заменить на реальный аватар участника */}
              <div className="w-24 h-24 bg-gray-700 rounded-full mb-4 flex-shrink-0 flex items-center justify-center text-gray-400 text-sm">Аватар</div>
              <h3 className="text-xl font-bold mb-2">Имя Участника {index + 1}</h3>
              <p className="text-purple-400 font-semibold mb-4">{index % 2 === 0 ? 'Стример' : 'Персонал'}</p>
              <p className="text-gray-400 text-sm mb-6">Краткое описание или роль участника. Это может быть его основная игра или специализация.</p>
              
              {/* TODO: Заменить на реальные иконки соцсетей/платформ и ссылки */}
              <div className="flex space-x-3 mt-auto">
                <a href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-7 7" /></svg> {/* Пример иконки ссылки */}
                </a>
                 <a href="#" className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2m-2-2h.01M7 13h2m10-2h2m-2 2h2m-6 9l-2.939-2.939m0 0L7 14.061m12 2.878l-2.939 2.939m0 0L14.061 17M10 4h4V3a1 1 0 10-2 0v1zm1 15v1a1 1 0 102 0v-1m-1-13a2 2 0 100-4 2 2 0 000 4zm0 16a2 2 100-4 2 2 0 000 4zM8 10h.01M16 10h.01" /></svg> {/* Пример иконки видео */}
                 </a>
                {/* Добавить другие иконки соцсетей при необходимости */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TODO: Интегрировать футер */}
    </div>
  );
} 