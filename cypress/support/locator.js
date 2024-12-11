
const locators = {

    paginaHome: {

        btnLogin: '.text-hello',
        fildEmail: '#login',
        fildSenha: '#password',
        btnContinuar: '.row_action_login > [data-cy="btn-"]',
        fildBusca: '#searchbarComponent',
        btnBuscar: '.input-group > div > .btn',

    },
    paginaCarrinho: {

        btnAddProduto:'.showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]',
        btnVercarrinho: '.cartblock-bottom > [data-cy="btn-"]',
        checkProduto: ':nth-child(2) > .department-component > .department-table > .bet-actions > label',
        btnApagar: ':nth-child(2) > .department-component > .department-table > .bet-actions > .icon-trash',
        checkProduto2: '.bet-actions > label',
        btnApagar2: '.icon-trash',
        finalizarCompra: '.resume-buttons > .btn',
        btnBoleto: 'Boleto bancário',
        btnGerarBoleto: '.btn-buy',
        btnCartao: '.svg-ico_credit_card',
        fildCartao:'#number',
        FildDiaCartao:'#month > .react-select__control > .react-select__value-container',
        fildAnoCartao: '#year > .react-select__control > .react-select__value-container',
        fildCvvCartao: '#cvv',
        fildNomeCartao: '#name',
        fildCpfCartao: '#cpf',
        btnPagarComCartao: '.CreditCardComponent > [data-cy="btn-"]',

    },
    modal: {

        modal1: '.modal-header',
        modal2: '.modal-footer > .btn',
        modalCarrinho: '.modal-footer > .btn',
        modal3: '#boxClick',
        btnFechar: '#btFechar',
        
    },
    delivery:{

        endereco1: ':nth-child(1) > .card-content > .card-information-component > .content',
        enderecoDeColeta: ':nth-child(6) > .content > .subtitle-address-option',
        escolherEndereco:  '.title-modal-sellers-shipping',
        btnEscolherEndereco: ':nth-child(3) > .btn-delivery',
        dataDeBusca: '#\\32 024-12-20',
        horarioDeBusca: ':nth-child(5) > .content',

    }
}

export default locators