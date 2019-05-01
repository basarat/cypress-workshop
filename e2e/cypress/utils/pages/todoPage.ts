export const selectors = {
  newTodoInput: '.new-todo',
  todoListItems: '.todo-list label',
  toggleAllCheckbox: '.toggle-all',
  todoCheckBoxByIndex: (index: number) => `[data-test=toggle-checkbox-${index}]`,

  all: '[data-test=all]',
  active: '[data-test=active]',
  completed: '[data-test=completed]',
}

export const visit = () => {
  cy.visit('http://localhost:8080');
}

export const addTodo = (text: string) => {
  cy.get(selectors.newTodoInput).type(text).type('{enter}');
}
