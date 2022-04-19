import signupPage from '../support/pages/signup'

describe('cadastro', function () {

    before(() => {
        cy.fixture('signup').then((signup)=>{
            this.success = signup.success
            this.email_dup = signup.email_dup
            this.email_inv = signup.email_inv
            this.short_password = signup.short_password
        })
    })

    context('quando o usuário é novato', () => {
        
        before(() => {
            cy.task('removeUser', this.success.email)
                .then(function (result) {
                    console.log(result)
                })
        });

        it('deve cadastrar com sucesso', () => {

            signupPage.go()
            signupPage.form(this.success)
            signupPage.submit()
            signupPage.toast.shouldHaveText('Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')

        });
    });

    context('quando o email já existe', () => {

        before(() => {
            cy.postUser(this.email_dup)
        });

        it('não deve cadastra o usuário', () => {

            signupPage.go()
            signupPage.form(this.email_dup)
            signupPage.submit()
            signupPage.toast.shouldHaveText('Email já cadastrado para outro usuário.')

        });
    });

    context('quando o email é incorreto', () => {
        
        it('deve exibir mensagem de alerta', () => {
            signupPage.go()
            signupPage.form(this.email_inv)
            signupPage.submit()
            signupPage.alert.haveText('Informe um email válido')
        });
    });

    context('quando a senha é muito curta', () => {

        const passwords = ['1', '11', '111', '1111', '11111']

        beforeEach(() => {
            signupPage.go()
        });

        passwords.forEach((p) => {
            it('Não deve cadastrar com a senha: ' + p, () => {

                this.short_password.password = p

                signupPage.form(this.short_password)
                signupPage.submit()
            })
        })

        afterEach(() => {
            signupPage.alert.haveText('Pelo menos 6 caracteres')
        });
    })

    context('quando não preencho nenhum dos campos', () => {

        const alertMessages = [
            'Nome é obrigatório',
            'E-mail é obrigatório',
            'Senha é obrigatória'
        ]

        before(() => {
            signupPage.go()
            signupPage.submit()
        })

        alertMessages.forEach((alert) => {

            it('deve exibir ' + alert.toLowerCase(), () => {
                signupPage.alert.haveText(alert)
            })
        })
    })
})