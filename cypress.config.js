const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementação de listeners de eventos, se necessário
    },
    env: {
      email: "Email de login usado para autenticação.",
      senha: "Senha correspondente ao email para o login.",
      url: "https://marketplace-develop.tendaatacado.com.br/",
      numero: "Número de cartão de crédito para testes de pagamento.",
      cvv: "Código de segurança do cartão.",
      dia: "Data do cartão (mês).",
      ano: "Data do cartão (ano).",
      nome: "Nome do titular do cartão.",
      cpf: "CPF do titular do cartão.",
      

    }
  }
});
