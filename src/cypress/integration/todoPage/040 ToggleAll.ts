import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});

describe('Toggle all', () => {
  it('Should not be visible when there are no todos', () => {
    todoPage.toggleAllCheckbox.should('not.be.visible');
  });
  it('If any todo is not complete it should not be checked.', () => {
    todoPage.addTodo('Hello');
    todoPage.addTodo('World');
    /** When nothing is checked */
    todoPage.toggleAllCheckbox.should('not.be.checked');
    /** When mixed */
    todoPage.itemCheckboxByIndex(0).click();
    todoPage.toggleAllCheckbox.should('not.be.checked');
  });
  it('When all the todos are checked it should also get checked.', () => {
    todoPage.addTodo('Hello');
    todoPage.addTodo('World');
    todoPage.itemCheckboxByIndex(0).click();
    todoPage.itemCheckboxByIndex(1).click();
    todoPage.toggleAllCheckbox.should('be.checked');
  });
  it('This checkbox toggles all the todos to the same state as itself', () => {
    todoPage.addTodo('Hello');
    todoPage.addTodo('World');

    /** When clicked, If it is not checked, it checks all todos. */
    todoPage.toggleAllCheckbox.click();
    todoPage.itemCheckboxByIndex(0).should('be.checked');
    todoPage.itemCheckboxByIndex(1).should('be.checked');
    todoPage.toggleAllCheckbox.should('be.checked');

    /** When clicked, If it is checked, it unchecks all todos. */
    todoPage.toggleAllCheckbox.click();
    todoPage.itemCheckboxByIndex(0).should('not.be.checked');
    todoPage.itemCheckboxByIndex(1).should('not.be.checked');
    todoPage.toggleAllCheckbox.should('not.be.checked');
  });
});
