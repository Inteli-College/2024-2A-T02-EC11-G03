import { useState, useEffect } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
export default function DashboardContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para controlar a imagem atual
  const [userName, setUserName] = useState(''); // Estado para armazenar o nome do usuário
  // Carregar o nome do usuário quando o componente for montado
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);
  const images = ['/image1.jpeg', '/image2.jpg', '/image3.jpg']; // Array com as imagens do carrossel
  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleImageClick = () => {
    window.open('/image1.jpeg', '_blank'); // Abre a imagem em uma nova aba
  };
  // Dados e configurações dos gráficos
  const doughnutData = {
    labels: ['Vivas', 'Mortas'],
    datasets: [
      {
        data: [56, 44],
        backgroundColor: ['#21AE7B', '#5E64ED'],
      },
    ],
  };
  const doughnutOptions = {
    maintainAspectRatio: false, // Permite ajustar a proporção do gráfico
    aspectRatio: 1, // Define a proporção (1:1)
  };
  const barData = {
    labels: ['X', 'Y', 'Z'],
    datasets: [
      {
        label: 'Valores',
        data: [65, 59, 80],
        backgroundColor: '#36A2EB',
      },
    ],
  };
  const barOptions = {
    indexAxis: 'y' as const, // Tipagem explícita como 'y'
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Crescimento',
        data: [65, 59, 80, 81],
        fill: false,
        borderColor: '#FF6384',
      },
    ],
  };
  return (
    <div className="p-4">
      <h2 className="text-5xl text-gray-600 font-bold mb-3">
        Olá, <b>{userName || 'Usuário'}</b>
      </h2>
      <p className="text-lg mb-8 text-gray-600">
        Monitore o impacto ambiental e explore as atualizações mais recentes da Abundance aqui
      </p>
      {/* Cards superiores com gráficos */}
      <div className="grid grid-cols-3 gap-12 mb-8">
        {/* Card gráfico de rosquinha */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-xl text-center font-bold mb-4">Contagem de Árvores</h3>
          <div className="h-60 w-full flex justify-center items-center">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
        {/* Card gráfico de barras horizontais */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-xl text-center font-bold mb-4">Metas de Plantio</h3>
          <div className="h-60 w-full flex justify-center items-center">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
        {/* Card gráfico de linha */}
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-xl text-center font-bold mb-4">Contagem Temporal</h3>
          <div className="h-60 w-full flex justify-center items-center">
            <Line data={lineData} />
          </div>
        </div>
      </div>
      {/* Parte inferior com tabela e carrossel */}
      <div className="grid grid-cols-3 gap-4">
        {/* Tabela de registros */}
        <div className="col-span-2 bg-white p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Registro de Atividades</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">ID do Registro</th>
                <th className="px-4 py-2">Data do Registro</th>
                <th className="px-4 py-2">Nº DE ÁRVORES</th>
                <th className="px-4 py-2">IMAGEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">001</td>
                <td className="border px-4 py-2">01/09/2024</td>
                <td className="border px-4 py-2">50</td>
                <td className="border px-4 py-2 flex justify-center">
                  <button
                    className="py-1 px-5 bg-gradient-to-r from-[#009606] to-[#76C115] text-white rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
                    onClick={handleImageClick}
                  >
                    <img src="/upload.png" alt="Imagem" className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Carrossel de imagens */}
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold border-l-4 border-green-600 py-4 pl-4">Imagens Recentes</h3>
            <a href="#" className="text-gray-600 font-semibold">
              Ver todas
            </a>
          </div>
          <div className="flex justify-center items-center">
            <button onClick={handlePrevious} className="mr-4 p-2 bg-gray-200 rounded">
              &#8592;
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Imagem ${currentImageIndex + 1}`}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <button onClick={handleNext} className="ml-4 p-2 bg-gray-200 rounded">
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}