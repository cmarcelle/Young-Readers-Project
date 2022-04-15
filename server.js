
const express = require('express')
const app = express()
const cors = require ('cors')
const port = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(5000, function () {
    console.log("Server is running on localhost 5000");
});
  