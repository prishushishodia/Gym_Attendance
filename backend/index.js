const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.get('/', (req ,res) => {
    res.send('Hello From server!')
})

app.get('/api/v1/attendance/bulk', (req, res) => {
    
})

app.listen(3000)
console.log("Listening on http://localhost:3000")