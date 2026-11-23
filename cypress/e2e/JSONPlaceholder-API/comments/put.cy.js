
describe('JSONPlaceholder API - Teste de Atualização de comments', () => {
  it('Atualização de um comment', () => {
    const comment = {
      id: 1,
      postId: 1,
      name: 'Nome atualizado',
      email: 'iago@teste.com',
      body: 'Corpo do comment atualizado'
    }

    cy.request('PUT', '/comments/1', comment).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.deep.eq(comment)
    })
  })
})
