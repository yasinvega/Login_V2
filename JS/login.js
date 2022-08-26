

//mostrar teclado -------------------------------------------
var mostrar = 0;
var teclado = document.getElementById("teclado").addEventListener("click", ()=>{
    if(mostrar == 0){
        document.getElementById("teclado").src = "../Imagenes/keyboard-show.png";
        document.getElementById("tec").style.height = "170px";
        document.getElementById("tec").style.transition = "1.5s";
        document.getElementById("teclas").style.animation = "2s";
        document.getElementById("teclas").style.display = "block";
        mostrar++;
    }else{
        document.getElementById("teclado").src = "../Imagenes/keyboard.png";
        document.getElementById("tec").style.height = "100px";
        document.getElementById("tec").style.transition = "1.5s";
        document.getElementById("teclas").style.display = "none";
        mostrar--;
    }
    
});

//TECLADO ALEATORIO

var botonera = ["boton0","boton1","boton2","boton3","boton4","boton5","boton6","boton7","boton8","boton9"];  

function numeros(){      
    var n = 10;
    var arr = new Array(n);
    //meter numeros en array
    for (var i = 0; i < n; i++) {
        arr[i] = i;
    }
    
    arr.sort(() => Math.floor(Math.random()* 10));

    for(var i=0; i<botonera.length; i++){               
        document.getElementById(botonera[i]).value = arr[i];
    }   
}

//DESHABILITAR INPUTS PARA PASS ------------------------------

var box = ["box1","box2","box3","box4","box5","box6"];
    var n = box.length;
    var arr = new Array(n);
        for (var i = 0; i < n; i++) {
        arr[i] = box[i];
        }

    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    var cajaAleatoria = arr.slice(0, 3);

function aleatorio(){
    for(var k=0; k<cajaAleatoria.length; k++){    
            document.getElementById(cajaAleatoria[k]).style.backgroundColor="#4e54c8";
            document.getElementById(cajaAleatoria[k]).disabled=true;
    }
}

/*------------------ escribir -------------------- */

for(var h=0; h<botonera.length; h++){
    var boton = document.getElementById("boton"+[h]);
    boton.addEventListener('click', escribir, false);
}

function escribir(e){
    e.target.id;
    var box1 = document.getElementsByClassName("botonpassword");	
    
	for(var i=0; i<box1.length; i++){
		if((box1[i].disabled == false) && (box1[i].value == "")){
            box1[i].value =  e.target.value;
            i=box1.length+1;      
		}else{
			i+1;
		}	
	}
    
}

/* ---------------------BORRAR --------------------- */
var borrarCampo = document.getElementById("borrar");
borrarCampo.addEventListener('click', borrar, false);
function borrar(){
var box1 = document.getElementsByClassName("botonpassword");

	for(var i=box1.length-1; i>=0; i--){
		    if(box1[i].value != ""){
				box1[i].focus();
				box1[i].value="";
				i=-1;
			}else{

			}
	}
}

//CAMBIAR DE VERSION --------------------------------------
var contador = 0;
var ver = document.getElementById("ver").addEventListener("click", () =>{
      
    if(contador == 0){
        document.getElementById("pos").style.position = "relative";
        contador++;
        document.getElementById("ver").value = "Volver";
    }else{
        document.getElementById("pos").style.position = "absolute";
        contador--;
    }

});






window.onload=function(){
    aleatorio();
    numeros();

}