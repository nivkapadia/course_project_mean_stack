const express = require('express')
const cors = require('cors')
const indexRouter = require('./routes/indexRouter')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use('/', indexRouter)

app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`)
})
