import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});

describe('Counter', () => {
  it('Is not displayed when there are no items', () => {

  });
  it('Displays the number of active todos in a pluralized form e.g. "0 items left", "1 item left", "2 items left"', () => {

  });
});
