describe('ui-base', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconcomponent--primary'));
  it('should render the component', () => {
    cy.get('baz-icon').should('exist');
  });
});
