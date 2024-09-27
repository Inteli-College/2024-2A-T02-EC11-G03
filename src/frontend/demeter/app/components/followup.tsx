import { useState, useEffect } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import 'chart.js/auto';

export default function FollowUpContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userName, setUserName] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [latitude, setLatitude] = useState(-23.5505); // Latitude padrão
  const [longitude, setLongitude] = useState(-46.6333); // Longitude padrão

  // Dados das florestas (substitua pelos dados reais)

  const forests = [
    { id: 1, title: 'Floresta da Tijuca', location: 'Rio de Janeiro', treeCount: 5000, image: '/amazonia15.jpeg', latitude: -3.4653, longitude: -62.2159, carbono: '1000 toneladas' },
    { id: 2, title: 'Floresta de Pedra Branca', location: 'Rio de Janeiro', treeCount: 3000, image: '/amazonia16.jpeg', latitude: 48.2077, longitude: 8.2097, carbono: '5000 toneladas' },
    { id: 3, title: 'Floresta Nacional de Ipanema', location: 'São Paulo', treeCount: 7000, image: '/amazonia17.jpeg', latitude: 0.7893, longitude: 113.9213, carbono: '2000 toneladas' },
    // Adicione mais florestas conforme necessário
  ];

  // Carregar o nome do usuário quando o componente for montado
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? forests.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === forests.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLocationChange = (event) => {
    const selected = forests.find(forest => forest.title === event.target.value);
    if (selected) {
      setSelectedLocation(selected.title);
      setLatitude(selected.latitude); // Atualiza a latitude com o valor da floresta selecionada
      setLongitude(selected.longitude); // Atualiza a longitude com o valor da floresta selecionada
    }
  };
  

  // Carregando a API do Google Maps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyD1tsZ7oiNNtf-iG6ia0_v7r3jctlzC39U', // Adicione sua chave no .env.local
  });

  if (!isLoaded) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-5xl text-gray-600 font-bold mb-3">
        Olá, <b>{userName || 'Usuário'}</b>
      </h2>
      <p className="text-lg mb-8 text-gray-600">
        Monitore o impacto ambiental e explore as atualizações mais recentes da Abundance aqui
      </p>
      {/* Carrossel de cards com florestas */}
      <div className="grid grid-cols-3 gap-12 mb-8">
        {forests.map((forest) => (
          <div key={forest.id} className="bg-white p-10 shadow-lg rounded-lg">
            <h3 className="text-xl text-center font-bold mb-4">{forest.title}</h3>
            <p className="text-lg text-center"><b>Localização:</b> {forest.location}</p>
            <p className="text-lg text-center"><b>Quantidade de Árvores:</b> {forest.treeCount}</p>
            <p className="text-lg text-center"><b>Emissão de Carbono:</b> {forest.carbono}</p>
            <div className="flex justify-center mb-4">
              <img style={{marginTop:50}}src={forest.image} alt={forest.title} className="w-50 h-40 object-cover rounded-lg" />
            </div>
            <button style={{marginLeft: 170, marginTop:20}} className="py-2 px-4 bg-gradient-to-r from-[#009606] to-[#76C115] text-white rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500">
              Comprar Árvores
            </button>
          </div>
        ))}
      </div>

      {/* Mapa com Google Maps */}
      <div className="mb-8">
        <label className="block text-lg mb-2">Selecione uma Floresta:</label>
        <select onChange={handleLocationChange} className="w-full p-2 border border-gray-300 rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white mb-4">
          <option value="">Escolha uma floresta</option>
          {forests.map(forest => (
            <option key={forest.id} value={forest.title}>{forest.title}</option>
          ))}
        </select>
        <div className="h-80 w-full">
          <GoogleMap
            center={{ lat: latitude, lng: longitude }}
            zoom={13}
            mapContainerStyle={{ width: '100%', height: '100%' }}
          >
            {selectedLocation && <Marker position={{ lat: latitude, lng: longitude }} />}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}
