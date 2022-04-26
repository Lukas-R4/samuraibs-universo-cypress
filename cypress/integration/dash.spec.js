import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dash'

describe('dashboard', function () {

    context('quando o cliente faz um agendamento no app mobile', function () {

        const data = {
            customer: {
                name: 'Nikki Sixx',
                email: 'sixx@motleycrue.com',
                password: 'pwd123',
                is_provider: false
            },
            provider: {
                name: 'Ramon Valdes',
                email: 'ramon@televisa.com',
                password: 'pwd123',
                is_provider: true
            },
            appointmentHour: '14:00'
        }

        before(function () { // pre-conditions

            cy.postUser(data.provider) // provider register
            cy.postUser(data.customer) // client register
            cy.apiLogin(data.customer) // client login

            cy.setProviderId(data.provider.email) 
            cy.createAppointment(data.appointmentHour) 
        })

        it('o mesmo deve ser exibido no dashboard', function () {

            loginPage.go()
            loginPage.form(data.provider)
            loginPage.submit()

            dashPage.calendarShouldBeVisible()
            
            const day = Cypress.env('appointmentDay') // come from createAppointment

            dashPage.selectDay(day)
            dashPage.appointmentShouldBe(data.customer, data.appointmentHour)
        });
    })
})