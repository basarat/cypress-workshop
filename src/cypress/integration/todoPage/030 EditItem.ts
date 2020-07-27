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

  });
  it('The edit mode should exit on enter, blur and escape', () => {

  });
  it('Enter results in a commit', () => {

  });
  it('Blur results in a commit', () => {

  });
  it('The *commit* is done after trim', () => {

  });
  it('If the trim results in an empty value, the commit should destroy the item', () => {

  });
  it('Escape does not result in a commit', () => {
    
  });
});
