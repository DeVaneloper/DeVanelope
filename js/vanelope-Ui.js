// allows you to do things like:
// learn more: https://github.com/DeVaneloper
/*global */

// Console show message perzonalized
(function () {
    
	// eslint-disable-next-line no-undef
	$consoleLog = console.log;
  console.log = function ($message, $color) {
  	// eslint-disable-next-line no-undef
  	$consoleLog('%c' + $message, 'color:' + $color + ';font-weight:bold;font-size:medium;');
  }
})();
console.log('\n ░█░█░█▀█░█▀█░█▀▀░█░░░█▀█░█▀█░█▀▀░░▀█▀░█▀▀░░█░█░▀█▀░█▀▀░▀█▀░█░░░█▀█░█░█ \n ░▀▄▀░█▀█░█░█░█▀▀░█░░░█░█░█▀▀░█▀▀░░░█░░█▀▀░░▀▄▀░░█░░█░█░░█░░█░░░█▀█░▀░▀ \n ░░▀░░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀░░░▀▀▀░░░▀░░▀▀▀░░░▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀░▀','#ee11cc')
// eslint-disable-next-line no-unused-expressions
onpause
console.log(' Quieres aprender más? \n Vista: https://twitter.com/VanelopeDeV','#ff0058')

// narrar

function hola(){
let femaleVoice = true;

  var u = new SpeechSynthesisUtterance();
  u.text = 'Hola, tu donacion será usada solo para mantener a vanelope en línea, gracias';
  u.lang = 'es-VE';
  u.rate = 1;
  u.pitch = 2;
  u.onend = function(event) {  }
  speechSynthesis.speak(u);
}

// sound btn-clic
function btnclic(){
  var audio = new Audio('Down.mp3');
  audio.loop = false;
  audio.play();
  }

// remplazar contenido js
// let elementoModificado = document.querySelector("html")
//        elementoModificado.innerHTML = "Lecciones"
// FIN DEL CODIGO
