document.getElementById("download-video").addEventListener("click", function(e){
    var url = document.getElementById("url").value
    e.preventDefault()
    var select = document.getElementById("format-opt")
    if(select.options[select.selectedIndex].text === "MP3"){
        window.open(window.location.href+"/downloadMP3?url="+url)
    }
    else if(select.options[select.selectedIndex].text === "MP4"){
        window.open(window.location.href+"/downloadMP4?url="+url)
    }
})