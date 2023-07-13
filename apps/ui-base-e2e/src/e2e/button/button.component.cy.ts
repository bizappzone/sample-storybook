describe('ui-base', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=buttoncomponent--primary&args=btnId;btnLable;displayClass:primary;displayType:flat;btnMode:click;btnHelp;badgeLable;badgeDisplayClass;badgeAlign:inline;iconDisplayClass;iconDisplayType;iconLeft;iconRight;btnSize:med;btnRadius:med;disabled:false;type:button;'
    )
  );
  it('should render the component', () => {
    cy.get('baz-button').should('exist');
  });
});
