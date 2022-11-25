describe('Update User', () => {
    it('', () => {
        var user = {
            "name": "Ali",
            "job": "Finance"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((Response) => {
            expect(Response.status).equal(200)
            expect(Response.body.name).to.eq(user.name)
        })
    });
});