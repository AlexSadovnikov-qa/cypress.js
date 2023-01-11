describe('Длинный автотест для testqastudio.me', function () {
    it('Оформить заказ с несколькими товарами', function () {
         cy.visit('https://testqastudio.me//');
         cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
         cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
      
         cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(5500);
         cy.get('.checkout').click();

         cy.get('#billing_first_name').type('Александр');
         cy.get('#billing_last_name').type('Садовников');
         cy.get('#billing_address_1').type('Парковая улицаб дом 3');
         cy.get('#billing_address_2').type('подъезд 2, этаж 2');
         cy.get('#billing_city').type('Люберцы');
         cy.get('#billing_state').type('Московская область');
         cy.get('#billing_postcode').type('140002');
         cy.get('#billing_phone').type('89772728063');
         cy.get('#billing_email').type('alex.sadov11@gmail.com');
         cy.get('#order_comments').type('Это тестовый заказ');
         cy.get('#place_order').click();

         cy.wait(5500);
         cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.');
         cy.get('.order-status > span').contains('Обработка');
         cy.get('.order-total > :nth-child(2) > .woocommerce-Price-amount').contains('47,800.00 ₽');
         cy.get(':nth-child(2) > .woocommerce-table__product-table > .product-content > a').contains('БРОММС Двухместная кровать');
         cy.get(':nth-child(2) > .woocommerce-table__product-table > .product-content > .product-quantity').contains('× 3');
         cy.get(':nth-child(3) > .woocommerce-table__product-table > .product-content > a').contains('КЛЛАРИОН Низкий столик');
         cy.get(':nth-child(3) > .woocommerce-table__product-table > .product-content > .product-quantity').contains('× 1');
        
         

         

     })
 })