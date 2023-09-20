const connect = require ('connect');
const app = connect();

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}

function helloWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello World!');
};

app.use(logger);
app.use(helloWorld);

app.listen(3000);
console.log('Server running at http://localhost:3000/');