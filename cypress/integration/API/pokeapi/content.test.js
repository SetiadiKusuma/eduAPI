/// <reference types="cypress" />

describe('Automation API with Pokeapi', () => {
    it('Tugas Validasi Content', () => {
        var content = {
                        "ability": {
                            "name": "limber",
                            "url": "https://pokeapi.co/api/v2/ability/7/"
                        },
                    }
    
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        })
        cy.fixture("pokemon").then((response) => {
            response.body.abilities.map((data) => {
                expect(data.ability.name).to.eq(content.ability.name)
                expect(data.ability.url).to.eq(content.ability.url)
            })
        })
    });
}); 