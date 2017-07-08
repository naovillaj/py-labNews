var express = require("express");
var api = require("./api");
const app = express();
// var http = require('http');
// var server = http.createServer(app);
// var router = express.Router();

app.get('/api/news/', function (req, res) {
    let news = api.news();
        
    news.then( (result) => {
        console.log('Obteniendo noticias\nCantidad de Resultado:' +result.length);
        res.status(200).json(result);
    });
});

app.get('/api/news/:news_id', function (req, res) {
    let news = api.news(req.params.news_id);
        
    news.then( (result) => {
        console.log('Obteniendo noticia con id: '+ req.params.news_id + '\nResultado title:' +result.title);
        res.status(200).json(result);
    });
});

app.get('/api/categories/', function (req, res) {
    let categories = api.categories();
        
    categories.then( (result) => {
        console.log('Obteniendo categorias\nCantidad de Resultados:' +result.length);
        res.status(200).json(result);
    });
});

app.get('/api/categories/:category_id', function (req, res) {
    let categories = api.categories(req.params.category_id);

    categories.then( (result) => {
        console.log('Obteniendo categorias con id: '+ req.params.category_id + '\nResultado title:' +result.title);
        res.status(200).json(result);
    });
});

// app.get('/', function(req, res) {

  

//   res.sendfile('public/index.html');

// });

app.use('/', express.static('public'));

// app.get('/', function(req, res) {
//     res.sendfile('./public/index.html');
// })


app.listen(process.env.PORT || 3000, () => {
    console.log("Iniciando en puerto 3000");
});

// server.listen(process.env.PORT || 3000, 'localhost');
// server.on('listening', function() {
//   console.log('Express server started on port %s at %s', server.address().port, server.address().address);
// });

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log('Server running on port '+port+'!');
// });


// app.listen(3000, () => {
//     console.log("Listening on 3000");
// });