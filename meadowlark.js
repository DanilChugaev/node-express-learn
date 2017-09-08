var express = require('express'),

	app     = express();

app.set('port', process.env.PORT || 7000);

app.get('/', function (req,res) {
	res.type('text/plain');
	res.send('Meadowlark Travel');
});

app.get('/about', function (req,res) {
	res.type('text/plain');
	res.send('o meadowlark');
});

app.use(function (req,res) {
	res.type('text/plain');
	res.status(404);
	res.send('404 - не найдено');
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - ошибка сервера');
});

app.listen(app.get('port'), function () {
	console.log('Express запущен на http://localhost:' + app.get('port') + '; Нажмите ctrl+c для завершения')
});