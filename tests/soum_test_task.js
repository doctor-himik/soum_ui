// Global config :)
const base_url = 'https://the-internet.herokuapp.com/';
const wait = 3000  // 3 seconds wait for element presence

// Data set for test
let list_of_five_elements = [
    ["Broken Images", ":nth-child(4) > a", "h3", "Broken Images"],
    ["Challenging DOM", ":nth-child(5) > a", "h3", "Challenging DOM"],
    ["Checkboxes", ":nth-child(6) > a", "h3", "Checkboxes"],
    ["Context Menu", ":nth-child(7) > a", "h3", "Context Menu"],
    ["Dropdown List", ":nth-child(11) > a", "h3", "Dropdown List"],
]

// Test itself
describe('Validate pages', () => {
    list_of_five_elements.forEach(data_set => {
        it(`Check links ${data_set[0]}`, () => {
            cy.visit(base_url)
            cy.get(data_set[1], {timeout: wait}).click()
            cy.get(data_set[2], {timeout: wait}).should('have.text', data_set[3])
        })
    })
})
