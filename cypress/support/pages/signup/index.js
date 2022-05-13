import { el } from './elements'

import toast from '../../components/toast'
import alert from '../../components/alert'

class SignupPage {

    constructor() { // Executado automaticamente (ao carregar a página), sem precisar invocar a função
        this.toast = toast
        this.alert = alert
    }

    go() {
        cy.visit('/signup');
    }

    form(user) {
        cy.get(el.name).type(user.name);
        cy.get(el.email).type(user.email);
        cy.get(el.password).type(user.password);
    }

    submit() {
        cy.contains(el.signupButton).click()

        cy.contains(el.title)
            .should('be.visible')
    }
}

export default new SignupPage()