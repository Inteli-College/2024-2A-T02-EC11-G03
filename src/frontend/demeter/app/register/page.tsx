"use client";
import { useState } from 'react';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar o envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Desativa o botão
    // Dados que serão enviados para a API
    const data = {
      name,
      email,
      password,
      role: ['ADMIN'], // Role fixo como ADMIN
    };
    try {
      // Enviando os dados para a API
      const response = await fetch('http://localhost:8000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success('Conta criada com sucesso!', {
          position: 'top-right',
          onClose: () => {
            // Redirecionar para a página de login após o toast desaparecer
            window.location.href = '/login';
          },
        });
      } else {
        // Tratamento de erro
        const errorData = await response.json();
        toast.error(`Erro: ${errorData.message || 'Erro ao registrar'}`, {
          position: 'top-right',
          onClose: () => setIsSubmitting(false), // Reativa o botão após o toast
        });
      }
    } catch (error) {
      // Erro de rede ou requisição
      console.error('Erro ao conectar com o backend:', error);
      toast.error('Erro ao conectar com o servidor. Tente novamente.', {
        position: 'top-right',
        onClose: () => setIsSubmitting(false), // Reativa o botão após o toast
      });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#575EA6] to-[#21AF7C]">
      {/* Componente ToastContainer */}
      <ToastContainer autoClose={3000} />
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl flex">
        {/* Coluna da Imagem */}
        <div className="w-1/2 hidden md:flex items-center justify-center">
          <img
            src="/symbol.png"
            alt="Imagem de Registro"
            className="w-full h-auto object-cover rounded-l-lg"
          />
        </div>
        {/* Coluna do Formulário */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-5xl text-gray-600 font-bold mb-3">Crie sua conta!</h2>
            <p className="text-lg mb-8 text-gray-600">Insira as informações!</p>
            <form onSubmit={handleSubmit}>
              {/* Campo Nome */}
              <div className="mb-4">
                <input
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Nome"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isSubmitting} // Desativa o campo durante o envio
                />
              </div>
              {/* Campo Email */}
              <div className="mb-4">
                <input
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting} // Desativa o campo durante o envio
                />
              </div>
              {/* Campo Senha */}
              <div className="mb-4">
                <input
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="password"
                  placeholder="Senha"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isSubmitting} // Desativa o campo durante o envio
                />
              </div>
              <div className="flex items-center justify-end mb-6">
                <span className="text-gray-600">
                  Já tem uma conta?{' '}
                  <Link href="/login" className={`text-gray-950 hover:underline ${isSubmitting ? 'pointer-events-none opacity-50' : ''}`}>
                    Entre
                  </Link>
                </span>
                <button
                  type="submit"
                  className={`py-2 m-2 px-8 bg-gradient-to-r from-[#009606] to-[#76C115] text-white rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
                  disabled={isSubmitting} // Desativa o botão durante o envio
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}