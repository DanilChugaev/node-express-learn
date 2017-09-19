var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;

suite('тесты печений-предсказаний', function () {
	test('getFortune() должна возвращать предсказание', function () {
		expect(typeof fortune.getFortune() === 'string');
	})
});
