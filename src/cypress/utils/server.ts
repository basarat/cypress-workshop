export function startServer() {
  cy.request('PUT', 'http://localhost:8000/api/set-all', { todos: [] })
}
