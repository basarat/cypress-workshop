import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});

describe('Clear completed button', () => {
  it('Should be hidden when there are no completed todos', () => {
    todoPage.addTodo('Hello');
    todoPage.clearCompleted.should('not.exist');
  });
  it('Should be visible when there are completed todos', () => {
    todoPage.addTodo('Hello');
    todoPage.itemCheckboxByIndex(0).click();
    todoPage.clearCompleted.should('exist');
  });
  it('Clicking it removes completed todos', () => {
    todoPage.addTodo('Hello');
    todoPage.itemCheckboxByIndex(0).click();
    todoPage.clearCompleted.click();
    todoPage.itemLabelByIndex(0).should('not.exist');
  });
});
