# Requisitos

<table class="custom-table">
  <tr>
    <th>Requisitos Funcionais</th>
    <th>Requisitos Não Funcionais</th>
  </tr>
  <tr>
    <td>1 - Detecção e Contagem de Árvores</td>
    <td>1 - O tempo de resposta do sistema para contagem de árvores em uma imagem não deve exceder 2 segundos. <div> 1.1 - O sistema deve ter uma margem de erro de até no máximo 15%</div></td>
  </tr>
  <tr>
    <td>2 - Interface de Usuário Simples para Visualização de Resultados</td>
    <td>2 - A interface deve fornecer feedbacks claros em caso de indisponibilidade e formas de contato com a administração.
    <div> 2.1 - A interface deve permitir que a principal tarefa do usuário seja realizada em até 3 clicks.</div></td>
  </tr>
  <tr>
    <td>3 - Atualização e Treinamento do Modelo de IA</td>
    <td>3 - Melhoria da precisão após cada atualização (deve ser ≥ 95% de precisão após atualização).</td>
  </tr>
  <tr>
    <td>4 - Transferência de Imagem Embarcado-Sistema</td>
    <td>4 - O sistema deve ser capaz de suportar o processamento de diferentes formatos de imagem (ex: JPEG, PNG), sendo compatível com pelo menos 3 formatos mais comuns.</td>
  </tr>
  <tr>
    <td>5 - Armazenamento de imagens</td>
    <td>5 - O sistema deve ser capaz de armazenar todas as imagens capturadas em no mínimo 1 fluxo de contagem de árvores.</td>
  </tr>
  <tr>
    <td>6 - Classificação de estado da Árvore</td>
    <td>6 - Toda árvore contada e armazenada no banco de dados deve ter seu estado (viva ou morta) registrado. <div>
    6.1 - O tempo de resposta do sistema para contagem de árvores em uma imagem não deve exceder 2 segundos.</div><div>
    6.2 - O sistema deve ter uma margem de erro de até no máximo 15%</div></td>
  </tr>
  <tr>
    <td>7 - Verificação da Cobertura de Copas da área</td>
    <td>7.1 - Toda árvore contada e armazenada no banco de dados deve ter seu estágio de desenvolvimento registrado.<div>
    7.2 - O tempo de resposta do sistema para contagem de árvores em uma imagem não deve exceder 2 segundos.</div><div>
    7.3 - O sistema deve ter uma margem de erro de até no máximo 15%</div></td>
  </tr>
  <tr>
    <td>8 - Disponibilização dos dados brutos e processados no Banco de Dados</td>
    <td>8 - O acesso ao banco de dados deve ser restrito apenas a usuários autorizados e deve ter alguma forma de autenticação disponível
    <div>8.1 - O tempo de resposta para requisições típicas não deve exceder 1 segundo</div></td>
</table>

# Descrição
### Requisitos Funcionais
1.  O sistema deve ser capaz de detectar e contar automaticamente o número de árvores em uma imagem fornecida por satélite e drone.
2. Os dados processados devem ser consumidos do backend em uma interface de visualização de dados, como o Metabase
3. O sistema deve permitir atualizações e re-treinamentos periódicos do modelo de IA com novos dados.
4. O sistema deve ser capaz de suportar a comunicação direta com a câmera do embarcado, para registro de imagens e armazenamento para processamento posterior. Os dados brutos gerados no sistema embarcado, como as imagens, devem ser transferidos do embarcado para o backend, para processamento do modelo e para verificação de assertividade pós processamento.
5. O sistema deve ser capaz de armazenar imagens em seus estados originais e pós-processamento. Isso inclui a preservação das versões originais e modificadas das imagens para permitir comparações e análises posteriores, garantindo assim a rastreabilidade e a conformidade com os requisitos do cliente.
6. O modelo deve diferenciar entre árvores vivas e mortas/caídas, através do processamento de imagem e informar a relação percentual entre árvores vivas e não vivas.
7. O sistema deve verificar a porcentagem de Canopy Cover (Cobertura de Copas) da área reflorestada. Um dos dados relevantes para manutenção e evolução do reflorestamento
8. Dados gerados com o modelo, como, contagem de árvores, relação entre árvores vivas e mortas e cobertura de copas, deve ser armazenado para posterior visualização no front-end

