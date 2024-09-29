describe('Agenda de Contatos - Testes', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000'); 
    });

    it('Deve adicionar um novo contato: Francisco', () => {
        cy.get('input[placeholder="Nome"]').should('be.visible').type('Francisco');
        cy.get('input[placeholder="Telefone"]').should('be.visible').type('123456789');
        cy.get('input[placeholder="E-mail"]').should('be.visible').type('francisco@example.com');
        
        cy.contains('button', 'Adicionar').click();
        
        
        cy.contains('Francisco').should('exist');
        cy.contains('123456789').should('exist');
        cy.contains('francisco@example.com').should('exist');
    });

    it('Deve adicionar um novo contato: Tulio', () => {
        cy.get('input[placeholder="Nome"]').should('be.visible').type('Tulio');
        cy.get('input[placeholder="Telefone"]').should('be.visible').type('987654321');
        cy.get('input[placeholder="E-mail"]').should('be.visible').type('tulio@example.com');
        
        cy.contains('button', 'Adicionar').click();
        
        cy.contains('Tulio').should('exist');
        cy.contains('987654321').should('exist');
        cy.contains('tulio@example.com').should('exist');
    });

    it('Deve adicionar um novo contato: Joyce', () => {
        cy.get('input[placeholder="Nome"]').should('be.visible').type('Joyce');
        cy.get('input[placeholder="Telefone"]').should('be.visible').type('111222333');
        cy.get('input[placeholder="E-mail"]').should('be.visible').type('joyce@example.com');
        
        cy.contains('button', 'Adicionar').click();
        
        cy.contains('Joyce').should('exist');
        cy.contains('111222333').should('exist');
        cy.contains('joyce@example.com').should('exist');
    });

    it('Deve editar o terceiro contato na lista', () => {
        cy.get('.sc-gueYoa').eq(2).find('.edit').click();  
        cy.get('input[placeholder="Nome"]').clear().type('Cruzeiro');
        cy.get('input[placeholder="E-mail"]').clear().type('cruzeiro@example.com');
        cy.get('input[placeholder="Telefone"]').clear().type('1234567890');
        
        cy.contains('button', 'Salvar').click();
        
        cy.contains('Cruzeiro').should('exist');
        cy.contains('cruzeiro@example.com').should('exist');
        cy.contains('1234567890').should('exist');
    });

    it('Deve remover o quinto contato na lista', () => {
        cy.get('.sc-gueYoa').eq(4).find('.delete').click();  
        cy.on('window:confirm', () => true);  

        cy.wait(1000);  
        cy.contains('Priscila').should('not.exist');  
    });
});
