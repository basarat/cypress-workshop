import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});

describe('No todos', () => {
  it('The main list and footer should be hidden', () => {
    
  });
});
