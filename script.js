function searchSong(){
    let input = document.getElementById("searchInput").value.toLowerCase().trim();
    let songs = document.querySelectorAll(".song-item");

    songs.forEach(function(song){
        let title = song.querySelector("span").innerText.toLowerCase();
        if(title.includes(input)){
            song.style.display = "flex";
        }else{
            song.style.display = "none";
        }
    });
}
