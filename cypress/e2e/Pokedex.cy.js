describe('Pokedex', function() {
  const PORT = process.env.PORT || 5000
  it('front page can be opened', function() {
    cy.visit(`http://localhost:${PORT}`)
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})