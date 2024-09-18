import { useState } from 'react';

export default function TimelineContent() {
  const florestas = [
    {
      id: 1,
      nome: 'Floresta Amazônica',
      years: [2015, 2016, 2017, 2018, 2019, 2020],
      images: {
        2015: '/amazonia15.jpeg',
        2016: '/amazonia16.jpeg',
        2017: '/amazonia17.jpeg',
        2018: '/amazonia18.jpeg',
        2019: '/amazonia19.jpeg',
        2020: '/amazonia20.jpeg',
      },
    },
    {
      id: 2,
      nome: 'Floresta Atlântica',
      years: [2015, 2016, 2017, 2018, 2019, 2020],
      images: {
        2015: '/atlantica15.jpeg',
        2016: '/atlantica16.jpeg',
        2017: '/atlantica17.jpeg',
        2018: '/atlantica18.jpeg',
        2019: '/atlantica19.jpeg',
        2020: '/atlantica20.jpeg',
      },
    },
  ];

  const [selectedFloresta, setSelectedFloresta] = useState<{ id: number; nome: string; years: number[]; images: { [key: number]: string | undefined }; } | null>(null);
  const [hoveredYear, setHoveredYear] = useState<number | null>(null); // Armazena o ano em hover

  // Função para selecionar a floresta
  const handleFlorestaChange = (event: { target: { value: string; }; }) => {
    const floresta = florestas.find((f) => f.nome === event.target.value);
    setSelectedFloresta(floresta ?? null); // Garantir que não seja undefined
  };

  return (
    <div className="p-4">
      <h2 className="text-5xl text-gray-600 font-bold mb-3">
        Escolha a Floresta
      </h2>

      {/* Filtro de Florestas */}
      <div className="mb-8">
        <select
          onChange={handleFlorestaChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Selecione uma Floresta</option>
          {florestas.map((floresta) => (
            <option key={floresta.id} value={floresta.nome}>
              {floresta.nome}
            </option>
          ))}
        </select>
      </div>

      {/* Linha do Tempo */}
      {selectedFloresta && (
        <div>
          <h3 className="text-xl font-bold mb-4">Linha do Tempo</h3>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {selectedFloresta.years.map((year) => (
              <div
                key={year}
                className="p-4 bg-white border rounded-lg shadow cursor-pointer hover:bg-green-100"
                onMouseEnter={() => setHoveredYear(year)}
                onMouseLeave={() => setHoveredYear(null)}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Imagem da Floresta */}
      {hoveredYear && selectedFloresta && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">
            Imagem da {selectedFloresta.nome} em {hoveredYear}
          </h3>
          <img
            src={selectedFloresta.images[hoveredYear] || ''}
            alt={`Floresta ${selectedFloresta.nome} em ${hoveredYear}`}
            className="w-full max-w-md h-auto rounded-lg shadow"
            />
        </div>
      )}
    </div>
  );
}
