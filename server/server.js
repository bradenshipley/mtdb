// const path = require('path')
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://Admin:asdf@cluster0.mongodb.net/test?w=majority'

const express = require('express')
const app = express()
// app.use(express.static(`${__dirname}/../build`))
app.use(json())
//session code
app.use(
	session({
		secret: SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 7 * 2
		}
	})
)
// MONGO DB
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect(err => {
	const collection = client.db('test').collection('devices')
	// perform actions on the collection object
	client.close()
})
//API Endpoints

//build endpoint
// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, '../build/index.html'))
// })
//server listening
server.listen(SERVER_PORT, () => {
	console.log(`listening on port ${SERVER_PORT}`)
})
