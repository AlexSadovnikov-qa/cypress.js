describe('Автотесты для формы логина и пароля на login.qa.studio', function () {
    it('1.1 Проверка на позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#message').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
         cy.get('#exitMessageButton > .exitIcon').click();

        })

         it('1.2 Проверка логики восстановления пароля', function () {
            cy.reload();
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('alex.sadov11@gmail.com');
            cy.get('#restoreEmailButton').click();
            cy.get('#message').contains('Успешно отправили пароль на e-mail');
            cy.get('#exitMessageButton > .exitIcon');
            cy.get('#exitMessageButton > .exitIcon').click();
        })

        it('1.3 Проверка на негативный кейс авторизации', function () {
            cy.reload();
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio2');
            cy.get('#loginButton').click();
            cy.get('#message').contains('Такого логина или пароля нет');

        })

        it('1.4 Проверка на негативный кейс авторизации', function () {
                cy.reload();
                cy.get('#mail').type('alex.sadov11@gmail.com');
                cy.get('#pass').type('iLoveqastudio2');
                cy.get('#loginButton').click();
            cy.get('#message').contains('Такого логина или пароля нет');

        })

        it('1.5 Проверка на негативный кейс валидации', function () {
            cy.reload();
            cy.get('#mail').type('german_dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#message').contains('Нужно исправить проблему валидации');

        })


        it('1.6 Проверка на негативный кейс валидации', function () {
         cy.reload();
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#message').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
         

     })
 })




