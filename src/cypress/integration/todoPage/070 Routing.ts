import { startServer } from "../../utils/server";
import * as page from "../../utils/pages/todoPage";

beforeEach(() => {
  startServer();
  page.visit();
});

describe('Routing', () => {
  beforeEach(() => {
    page.addTodo('Completed');
    cy.get(page.selectors.itemCheckBoxByIndex(0)).click();
    page.addTodo('Active');
  });
  it('"#/" (default) - all items are shown. The all link is selected', () => {
    page.getAllTodos().should('deep.equal', ['Completed', 'Active']);
    cy.get(page.selectors.all).should('have.class', page.classNames.selectedFilter);
  });
  it('"#/active" - Only active items are shown. The active link is selected', () => {
    cy.visit('#/active');
    page.getAllTodos().should('deep.equal', ['Active']);
    cy.get(page.selectors.active).should('have.class', page.classNames.selectedFilter);
  });
  it('"#/completed" - Only completed items are shown. The completed link is selected', () => {
    cy.visit('#/completed');
    page.getAllTodos().should('deep.equal', ['Completed']);
    cy.get(page.selectors.completed).should('have.class', page.classNames.selectedFilter);
  });
  it('"#/active" - Items should move out if checked', () => {
    cy.visit('#/active');
    cy.get(page.selectors.itemCheckBoxByIndex(0)).click();
    cy.get(page.selectors.itemLabelByIndex(0)).should('not.exist');
  });
  it('"#/completed" - Items should move out if unchecked', () => {
    cy.visit('#/completed');
    cy.get(page.selectors.itemCheckBoxByIndex(0)).click();
    cy.get(page.selectors.itemLabelByIndex(0)).should('not.exist');
  });
});
