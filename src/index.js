const express = require("express")

const bodyParser = require("body-parser")

require('./db/mongoose')
const bookRouter = require("./routers/bookRouter")
const userRouter = require("./routers/userRouter")
//const bookUserRouter = require(".routers/bookUserRelation")
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/book", bookRouter)
app.use("/user", userRouter)

//app.use(bookUserRouter)


app.listen(8000, () => console.log("API RUNNING IN PORT 8000"))