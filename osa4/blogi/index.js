const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const Blog = require('./models/blog')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blogs')

app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs', blogRouter)

const mongoUrl = process.env.MONGOURL //'mongodb://localhost/bloglist'

mongoose.connect(mongoUrl)

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
