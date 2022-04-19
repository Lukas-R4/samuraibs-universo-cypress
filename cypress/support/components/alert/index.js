import {el} from './elements'


class alert {
    haveText(expectedText) {
        cy.contains(el.error, expectedText)
            .should('be.visible')
    }
}

export default new alert()