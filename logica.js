/*$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});*/
//CREAMOS EL VECTOR DE USUARIOS(4)
var usuarios = new Array();
	usuarios[0] = "voto1";
	usuarios[1] = "voto2";
	usuarios[2] = "voto3";
	usuarios[3] = "voto4";
//CREAMOS EL VECTOR DE CLAVES DE USUARIOS(4)
var claves = new Array();
	claves[0] = 1234;
	claves[1] = 2345;
	claves[2] = 3456;
	claves[3] = 4567;
var n_us;
//asignacion de funciones externas
/*for(var i = 1; i < 5; i++){
	document.getElementById("opcion"+i).onmouseover = sobre_candidato;
	document.getElementById("opcion"+i).onmouseout = afuera_candidato;
}
document.getElementById("opcion1").onmouseclick = probemos;
document.getElementById("opcion1").onmouseout = afuera_candidato;
*/
function login() {
	// verificarmos que la clave o usuario esten correctos
	var ingreso = false;
	var us =document.getElementById("name").value;
	var psswrd = document.getElementById("password").value;
	for(var i = 0;i < 4;i++){
		if((us == usuarios[i]) && (psswrd == claves[i])){
			ingreso = true;
			n_us = i;
			break;
		}
	}
	if(ingreso){
		location.href = "voto.html";
	}
	else {
		alert("usuario o clave incorrecta!\nus: " +us+"\npassword: "+psswrd);
	}
}
function probemos() {
	// body...
	alert("hola");
	
}
function devuelve_login() {
	// body...
	location.href = "index.html";
}

function certificado(){
location.href = "certificado.html";	
}

function cambio(){
	var nombre = document.getElementById("nombre");
nombre.innerHTML = usuarios[v_uss];
}

function sobre_candidato(elemento) {
	// body...
	elemento.style.border = '3px solid green';
}

function afuera_candidato(elemento) {
	// body...
	elemento.style.border = "none";
}
function click_candidato(candidato) {
	// body...
	//location.href ='voto.html';
	switch (candidato) {
		case 'ASA':
			document.getElementById(candidato).src = "imgs/PartX/ASA-X.png";
			setTimeout("location.href = 'confirmacion.html'", 1000);
			break;
		case 'VOZ':
			document.getElementById(candidato).src = "imgs/PartX/VOZ-X.png";
			setTimeout("location.href = 'confirmacion.html'", 1000);
			break;
		case 'L':
			 document.getElementById(candidato).src = "imgs/PartX/L-X.png";
			 setTimeout("location.href = 'confirmacion.html'", 1000);
			break;
		case 'CR':
			 document.getElementById(candidato).src = "imgs/PartX/CR-X.png";
			 setTimeout("location.href = 'confirmacion.html'", 1000);
			break;
		case 'POLO':
			 document.getElementById(candidato).src = "imgs/PartX/POLO-X.png";
			 setTimeout("location.href = 'confirmacion.html'", 1000);
			break;
		case 'MAL':
			 document.getElementById(candidato).src = "imgs/PartX/MAL-X.png";
			 setTimeout("location.href = 'confirmacion.html'", 1000);
			break;
		case 'C':
			 document.getElementById(candidato).src = "imgs/PartX/C-X.png";
			 setTimeout("location.href = 'confirmacion.html'", 1000);
			break;
		case 'VERDE':
			 document.getElementById(candidato).src = "imgs/PartX/VERDE-X.png";
			 setTimeout("location.href = 'confirmacion.html'", 1000);
			break;
		case 'U':
			 document.getElementById(candidato).src = "imgs/PartX/U-X.png";
			 setTimeout("location.href = 'confirmacion.html'", 1000);
			break;
		case 'BLANCO':
			 document.getElementById(candidato).src = "imgs/PartX/BLANCO-X.png";
			 setTimeout("location.href = 'confirmacion.html'", 1000);
			break;
		default:
			// statements_def
			break;
	}
	var fechaHora = new Date();
    document.getElementById("fecha").innerHTML = fechaHora;
    //var nombre_partido = elem.value;
    //document.getElementById("partido").innerHTML =	nombre_partido; 

}
