import { startServer } from "../../utils/server";
import * as page from "../../utils/pages/todoPage";

beforeEach(() => {
  startServer();
  page.visit();
});

describe('Counter', () => {
  it('Is not displayed when there are no items', () => {
    cy.get(page.selectors.todoCount).should('not.exist');
  });
  it('Displays the number of active todos in a pluralized form e.g. "0 items left", "1 item left", "2 items left"', () => {
    page.addTodo('Hello World');
    page.addTodo('Again');
    
    cy.get(page.selectors.todoCount).should('have.text', '2 items left');

    cy.get(page.selectors.itemCheckBoxByIndex(0)).click();
    cy.get(page.selectors.todoCount).should('have.text', '1 item left');
    
    cy.get(page.selectors.itemCheckBoxByIndex(1)).click();
    cy.get(page.selectors.todoCount).should('have.text', '0 items left');
  });
});
