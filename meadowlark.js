const 	express    = require('express'),
		app        = express();


var handlebars = require('express-handlebars').create({
    defaultLayout: 'main',
    helpers: {
        section: function (name, options) {
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});

var fortune = require('./lib/fortune.js');

function getWeatherData() {
    return {
        locations: [
            {
                name: 'Portlend',
                forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
                weather: 'Сплошная облачность',
                temp: '54.1 F (12.3 C)'
            },
            {
                name: 'Bend',
                forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
                weather: 'Сплошная облачность',
                temp: '54.1 F (12.3 C)'
            },
            {
                name: 'Manzanita',
                forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
                weather: 'Сплошная облачность',
                temp: '54.1 F (12.3 C)'
            }

        ]
    }
}

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 7000);

app.use(function (req, res, next) {
	res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
	next();
});
app.use(function (req,res,next) {
    if(!res.locals.pertials) res.locals.partials = {};
    res.locals.partials.weatherContext = getWeatherData();
    next();
});

app.use(express.static(__dirname + '/public'));

app.disable('x-powered-by');

app.get('/', function (req,res) {
	res.render('home');
});
app.get('/about', function (req,res) {
    res.render('about',{
    	fortune: fortune.getFortune(),
	    pageTestScript: '/qa/tests-about.js'
	});
});
app.get('/headers', function(req,res) {
	res.set('Content-Type', 'text/plain');
	var s = '';
	for(var name in req.headers)
		s += name + ': ' + req.headers[name] + '\n';
	res.send(s);
});
app.get('/tours/hood-river', function (req,res) {
	res.render('tours/hood-river');
});
app.get('/tours/request-group-rate', function (req,res) {
	res.render('tours/request-group-rate');
});
app.get('/tours/oregon-coast', function (req,res) {
	res.render('tours/oregon-coast');
});

app.get('/nursery-rhyme', function (req,res) {
	res.render('nursery-rhyme');
});
app.get('/data/nursery-rhyme', function (req,res) {
	res.json({
        animal: 'belchonok',
        bodyPart: 'hvost',
        adjective: 'pushistii',
        noun: 'chert'
    });
});







app.use(function (req,res) {
	res.status(404);
    res.render('404');
});
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500);
    res.render('500');
});



app.listen(app.get('port'), function () {
	console.log('Express запущен на http://localhost:' + app.get('port') + '; Нажмите ctrl+c для завершения');
});