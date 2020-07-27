import { todoPage } from "../../utils/pages/todoPage";

beforeEach(() => {
  todoPage.clear();
  todoPage.visit();
});

describe('Routing', () => {
  beforeEach(() => {
    todoPage.addTodo('Completed');
    todoPage.itemCheckboxByIndex(0).click();
    todoPage.addTodo('Active');
  });
  it('"#/" (default) - all items are shown. The all link is selected', () => {
    
  });
  it('"#/active" - Only active items are shown. The active link is selected', () => {
    
  });
  it('"#/completed" - Only completed items are shown. The completed link is selected', () => {
    
  });
  it('"#/active" - Items should move out if checked', () => {
    
  });
  it('"#/completed" - Items should move out if unchecked', () => {
    
  });
});
