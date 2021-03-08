const mongoose = require("mongoose")//accee a la base
//.env
require("dotenv").config()

const MONGODB_URL = `mongodb://${process.env.DATABASE_HOST}:
${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
console.log(MONGODB_URL)
//connection a la db
mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})