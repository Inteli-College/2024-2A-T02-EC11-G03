"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#575EA6] to-[#21AF7C]">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl flex">
        {/* Coluna da Imagem */}
        <div className="w-1/2 hidden md:flex items-center justify-center">
          <img
            src="/symbol.png"
            alt="Imagem de Login"
            className="w-full h-auto object-cover rounded-l-lg"
          />
        </div>

        {/* Coluna do Formulário */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-5xl text-gray-600 font-bold mb-3">Bem vindo de volta!</h2>
            <p className="text-lg mb-8 text-gray-600">Faça o Login em sua conta</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-10">
                <input
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Username"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="password"
                  placeholder="Senha"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <div className="flex items-center justify-end mb-6">
                <span className="text-gray-600">
                  Ainda não tem conta?{' '}
                  <Link href="/register" className="text-gray-950 hover:underline">
                    Cadastre-se
                  </Link>
                </span>
                <button
                  type="submit"
                  className="py-2 m-2 px-8 bg-gradient-to-r from-[#009606] to-[#76C115] text-white rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
