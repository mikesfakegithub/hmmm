const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.get('/', function(req, res){
	res.send('=)')
})

app.listen(port, ()=>{
    console.log(`now running on ${port}`)
})
