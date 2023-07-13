describe('ui-base', () => {
  beforeEach(() => cy.visit('/iframe.html?id=badgecomponent--primary'));
  it('should render the component', () => {
    cy.get('baz-badge').should('exist');
  });
});
