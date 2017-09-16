var Browser = require('zombie'),
	assert  = require('chai').assert,
	browser = '';

suite('Межстраничные тесты', function () {
	setup(function () {
		browser = new Browser();
	});

	test('запрос расценок для групп со страницы туров по реке Худ должен заполнять поле реферера', function (done) {
		var referrer = "http://localhost:7000/tours/hood-river";

		browser.visit(referrer, function () {
            // console.log(browser.location.href);
            // 	assert(browser.field('referrer').value === referrer);
            browser.clickLink(".requestGroupRate", function(e) {
                //link has been clicked and actions processed
                // console.log(e);
                // console.log(referrer);
                // console.log(browser.field('referrer').value);
                // var a = browser.field('[name="referrer"]').value;
                // console.log(a)
                assert(browser.field('[name="name"]').value === "1223");
                // console.log(browser.field('[name="referrer"]'))
                // assert(browser.assert.input('[name="name"]', referrer, "123"));
                done();
            });
            // browser.assert.link('.requestGroupRate', function () {

            // })
		})
	});
	// test('запрос расценок для групп со страницы туров пансионата "Орегон Коуст" должен заполнять поле реферера', function (done) {
	// 	var referrer = 'http://localhost:7000/tours/oregon-coast';
    //
	// 	browser.visit(referrer, function () {
     //        // console.log(browser.location.href);
	// 		// browser.assert.link('.requestGroupRate', function () {
	// 		// 	assert(browser.field('referrer').value === referrer);
	// 			done();
	// 		// })
	// 	})
	// });
	// test('посещение страницы "Запрос цены для групп" напрямую должен приводить к пустому полю реферера', function (done) {
	// 	browser.visit('http://localhost:7000/tours/request-group-rate', function () {
     //        // console.log(browser.assert.success());
     //        // assert(browser.assert.input('form input[name=text]', '', 'Head Eater'));
     //        // browser.assert.success();
     //        // browser.assert.input('form input[name=text]', '', 'Head Eater');
     //        // browser.assert.element('input');
	// 		done();
	// 	})
	// });
});


