document.getElementById("download").addEventListener("click", function(e){
    e.preventDefault()
    var url = document.getElementById("url").value.trim()
    if(url.length < 1){
        return
    }
    document.getElementById("download").classList.add("is-loading")
    fetch("https://yt-videos-downloader.herokuapp.com/getVideoInfo?url="+url).then(function(res){return res.json()}).then(function(data){
        document.getElementById("download").classList.remove("is-loading")
        document.getElementById("details").classList.remove("is-hidden")
        document.getElementById("yt-video-title").innerText = data.videoDetails.title
        document.getElementById("yt-embed").src = data.videoDetails.embed.iframeUrl

        window.scrollTo(0, document.body.scrollHeight)
    }).catch(function(err){console.log("Error: "+err)})
})