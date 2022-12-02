/// <reference types="cypress" />

describe('Automation API with Pokeapi', () => {
    it.only('Successfully Validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
        cy.get('@pokemon').its('body').its('forms')
        .should('deep.include', {
            "name": "ditto",
            "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
        })
    });

    it('Successfully Validate status code', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto',
        }).as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });

    it('Successfully Validate Content', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/venusaur',
        }).as('venusaur')
        cy.get('@venusaur').its('status').should('equal', 200)
        cy.get('@venusaur').its('body').should('include', {name: "venusaur"})
    });

    // it('Tugas Validasi Content', () => {
    //     cy.request({
    //         methode: 'GET', 
    //         url: 'https://pokeapi.co/api/v2/pokemon/ditto'

    //         body: {
    //             "abilities": [
    //                 {
    //                     "ability": {
    //                         "name": "limber",
    //                         "url": "https://pokeapi.co/api/v2/ability/7/"
    //                     },
    //                 }
    //             ],             
    //         }
    //     })
    //     .then((response) => {
    //         expect(response.status).equal(200)
    //         expect(response.body).to.eq(ability.name)
    //     })
    // });
}); 