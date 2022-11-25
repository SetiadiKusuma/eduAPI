describe('Create New User', () => {
    it('Successfully Create New User', () => {
        var user = {
            "name": "Jalu",
            "job": "Quality Assurance"
        }
        
        cy.request('POST', 'https://reqres.in/api/users', user).then((Response) => {
            expect(Response.status).equal(201)
            expect(Response.body.name).to.eq(user.name)
            expect(Response.body.job).to.eq(user.job)
        })
    });
});