const express = require("express");
const app = express()

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!")
//     res.send("<b>Boldo kkkk</p>")
// })
app.get('/', (req, res) => {
    res.send("This is the home page!");
})

app.get('/cats', (req, res) => {
    res.send("MEOW");
})

app.get('/dogss', (req, res) => {
    res.send("WOOF");
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!")
})