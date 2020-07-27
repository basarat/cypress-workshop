import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});

describe('No todos', () => {
  it('The main list and footer should be hidden', () => {
    todoPage.main.should('not.be.visible');
    todoPage.footer.should('not.be.visible');
  });
});
