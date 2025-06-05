"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import LoginModal from "./LoginModal";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="container mx-auto px-8 py-6 flex justify-between items-center z-20 relative">
      <div className="text-2xl font-bold text-purple-400">
        <Link href="/">Клуб Анонимных Стримеров</Link>
      </div>
      
      {/* Мобильное меню */}
      <button 
        className="md:hidden text-white p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Десктопное меню */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li>
            <Link 
              href="/" 
              className={`hover:text-purple-300 transition duration-300 ${pathname === '/' ? 'text-purple-300' : ''}`}
            >
              Анонсы/Новости
            </Link>
          </li>
          <li>
            <Link 
              href="/streamers" 
              className={`hover:text-purple-300 transition duration-300 ${pathname === '/streamers' ? 'text-purple-300' : ''}`}
            >
              Активные стримеры
            </Link>
          </li>
          <li>
            <Link 
              href="/links" 
              className={`hover:text-purple-300 transition duration-300 ${pathname === '/links' ? 'text-purple-300' : ''}`}
            >
              Ссылки и QR Code
            </Link>
          </li>
        </ul>
      </nav>

      <button className="hidden md:block bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300 font-semibold">
        Присоединиться
      </button>

      {/* Мобильное меню (выпадающее) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 md:hidden">
          <nav className="container mx-auto px-8 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="/" 
                  className={`block hover:text-purple-300 transition duration-300 ${pathname === '/' ? 'text-purple-300' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Анонсы/Новости
                </Link>
              </li>
              <li>
                <Link 
                  href="/streamers" 
                  className={`block hover:text-purple-300 transition duration-300 ${pathname === '/streamers' ? 'text-purple-300' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Активные стримеры
                </Link>
              </li>
              <li>
                <Link 
                  href="/links" 
                  className={`block hover:text-purple-300 transition duration-300 ${pathname === '/links' ? 'text-purple-300' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ссылки и QR Code
                </Link>
              </li>
              <li>
                <button className="w-full bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300 font-semibold">
                  Присоединиться
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
} 