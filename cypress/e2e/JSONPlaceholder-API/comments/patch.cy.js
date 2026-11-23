
describe('JSONPlaceholder API - Teste de Atualização parcial de comments', () => {
  it('Atualização parcial de um comment', () => {
    cy.request('GET', '/comments/1').then((original) => {
      cy.request('PATCH', '/comments/1', {
        name: 'Nome alterado via PATCH'
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('name', 'Nome alterado via PATCH')
        // os campos não enviados continuam iguais ao original
        expect(response.body).to.have.property('id', original.body.id)
        expect(response.body).to.have.property('postId', original.body.postId)
        expect(response.body).to.have.property('email', original.body.email)
        expect(response.body).to.have.property('body', original.body.body)
      })
    })
  })
})
