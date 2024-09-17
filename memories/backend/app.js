const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

//DB CONECTION
require("./db/conn")

const port = 3000;

//ROUTES
const memoryRoutes = require("./routes/routes")

app.use("/memories", memoryRoutes) 

app.listen(port, async () => {
    console.log(`O servidor iniciou na porta: ${port}`)
})

