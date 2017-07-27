const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser')

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get("/", function(req, res, next){
  res.render("index", {appType:"Express"})
})

app.post("/", function(req,res,next){
	let items = []
	items.push(req.body.todo)
	console.log(items)
	res.render("index",items)
})

app.listen(3000, function(){
  console.log("App running on port 3000")
})