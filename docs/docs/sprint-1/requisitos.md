# Requisitos

<table class="custom-table">
  <tr>
    <th>Requisitos Funcionais</th>
    <th>Requisitos Não Funcionais</th>
  </tr>
  <tr>
    <td>1 - Detecção e Contagem de Árvores</td>
    <td>Valor 1</td>
  </tr>
  <tr>
    <td>2 - Interface de Usuário Simples para Visualização de Resultados</td>
    <td>Valor 3</td>
  </tr>
  <tr>
    <td>3 - Atualização e Treinamento do Modelo de IA</td>
    <td>Valor 3</td>
  </tr>
  <tr>
    <td>4 - Transferência de Imagem Embarcado-Sistema</td>
    <td>Valor 3</td>
  </tr>
  <tr>
    <td>5 - Classificação de estado da Árvore</td>
    <td>Valor 3</td>
  </tr>
  <tr>
    <td>6 - Verificação da Cobertura de Copas da área</td>
    <td>Valor 3</td>
  </tr>
  <tr>
    <td>7 - Disponibilização dos dados brutos e processados no Banco de Dados</td>
    <td>Valor x</td>
</table>

**Descrição**
-
1.  O sistema deve ser capaz de detectar e contar automaticamente o número de árvores em uma imagem fornecida por satélite e drone.
2. Os dados processados devem ser consumidos do backend em uma interface de visualização de dados, como o Metabase
3. O sistema deve permitir atualizações e re-treinamentos periódicos do modelo de IA com novos dados.
4. O sistema deve ser capaz de suportar a comunicação direta com a câmera do embarcado, para registro de imagens e armazenamento para processamento posterior. Os dados brutos gerados no sistema embarcado, como as imagens, devem ser transferidos do embarcado para o backend, para processamento do modelo e para verificação de assertividade pós processamento.
5. O modelo deve diferenciar entre árvores vivas e mortas/caídas, através do processamento de imagem e informar a relação percentual entre árvores vivas e não vivas.
6. O sistema deve verificar a porcentagem de Canopy Cover (Cobertura de Copas) da área reflorestada. Um dos dados relevantes para manutenção e evolução do reflorestamento
7. Dados gerados com o modelo, como, contagem de árvores, relação entre árvores vivas e mortas e cobertura de copas, deve ser armazenado para posterior visualização no front-end

