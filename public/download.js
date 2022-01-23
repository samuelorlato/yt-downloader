document.getElementById("download").addEventListener("click", function(){
    var url = document.getElementById("url").value
    var name = document.getElementById("name").value

    document.getElementById("download-mp3").onclick = function(){
        window.open("http://localhost:5500/downloadaudio?url="+url+"&name="+name)
    }
    
    document.getElementById("download-mp4").onclick = function(){
        window.open("http://localhost:5500/downloadvideo?url="+url+"&name="+name)
    }
})