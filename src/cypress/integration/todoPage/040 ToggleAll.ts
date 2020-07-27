import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});

describe('Toggle all', () => {
  it('Should not be visible when there are no todos', () => {
    
  });
  it('If any todo is not complete it should not be checked.', () => {

  });
  it('When all the todos are checked it should also get checked.', () => {

  });
  it('This checkbox toggles all the todos to the same state as itself', () => {
    
  });
});
