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
            browser.clickLink(".requestGroupRate", function(e) {
                console.log(e);
	            // browser.assert.input('form input[name="groupSize"]', browser.field('[name="groupSize"]').value, '');
                // console.log(referrer);
                // console.log(browser.field('[name="groupSize"]').value == referrer);
                // assert(browser.field('[name="name"]').value === "1223");
                assert(browser.field('[name="groupSize"]').value === "152");
                done();
            });
		})
	});
	test('переход со страницы "Орегон Коуст"', function (done) {
		var referrer = 'http://localhost:7000/tours/oregon-coast';

		browser.visit(referrer, function () {
			browser.clickLink(".requestGroupRate", function(e) {
				done();
			})
		})
	});
	test('посещение страницы "Запрос цены для групп" напрямую должен приводить к пустому полю реферера', function (done) {
		browser.visit('http://localhost:7000/tours/request-group-rate', function (e) {
			assert(browser.field('[name="referrer"]').value === "");
			done();
		})
	});
});


