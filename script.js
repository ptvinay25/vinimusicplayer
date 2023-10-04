let playbtn = document.getElementById("playbtn");
const audioPlayer = document.getElementById("audio-player");    
const prevButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const playlistItems = document.querySelectorAll(".playlist li");
let currentSongIndex = 0;



function playpause(){

    if(playbtn.classList.contains("fa-pause")){
        audioPlayer.pause();
        playbtn.classList.remove("fa-pause");
        playbtn.classList.add("fa-play");
    }
    else{
        audioPlayer.play();
        playbtn.classList.add("fa-pause");
        playbtn.classList.remove("fa-play");
        
    }
    
}

playbtn.addEventListener("click", () => {
    audioPlayer.play();
});

prevButton.addEventListener("click", () => {
currentSongIndex = (currentSongIndex - 1 + playlistItems.length) % playlistItems.length;
updateSongInfo();
});

nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
    updateSongInfo();
});

playlistItems.forEach((item, index) => {
item.addEventListener("click", () => {
    currentSongIndex = index;
    updateSongInfo();
});
});

const songs = [
    { title: "College1", artist: "Hari", src: "City Walk - John Patitucci.mp3" },
    { title: "College2", artist: "Vini", src: "Horror Bass Choir - John Patitucci.mp3" },
    { title: "College3", artist: "Navi", src: "Jazzy Elevator.mpeg" },
    
];

function updateSongInfo() {
    const songTitle = songs[currentSongIndex].title;
    const artistName = songs[currentSongIndex].artist;
    const songSrc = songs[currentSongIndex].src; 
    audioPlayer.src = songSrc;
    audioPlayer.load();
    audioPlayer.play();
    document.querySelector(".song-details h2").textContent = songTitle;
    document.querySelector(".song-details p").textContent = artistName;

    playlistItems.forEach((item, index) => {
        if (index === currentSongIndex) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

audio.pause();
updateSongInfo();