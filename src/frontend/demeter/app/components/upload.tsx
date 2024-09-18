export default function UploadContent() {
  return (
    <div className="p-4">
      <h2 className="text-5xl text-gray-600 font-bold mb-3">Upload de Imagens</h2>
      <p className="text-lg mb-8 text-gray-600">Carregue sua imagem e execute a análise: obtenha resultados precisos em poucos minutos.</p>
      <div className="flex p-6">
        {/* Lado esquerdo: Arrastar e soltar ou selecionar imagem */}
        <div className="w-1/3 p-4 border-dashed border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center">
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center h-full cursor-pointer"
          >
            <div className="text-center">
              <p className="text-lg font-semibold">Arraste e solte a imagem aqui</p>
              <p className="text-sm text-gray-500">ou clique para selecionar uma imagem</p>
            </div>
            <input id="file-upload" type="file" className="hidden" />
          </label>
        </div>

        {/* Lado direito: Div com sombra, textos e selects */}
        <div className="w-2/3 p-6 bg-white shadow-lg rounded-lg ml-8">
          <form>
            <h1 className="text-3xl font-semibold mb-4">O que sabe sobre a imagem?</h1>
            <div className="mb-4">
              <label className="block text-lg mb-2">Indique as Condições Climaticas</label>
              <select className="w-full p-2 border border-gray-300 rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                <option>Condições Climáticas</option>
                <option>Ensolarado</option>
                <option>Nublado</option>
                <option>Chuvoso</option>
              </select>
            </div>

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

            <div className="mb-4">
              <label className="block text-lg mb-2">Comentários Adicionais</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="py-2 px-8 bg-gradient-to-r from-[#009606] to-[#76C115] text-white rounded hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
          Enviar Imagem
        </button>
      </div>
    </div>
  );
}
