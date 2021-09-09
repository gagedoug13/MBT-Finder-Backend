const express = require('express')
const request = require('request')
const path = require('path')
require('dotenv').config()

const app = express()
const port = 3001

const bikingURL = `https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=200&key=${process.env.BIKING_KEY}&maxResults=200`


app.get('/trails', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    request({url: bikingURL, json: true}, (err, response) => {

        if (response.statusCode == 200) {
            res.send(response.body)
        } else {
            console.log(response.body)
            res.send({error: 'Sorry, this didnt work'})
        }
    })
})

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
  })