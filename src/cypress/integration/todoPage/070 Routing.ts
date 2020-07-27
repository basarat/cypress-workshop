import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});

describe('Routing', () => {
  beforeEach(() => {
    todoPage.addTodo('Completed');
    todoPage.itemCheckboxByIndex(0).click();
    todoPage.addTodo('Active');
  });
  it('"#/" (default) - all items are shown. The all link is selected', () => {
    todoPage.allTodos.should('deep.equal', ['Completed', 'Active']);
    todoPage.routeAll.should('have.class', todoPage.classNames.selectedRoute);
  });
  it('"#/active" - Only active items are shown. The active link is selected', () => {
    cy.visit('#/active');
    todoPage.allTodos.should('deep.equal', ['Active']);
    todoPage.routeActive.should('have.class', todoPage.classNames.selectedRoute);
  });
  it('"#/completed" - Only completed items are shown. The completed link is selected', () => {
    cy.visit('#/completed');
    todoPage.allTodos.should('deep.equal', ['Completed']);
    todoPage.routeCompleted.should('have.class', todoPage.classNames.selectedRoute);
  });
  it('"#/active" - Items should move out if checked', () => {
    cy.visit('#/active');
    todoPage.itemCheckboxByIndex(0).click();
    todoPage.itemLabelByIndex(0).should('not.exist');
  });
  it('"#/completed" - Items should move out if unchecked', () => {
    cy.visit('#/completed');
    todoPage.itemCheckboxByIndex(0).click();
    todoPage.itemLabelByIndex(0).should('not.exist');
  });
});
