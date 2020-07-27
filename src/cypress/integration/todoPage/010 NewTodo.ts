import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});


describe('New todo', () => {
  it('The input element should be focused when the page is loaded', () => {

  });
  it('Created by enter, adding it to the list', () => {

  });
  it('Clear input after adding', () => {

  });
  it('`.trim` before adding', () => {

  });
  it('Do not create a todo if the result of trim is an empty string', () => {

  });
});
