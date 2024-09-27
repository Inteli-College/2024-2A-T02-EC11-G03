"use client";

import { useState } from 'react';
import DashboardContent from '../components/dashboard';
import UploadContent from '../components/upload';
import TimelineContent from '../components/timeline';
import FollowupContent from '../components/followup';

export default function Layout() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen">
      {/* Menu à esquerda fixo */}
      <div className="bg-[#242424] w-1/6 flex flex-col fixed h-full">
        <div className="flex justify-center my-8">
          <img src="/logo.png" alt="Logo da Empresa" className="w-40 h-auto" />
        </div>
        <div className="flex flex-col space-y-4 py-12 border-t border-b border-white">
          
        <button
            onClick={() => setActiveTab('followup')}
            className={`${activeTab === 'followup' ? 'font-bold' : 'font-normal'
              } text-white text-lg flex items-center hover:underline pl-6 mb-2`}
          >
            <svg style={{ marginRight: 10 }} className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" color="#fff" viewBox="0 0 24 24">
              <path stroke="#fff" stroke-linecap="round" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            FollowUp: Florestas
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className={`${activeTab === 'dashboard' ? 'font-bold' : 'font-normal'
              } text-white text-lg flex items-center hover:underline pl-6 mb-2`}
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" style={{ marginRight: 10 }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 17h6m-3 3v-6M4.857 4h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 9.143V4.857C4 4.384 4.384 4 4.857 4Zm10 0h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857h-4.286A.857.857 0 0 1 14 9.143V4.857c0-.473.384-.857.857-.857Zm-10 10h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 19.143v-4.286c0-.473.384-.857.857-.857Z" />
            </svg>
            Dashboard
          </button>

          <button
            onClick={() => setActiveTab('upload')}
            className={`${activeTab === 'upload' ? 'font-bold' : 'font-normal'
              } text-white text-lg flex items-center hover:underline pl-6`}
          >
            <svg style={{ marginRight: 10 }} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2" />
            </svg>

            Upload de Imagem
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`${activeTab === 'timeline' ? 'font-bold' : 'font-normal'
              } text-white text-lg flex items-center hover:underline pl-6`}
          >
            <svg style={{ marginRight: 10 }} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
            </svg>

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
        {activeTab === 'followup' && <FollowupContent />}
        {activeTab === 'dashboard' && <DashboardContent />}
        {activeTab === 'upload' && <UploadContent />}
        {activeTab === 'timeline' && <TimelineContent />}
      </div>
    </div>
  );
}
