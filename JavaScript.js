let imagen = document.getElementById("image");
let musica = document.getElementById("musica");
let play = document.getElementById("play");
let icono = document.getElementById("icon");
let circulo = document.getElementById("circulo");
let logo = document.getElementById("logo");
let barra = document.getElementById("barra");
let duracion = document.getElementById("duracion");
let a_adelante = document.getElementById("a adelante");
let a_atras = document.getElementById("a atras");
let is_playing = false;
const setMusic = (i) => {
    barra.value = 0;
    let song = songs[i];
    currentMusic= i;
    setMusic.src= song.path;
    duracion.innerHTML = '00:00';
    setTimeout(()=>{
        barra.max = music.duration;
        musicduration.innerHTML = music.duration;
    }, 300)
}
const formatTime = (time) =>{
    let min = Math.floor(time/60);
    if(min<10)
    {
        min='0${min}';
    }
    let sec= Math.floor(time % 60);
    if(sec<10)
    {
        sec='0${sec}';
    }
    return '${min} : ${sec}';
}
const play_effects = () => {
  icono.classList.add("fa-pause");
  icono.classList.remove("fa-play");
  imagen.style.animationPlayState = "running";
  circulo.style.animationPlayState = "running";
  logo.style.boxShadow = "0px 0px 20px #fff";
  logo.style.width= "21rem";
  logo.style.height= "21rem";  
};
const pause_effects = () => {
  icono.classList.add("fa-play");
  icono.classList.remove("fa-pause");
  imagen.style.animationPlayState = "paused";
  circulo.style.animationPlayState = "paused";
  logo.style.boxShadow = "0px 0px 0px #fff";
  logo.style.width= "20rem";
  logo.style.height= "20rem";  
};
play.addEventListener("click", () => {
  if (is_playing) {
    musica.pause();
    is_playing = false;
    pause_effects();
  } else {
    musica.play();
    is_playing = true;
    play_effects();
  }
});
document.addEventListener("keyup", (event) => {
  if (event.key == " ") {
    if (is_playing) {
      musica.pause();
      is_playing = false;
      pause_effects();
    } else {
      musica.play();
      is_playing = true;
      play_effects();
    }
  } else if (event.key == "ArrowUp") {
    volumen_effects();
    if (volumen < 1) {
      volumen = volumen + 0.1;
      musica.volume = volumen;
    }
  } else if (event.key == "ArrowDown") {
    volumen_effects();
    if (volumen > 0.1) {
      volumen = volumen - 0.1;
      musica.volume = volumen;
    }
  }
});