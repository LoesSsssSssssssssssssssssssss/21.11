const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const server = http.createServer(app);
let data = require('./views/data.json');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.disable("x-powered-by");

app.use((err, req, res, next) => {
	logger.error(err.stack);
	res.status(500).send("Вы сломали сервер!");
});


app.use((err, req, res, next) => {
	if (error instanceof ForbiddenError) {
		return res.status(403).send({
			status: "forbidden",
			message: error.message,
		});
	}
});
app.set('view engine', 'pug')

app.use(express.static("views"));

app.get('/', function (request, response) {
	response.render('nonavt', {
		data:data,
	})
  })

app.use('/dashboard', function (request, res) {
	res.render('dashboard', {
		data:data,
	})
})

app.use('/vxod', function (request, response) {
	response.render('vxod', {
	})
  })

app.use('/reg', function (request, response) {
	response.render('reg', {
	})
  })

// самому поменятm
//Go the SERVERs
server.listen(3000)
