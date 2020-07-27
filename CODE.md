
# 000 NoTodos
```ts
describe('No todos', () => {
  it('The main list and footer should be hidden', () => {
    todoPage.main.should('not.be.visible');
    todoPage.footer.should('not.be.visible');
  });
});
```

# 010 NewTodo
```ts
describe('New todo', () => {
  it('The input element should be focused when the page is loaded', () => {
    cy.focused().should('have.class', todoPage.classNames.newTodoInput);
  });
  it('Created by enter, adding it to the list', () => {
    todoPage.newTodoInput.type('Hello world').type('{enter}');
    todoPage.itemLabelByIndex(0).should('have.text', 'Hello world');
  });
  it('Clear input after adding', () => {
    todoPage.newTodoInput.type('Hello world').type('{enter}');
    todoPage.newTodoInput.should('have.value', '');
  });
  it('`.trim` before adding', () => {
    todoPage.newTodoInput.type(' Hello world ').type('{enter}');
    todoPage.itemLabelByIndex(0).should('have.text', 'Hello world');
  });
  it('Do not create a todo if the result of trim is an empty string', () => {
    todoPage.newTodoInput.type('  ').type('{enter}');
    todoPage.itemLabelByIndex(0).should('not.exist');
  });
});
```

# 020 Item
```ts
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
```

# 030 Edit item
```ts
describe('Edit item', () => {
  beforeEach(() => {
    todoPage.addTodo('Hello');
  });
  it('Double-clicking the todo label activates editing mode', () => {
    todoPage.itemLabelByIndex(0).dblclick();
    todoPage.itemEditByIndex(0).should('exist');
  });
  it('The edit mode should exit on enter, blur and escape', () => {
    todoPage.itemLabelByIndex(0).dblclick();
    todoPage.itemEditByIndex(0).type('{enter}').should('not.exist');

    todoPage.itemLabelByIndex(0).dblclick();
    todoPage.itemEditByIndex(0).blur().should('not.exist');

    todoPage.itemLabelByIndex(0).dblclick();
    todoPage.itemEditByIndex(0).type('{esc}').should('not.exist');
  });
  it('Enter results in a commit', () => {
    todoPage.itemLabelByIndex(0).dblclick();
    todoPage.itemEditByIndex(0).type(' World{enter}');
    todoPage.itemLabelByIndex(0).should('have.text', 'Hello World');
  });
  it('Blur results in a commit', () => {
    todoPage.itemLabelByIndex(0).dblclick();
    todoPage.itemEditByIndex(0).type(' World').blur();
    todoPage.itemLabelByIndex(0).should('have.text', 'Hello World');
  });
  it('The *commit* is done after trim', () => {
    todoPage.itemLabelByIndex(0).dblclick();
    todoPage.itemEditByIndex(0).type(' World ').blur();
    todoPage.itemLabelByIndex(0).should('have.text', 'Hello World');
  });
  it('If the trim results in an empty value, the commit should destroy the item', () => {
    todoPage.itemLabelByIndex(0).dblclick();
    todoPage.itemEditByIndex(0).clear().blur();
    todoPage.itemLabelByIndex(0).should('not.exist');
  });
  it('Escape does not result in a commit', () => {
    todoPage.itemLabelByIndex(0).dblclick();
    todoPage.itemEditByIndex(0).type(' World{esc}');
    todoPage.itemLabelByIndex(0).should('have.text', 'Hello');
  });
});
```

# 040 Toggle all
```ts
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
```

# 050 Counter
```ts
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
```

# 060 Clear Completed Button 
```ts
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
```

# 070 Routing
```ts
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
```
