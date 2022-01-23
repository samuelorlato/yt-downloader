document.getElementById("download").addEventListener("click", function(){
    var url = document.getElementById("url").value
    if(url.length < 1){
        return
    }
    document.getElementById("download").innerHTML = `Loading...`
    fetch("https://yt-videos-downloader.herokuapp.com/getVideoInfo?url="+url).then(function(res){return res.json()}).then(function(data){
        document.getElementById("download").classList.add("invisible")
        document.getElementById("details").classList.remove("invisible")
        document.getElementById("main").classList.add("invisible")
        document.getElementById("yt-video-title").innerText = data.videoDetails.title
        document.getElementById("yt-embed").src = data.videoDetails.embed.iframeUrl

        window.scrollTo(0, document.body.scrollHeight)
    }).catch(function(err){console.log("Error: "+err)})
})