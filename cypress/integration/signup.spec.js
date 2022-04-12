import signup from '../support/pages/signup';
import signupPage from '../support/pages/signup'

describe('cadastro', function () {

    context('quando o usuário é novato', () => {
        const user = {
            name: 'Lucas Rodrigues',
            email: 'lucas@samuraibs.com',
            password: 'pwd123',
            is_provider: true
        }

        before(() => {
            cy.task('removeUser', user.email)
                .then(function (result) {
                    console.log(result)
                })
        });

        it('deve cadastrar com sucesso', () => {

            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.toast.shouldHaveText('Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')

        });
    });

    context('quando o email já existe', () => {
        const user = {
            name: 'Lucas Rodrigues',
            email: 'lucas@samuraibs.com',
            password: 'pwd123',
            is_provider: true
        }

        before(() => {
            cy.task('removeUser', user.email)
                .then(function (result) {
                    console.log(result)
                })

            cy.request(
                'POST',
                'http://localhost:3333/users',
                user

            ).then(function (response) {
                expect(response.status).to.eq(200)
            });
        });

        it('não deve cadastra o usuário', () => {

            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.toast.shouldHaveText('Email já cadastrado para outro usuário.')

        });
    });

    context('quando o email é incorreto', () => {
        const user = {
            name: 'Elizabeth Olsen',
            email: 'liza.yahoo.com',
            password: 'pwd123',
        }

        it('deve exibir mensagem de alerta', () => {
            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.alertHaveText('Informe um email válido')
        });
    });

    context('quando a senha é muito curta', () => {

        const passwords = ['1', '11', '111', '1111', '11111']

        beforeEach(() => {
            signupPage.go()
        });

        passwords.forEach((p) => {
            it('Não deve cadastrar com a senha: ' + p, () => {

                const user = { name: 'Jason Friday', email: 'jason@gmail.com', password: p }

                signupPage.form(user)
                signupPage.submit()
            })
        })

        afterEach(() => {
            signupPage.alertHaveText('Pelo menos 6 caracteres')
        });
    })

    context('quando não preencho nenhum dos campos', ()=> {

        const alertMessages = [
            'Nome é obrigatório',
            'E-mail é obrigatório',
            'Senha é obrigatória'
        ]

        before(()=> {
            signupPage.go()
            signupPage.submit()
        })

        alertMessages.forEach((alert)=>{

            it('deve exibir ' + alert.toLowerCase(), ()=>{
                signupPage.alertHaveText(alert)
            })
        })
    })
})