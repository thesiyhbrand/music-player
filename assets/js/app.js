// media controllers
const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

// record player animation
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

// playing song
const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
const musicbox = document.querySelector("#musicbox");

// control button images
let playImg = "./assets/images/play.svg";
let pauseImg = "./assets/images/pause.svg";

// default controls
playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "Heer",
        source: "./assets/music/Heer.mp3",
        cover: "./assets/images/chillhop.jpg"
    },
    {
        name: "Tu Meri Heer Main Tera Ranjha",
        source: "./assets/music/Tu Meri Heer Main Tera Ranjha.mp3",
        cover: "./assets/images/chillhop-2.jpg"
    },
    {
        name: "Main-To-Bas-Ek-Baar",
        source: "./assets/music/Main-To-Bas-Ek-Baar.mp3",
        cover: "./assets/images/chillhop-3.jpg"
    },
    {
        name: "Nira Ishq",
        source: "./assets/music/Nira Ishq.mp3",
        cover: "./assets/images/chillhop-4.jpg"
    },
    {
        name: "Pasoori",
        source: "./assets/music/Pasoori.mp3",
        cover: "./assets/images/chillhop-2.jpg"
    },
    {
        name: "Pata Nahi Kis Roop",
        source: "./assets/music/Pata Nahi Kis Roop.mp3",
        cover: "./assets/images/chillhop-2.jpg"
    }
];
// helper function
function createEle(ele) {
    return document.createElement(ele);
}
function append(parent, child) {
    return parent.append(child);
}
// creating track list
const ul = createEle('ul')
function createPlayList() {
    songList.forEach((song) => {
        let h3 = createEle('h3');
        let li = createEle('li');

        li.classList.add("track-item");
        h3.innerText = song.name;
        append(li,h3);
        append(ul,li)
    })
    append(musicbox, ul);
}

let songIndex = 0;
// preloaded song
loadMusic(songList[songIndex]);


function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}

function playSong() {
    playPause.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");

    audio.play();
}

function pauseSong() {
    playPause.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");

    audio.pause();
}

function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong()
}

function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong()
}
function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pauseSong() : playSong();
}


// player event 
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()