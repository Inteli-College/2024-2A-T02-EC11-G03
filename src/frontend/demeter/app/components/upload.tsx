import { useState, useEffect, useContext } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { UploadContext } from "./context/TreeContext";

export default function UploadContent() {
  const [latitude, setLatitude] = useState(-23.5505); // São Paulo por padrão
  const [longitude, setLongitude] = useState(-46.6333); // São Paulo por padrão
  const [loading, setLoading] = useState(false); // Estado para o carregamento do upload
  const [error, setError] = useState(null); // Estado para erros no upload
  const [progress, setProgress] = useState(0); // Estado para a porcentagem do progresso
  const [image, setImage] = useState(null); // Estado para armazenar a imagem original
  const [imageProcessed, setImageProcessed] = useState(null); // Estado para armazenar a imagem processada
  const [numBoxes, setNumBoxes] = useState(null); // Estado para armazenar o número de árvores detectadas
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal

  const [uploads, setUploads] = useContext(UploadContext);

  // Carregando a API do Google Maps
     const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: "AIzaSyD1tsZ7oiNNtf-iG6ia0_v7r3jctlzC39U", // Adicione sua chave no .env.local
    }); 

  if (!isLoaded) {
    return <div>Carregando...</div>;
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true); // Inicia o carregamento
      setError(null); // Reseta o estado de erro
      setProgress(0); // Reseta o progresso
      const formData = new FormData(); // Cria um FormData para enviar o arquivo
      formData.append('file', file); // Adiciona a imagem ao FormData

      // Inicia o upload da imagem para a rota /predict
      fetch('http://localhost:8000/predict/', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json(); // Converte a resposta em JSON se o status for 200
          } else {
            throw new Error('Falha no upload.');
          }
        })
        .then((data) => {
          setLoading(false); // Finaliza o carregamento
          setNumBoxes(data.num_boxes); // Define o número de árvores detectadas
          setImageProcessed(`data:image/jpeg;base64,${data.image}`); // Converte base64 para exibição da imagem
          setImage(URL.createObjectURL(file)); // Mostra a imagem original
          setIsModalOpen(true); // Abre o modal após o upload
          setError(null); 
          

          setUploads((prevUploads) => [
            ...prevUploads,
            {
              id: prevUploads.length + 1,
              data: new Date().toLocaleDateString(),
              arvores: data.num_boxes,
              imagem: `data:image/jpeg;base64,${data.image}`
            }
          ]);// Upload bem-sucedido
        })
        .catch((error) => {
          setLoading(false); // Finaliza o carregamento
          setError('Erro ao enviar o arquivo. Tente novamente.'); // Tratamento de erro
        });

      // Simula o progresso do upload
      const uploadInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 20;
          if (newProgress >= 100) {
            clearInterval(uploadInterval); // Para o progresso
          }
          return newProgress;
        });
      }, 500); // Simula o progresso do upload (500ms a cada incremento)
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <div className="p-4">
      <h2 className="text-5xl text-gray-600 font-bold mb-3">Upload de Imagens</h2>
      <p className="text-lg mb-8 text-gray-600">
        Carregue sua imagem e execute a análise: obtenha resultados precisos em poucos minutos.
      </p>

      <div className="flex p-6">
        {/* Lado esquerdo: Arrastar e soltar ou selecionar imagem */}
        <div style={{ height: 500 }} className="w-1/3 p-4 border-dashed border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center">
          <label htmlFor="file-upload" className="flex flex-col items-center justify-center h-90 cursor-pointer">
            <div className="text-center">
              <p className="text-lg font-semibold">Arraste e solte a imagem aqui</p>
              <p className="text-sm text-gray-500">ou clique para selecionar uma imagem</p>
            </div>
            <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
          </label>

          {/* Barra de Progresso */}
          {loading && (
            <div className="w-full mt-4">
              <div className="relative h-2 w-full bg-gray-300 rounded">
                <div
                  className={`h-full rounded ${error ? "bg-red-500" : "bg-green-500"}`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{progress}%</p>
            </div>
          )}

          {/* Exibição de Erro */}
          {error && (
            <div className="mt-4 flex items-center text-red-500">
              <AiOutlineCloseCircle size={24} className="mr-2" />
              <p>{error}</p>
            </div>
          )}

          {/* Exibição de Sucesso */}
          {!error && image && !loading && (
            <div className="mt-4 flex items-center text-green-500">
              <AiOutlineCheckCircle size={24} className="mr-2" />
              <p>Upload concluído com sucesso!</p>
            </div>
          )}

          {/* Exibe a pré-visualização da imagem quando carregada */}
          {image && !loading && (
            <img src={image} alt="Pré-visualização da imagem" className="mt-4 h-32 object-contain" />
          )}
        </div>

        {/* Lado direito: Formulário com inputs */}
        <div className="w-2/3 p-6 bg-white shadow-lg rounded-lg ml-8">
         <form>
              <h1 className="text-3xl font-semibold mb-4">O que sabe sobre a imagem?</h1>
              <div className="mb-4">
                <label className="block text-lg mb-2">Indique a espécie de Árvore</label>
                <select className="w-full p-2 border border-gray-300 rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                  <option>Espécie das Árvores</option>
                  <option>Pau Brasil</option>
                  <option>Pinheiro</option>
                  <option>Bambu</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-lg mb-2">Indique o tipo de terreno</label>
                <select className="w-full p-2 border border-gray-300 rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                  <option>Tipo de Terreno</option>
                  <option>Planície</option>
                  <option>Colina</option>
                  <option>Savana</option>
                </select>
              </div>

              {/* Condições Climáticas */}
              <div className="mb-4">
                <label className="block text-lg mb-2">Indique as Condições Climáticas</label>
                <select className="w-full p-2 border border-gray-300 rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                  <option value="">Selecione as condições</option>
                  <option value="ensolarado">Ensolarado</option>
                  <option value="nublado">Nublado</option>
                  <option value="chuvoso">Chuvoso</option>
                </select>
              </div>

              {/* Inputs de Latitude e Longitude */}
              <div className="mb-4">
                <label className="block text-lg mb-2">Latitude</label>
                <input
                  type="number"
                  value={latitude}
                  onChange={(e) => setLatitude(parseFloat(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg mb-2">Longitude</label>
                <input
                  type="number"
                  value={longitude}
                  onChange={(e) => setLongitude(parseFloat(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                />
              </div>

              {/* Mapa com Google Maps */}
              <div className="h-64 w-full">
                <GoogleMap
                  mapContainerStyle={{ height: "100%", width: "100%" }}
                  center={{ lat: latitude, lng: longitude }}
                  zoom={10}
                >
                  <Marker position={{ lat: latitude, lng: longitude }} />
                </GoogleMap>
              </div> 
            </form> 
        </div>
      </div>

      {/* Modal de Imagem Processada */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Imagem Processada</h2>
            {imageProcessed && <img src={imageProcessed} alt="Imagem processada" className="h-auto max-w-full mb-4" />}
            {numBoxes !== null && <p className="text-lg">Número de árvores detectadas: {numBoxes}</p>}
            <button 
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
