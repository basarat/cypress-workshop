import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});

describe('Counter', () => {
  it('Is not displayed when there are no items', () => {
    todoPage.todoCount.should('not.exist');
  });
  it('Displays the number of active todos in a pluralized form e.g. "0 items left", "1 item left", "2 items left"', () => {
    todoPage.addTodo('Hello World');
    todoPage.addTodo('Again');
    
    todoPage.todoCount.should('have.text', '2 items left');

    todoPage.itemCheckboxByIndex(0).click();
    todoPage.todoCount.should('have.text', '1 item left');
    
    todoPage.itemCheckboxByIndex(1).click();
    todoPage.todoCount.should('have.text', '0 items left');
  });
});
