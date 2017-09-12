suite('тесты страницы о..', function () {
	test('страница должна содержать ссылку на страницу контактов', function () {
		assert(document.querySelectorAll('a[href="/contact"]').length);
	});
});

