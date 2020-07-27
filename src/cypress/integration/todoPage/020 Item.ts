import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});

describe('Item', () => {
  it('Starts of unchecked', () => {
    todoPage.addTodo('Hello World');
    todoPage.itemCheckboxByIndex(0).should('not.be.checked');
  });
  it('Clicking the checkbox toggles the todo active/complete', () => {
    todoPage.addTodo('Hello World');
    todoPage.itemCheckboxByIndex(0).click();
    todoPage.itemCheckboxByIndex(0).should('be.checked');
    todoPage.itemCheckboxByIndex(0).click();
    todoPage.itemCheckboxByIndex(0).should('not.be.checked');
  });
  it('Clicking the remove button should remove it item', () => {
    todoPage.addTodo('Hello World');
    todoPage.itemDestroyByIndex(0).invoke('show').click();
    cy.get('Hello World').should('not.exist');
  });
});
