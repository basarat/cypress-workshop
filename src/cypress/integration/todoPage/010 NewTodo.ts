import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});


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
