import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});

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
