import dashPage from '../support/pages/dash'
import { customer, provider, appointment } from '../support/factories/dash'

describe('dashboard', function () {

    context('quando o cliente faz um agendamento no app mobile', function () {

        before(function () { // pre-conditions

            cy.postUser(provider) // provider register
            cy.postUser(customer) // client register
            cy.apiLogin(customer) // client login

            cy.setProviderId(provider.email)
            cy.createAppointment(appointment.hour)
        })

        it('o mesmo deve ser exibido no dashboard', function () {

            const day = Cypress.env('appointmentDay') // come from createAppointment

            cy.uiLogin(provider)
            dashPage.calendarShouldBeVisible()
            dashPage.selectDay(day)
            dashPage.appointmentShouldBe(customer, appointment.hour)
        });
    })
})