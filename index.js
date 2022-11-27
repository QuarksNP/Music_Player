let backward = document.querySelector('#backward');
let play = document.querySelector('#button_play');
let forward = document.querySelector('#forward');
let theme = document.querySelector('#theme');
let artist = document.querySelector('#artist');
let img_song = document.querySelector('#img_song');
let duration_song = document.querySelector('#duration_song');
let mute = document.querySelector('#mute');
let repeat = document.querySelector('#repeat');
let random_button = document.querySelector('#ramdon');

let index = 0;
let playSong = false;
let music_repeat = false;
let random_button_1 = false;
let mute_volume;

let track = document.createElement('audio');


let all_song = [
    {
        name: "Esa Cruz",
        path: "songs/Anuel AA - Esa Cruz.mp3",
        img: "https://th.bing.com/th/id/OIP.9rAGxbJsEmMbMOg0pH4R2QHaHa?pid=ImgDet&rs=1",
        singer: "Anuel AA"

    },

    {
        name: "BAD!",
        path: "songs/XXXTENTACION - BAD!.mp3",
        img: "https://i1.sndcdn.com/artworks-000435918318-r94y9l-t500x500.jpg",
        singer: "XXXTENTACION"
    },

    {
        name: "5 start",
        path: "songs/Eladio Carrión - 5 Star.mp3",
        img: "https://1.bp.blogspot.com/-VhjRheOetag/YN_HCceMlWI/AAAAAAAALDk/DQgAEtoxEkYkUknt4fyetY3d3CVOTvD4gCLcBGAsYHQ/s1000/SEN2-KBRN.jpg",
        singer: "Eladio Carrion"
    },

    {
        name: "Fantasias",
        path: "songs/Rauw Alejandro & Farruko - Fantasías.mp3",
        img: "https://images.genius.com/4083497ceb78912dfa1fa5bd6d80f787.1000x1000x1.jpg",
        singer: "Rawr Alejandro & Farruko"
    },

    {
        name: "Tweakin",
        path: "songs/IV JAY  Tweakin with Luh Kel.mp3",
        img: "https://www.ivjay.com/sites/g/files/g2000012976/files/2021-10/Tweakin%20Acoustic_0.jpg",
        singer: "Iv jay ft.luk kel"
    }
]

function load_track(index){
    track.src = all_song[index].path;
    theme.innerHTML = all_song[index].name;
    artist.innerHTML = all_song[index].singer;
    img_song.src = all_song[index].img;
    track.load();

    timer = setInterval(range_slider , 1000);
}

load_track(index);

const justPlay = () => playSong == false ? play_song() : pauseSong();

const play_song = () => (track.play(), playSong = true, play.innerHTML = '<i class="fa-solid fa-pause"></i>'); 

const pauseSong = () => (track.pause(), playSong = false, play.innerHTML = '<i class="fa-solid fa-play"></i>');

const next_song = () => index < all_song.length - 1 ? (index += 1, load_track(index), play_song()) : (index = 0, load_track(index), play_song());

const previous_song = () => index > 0 ? (index -= 1, load_track(index), play_song()) : (index = all_song.length, load_track(index), play_song());
    
const change_duration = () => (position = track.duration * duration_song.value / 100, track.currentTime = position);


function range_slider(){
    let position = 0;

    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        duration_song.value = position;
    }
    
    if(track.ended){
       if(music_repeat == true){
        load_track(index);
        track.play();
       }

       else if(random_button_1 == true){
        let ramdon = Math.floor(Math.random()*all_song.length);
        load_track(ramdon)
        track.play();
        play_song();
       }

       else{
        next_song();
       }

    }
 
}


const mute_song = () => track.muted == true ? volume() : not_song();

const volume = () => (track.muted = false, mute.innerHTML= '<i class="fa-solid fa-volume-high"></i>');

const not_song = () => (track.muted = true, mute.innerHTML='<i class="fa-solid fa-volume-xmark"></i>');
    


const random_song = () => random_button_1 == false? (random_button_1 = true,
    random_button.style.borderStyle = "none",
    random_button.style.borderRadius = '5px',
    random_button.style.background = "#5a5a5a") :(random_button_1 = false,  random_button.style.background = "none");
 

const repeat_song = () => music_repeat == false ?(
        music_repeat = true,
        repeat.style.borderStyle = "none",
        repeat.style.borderRadius = '5px',
        repeat.style.background = "#5a5a5a") : (music_repeat = false, repeat.style.background = "none");
 

