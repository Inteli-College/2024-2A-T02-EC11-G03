---
title: Análise financeira
sidebar_position: 1
--- 
# Análise financeira 
- Para a criação dessa análise financeira foi considerado os principais custos de manutenção e implementação do projeto desenvolvido, contudo como este projeto foi desenvolvido sem a utilização de componentes de hardware, não iremos levar em consideração o custo dos equipamentos de coleta de dados como imagens aéreas pois é de conhecimento do grupo que o parceiro ja possui estes equipamentos. Dessa o custo de implementação se resume a mão de obra operacional para a implementação. 

## Tabela de Custos de Mão de Obra

| Cargo         | Salário Médio (mensal) | Horas Semanais | Duração (meses) | Custo Total |
| ------------- | ---------------------- | -------------- | --------------- | ----------- |
| Desenvolvedor Sênior | R$ 15.000,00              | 40               | 2               | R$ 30.000,00 |
| Desenvolvedor Pleno  | R$ 9.000,00               | 40               | 2               | R$ 18.000,00 |
| Desenvolvedor Júnior | R$ 5.000,00               | 40               | 2               | R$ 10.000,00 |

**Custo Total Mão de Obra**: R$ 58.000,00

---

## Tabela de Custos de Manutenção - Serviços AWS

| Serviço         | Custo Mensal | Descrição do Serviço                | Descrição de Uso                                        |
| --------------- | ------------ | ----------------------------------- | ------------------------------------------------------- |
| Amazon RDS      | USD 1.086,24  | Banco de dados relacional gerenciado| Hospedar banco de dados de alta disponibilidade (Postgres)|
| Amazon EC2      | USD 37,67    | Instâncias de computação elástica   | Servir o back-end e o front-end da aplicação            |
| Amazon Lambda   | USD 0,01    | Execução de código sem servidor     | Automatizar funções pequenas, como processamento de dados|
| Amazon S3       | USD 92,27   | Armazenamento escalável na nuvem    | Hospedar imagens e arquivos usados no sistema           |

**Custo Total de Manutenção (mensal)**: USD 1.216,19

### Resumo da configuração de cada serviço:
- **Amazon RDS** : Armazenamento para cada instância do RDS Custom para SQL Server (SSD de uso geral (gp2)), Quantidade de armazenamento (200 GB), Tipo de instância (db.r5.xlarge), Número de instâncias do RDS Custom para SQL Server (1), Utilização (somente sob demanda) (100 %Utilized/Month), Database Edition (Developer), Opção de implantação (Multi-AZ), Licença (Customer-provided), Modelo de preço (OnDemand)

- **Amazon EC2** : Locação (Instâncias compartilhadas), Sistema operacional (Linux), Carga de trabalho (Consistent, Número de instâncias: 2), Instância do EC2 avançada (t3.medium), Pricing strategy ( 3yr No Upfront), DT Entrada: Not selected (0 TB por mês), DT Saída: Not selected (0 TB por mês), DT Intrarregião: (0 TB por mês)

- **Amazon Lambda** :  Arquitetura (x86), Arquitetura (x86), Modo de invocação (Em buffer), Quantidade de armazenamento temporário alocada (512 MB), Número de solicitações (1000 por mês), Número de solicitações (10000 por mês)

- **Amazon S3** : Dados retornados pelo S3 Select (100 GB por mês), Dados verificados pelo S3 Select (20 GB por mês), Solicitações PUT, COPY, POST, LIST para S3 Standard (100), GET, SELECT e todas as outras solicitações do S3 Standard (10000) DT Entrada: Internet (1 TB por mês), DT Saída: Internet (1 TB por mês)