const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementação de listeners de eventos, se necessário
    },
    env: {
      email: "testejefferson69@gmail.com",
      senha: "Teste@6969",
      url: "https://marketplace-develop.tendaatacado.com.br/",
      numero: "4000000000000010",
      cvv: "239",
      dia:'03{enter}',
      ano: '2030{enter}',
      nome: 'jefferson s d d',
      cpf:'420.599.726-47',
    }
  }
});
