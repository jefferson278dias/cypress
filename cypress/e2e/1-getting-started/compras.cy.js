
/// <reference types="cypress" />


describe('Carrinho de Compras', () => {

    let fixture;
    const email = Cypress.env('email'); 
    const senha = Cypress.env('senha');
    const url = Cypress.env('url'); 
    const cartao = Cypress.env('numero'); 
    const cvv = Cypress.env('cvv'); 
    const dia = Cypress.env('dia');
    const ano = Cypress.env('ano');
    const nome = Cypress.env('nome');
    const cpf = Cypress.env('cpf')

    beforeEach(() => {
        cy.visit(url);
        cy.login(email, senha);  
        cy.fixture('produto').then((item) => {
            fixture = item;
        });       
                 
    });

    context('Fluxo de Carrinho', () => {
        it('TC-001 Deve adicionar dois produtos ao carrinho', () => {
            cy.produtoTenda(fixture.itemTenda);
            cy.produtoBenedito(fixture.itemBenedito);
            cy.get('.icon-cart-qtd').should('have.text', '2');
        });

        it('TC-002 Deve remover os produtos no carrinho', () => {
            cy.removerProduto();
            cy.get('span.empty-cart').should('have.text', 'Seu carrinho ainda está vazio.');
        });

        it('TC-003 Deve finalizar o carrinho e gerar pedido via boleto', () => {
            cy.produtoTenda(fixture.itemTenda);
            cy.realizarCompraBoleto(url)
            cy.get('.justify-content-start > .btn-primary').should('be.visible');
          
        });

        it('TC-004 Deve finalizar o carrinho e gerar pedido via cartão', () => {
            cy.produtoTenda(fixture.itemTenda);
            cy.realizarCompraCartao(url, cartao, dia, ano, cvv, nome, cpf);
            cy.get('.orderNumber').should('not.be.empty');
            
        });
    });
});
