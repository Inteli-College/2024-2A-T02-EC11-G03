import { useState } from 'react';

export default function Calculator() {
  const [numTrees, setNumTrees] = useState(); // Estado para armazenar a quantidade de árvores
  const [carbonCreditsPerYear, setCarbonCreditsPerYear] = useState(0); // Créditos de carbono por ano
  const [carbonCredits2050, setCarbonCredits2050] = useState(0); // Créditos de carbono até 2050
  const [userName, setUserName] = useState(''); // Estado para armazenar o nome do usuário

  // Valores de carbono
  const CARBON_PER_TREE_ANNUAL = 8.33; // kg de CO₂ sequestrado por árvore por ano
  const CARBON_PER_TREE_2050 = 250; // kg de CO₂ sequestrado por árvore até 2050

  const handleCalculateCredits = () => {
    // Cálculo anual
    const totalCO2PerYear = numTrees * CARBON_PER_TREE_ANNUAL; // Total de CO₂ sequestrado por ano
    // Cálculo até 2050
    const totalCO2In2050 = numTrees * CARBON_PER_TREE_2050; // Total de CO₂ sequestrado até 2050
    
    setCarbonCreditsPerYear(totalCO2PerYear); // Atualiza o valor anual
    setCarbonCredits2050(totalCO2In2050); // Atualiza o valor até 2050
  };

  return (
    <div className="p-4">
      <h2 className="text-5xl text-gray-600 font-bold mb-3">
        Olá, <b>{userName || 'Usuário'}</b>
      </h2>
      <p className="text-lg mb-8 text-gray-600">
        Calcule os créditos de carbono com base na quantidade de árvores que você possui.
      </p>

      {/* Formulário para inserir a quantidade de árvores */}
      <div className="bg-white p-4 shadow-lg rounded-lg mb-8">
        <h3 className="text-xl text-center font-bold mb-4">Calculadora de Créditos de Carbono</h3>
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="trees" className="text-lg mb-4">
            Insira a quantidade de árvores:
          </label>
          <input
            id="trees"
            type="number"
            className="border p-2 rounded-lg w-1/2 mb-4"
            value={numTrees}
            onChange={(e) => setNumTrees(Number(e.target.value))}
          />
          <button
            className="py-2 px-4 bg-green-500 text-white rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={handleCalculateCredits}
          >
            Calcular Créditos
          </button>
        </div>
      </div>

      {/* Resultado do cálculo */}
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <h3 className="text-xl text-center font-bold mb-4">Resultado</h3>
        <div className="text-lg text-center">
          <p>Quantidade de árvores: <b>{numTrees}</b></p>
          <p>CO₂ sequestrado por ano: <b>{carbonCreditsPerYear.toFixed(2)} kg</b></p>
          <p>CO₂ sequestrado até 2050: <b>{carbonCredits2050.toFixed(2)} kg</b></p>
        </div>
      </div>
    </div>
  );
}
