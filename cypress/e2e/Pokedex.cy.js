describe('Pokedex', function() {

  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Ivysaur profile clicks through correctly', function() {
    cy.visit('http://localhost:5000')
    cy.get('a[href*="ivysaur"]').click()
    cy.contains('.pokemon-ability-name', 'chlorophyll').should('exist')
  })
})