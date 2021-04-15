const express = require("express")
const app = express()

const ytdl = require("ytdl-core")
const axios = require("axios")
const fs = require("fs")

app.use(express.static("public"))

app.get("/", (req, res) => res.sendFile(__dirname + "public/index.html"))

app.get("/getVideoInfo", async (req, res) => {
    const url = req.query.url
    const info = await ytdl.getInfo(url)
    res.status(200).json(info)
})

app.get("/downloadMP3", (req, res) => {
    const url = req.query.url
    const videoTitle = "video"
    res.header("Content-Disposition", `attachment;\ filename="${videoTitle}.mp3"`)
    ytdl(url)
        .pipe(res)
})

app.get("/downloadMP4", (req, res) => {
    const url = req.query.url
    const videoTitle = "video"
    res.header("Content-Disposition", `attachment;\ filename="${videoTitle}.mp4"`)
    ytdl(url)
        .pipe(res)
})

app.listen(process.env.PORT, () => console.log("Server is running"))