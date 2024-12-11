Cypress Test Automation - Ambiente de Configuração


Este repositório contém a configuração do ambiente de testes automatizados utilizando Cypress. A seguir estão as configurações e variáveis de ambiente que são usadas durante os testes.

Configuração do Ambiente
O arquivo de configuração principal é o cypress.config.js. Ele define o ambiente de teste e as variáveis de ambiente necessárias para a execução dos testes automatizados.

Variáveis de Ambiente
As variáveis de ambiente são configuradas dentro do arquivo cypress.config.js e são usadas em todo o processo de automação. As variáveis incluem informações de login, dados de pagamento e URL do site de teste.

javascript
Copiar código
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementação de listeners de eventos, se necessário
    },
    env: {
      email: "seuemail@email.com",
      senha: "SuaSenha",
      url: "https://marketplace-develop.tendaatacado.com.br/",
      numero: "SeuCartao",
      cvv: "CvvCartao",
      dia: 'DiaCartao',
      ano: 'AnoCartao',
      nome: 'SeuNome',
      cpf: 'SeuCpf',
    }
  }
});

Descrição das Variáveis de Ambiente

email: Email de login usado para autenticação.
senha: Senha correspondente ao email para o login.
url: URL do ambiente de teste.
numero: Número de cartão de crédito para testes de pagamento.
cvv: Código de segurança do cartão.
dia: Data do cartão (mês).
ano: Data do cartão (ano).
nome: Nome do titular do cartão.
cpf: CPF do titular do cartão.

Requisitos

Node.js: Certifique-se de ter o Node.js instalado no seu ambiente. Você pode baixar a versão mais recente aqui.

Cypress: Este projeto utiliza Cypress para automação de testes. Caso ainda não tenha o Cypress instalado, você pode instalar executando o seguinte comando:

bash
Copiar código
npm install cypress --save-dev
Executando os Testes
Para rodar os testes automatizados com Cypress:

Instale as dependências do projeto:

bash
Copiar código
npm install
Para rodar os testes no ambiente de desenvolvimento, execute:

bash
Copiar código
npx cypress open
A interface gráfica do Cypress será aberta, permitindo que você escolha os testes a serem executados.