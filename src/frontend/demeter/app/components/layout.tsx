"use client";

import { useState } from 'react';
import DashboardContent from '../components/dashboard';
import UploadContent from '../components/upload';
import TimelineContent from '../components/timeline';

export default function Layout() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen">
      {/* Menu à esquerda fixo */}
      <div className="bg-[#575EA6] w-1/6 flex flex-col fixed h-full">
        <div className="flex justify-center my-8">
          <img src="/logo.png" alt="Logo da Empresa" className="w-40 h-auto" />
        </div>

        <div className="flex flex-col space-y-4 py-12 border-t border-b border-white">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`${
              activeTab === 'dashboard' ? 'font-bold' : 'font-normal'
            } text-white text-lg flex items-center hover:underline pl-6 mb-2`}
          >
            <img src="/dashboard.png" alt="Dashboard Icon" className="w-6 h-6 mr-6" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`${
              activeTab === 'upload' ? 'font-bold' : 'font-normal'
            } text-white text-lg flex items-center hover:underline pl-6`}
          >
            <img src="/upload.png" alt="Upload Icon" className="w-6 h-6 mr-6" />
            Upload de Imagem
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`${
              activeTab === 'timeline' ? 'font-bold' : 'font-normal'
            } text-white text-lg flex items-center hover:underline pl-6`}
          >
            <img src="/upload.png" alt="Timer Icon" className="w-6 h-6 mr-6" />
            Linha do Tempo
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <span className="text-white text-lg font-normal flex items-center pl-6 my-10">
            Português (Brasil)
          </span>
          <a href="/login" className="text-white text-lg font-medium flex items-center hover:underline pl-6">
            <img src="/exit.png" alt="Exit Icon" className="w-6 h-6 mr-6" />
            Sair
          </a>
        </div>
      </div>

      {/* Conteúdo principal dinâmico */}
      <div className="w-5/6 ml-[16.666%] p-8 bg-white">
        {activeTab === 'dashboard' && <DashboardContent />}
        {activeTab === 'upload' && <UploadContent />}
        {activeTab === 'timeline' && <TimelineContent />}
      </div>
    </div>
  );
}
