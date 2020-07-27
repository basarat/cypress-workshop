import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});

describe('Clear completed button', () => {
  it('Should be hidden when there are no completed todos', () => {
  
  });
  it('Should be visible when there are completed todos', () => {
  
  });
  it('Clicking it removes completed todos', () => {
  
  });
});
