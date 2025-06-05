'use client';

import React from 'react';
// import { motion } from 'framer-motion'; // Закомментировано
import Image from 'next/image'; // Импортируем компонент Image из Next.js

export default function Links() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-blue-950 text-white overflow-hidden pt-20">
      {/* TODO: Интегрировать шапку и футер через Layout или компоненты */}

      <section className="container mx-auto px-8 py-16 animate-fadeIn">
        <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-center">Ссылки и QR Code</h1>

        {/* Секция ссылок */}
        <div className="mb-16 animate-slideUp animate-delay-100">
          <h2 className="text-3xl font-bold text-white mb-8">Полезные ссылки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Пример карточки ссылки */}
            {[...Array(4)].map((_, index) => (
              // Удалены motion компоненты
              <div
                key={index}
                // initial={{ opacity: 0, y: 50 }} // Закомментировано
                // animate={{ opacity: 1, y: 0 }} // Закомментировано
                // transition={{ duration: 0.5, delay: index * 0.1 }} // Закомментировано
                className={`bg-gray-800 rounded-lg p-6 flex items-center space-x-6 shadow-lg border border-gray-700 animate-slideUp animate-delay-${200 + index * 100}`}
              >
                {/* TODO: Заменить на реальную иконку */}
                <div className="w-12 h-12 bg-gray-700 rounded flex-shrink-0 flex items-center justify-center text-gray-400 text-xl">🔗</div> {/* Placeholder иконки */}
                <div>
                  <h3 className="text-xl font-bold mb-2">Название ссылки {index + 1}</h3>
                  <p className="text-gray-400 text-sm">Краткое описание ссылки.</p>
                  {/* TODO: Заменить на реальную ссылку */}
                  <a href="#" className="text-purple-400 hover:underline text-sm">Перейти</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Секция QR Code */}
        <div className="text-center animate-slideUp animate-delay-700">
          <h2 className="text-3xl font-bold text-white mb-8">QR Code для быстрого доступа</h2>
          
          <div className="w-64 h-64 mx-auto rounded-lg overflow-hidden">
            <Image 
              src="https://ibb.co/5XLt9GHn"
              alt="QR Code"
              width={256} // Ширина изображения
              height={256} // Высота изображения
              unoptimized={true} // Отключаем оптимизацию Next.js для GIF
            />
          </div>
          <p className="text-gray-400 text-sm mt-4">Отсканируйте код, чтобы получить доступ.</p>
        </div>
      </section>

      {/* TODO: Интегрировать футер */}
    </div>
  );
} 
