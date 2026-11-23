
describe('JSONPlaceholder API - Teste dos Gets de comments', () => {
  const validaEstrutura = (comment) => {
    expect(comment).to.have.all.keys('postId', 'id', 'name', 'email', 'body')
    expect(comment.postId).to.be.a('number')
    expect(comment.id).to.be.a('number')
    expect(comment.name).to.be.a('string')
    expect(comment.email).to.be.a('string')
    expect(comment.body).to.be.a('string')
  }

  it('Listagem de todos os comments', () => {
    cy.request('GET', '/comments')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(500)
        response.body.forEach(validaEstrutura)
      })
  })

  it('Listagem de um comment específico', () => {
    cy.request('GET', '/comments/1')
      .then((response) => {
        expect(response.status).to.eq(200)
        validaEstrutura(response.body)
        expect(response.body).to.have.property('id', 1)
        expect(response.body).to.have.property('postId', 1)
        expect(response.body).to.have.property('name', 'id labore ex et quam laborum')
        expect(response.body).to.have.property('email', 'Eliseo@gardner.biz')
      })
  })

  it('Lista id que não existe', () => {
    cy.request({
      method: 'GET',
      url: '/comments/501',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })
})
