const express = require("express")
const app = express()
const cors = require("cors")

const ytdl = require("ytdl-core")

app.use(express.static("public"))
app.use(cors())

app.get("/", (req, res) => res.sendFile(__dirname + "public/index.html"))

app.get("/getVideoInfo", async (req, res) => {
    const url = req.query.url
    const info = await ytdl.getInfo(url)
    res.status(200).json(info)
})

app.get("/downloadaudio", (req, res) => {
    const url = req.query.url
    const videoTitle = req.query.name
    res.header("Content-Disposition", `attachment; filename="${videoTitle}"`)
    ytdl(url, {
        filter: "audioonly",
    }).pipe(res)
})

app.get("/downloadvideo", (req, res) => {
    const url = req.query.url
    const videoTitle = req.query.name
    res.header("Content-Disposition", `attachment; filename="${videoTitle}"`)
    ytdl(url, {
        format: "mp4",
    }).pipe(res)
})

app.listen(process.env.PORT, () => console.log("Server is running"))
