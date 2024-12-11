import locators from "./locator";

Cypress.Commands.add('login', (email, senha) => {
    cy.get('.ButtonClose > .svgIcon').click();
    cy.get(locators.paginaHome.btnLogin).click();
    cy.get(locators.paginaHome.fildEmail).type(email);
    cy.get(locators.paginaHome.fildSenha).type(senha);
    cy.get(locators.paginaHome.btnContinuar).click();
    cy.get('.username').should('be.visible', 'Olá,Jefferson')

});

Cypress.Commands.add('produtoTenda', (fixture) => {
    cy.get(locators.paginaHome.fildBusca).type(fixture)
    cy.get(locators.paginaHome.btnBuscar).click().wait(2000)
    cy.get(':nth-child(2) > '+ locators.paginaCarrinho.btnAddProduto).should('be.visible').click();                         

});

Cypress.Commands.add('produtoBenedito', (fixture) => {
    cy.get(locators.paginaHome.fildBusca).clear().type(fixture)            
    cy.get(locators.paginaHome.btnBuscar).click().wait(2000)
    cy.get(':nth-child(3) > '+ locators.paginaCarrinho.btnAddProduto).should('be.visible').click()

});

Cypress.Commands.add('removerProduto', () => {
    cy.get(locators.paginaCarrinho.btnVercarrinho).click()      
    cy.get(locators.paginaCarrinho.checkProduto).click()
    cy.get(locators.paginaCarrinho.btnApagar).click();            
    cy.get(locators.modal.modal1).should('be.visible').wait(2000)            
    cy.get(locators.modal.modal2).click().wait(2000)        
    cy.get(locators.paginaCarrinho.checkProduto2).click().wait(2000)
    cy.get(locators.paginaCarrinho.btnApagar2).click()
    cy.get(locators.modal.modalCarrinho).should('be.visible').click()
})

Cypress.Commands.add('realizarCompraBoleto', (url) => {
    cy.visit(url+ 'carrinho');
            cy.get(locators.paginaCarrinho.finalizarCompra).click();
            cy.get(locators.paginaCarrinho.finalizarCompra).click();
            cy.wait(2000);

            cy.get('body').then(($body) => {
                if ($body.find(locators.delivery.escolherEndereco).length > 0) {
                    cy.get(locators.delivery.escolherEndereco).should('be.visible');
                    cy.get(locators.delivery.btnEscolherEndereco).click();
                    cy.get(locators.delivery.endereco1).click();
                    cy.get(locators.delivery.enderecoDeColeta).click();
                    cy.get(locators.delivery.dataDeBusca).click();
                    cy.get(locators.delivery.horarioDeBusca).click();
                    cy.get(locators.paginaCarrinho.finalizarCompra).click();
                    cy.contains('span', locators.paginaCarrinho.btnBoleto).click();
                    cy.get(locators.paginaCarrinho.btnGerarBoleto).click();
                    cy.wait(10000);
                    cy.get(locators.modal.modal3).should('be.visible').click();
                    cy.get(locators.modal.btnFechar).click();                    
                } else {
                    cy.contains('span', locators.paginaCarrinho.btnBoleto).should('be.visible').click();
                    cy.get(locators.paginaCarrinho.btnGerarBoleto).click();
                    cy.wait(10000);
                    cy.get(locators.modal.modal3).should('be.visible').click();
                    cy.get(locators.modal.btnFechar).click();
                    
                }
            });
})
Cypress.Commands.add('realizarCompraCartao', (url, cartao, dia, ano, cvv, nome, cpf) => {
    cy.visit(url+ 'carrinho');
    cy.get(locators.paginaCarrinho.finalizarCompra).click();
    cy.get(locators.paginaCarrinho.finalizarCompra).click();
    cy.wait(2000);

    cy.get('body').then(($body) => {
        if ($body.find(locators.delivery.escolherEndereco).length > 0) {
            cy.get(locators.delivery.escolherEndereco).should('be.visible');
            cy.get(locators.delivery.btnEscolherEndereco).click();
            cy.get(locators.delivery.endereco1).click();
            cy.get(locators.delivery.enderecoDeColeta).click();
            cy.get(locators.delivery.dataDeBusca).click();
            cy.get(locators.delivery.horarioDeBusca).click();
            cy.get(locators.paginaCarrinho.finalizarCompra).click();       
            cy.get(locators.paginaCarrinho.btnCartao).click();  
            cy.get(locators.paginaCarrinho.fildCartao).type(cartao);
            cy.get(locators.paginaCarrinho.FildDiaCartao).click().type(dia);
            cy.get(locators.paginaCarrinho.fildAnoCartao).click().type(ano);
            cy.get(locators.paginaCarrinho.fildCvvCartao).clear().type(cvv);
            cy.get(locators.paginaCarrinho.fildNomeCartao).clear().type(nome);
            cy.get(locators.paginaCarrinho.fildCpfCartao).clear().type(cpf);
            cy.get(locators.paginaCarrinho.btnPagarComCartao).click();
            cy.wait(10000); 
            cy.get(locators.modal.modal3).should('be.visible').click();
            cy.get(locators.modal.btnFechar).click();
            
        } else {
            cy.get(locators.paginaCarrinho.btnCartao).click();
            cy.get(locators.paginaCarrinho.fildCartao).type(cartao);
            cy.get(locators.paginaCarrinho.FildDiaCartao).click().type(dia);
            cy.get(locators.paginaCarrinho.fildAnoCartao).click().type(ano);
            cy.get(locators.paginaCarrinho.fildCvvCartao).clear().type(cvv);
            cy.get(locators.paginaCarrinho.fildNomeCartao).type(nome);
            cy.get(locators.paginaCarrinho.fildCpfCartao).clear().type(cpf);
            cy.get(locators.paginaCarrinho.btnPagarComCartao).click();
            cy.wait(10000); 
            cy.get(locators.modal.modal3).should('be.visible').click();
            cy.get(locators.modal.btnFechar).click();
            
        }
    });
});
