# Universo Cypress Bootcamp

Código implementado durante a 1° edição do BootCamp Universo Cypress da QANinja, atualmente [QAcademy](https://qaninja.academy/).

O sistema a ser testado é o Samurai Barber Shop, sistema de agendamento de horários em uma barbearia. Serão utilizadas as ferramentas Cypress e Insomnia. E também serão utilizadas as plataformas [github](https://github.com/), [ElephantSQL](https://www.elephantsql.com/), [dashboard cypress](https://dashboard.cypress.io/) e [heroku](https://dashboard.heroku.com/).

[Clique aqui](https://samuraibs-web-lucas.herokuapp.com/) e acesse o Samurai Barber Shop, o sistema que será testado nesse projeto!

Fique à vontade para criar sua conta e testar!

## Módulos

O intuito do bootcamp é partir do nível básico ao Devops, seguindo a seguinte estrutura:

 - Instalações Básicas
 - Manipulação de elementos WEB
 - Preparação do Ambiente de teste (Aplicação e banco de dados)
 - Início dos testes de ponta a ponta (E2E)
 - Reorganização do código com **page objects**
 - Git e github
 - Testes de API
 - Tópicos avançados e configurações
 - Infra e Continous Testing

## Teste você mesmo!

A seguir, estarão as instruções para rodar o projeto em sua máquina e ver os testes rodando!

### Instalação

Atualmente a aplicação encontra-se hospedada no Heroku, então não é necessário preparar o ambiente . Apenas será necessário baixar a automação (Cypress).

**É necessário ter instalado:**
	
 - NodeJs, na versão 16 ([windows installer](https://nodejs.org/dist/v16.15.0/node-v16.15.0-x86.msi) e [Linux installer](https://nodejs.org/dist/v16.15.0/node-v16.15.0.tar.gz))

 1. **Clone do repositório**

	Para facilitar o download da automação, aqui será pulado o passo de clone com o github e será disponibilizado o link para download o arquivo compactado.
	
	[Baixe a automação aqui!](https://github.com/Lukas-R4/samuraibs-universo-cypress/archive/refs/heads/main.zip)

	Dentro do seu computador, descompacte o arquivo.

	Agora será necessário navegar até a pasta através de um terminal (ou prompt de comando).

	**Windows:**			

    Pressione "bandeira do windows" + "R", digite "cmd" (sem aspas) e tecle executar. Quando o prompt de comando for aberto, navegue até a pasta descompactada.

	```cd {caminho do arquivo}``` - O caminho do arquivo deve ser informado sem chaves.

	**Ubuntu:**

	Segue a mesma lógica, porém o atalho para abrir o terminal é: "CRTL" + "ALT" + "T". Após isso basta navegar até a pasta descompactada.

	Como exemplo, segue o código para linux:
	```cd /home/lucasrodrigues/Downloads/samuraibs-universo-cypress-main```

	   Uma vez que estamos dentro da pasta do projeto, rodamos o seguinte comando:

	```npm install``` - Para baixar as dependências

2. **Execução dos testes**

	Basta rodar o comando: ```npm test``` e será aberta a interface do cypress com os cenários a serem testados.
	
	![cenários cypress](https://github.com/Lukas-R4/samuraibs-universo-cypress/blob/main/cypress/fixtures/cypress.png?raw=true)

	E é isso! ;)
	
Para quem tem interesse no Devops e continous testing, continue lendo!
## Continuous testing

A ferramenta de CI que foi que utilizada nesse projeto, foi o github actions. Nele foram configurados jobs que executam os testes automatizados diretamente pela nuvem. Foram criados 3 workflows, para o teste multibrowser.

![workflows - Github Actions](https://github.com/Lukas-R4/samuraibs-universo-cypress/blob/main/cypress/fixtures/workflow.png?raw=true)

Para executar os testes na nuvem, basta selecionar algum desses workflows e rodar o job.

![Running a Workflow](https://github.com/Lukas-R4/samuraibs-universo-cypress/blob/main/cypress/fixtures/run_workflow.png?raw=true)

Os testes serão executados e caso não seja exibido o job rodando, basta pressionar "F5". Isso leva algum tempo, tendo em vista que o actions vai criar um container, baixar a imagem, preparar todo o ambiente para depois rodar os testes. E todo esse fluxo pode ser acompanhado a nível de terminal clicando no job que está sendo executado.

Após finalizar, os resultados do teste serão enviados para o dashboard do cypress, que é integrado ao github actions, e por lá dá pra ver várias informações legais!

Quando finalizar o teste, será disponibilizado o link para o dashboard:
![Terminal running job](https://github.com/Lukas-R4/samuraibs-universo-cypress/blob/main/cypress/fixtures/link_dashboard.png?raw=true)

Ao clicar no link, o dashboard será exibido:

![dashboard with tests results](https://github.com/Lukas-R4/samuraibs-universo-cypress/blob/main/cypress/fixtures/dashboard.png?raw=true)

É isso! =D